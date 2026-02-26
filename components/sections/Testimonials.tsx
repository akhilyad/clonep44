import React from 'react';
import { Container } from '@/components/ui/Container';
import { siteContent } from '@/data/content';

export const Testimonials = () => {
    return (
        <section className="bg-antova-darker py-24 border-t border-antova-slate/30">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-antova-emerald/10 border border-antova-emerald/20 text-antova-emerald text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider mb-5">
                        Customer Stories
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        Results Energy Managers <span className="text-transparent bg-clip-text bg-gradient-to-r from-antova-emerald to-antova-teal">Actually See</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {siteContent.testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-antova-surface border border-antova-slate/30 rounded-2xl p-7 flex flex-col gap-5 hover:border-antova-slate/50 transition-colors"
                        >
                            {/* Quote marks */}
                            <svg className="w-8 h-8 text-antova-emerald/30" fill="currentColor" viewBox="0 0 32 32">
                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                            </svg>

                            <p className="text-antova-light/70 text-sm leading-relaxed flex-1 italic">
                                &ldquo;{t.quote}&rdquo;
                            </p>

                            <div className="flex items-center gap-3 pt-4 border-t border-antova-slate/20">
                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-antova-emerald/40 to-antova-teal/40 border border-antova-emerald/30 flex items-center justify-center flex-shrink-0">
                                    <span className="text-antova-emerald text-xs font-bold">{t.initials}</span>
                                </div>
                                <div>
                                    <div className="text-white text-sm font-semibold">{t.name}</div>
                                    <div className="text-antova-light/40 text-xs">{t.title}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
