import React from 'react';
import { Container } from '@/components/ui/Container';
import { siteContent } from '@/data/content';

export const ValueProp = () => {
    return (
        <section className="bg-antova-dark py-24">
            <Container>
                {/* Section header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-antova-emerald/10 border border-antova-emerald/20 text-antova-emerald text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider mb-5">
                        Platform Capabilities
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                        Built for the Complexity of <span className="text-transparent bg-clip-text bg-gradient-to-r from-antova-emerald to-antova-teal">Energy Supply Chains</span>
                    </h2>
                    <p className="text-antova-light/50 text-lg">
                        Antova&apos;s agents handle procurement orchestration, logistics, compliance, and risk — so your team can focus on strategy.
                    </p>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {siteContent.features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={i}
                                className="group bg-antova-surface border border-antova-slate/30 rounded-2xl p-6 hover:border-antova-emerald/40 hover:bg-antova-slate/20 transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-lg bg-antova-emerald/10 border border-antova-emerald/20 flex items-center justify-center mb-5 group-hover:bg-antova-emerald/20 transition-colors">
                                    <Icon size={20} className="text-antova-emerald" />
                                </div>
                                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                                <p className="text-antova-light/50 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};
