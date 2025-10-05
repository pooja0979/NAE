// FIX: Import React to provide types for React.FC
import * as React from 'react';

export enum LearnerAttribute {
  Creative = 'Creative',
  Curious = 'Curious',
  Collaborative = 'Collaborative',
  Committed = 'Committed',
  Compassionate = 'Compassionate',
  Critical = 'Critical',
}

export interface DetailedExplanation {
  whatIsIt: string;
  howToUse: {
    title: string;
    subjects: { name: string; description: string }[];
  };
}

// Allow template components to accept a 'content' prop for pre-filled examples
export interface TemplateContentProps {
  content?: { [key: string]: string | string[] };
}

export interface ThinkingRoutine {
  id: string;
  name: string;
  attribute: LearnerAttribute;
  description: string;
  targetDisposition: string;
  steps: { title: string; description: string }[];
  interactiveTemplateComponent?: React.FC<TemplateContentProps>;
  chatGptPrompt: (subject: string, topic: string) => string;
  detailedExplanation?: DetailedExplanation;
}

export interface Comment {
  id: number;
  author: string;
  text: string;
}

export enum MediaType {
  Image = 'image',
  File = 'file',
}

export interface MediaItem {
  type: MediaType;
  url: string;
  name?: string; // For files
}

export interface CommunityPost {
  id: number;
  author: string;
  timestamp: string;
  subject: string;
  topic: string;
  explanation?: string; // Now optional
  media: MediaItem[];
  reactions: {
    likes: number;
  };
  comments: Comment[];
}


// Updated Example interface for rich, downloadable examples
export interface Example {
    id: string;
    title: string;
    subject: string;
    keyStage: string;
    topic: string;
    routineId: string;
    templateContent: { [key: string]: string | string[] };
}