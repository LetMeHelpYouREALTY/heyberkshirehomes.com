'use client';

import { createContext, useContext, type ReactNode } from 'react';
import type { PageAnswer } from '@/data/page-answers';
import { siteDetails } from '@/data/siteDetails';

const PageSeoContext = createContext<PageAnswer | null>(null);

type PageSeoProps = {
  page: PageAnswer;
  children: ReactNode;
};

function pageSchema(page: PageAnswer) {
  const url = `${siteDetails.siteUrl}${page.path === '/' ? '' : page.path}`;
  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    dateModified: '2026-10-11',
    isPartOf: {
      '@type': 'WebSite',
      name: siteDetails.siteName,
      url: siteDetails.siteUrl,
    },
    about: {
      '@id': `${siteDetails.siteUrl}/#localbusiness`,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#page-answer', '.section-answer'],
    },
    mainEntity: {
      '@type': 'Question',
      name: page.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: page.answer,
      },
    },
  };

  const faq =
    page.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: page.faqs.map((faqItem) => ({
            '@type': 'Question',
            name: faqItem.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faqItem.answer,
            },
          })),
        }
      : null;

  return { webPage, faq };
}

export function PageSeo({ page, children }: PageSeoProps) {
  const { webPage, faq } = pageSchema(page);

  return (
    <PageSeoContext.Provider value={page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      {faq ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
        />
      ) : null}
      {children}
    </PageSeoContext.Provider>
  );
}

export function PageAnswerBlock() {
  const page = useContext(PageSeoContext);
  if (!page) {
    return null;
  }

  return (
    <section aria-labelledby="page-question" className="bg-cream border-b border-gold/30">
      <div className="max-w-4xl mx-auto px-5 py-8">
        <h2 id="page-question" className="text-2xl md:text-3xl font-bold text-primary font-display mb-3">
          {page.question}
        </h2>
        <p id="page-answer" className="text-lg text-slate leading-relaxed">
          {page.answer}
        </p>
        <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
          {page.facts.map((fact) => (
            <div key={fact.label} className="border-t border-gold/40 pt-2">
              <dt className="text-xs uppercase tracking-wide text-slate">{fact.label}</dt>
              <dd className="text-sm font-semibold text-primary">{fact.value}</dd>
            </div>
          ))}
        </dl>
        {page.sources && page.sources.length > 0 ? (
          <p className="mt-4 text-sm text-slate">
            Sources:{' '}
            {page.sources.map((source, index) => (
              <span key={source.href}>
                {index > 0 ? '; ' : ''}
                <a href={source.href} className="underline text-primary" rel="noopener noreferrer">
                  {source.label}
                </a>
              </span>
            ))}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export function PageFaq() {
  const page = useContext(PageSeoContext);
  if (!page || page.faqs.length === 0) {
    return null;
  }

  return (
    <section id="faq" aria-labelledby="page-faq-heading" className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-5">
        <h2 id="page-faq-heading" className="text-3xl font-bold text-center font-display mb-3">
          Questions about this page
        </h2>
        <p className="section-answer text-center text-slate mb-8">
          Short answers for the questions buyers ask before they call.
        </p>
        <div className="space-y-4">
          {page.faqs.map((faq) => (
            <details key={faq.question} className="bg-cream rounded-lg p-5">
              <summary className="font-semibold text-primary cursor-pointer">{faq.question}</summary>
              <p className="mt-3 text-slate">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function useSectionAnswer(sectionId: string): string | undefined {
  const page = useContext(PageSeoContext);
  return page?.sections[sectionId];
}

export function SectionAnswer({ id, className = '' }: { id: string; className?: string }) {
  const answer = useSectionAnswer(id);
  if (!answer) {
    return null;
  }

  return (
    <p id={`${id}-answer`} className={`section-answer text-lg leading-relaxed ${className}`}>
      {answer}
    </p>
  );
}
