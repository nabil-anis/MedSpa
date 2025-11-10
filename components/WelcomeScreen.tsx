import React from 'react';
import { LogoIcon } from './icons';

interface WelcomeScreenProps {
    error?: string | null;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ error }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-12rem)] text-center animate-fade-in">
        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[--background-secondary] mb-6 border border-[--border]">
           <LogoIcon className="w-8 h-8 text-[--foreground-secondary]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[--foreground]">
            The future of academic insight.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-[--foreground-secondary]">
            ASAP AI provides instant, intelligent evaluation for the modern scholar. Our mission is to deliver comprehensive, constructive, and context-aware feedback to elevate academic and professional work, crafted with precision.
        </p>
        <p className="mt-8 max-w-xl text-md text-[--foreground-secondary]">
            Provide the project details in the side panel to begin your analysis.
        </p>
        {error && (
            <div className="mt-8 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm p-4 rounded-xl max-w-xl">
                <strong>Analysis Error:</strong> {error}
            </div>
        )}
    </div>
  );
};

export default WelcomeScreen;