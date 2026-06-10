import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

const REVALIDATE_PATHS = [
  '/',
  '/luxury-homes',
  '/55-plus-living',
  '/communities',
  '/sell-your-home',
  '/sitemap.xml',
] as const;

function isAuthorized(request: NextRequest): boolean {
  const cronSecret = process.env.CRON_SECRET?.trim();
  if (!cronSecret) {
    return false;
  }

  const authHeader = request.headers.get('authorization');
  return authHeader === `Bearer ${cronSecret}`;
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  for (const path of REVALIDATE_PATHS) {
    revalidatePath(path);
  }

  return NextResponse.json({
    ok: true,
    revalidated: REVALIDATE_PATHS,
    at: new Date().toISOString(),
  });
}
