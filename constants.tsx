import React from 'react';
import { 
    FinanceIcon, ComputerScienceIcon, EngineeringIcon, BiologyIcon, LiteratureIcon, HistoryDisciplineIcon, ArtIcon, 
    PhysicsIcon, PharmacyIcon, LawIcon, GeneralIcon, ManagementIcon, EntrepreneurshipIcon, OtherIcon 
} from './components/icons';

export const MIN_CRITERIA = 3;
export const MAX_CRITERIA = 7;
export const MAX_TOTAL_FILE_SIZE_BYTES = 15 * 1024 * 1024; // 15 MB

export const DISCIPLINES = {
  'Finance': {
    name: 'Finance',
    icon: FinanceIcon,
    criteria: ['Quantitative Analysis', 'Market Understanding', 'Risk Assessment', 'Model Validity'],
  },
  'Computer Science': {
    name: 'Computer Science',
    icon: ComputerScienceIcon,
    criteria: ['Algorithm Efficiency', 'Code Quality & Style', 'System Architecture', 'Problem Solving'],
  },
  'Electrical Engineering': {
    name: 'Electrical Engineering',
    icon: EngineeringIcon,
    criteria: ['Circuit Design', 'Signal Processing', 'System Integration', 'Prototyping Quality'],
  },
  'Management': {
    name: 'Management',
    icon: ManagementIcon,
    criteria: ['Strategic Analysis', 'Operational Efficiency', 'Leadership & Decision Making', 'Market Positioning'],
  },
  'Entrepreneurship': {
    name: 'Entrepreneurship',
    icon: EntrepreneurshipIcon,
    criteria: ['Innovation & Viability', 'Business Model', 'Market Execution Plan', 'Scalability'],
  },
  'Biology': {
    name: 'Biology',
    icon: BiologyIcon,
    criteria: ['Methodology', 'Data Interpretation', 'Contribution to Field', 'Ethical Considerations'],
  },
  'Literature': {
    name: 'Literature',
    icon: LiteratureIcon,
    criteria: ['Thesis Strength', 'Textual Evidence', 'Critical Analysis', 'Prose & Style'],
  },
  'History': {
    name: 'History',
    icon: HistoryDisciplineIcon,
    criteria: ['Argument Strength', 'Primary Source Use', 'Historiographical Awareness', 'Narrative Cohesion'],
  },
  'Art': {
    name: 'Art',
    icon: ArtIcon,
    criteria: ['Conceptual Strength', 'Technical Execution', 'Originality', 'Artist Statement Clarity'],
  },
  'Physics': {
    name: 'Physics',
    icon: PhysicsIcon,
    criteria: ['Theoretical Soundness', 'Experimental Design', 'Data Analysis', 'Conclusion Validity'],
  },
  'Pharmacy': {
    name: 'Pharmacy',
    icon: PharmacyIcon,
    criteria: ['Pharmacological Knowledge', 'Clinical Application', 'Patient Safety', 'Regulatory Adherence'],
  },
  'Law': {
    name: 'Law',
    icon: LawIcon,
    criteria: ['Legal Reasoning', 'Case Law Application', 'Statutory Interpretation', 'Argument Structure'],
  },
   'General': {
    name: 'General',
    icon: GeneralIcon,
    criteria: ['Clarity & Structure', 'Depth of Research', 'Originality', 'Critical Analysis'],
  },
  'Other': {
    name: 'Other',
    icon: OtherIcon,
    criteria: ['Clarity & Structure', 'Depth of Research', 'Originality', 'Critical Analysis'],
  },
};


export const ACADEMIC_LEVELS = [
  'Undergraduate (Year 1-2)',
  'Undergraduate (Year 3-4)',
  'Masters',
  'PhD',
  'Professional Development',
];