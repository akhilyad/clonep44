import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Zap } from 'lucide-react';

export const Footer = () => {
    const footerSections = [
        {
            title: 'Platform',
            links: [
                { name: 'Agent Studio', href: '#' },
                { name: 'Supplier Intelligence', href: '#' },
                { name: 'Command Center', href: '#' },
                { name: 'Compliance Engine', href: '#' },
                { name: 'Integrations', href: '#' },
            ],
        },
        {
            title: 'Solutions',
            links: [
                { name: 'Grid & Transmission', href: '#' },
                { name: 'Oil & Gas', href: '#' },
                { name: 'Renewable Energy', href: '#' },
                { name: 'Utilities', href: '#' },
                { name: 'Energy Transition', href: '#' },
            ],
        },
        {
            title: 'Company',
            links: [
                { name: 'About Antova', href: '#' },
                { name: 'Careers', href: '#' },
                { name: 'Newsroom', href: '#' },
                { name: 'Contact', href: '#' },
                { name: 'Security', href: '#' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { name: 'Documentation', href: '#' },
                { name: 'Blog', href: '#' },
                { name: 'Case Studies', href: '#' },
                { name: 'Webinars', href: '#' },
            ],
        },
    ];

    return (
        <footer className="bg-antova-darker border-t border-antova-slate/30 text-antova-light py-16">
            <Container>
                {/* Top section */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
                    {/* Brand column */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-antova-emerald flex items-center justify-center flex-shrink-0">
                                <Zap size={18} className="text-white fill-white" />
                            </div>
                            <span className="text-xl font-bold text-white">Antova</span>
                        </Link>
                        <p className="text-antova-light/50 text-sm leading-relaxed">
                            Agentic AI for energy supply chains.
                        </p>
                        <div className="flex gap-3 mt-5">
                            <a href="#" className="w-8 h-8 rounded-md bg-antova-slate/40 hover:bg-antova-emerald/20 flex items-center justify-center transition-colors" aria-label="LinkedIn">
                                <svg className="w-4 h-4 text-antova-light/60" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-md bg-antova-slate/40 hover:bg-antova-emerald/20 flex items-center justify-center transition-colors" aria-label="Twitter/X">
                                <svg className="w-4 h-4 text-antova-light/60" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Link columns */}
                    <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
                        {footerSections.map((section) => (
                            <div key={section.title}>
                                <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">{section.title}</h3>
                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            <Link href={link.href} className="text-antova-light/50 text-sm hover:text-white transition-colors">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-antova-slate/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-antova-light/40 text-sm">
                    <p>© {new Date().getFullYear()} Antova Technologies, Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Security</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
