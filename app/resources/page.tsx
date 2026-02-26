import React from 'react';
import { Container } from '@/components/ui/Container';

const resources = [
    { tag: 'Guide', title: 'Agentic AI in Energy Procurement', desc: 'How autonomous agents are transforming how energy companies source critical equipment.' },
    { tag: 'Report', title: 'State of Energy Supply Chains 2025', desc: 'Benchmark data on procurement cycles, supplier risk, and disruption frequency across 150+ energy firms.' },
    { tag: 'Case Study', title: 'How Helios Cut PO Cycle Time by 90%', desc: 'From 6 weeks to 4 days: a step-by-step account of deploying Antova at a major IPP.' },
    { tag: 'Webinar', title: 'Scope 3 Compliance for Energy Managers', desc: 'Practical approaches to automating supplier emissions data collection and CBAM reporting.' },
    { tag: 'Guide', title: 'Supplier Risk in Oil & Gas', desc: 'Frameworks for continuously scoring, monitoring, and diversifying your upstream supplier network.' },
    { tag: 'Report', title: 'Renewable Energy Supply Chain Bottlenecks', desc: 'Where solar, wind, and BESS supply chains break — and how AI can predict and prevent it.' },
];

export default function ResourcesPage() {
    return (
        <main className="min-h-screen bg-antova-dark">
            <div className="relative bg-antova-darker border-b border-antova-slate/30 py-20">
                <Container>
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 bg-antova-teal/10 border border-antova-teal/20 text-antova-teal text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider mb-5">
                            Resources
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Knowledge Center</h1>
                        <p className="text-lg text-antova-light/50">
                            Insights, reports, and guides for energy supply chain leaders.
                        </p>
                    </div>
                </Container>
            </div>

            <Container className="py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resources.map((r, i) => (
                        <div key={i} className="group bg-antova-surface rounded-2xl overflow-hidden border border-antova-slate/30 hover:border-antova-emerald/40 transition-all cursor-pointer">
                            <div className="h-44 bg-gradient-to-br from-antova-slate/30 to-antova-dark/50 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-xl bg-antova-emerald/10 border border-antova-emerald/20 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-antova-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75a2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="text-xs font-bold text-antova-teal uppercase tracking-wider mb-2">{r.tag}</div>
                                <h3 className="text-base font-bold text-white mb-2 group-hover:text-antova-emerald transition-colors">{r.title}</h3>
                                <p className="text-antova-light/40 text-sm mb-4 leading-relaxed">{r.desc}</p>
                                <a href="#" className="text-antova-emerald text-sm font-medium hover:text-emerald-400 transition-colors">
                                    Read more →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </main>
    );
}

