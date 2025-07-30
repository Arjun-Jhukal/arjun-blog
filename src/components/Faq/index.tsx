import { FaqProps } from '@/interface';
import React from 'react';
import "./faq.scss";
import FaqItem from './faqItem';

export default function Faq({ data }: { data: FaqProps }) {
    return (
        <section className="pt-12">
            <div className="section-title mb-4 md:mb-8">
                {data?.faqTitle ? <h2>{data.faqTitle}</h2> : null}
            </div>
            <div className="faq-wrapper">
                {data.questionAnswer.length ? data.questionAnswer.map((item, index) => (
                    <FaqItem key={index} question={item.question} answer={item.answer} />
                )) : null}
            </div>

        </section>
    );
}
