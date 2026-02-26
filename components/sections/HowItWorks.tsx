import React from 'react';
import { Container } from '@/components/ui/Container';
import { siteContent } from '@/data/content';

export const HowItWorks = () => {
    return (
        <section className="bg-antova-darker py-24 border-t border-antova-slate/30">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-antova-teal/10 border border-antova-teal/20 text-antova-teal text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider mb-5">
                        How It Works
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                        From Integration to <span className="text-transparent bg-clip-text bg-gradient-to-r from-antova-teal to-antova-emerald">Autonomous Operations</span>
                    </h2>
                    <p className="text-antova-light/50 text-lg">
                        Deploy Antova in days, not months. Our agents go live fast and keep getting smarter.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connector line */}
                    <div className="hidden md:block absolute top-10 left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-px bg-gradient-to-r from-antova-slate/20 via-antova-emerald/30 to-antova-slate/20" />

                    {siteContent.howItWorks.map((step, i) => (
                        <div key={i} className="relative flex flex-col items-center text-center">
                            {/* Step circle */}
                            <div className="w-20 h-20 rounded-2xl bg-antova-surface border border-antova-slate/40 flex flex-col items-center justify-center mb-6 relative z-10 shadow-lg shadow-black/30">
                                <span className="text-xs text-antova-light/30 font-semibold uppercase tracking-widest">Step</span>
                                <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-antova-emerald to-antova-teal">{step.step}</span>
                            </div>
                            <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                            <p className="text-antova-light/50 text-sm leading-relaxed max-w-xs">{step.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
