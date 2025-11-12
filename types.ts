import React from 'react';
import { DISCIPLINES } from './constants';

export interface CriteriaAnalysis {
  name: string;
  score: number;
  points: string[];
}

export interface OriginalityFinding {
  title: string;
  description: string;
}

export interface OriginalityReport {
  score: number;
  summary: string;
  findings: OriginalityFinding[];
}

export interface DefensePrepQuestion {
  number: number;
  question: string;
  answerOutline: string[];
}

export interface DefensePrepCategory {
  categoryName: string;
  questions: DefensePrepQuestion[];
}

export interface AnalysisResult {
  projectTitle: string; 
  overallScore: number;
  summaryTitle: string;
  discipline: string;
  academicLevel: string;
  criteriaAnalyses: CriteriaAnalysis[];
  originalityReport: OriginalityReport;
  overallAnalysis: string;
  suggestedActions: string[];
  defensePrep: DefensePrepCategory[];
}

export interface ReportHistoryItem {
  id: string;
  projectTitle: string;
  date: string;
  result: AnalysisResult;
}

export interface UploadedFile {
  name: string;
  type: string;
  size: number;
  content: string; // base64 encoded
}

export type DisciplineKey = keyof typeof DISCIPLINES;

export interface AppConfig {
  projectTitle: string;
  discipline: DisciplineKey;
  academicLevel: string;
  evaluationContext: string;
  projectURL: string;
  evaluationCriteria: string[];
  checkOriginality: boolean;
  customDiscipline?: string;
}