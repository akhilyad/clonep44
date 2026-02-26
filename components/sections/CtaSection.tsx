import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Shield, Cpu } from 'lucide-react';

export const CtaSection = () => {
    return (
        <section className="bg-antova-dark py-24 border-t border-antova-slate/30">
            <Container>
                <div className="relative rounded-3xl bg-antova-surface border border-antova-slate/40 overflow-hidden px-8 py-16 md:px-16 text-center">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(16,185,129,0.12),transparent)]" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-antova-teal/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-antova-emerald/5 rounded-full blur-3xl" />

                    <div className="relative">
                        <div className="inline-flex items-center gap-2 bg-antova-emerald/10 border border-antova-emerald/20 text-antova-emerald text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
                            Get Started Today
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-2xl mx-auto">
                            Ready to Put Your Supply Chain on <span className="text-transparent bg-clip-text bg-gradient-to-r from-antova-emerald to-antova-teal">Autopilot?</span>
                        </h2>
                        <p className="text-antova-light/50 text-lg max-w-xl mx-auto mb-10">
                            Join 150+ energy companies using Antova to reduce procurement costs, eliminate disruptions, and hit sustainability targets.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                            <Button size="lg" className="group">
                                Request a Demo
                                <ArrowRight size={18} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
                            </Button>
                            <Button size="lg" variant="secondary">
                                Talk to Sales
                            </Button>
                        </div>

                        {/* Trust badges */}
                        <div className="flex flex-wrap justify-center gap-6 text-antova-light/30 text-xs">
                            <span className="flex items-center gap-1.5">
                                <Shield size={13} className="text-antova-emerald/50" />
                                SOC 2 Type II Certified
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Shield size={13} className="text-antova-emerald/50" />
                                ISO 27001 Compliant
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Cpu size={13} className="text-antova-emerald/50" />
                                99.9% SLA Uptime
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Shield size={13} className="text-antova-emerald/50" />
                                GDPR & CCPA Ready
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
