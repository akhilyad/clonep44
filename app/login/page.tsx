import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-antova-dark flex items-center justify-center py-20">
            <Container>
                <div className="max-w-md mx-auto">
                    <div className="bg-antova-surface border border-antova-slate/40 p-8 rounded-2xl shadow-2xl shadow-black/30">
                        <div className="text-center mb-8">
                            <div className="inline-flex w-10 h-10 rounded-xl bg-antova-emerald items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-white fill-white" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h1 className="text-2xl font-bold text-white mb-1">Sign In to Antova</h1>
                            <p className="text-antova-light/40 text-sm">Access your command center</p>
                        </div>

                        <form className="space-y-5">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-antova-light/60 mb-1.5">Work Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg bg-antova-dark border border-antova-slate/40 text-white placeholder-antova-light/20 focus:ring-2 focus:ring-antova-emerald/50 focus:border-antova-emerald/50 outline-none transition-all text-sm"
                                    placeholder="you@company.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-antova-light/60 mb-1.5">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-4 py-3 rounded-lg bg-antova-dark border border-antova-slate/40 text-white placeholder-antova-light/20 focus:ring-2 focus:ring-antova-emerald/50 focus:border-antova-emerald/50 outline-none transition-all text-sm"
                                    placeholder="••••••••"
                                />
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="rounded border-antova-slate/40 bg-antova-dark text-antova-emerald focus:ring-antova-emerald" />
                                    <span className="text-antova-light/40">Remember me</span>
                                </label>
                                <a href="#" className="text-antova-emerald hover:text-emerald-400 transition-colors text-sm">Forgot password?</a>
                            </div>

                            <Button fullWidth size="lg" className="group mt-2">
                                Sign In
                                <ArrowRight size={16} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
                            </Button>

                            <p className="text-center text-sm text-antova-light/30">
                                Need access? <a href="#" className="text-antova-emerald font-semibold hover:text-emerald-400 transition-colors">Contact Sales</a>
                            </p>
                        </form>
                    </div>
                </div>
            </Container>
        </main>
    );
}

