import React from 'react';
import { Container } from '@/components/ui/Container';
import { siteContent } from '@/data/content';

export const Stats = () => {
    return (
        <section className="bg-antova-darker border-y border-antova-slate/30 py-16">
            <Container>
                {/* Trusted by logos strip */}
                <div className="text-center mb-12">
                    <p className="text-antova-light/35 text-xs uppercase tracking-widest font-semibold mb-6">
                        Trusted by energy leaders worldwide
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
                        {siteContent.trustedBy.map((company) => (
                            <span key={company} className="text-antova-light/25 font-semibold text-sm tracking-wide hover:text-antova-light/50 transition-colors cursor-default">
                                {company}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-antova-slate/20 mb-12" />

                {/* Stats grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {siteContent.stats.map((stat) => (
                        <div key={stat.label} className="px-4">
                            <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-antova-emerald to-antova-teal mb-2">
                                {stat.value}
                            </div>
                            <div className="text-antova-light/50 text-sm font-medium leading-snug">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
