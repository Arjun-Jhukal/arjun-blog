'use client'; // 👈 Required

import React, { useState } from 'react';
import { renderHtml } from '@/utils/renderHTML/renderHTML';

interface FaqItemProps {
    question: string;
    answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item border-solid border-gray-300 border-[1px] rounded-md p-3  ${isOpen ? "active" : ""
            } `}>
            <div
                className="faq-title cursor-pointer flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <strong>{question}</strong>
                <span>{isOpen ? '−' : '+'}</span>
            </div>
            <div className="faq-content-box mt-2">
                <div className="faq-content">
                    <div dangerouslySetInnerHTML={renderHtml(answer)} />
                </div>
            </div>

        </div>
    );
}
