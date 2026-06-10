import {
  createOgImageResponse,
  ogImageContentType,
  ogImageSize,
} from '@/lib/og-image';
import { OG_IMAGE_ALT } from '@/lib/site-metadata';

export const alt = OG_IMAGE_ALT;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function TwitterImage() {
  return createOgImageResponse();
}
