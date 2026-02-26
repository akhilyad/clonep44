import React from 'react';
import { Container } from '@/components/ui/Container';
import { siteContent } from '@/data/content';

export const UseCases = () => {
    return (
        <section className="bg-antova-dark py-24 border-t border-antova-slate/30">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-antova-emerald/10 border border-antova-emerald/20 text-antova-emerald text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider mb-5">
                        Industry Solutions
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                        Purpose-Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-antova-emerald to-antova-teal">Every Energy Sector</span>
                    </h2>
                    <p className="text-antova-light/50 text-lg">
                        Antova adapts to the unique procurement and logistics requirements of each energy vertical.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {siteContent.useCases.map((useCase, i) => {
                        const Icon = useCase.icon;
                        return (
                            <div
                                key={i}
                                className="group relative bg-antova-surface border border-antova-slate/30 rounded-2xl p-6 hover:border-antova-emerald/40 transition-all duration-300 overflow-hidden cursor-pointer"
                            >
                                {/* Hover glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-antova-emerald/0 to-antova-teal/0 group-hover:from-antova-emerald/5 group-hover:to-antova-teal/5 transition-all duration-500 rounded-2xl" />

                                <div className="relative">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-9 h-9 rounded-lg bg-antova-dark/60 border border-antova-slate/40 flex items-center justify-center group-hover:border-antova-emerald/40 transition-colors">
                                            <Icon size={18} className="text-antova-emerald" />
                                        </div>
                                        <h3 className="text-white font-semibold">{useCase.title}</h3>
                                    </div>
                                    <p className="text-antova-light/45 text-sm leading-relaxed">{useCase.description}</p>

                                    <div className="mt-5 flex items-center gap-1 text-antova-emerald text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                        Learn more
                                        <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};
