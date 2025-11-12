import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-10rem)] text-center animate-fade-in">
      <div className="w-12 h-12 border-4 border-[--foreground]/10 border-t-[--foreground] rounded-full animate-spin"></div>
      <h2 className="mt-8 text-2xl font-semibold tracking-tight text-[--foreground]">
        Analyzing
        <span className="animate-blink" style={{ animationDelay: '0.0s' }}>.</span>
        <span className="animate-blink" style={{ animationDelay: '0.2s' }}>.</span>
        <span className="animate-blink" style={{ animationDelay: '0.4s' }}>.</span>
      </h2>
      <p className="mt-2 max-w-md text-[--foreground-secondary]">
        The AI is conducting a critical evaluation based on the provided parameters. Please wait.
      </p>
    </div>
  );
};

export default LoadingScreen;