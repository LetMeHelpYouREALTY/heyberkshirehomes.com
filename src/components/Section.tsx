'use client';

import type { ReactNode } from 'react';
import SectionTitle from "./SectionTitle";
import Container from "./Container";
import { useSectionAnswer } from "./seo/PageSeo";

interface Props {
    id: string;
    title: string;
    description: string;
    className?: string;
    children?: ReactNode;
}

const Section = ({ 
    id, 
    title, 
    description, 
    className = '',
    children 
}: Props) => {
    const answer = useSectionAnswer(id);

    return (
        <section id={id} className={`py-10 lg:py-20 ${className}`}>
            <Container>
                <SectionTitle>
                    <h2 className="text-center mb-4 text-3xl md:text-4xl font-bold font-display">{title}</h2>
                </SectionTitle>
                {answer ? (
                    <p id={`${id}-answer`} className="section-answer mb-4 text-center text-lg text-slate max-w-3xl mx-auto">
                        {answer}
                    </p>
                ) : null}
                {description ? (
                    <p className="mb-12 text-center text-lg text-foreground-accent max-w-2xl mx-auto">{description}</p>
                ) : (
                    <div className="mb-8" />
                )}
                {children}
            </Container>
        </section>
    )
}

export default Section