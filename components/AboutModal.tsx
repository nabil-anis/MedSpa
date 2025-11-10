import React from 'react';
import { XIcon, LogoIcon } from './icons';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AboutModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center animate-fade-in" onClick={onClose}>
      <div 
        className="bg-[--background-secondary]/80 backdrop-blur-xl rounded-3xl w-full max-w-lg m-4 border border-[--border] animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-[--accent] p-2 rounded-xl">
                  <LogoIcon className="w-7 h-7 text-[--accent-foreground]" />
              </div>
              <div>
                <h2 className="font-semibold text-lg text-[--foreground]">About ASAP AI</h2>
                <p className="text-sm text-[--foreground-secondary] -mt-0.5">The future of academic insight.</p>
              </div>
            </div>
            <button onClick={onClose} aria-label="Close about modal" className="p-2 -mr-2 rounded-full text-[--foreground-secondary] hover:bg-[--background-tertiary]">
              <XIcon />
            </button>
          </div>
          
          <div className="text-sm text-[--foreground-secondary] space-y-4 leading-relaxed">
            <p>
              ASAP AI provides instant, intelligent evaluation for the modern scholar. Our mission is to deliver comprehensive, constructive, and context-aware feedback to elevate academic and professional work.
            </p>
            <p>
              By leveraging state-of-the-art AI, we analyze your projects against specified criteria, check for conceptual originality, and even help you prepare for presentations or defenses with tailored questions. Our goal is to be an indispensable partner in your pursuit of excellence.
            </p>
            <p>
              This tool is designed for students, researchers, and professionals who demand precision, depth, and clarity in their feedback.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[--border] text-center">
             <button onClick={onClose} className="w-full sm:w-auto px-6 py-2 text-sm font-semibold bg-[--accent] text-[--accent-foreground] rounded-xl hover:opacity-90 transition-opacity">
                Got it
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;