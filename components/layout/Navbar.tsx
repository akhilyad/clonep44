"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Zap } from 'lucide-react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 16);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Platform', href: '/platform' },
        { name: 'Solutions', href: '/solutions' },
        { name: 'Use Cases', href: '/carriers' },
        { name: 'Resources', href: '/resources' },
        { name: 'Company', href: '/company' },
    ];

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-antova-darker/95 backdrop-blur-md border-b border-antova-slate/40 shadow-lg shadow-black/20' : 'bg-transparent border-b border-transparent'}`}>
            <Container>
                <div className="flex justify-between items-center h-18 py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-antova-emerald flex items-center justify-center flex-shrink-0">
                            <Zap size={18} className="text-white fill-white" />
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">
                            Antova
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-antova-light/70 text-sm font-medium hover:text-white transition-colors duration-200"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/login" className="text-antova-light/70 text-sm font-medium hover:text-white transition-colors">
                            Sign In
                        </Link>
                        <Button size="sm">Request Demo</Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-antova-light/70 hover:text-white focus:outline-none p-2"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-antova-darker/98 backdrop-blur-md border-t border-antova-slate/40 py-4">
                    <Container>
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-antova-light/70 font-medium hover:text-white py-1 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex flex-col space-y-3 border-t border-antova-slate/40">
                                <Link href="/login" className="text-antova-light/70 font-medium hover:text-white">
                                    Sign In
                                </Link>
                                <Button fullWidth>Request Demo</Button>
                            </div>
                        </div>
                    </Container>
                </div>
            )}
        </nav>
    );
};
