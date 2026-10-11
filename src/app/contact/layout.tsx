import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { getPageAnswer } from '@/data/page-answers';
import { siteDetails } from '@/data/siteDetails';

const pageAnswer = getPageAnswer('/contact');

export const metadata: Metadata = {
  title: pageAnswer.title,
  description: pageAnswer.description,
  alternates: { canonical: `${siteDetails.siteUrl}/contact` },
};

export default function ContactLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
