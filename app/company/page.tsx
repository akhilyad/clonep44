import React from 'react';
import { Container } from '@/components/ui/Container';

export default function CompanyPage() {
    const values = [
        { title: 'Customer Obsession', desc: 'Energy managers succeed when their supply chains never surprise them. We build for zero-surprise operations.' },
        { title: 'Radical Transparency', desc: 'Every agent action is logged, explainable, and auditable. We believe AI should be accountable.' },
        { title: 'Energy Expertise First', desc: 'We are not a generic supply chain tool. We go deep on energy-specific workflows, regulations, and supplier dynamics.' },
        { title: 'Continuous Learning', desc: 'Our agents get smarter with every decision. The platform continuously improves based on your outcomes.' },
    ];

    return (
        <main className="min-h-screen bg-antova-dark">
            <div className="relative bg-antova-darker border-b border-antova-slate/30 py-24">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(14,165,233,0.07),transparent)]" />
                <Container className="relative">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-antova-teal/10 border border-antova-teal/20 text-antova-teal text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider mb-5">
                            About Us
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                            We&apos;re building the autonomous supply chain for the energy transition.
                        </h1>
                        <p className="text-xl text-antova-light/50 max-w-2xl leading-relaxed">
                            Antova was founded by supply chain engineers and energy industry veterans who saw firsthand how broken procurement workflows were costing energy companies billions.
                        </p>
                    </div>
                </Container>
            </div>

            <Container className="py-20">
                {/* Mission */}
                <div className="max-w-3xl mb-20">
                    <h2 className="text-3xl font-bold text-white mb-5">Our Mission</h2>
                    <p className="text-antova-light/50 text-lg leading-relaxed">
                        Energy infrastructure is the backbone of modern civilization. Yet the supply chains that build and maintain it are still run on spreadsheets, manual approvals, and fragmented systems.
                        We&apos;re changing that — by deploying autonomous AI agents that orchestrate every step of the supply chain, so energy managers can focus on what matters most.
                    </p>
                </div>

                {/* Values */}
                <h2 className="text-3xl font-bold text-white mb-8">Our Values</h2>
                <div className="grid md:grid-cols-2 gap-5 mb-20">
                    {values.map((v, i) => (
                        <div key={i} className="bg-antova-surface border-l-4 border-antova-emerald border border-antova-slate/30 rounded-r-2xl p-6">
                            <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                            <p className="text-antova-light/45 text-sm leading-relaxed">{v.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Investors / backers strip placeholder */}
                <div className="text-center">
                    <p className="text-antova-light/25 text-xs uppercase tracking-widest mb-6">Backed by leading climate & deep tech investors</p>
                    <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
                        {['Breakthrough Energy Ventures', 'Lowercarbon Capital', 'Future Energy Ventures', 'Energize Capital'].map((firm) => (
                            <span key={firm} className="text-antova-light/20 font-semibold text-sm">{firm}</span>
                        ))}
                    </div>
                </div>
            </Container>
        </main>
    );
}

