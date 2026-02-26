import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { siteContent } from '@/data/content';
import { ArrowRight } from 'lucide-react';

export default function PlatformPage() {
    const { title, description, features } = siteContent.platform;

    return (
        <main className="bg-antova-dark min-h-screen">
            {/* Hero */}
            <div className="relative bg-antova-darker border-b border-antova-slate/30 py-24">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(16,185,129,0.10),transparent)]" />
                <Container className="relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-antova-teal/10 border border-antova-teal/20 text-antova-teal text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
                            The Platform
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">{title}</h1>
                        <p className="text-xl text-antova-light/50 mb-10 max-w-2xl mx-auto">{description}</p>
                        <Button size="lg" className="group">
                            Request a Demo
                            <ArrowRight size={18} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
                        </Button>
                    </div>
                </Container>
            </div>

            {/* Features Grid */}
            <div className="py-24">
                <Container>
                    <div className="grid md:grid-cols-2 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className="group flex gap-5 p-6 bg-antova-surface border border-antova-slate/30 rounded-2xl hover:border-antova-emerald/40 transition-all">
                                    <div className="flex-shrink-0">
                                        <div className="w-11 h-11 bg-antova-emerald/10 border border-antova-emerald/20 rounded-xl flex items-center justify-center group-hover:bg-antova-emerald/20 transition-colors">
                                            <Icon className="w-5 h-5 text-antova-emerald" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                        <p className="text-antova-light/50 text-sm leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </div>
        </main>
    );
}

