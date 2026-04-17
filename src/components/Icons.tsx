import React from 'react';
import { 
  BarChart3, 
  Cloud, 
  Code2, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Globe, 
  Terminal, 
  TestTube2, 
  BrainCircuit,
  Bot,
  Zap,
  Monitor,
  Settings,
  Search,
  BookOpen,
  Briefcase,
  Award,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  DollarSign,
  MapPin,
  Filter,
  Download,
  Share2,
  Bookmark,
  Moon,
  Sun,
  Menu,
  X,
  Play,
  FileText
} from 'lucide-react';

export const IconMap = {
  BarChart3,
  Cloud,
  Code2,
  ShieldCheck,
  Cpu,
  Database,
  Globe,
  Terminal,
  TestTube2,
  BrainCircuit,
  Bot,
  Zap,
  Monitor,
  Settings,
  Search,
  BookOpen,
  Briefcase,
  Award,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  DollarSign,
  MapPin,
  Filter,
  Download,
  Share2,
  Bookmark,
  Moon,
  Sun,
  Menu,
  X,
  Play,
  FileText
};

export type IconName = keyof typeof IconMap;

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className, size = 20 }) => {
  const IconComponent = IconMap[name as IconName] || Settings;
  return <IconComponent className={className} size={size} />;
};
