import React from 'react';
import { Container } from '@/components/ui/Container';
import { siteContent } from '@/data/content';

export default function SolutionsPage() {
    const { useCases } = siteContent;

    return (
        <main className="bg-antova-dark min-h-screen">
            <div className="relative bg-antova-darker border-b border-antova-slate/30 py-20">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(14,165,233,0.08),transparent)]" />
                <Container className="relative">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 bg-antova-teal/10 border border-antova-teal/20 text-antova-teal text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider mb-5">
                            Solutions
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Energy Sector Solutions</h1>
                        <p className="text-lg text-antova-light/50 max-w-xl">
                            Purpose-built supply chain intelligence for every segment of the energy industry.
                        </p>
                    </div>
                </Container>
            </div>

            <div className="py-24">
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {useCases.map((useCase, index) => {
                            const Icon = useCase.icon;
                            return (
                                <div key={index} className="group bg-antova-surface p-7 rounded-2xl border border-antova-slate/30 hover:border-antova-emerald/40 transition-all">
                                    <div className="w-10 h-10 bg-antova-emerald/10 border border-antova-emerald/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-antova-emerald/20 transition-colors">
                                        <Icon className="w-5 h-5 text-antova-emerald" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3">{useCase.title}</h3>
                                    <p className="text-antova-light/45 text-sm leading-relaxed">{useCase.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </div>
        </main>
    );
}

