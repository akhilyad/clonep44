import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    children,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-antova-dark rounded-lg cursor-pointer';

    const variants = {
        primary: 'bg-antova-emerald hover:bg-emerald-400 text-antova-darker focus:ring-antova-emerald shadow-lg shadow-emerald-900/30',
        secondary: 'bg-antova-surface hover:bg-antova-slate/60 text-antova-light border border-antova-slate/50 focus:ring-antova-slate',
        outline: 'border border-antova-emerald/50 text-antova-emerald hover:bg-antova-emerald hover:text-antova-darker focus:ring-antova-emerald',
        ghost: 'text-antova-light/70 hover:text-white hover:bg-antova-slate/30 focus:ring-antova-slate',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-5 py-2.5 text-sm',
        lg: 'px-7 py-3.5 text-base',
    };

    const widthStyles = fullWidth ? 'w-full' : '';

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyles} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
