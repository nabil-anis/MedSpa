
import React, { useState, useEffect } from 'react';
// FIX: Correctly import GoogleGenAI and Type from @google/genai.
import { GoogleGenAI, Type } from "@google/genai";
import ConfigurationPanel from './components/ConfigurationPanel';
import WelcomeScreen from './components/WelcomeScreen';
import LoadingScreen from './components/LoadingScreen';
import ResultsScreen from './components/ResultsScreen';
import { AnalysisResult, ReportHistoryItem, AppConfig, UploadedFile, DisciplineKey } from './types';
import { SidebarIcon } from './components/icons';
import HistoryModal from './components/HistoryModal';
import AboutModal from './components/AboutModal';
import { ACADEMIC_LEVELS, DISCIPLINES } from './constants';

export type AnalysisState = 'welcome' | 'loading' | 'results';

const initialConfig: AppConfig = {
  projectTitle: '',
  discipline: 'Finance',
  academicLevel: ACADEMIC_LEVELS[0],
  evaluationContext: '',
  projectURL: '',
  evaluationCriteria: DISCIPLINES['Finance'].criteria,
  checkOriginality: true,
  customDiscipline: '',
};


const App: React.FC = () => {
  const [theme, setTheme] = useState('dark');
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);
  const [analysisState, setAnalysisState] = useState<AnalysisState>('welcome');
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [reportHistory, setReportHistory] = useState<ReportHistoryItem[]>([]);
  const [config, setConfig] = useState<AppConfig>(initialConfig);
  const [files, setFiles] = useState<UploadedFile[]>([]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('asap-ai-theme') || 'dark';
    setTheme(savedTheme);

    const savedHistory = localStorage.getItem('asap-ai-history');
    if (savedHistory) {
      setReportHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('asap-ai-theme', theme);
  }, [theme]);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'b') {
        e.preventDefault();
        setIsSidebarOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    const handleResize = () => {
      if (window.innerWidth < 768) setIsSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleTheme = (event: React.MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;
    document.documentElement.style.setProperty('--x', `${x}px`);
    document.documentElement.style.setProperty('--y', `${y}px`);

    // @ts-ignore
    if (document.startViewTransition) {
      // @ts-ignore
      document.startViewTransition(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      });
    } else {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }
  };

  const saveToHistory = (result: AnalysisResult) => {
    const newHistoryItem: ReportHistoryItem = {
      id: new Date().toISOString(),
      projectTitle: result.projectTitle,
      date: new Date().toLocaleString(),
      result: result,
    };
    setReportHistory(prev => {
      const updatedHistory = [newHistoryItem, ...prev];
      localStorage.setItem('asap-ai-history', JSON.stringify(updatedHistory));
      return updatedHistory;
    });
  };
  
  const loadFromHistory = (item: ReportHistoryItem) => {
    setAnalysisResult(item.result);
    setAnalysisState('results');
    setIsHistoryOpen(false);
  }

  const deleteFromHistory = (id: string) => {
    setReportHistory(prev => {
      const updatedHistory = prev.filter(item => item.id !== id);
      localStorage.setItem('asap-ai-history', JSON.stringify(updatedHistory));
      return updatedHistory;
    });
  }

  const clearHistory = () => {
    setReportHistory([]);
    localStorage.removeItem('asap-ai-history');
  }


  const handleAnalyze = async () => {
    setAnalysisState('loading');
    setError(null);
    if (window.innerWidth < 768) setIsSidebarOpen(false);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = `You are ASAP AI, a rigorous and exacting academic evaluation tool. Your purpose is to provide critical, objective, and unflinchingly honest feedback to help users achieve the highest standards of academic and professional excellence. Your tone should be formal, authoritative, and direct. Avoid praise, empathetic language, or softening of criticism. Focus on identifying weaknesses, logical fallacies, and areas for substantial improvement. All feedback must be constructive but delivered with an expectation of rigor. When generating defense prep questions, provide at least 15 challenging questions designed to probe the depths of the user's understanding.`;
      
      const disciplineName = config.discipline === 'Other' ? config.customDiscipline : config.discipline;
      const textPrompt = `Project Title: ${config.projectTitle}. Academic Level: ${config.academicLevel}. Discipline: ${disciplineName}. Evaluation Context: ${config.evaluationContext}. Project URL: ${config.projectURL}. Please evaluate based on these criteria: ${config.evaluationCriteria.join(', ')}. Perform an originality check: ${config.checkOriginality}.`;

      const fileParts = files.map(file => ({
        inlineData: {
          mimeType: file.type,
          data: file.content
        }
      }));
    
      const textPart = { text: textPrompt };
      const parts = [textPart, ...fileParts];

      const response = await ai.models.generateContent({
        model: "gemini-2.5-pro",
        contents: { parts: parts },
        config: {
          systemInstruction,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              overallScore: { type: Type.INTEGER, description: "A score from 0 to 100 representing the overall quality." },
              summaryTitle: { type: Type.STRING, description: "A concise, summative title for the evaluation (e.g., 'Excellent Work', 'Requires Minor Revisions')." },
              discipline: { type: Type.STRING },
              academicLevel: { type: Type.STRING },
              criteriaAnalyses: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { name: { type: Type.STRING }, score: { type: Type.INTEGER }, points: { type: Type.ARRAY, items: { type: Type.STRING } } }, required: ["name", "score", "points"] } },
              originalityReport: { type: Type.OBJECT, properties: { score: { type: Type.INTEGER }, summary: { type: Type.STRING }, findings: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { title: { type: Type.STRING }, description: { type: Type.STRING } }, required: ["title", "description"] } } }, required: ["score", "summary", "findings"] },
              overallAnalysis: { type: Type.STRING },
              suggestedActions: { type: Type.ARRAY, items: { type: Type.STRING } },
              defensePrepQuestions: { type: Type.ARRAY, description: "Generate at least 15 challenging questions designed to prepare the user for a viva or defense of their project.", items: { type: Type.OBJECT, properties: { number: { type: Type.INTEGER }, question: { type: Type.STRING }, expectedAnswerPoints: { type: Type.ARRAY, items: { type: Type.STRING } } }, required: ["number", "question"] } }
            },
            required: ["overallScore", "summaryTitle", "discipline", "academicLevel", "criteriaAnalyses", "originalityReport", "overallAnalysis", "suggestedActions", "defensePrepQuestions"]
          }
        }
      });

      // FIX: Access the text from the response and parse it as JSON.
      const resultText = response.text;
      const result = JSON.parse(resultText);
      const finalResult: AnalysisResult = { ...result, projectTitle: config.projectTitle, discipline: disciplineName || result.discipline };
      setAnalysisResult(finalResult);
      setAnalysisState('results');
      saveToHistory(finalResult);
      setIsSidebarOpen(false);

    } catch (e) {
      console.error(e);
      setError("An error occurred during analysis. Please check your connection or API key and try again.");
      setAnalysisState('welcome');
    }
  };

  const handleReset = () => {
    setConfig(initialConfig);
    setFiles([]);
    setAnalysisState('welcome');
    setAnalysisResult(null);
    setError(null);
    if (!isSidebarOpen && window.innerWidth >= 768) setIsSidebarOpen(true);
  };
  
  const renderMainContent = () => {
    switch(analysisState) {
      case 'loading':
        return <LoadingScreen />;
      case 'results':
        return analysisResult ? <ResultsScreen result={analysisResult} projectTitle={analysisResult.projectTitle} /> : <WelcomeScreen error={error} />;
      case 'welcome':
      default:
        return <WelcomeScreen error={error} />;
    }
  };

  return (
    <div className="bg-[--background] min-h-screen font-sans">
      <ConfigurationPanel
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        config={config}
        setConfig={setConfig}
        files={files}
        setFiles={setFiles}
        isAnalyzing={analysisState === 'loading'}
        onSubmit={handleAnalyze}
        onReset={handleReset}
        savedReportsCount={reportHistory.length}
        toggleHistory={() => setIsHistoryOpen(true)}
        toggleAbout={() => setIsAboutOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <HistoryModal 
        isOpen={isHistoryOpen} 
        onClose={() => setIsHistoryOpen(false)} 
        history={reportHistory}
        onLoad={loadFromHistory}
        onDelete={deleteFromHistory}
        onClear={clearHistory}
      />
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      
      <main className={`transition-all duration-500 ease-in-out ${isSidebarOpen ? 'md:ml-96' : 'ml-0'}`}>
         {!isSidebarOpen && (
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="fixed top-4 left-4 z-30 p-2 rounded-full bg-[--background-secondary]/50 backdrop-blur-md border border-[--border] text-[--foreground-secondary] hover:bg-[--background-tertiary] transition-transform hover:scale-110"
              aria-label="Open sidebar"
            >
              <SidebarIcon />
            </button>
          )}
        <div className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
           {renderMainContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
