import React from 'react';
import { Container } from '@/components/ui/Container';
import { siteContent } from '@/data/content';

export default function UseCasesPage() {
    const { useCases } = siteContent;

    return (
        <main className="min-h-screen bg-antova-dark">
            <div className="relative bg-antova-darker border-b border-antova-slate/30 py-24">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(16,185,129,0.08),transparent)]" />
                <Container className="relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-antova-emerald/10 border border-antova-emerald/20 text-antova-emerald text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider mb-5">
                            Use Cases
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            Antova for Energy Operators
                        </h1>
                        <p className="text-xl text-antova-light/50 max-w-2xl mx-auto">
                            See how energy companies use Antova to automate supply chain operations at every stage.
                        </p>
                    </div>
                </Container>
            </div>

            <Container className="py-20">
                <div className="grid md:grid-cols-3 gap-6">
                    {useCases.map((uc, i) => {
                        const Icon = uc.icon;
                        return (
                            <div key={i} className="group bg-antova-surface border border-antova-slate/30 rounded-2xl p-7 hover:border-antova-emerald/40 transition-all">
                                <div className="w-11 h-11 bg-antova-emerald/10 border border-antova-emerald/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-antova-emerald/20 transition-colors">
                                    <Icon className="w-5 h-5 text-antova-emerald" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{uc.title}</h3>
                                <p className="text-antova-light/45 text-sm leading-relaxed">{uc.description}</p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </main>
    );
}

