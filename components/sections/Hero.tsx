import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { siteContent } from '@/data/content';

export const Hero = () => {
    const { hero } = siteContent;

    return (
        <section className="relative bg-antova-dark overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a5f18_1px,transparent_1px),linear-gradient(to_bottom,#1e3a5f18_1px,transparent_1px)] bg-[size:64px_64px]" />

            {/* Radial glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-antova-emerald/8 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-24 left-1/3 w-[400px] h-[300px] bg-antova-teal/6 rounded-full blur-[80px] pointer-events-none" />

            <Container className="relative pt-24 pb-28 md:pt-32 md:pb-36">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-antova-emerald/10 border border-antova-emerald/25 text-antova-emerald text-sm font-medium px-4 py-1.5 rounded-full mb-8">
                        <span className="w-1.5 h-1.5 bg-antova-emerald rounded-full animate-pulse" />
                        {hero.badge}
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white mb-4">
                        {hero.title}
                    </h1>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-antova-emerald to-antova-teal">
                            {hero.titleAccent}
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-antova-light/60 max-w-2xl mx-auto mb-12 leading-relaxed">
                        {hero.subtitle}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="group">
                            {hero.ctaPrimary}
                            <ArrowRight size={18} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
                        </Button>
                        <Button size="lg" variant="ghost" className="group">
                            {hero.ctaSecondary}
                            <ChevronRight size={18} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
                        </Button>
                    </div>

                    {/* Social proof micro-text */}
                    <p className="mt-10 text-sm text-antova-light/35">
                        Trusted by energy procurement teams at leading utilities, O&G operators, and IPPs
                    </p>
                </div>

                {/* Dashboard preview */}
                <div className="mt-20 max-w-5xl mx-auto">
                    <div className="relative rounded-2xl overflow-hidden border border-antova-slate/50 shadow-2xl shadow-black/50 bg-antova-surface">
                        {/* Browser chrome */}
                        <div className="bg-antova-darker/80 px-4 py-3 flex items-center gap-2 border-b border-antova-slate/30">
                            <div className="w-3 h-3 rounded-full bg-red-500/60" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                            <div className="w-3 h-3 rounded-full bg-green-500/60" />
                            <div className="ml-4 flex-1 bg-antova-dark/60 rounded-md px-3 py-1 text-xs text-antova-light/40 text-center max-w-xs mx-auto">
                                app.antova.ai / command-center
                            </div>
                        </div>

                        {/* Fake dashboard UI */}
                        <div className="p-6 bg-antova-surface min-h-[320px]">
                            {/* Header row */}
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <div className="text-white font-semibold text-lg">Supply Chain Command Center</div>
                                    <div className="text-antova-light/40 text-sm mt-0.5">Q2 2025 · North America Grid Expansion</div>
                                </div>
                                <div className="flex items-center gap-2 bg-antova-emerald/15 border border-antova-emerald/30 text-antova-emerald text-xs font-medium px-3 py-1.5 rounded-lg">
                                    <span className="w-1.5 h-1.5 bg-antova-emerald rounded-full animate-pulse" />
                                    12 Agents Active
                                </div>
                            </div>

                            {/* KPI row */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                                {[
                                    { label: 'Open POs', value: '847', change: '+12', up: true },
                                    { label: 'On-Time Delivery', value: '96.4%', change: '+2.1%', up: true },
                                    { label: 'Supplier Risk Score', value: '82/100', change: '-3', up: false },
                                    { label: 'CO₂ Saved', value: '1,240t', change: '+180t', up: true },
                                ].map((kpi) => (
                                    <div key={kpi.label} className="bg-antova-dark/60 rounded-xl p-4 border border-antova-slate/25">
                                        <div className="text-antova-light/50 text-xs mb-1">{kpi.label}</div>
                                        <div className="text-white font-bold text-xl">{kpi.value}</div>
                                        <div className={`text-xs mt-1 font-medium ${kpi.up ? 'text-antova-emerald' : 'text-red-400'}`}>{kpi.change} this week</div>
                                    </div>
                                ))}
                            </div>

                            {/* Agent activity feed */}
                            <div className="space-y-2">
                                <div className="text-antova-light/40 text-xs font-medium uppercase tracking-wider mb-3">Recent Agent Actions</div>
                                {[
                                    { agent: 'Procurement Agent', action: 'Auto-approved 23 transformer POs from Grid Solutions Inc.', time: '2m ago', color: 'emerald' },
                                    { agent: 'Risk Monitor', action: 'Flagged supplier TechFab delay risk — rerouting to Alt Supplier B', time: '8m ago', color: 'yellow' },
                                    { agent: 'Compliance Engine', action: 'Generated Q2 Scope 3 emissions report — ready for review', time: '15m ago', color: 'teal' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-antova-dark/40 rounded-lg px-4 py-2.5 border border-antova-slate/20">
                                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${item.color === 'emerald' ? 'bg-antova-emerald' : item.color === 'yellow' ? 'bg-yellow-400' : 'bg-antova-teal'}`} />
                                        <div className="flex-1 min-w-0">
                                            <span className="text-antova-light/70 text-xs font-semibold">{item.agent}: </span>
                                            <span className="text-antova-light/50 text-xs">{item.action}</span>
                                        </div>
                                        <span className="text-antova-light/30 text-xs flex-shrink-0">{item.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Glow under dashboard */}
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-12 w-2/3 h-24 bg-antova-emerald/10 blur-3xl rounded-full pointer-events-none" />
                </div>
            </Container>
        </section>
    );
};
