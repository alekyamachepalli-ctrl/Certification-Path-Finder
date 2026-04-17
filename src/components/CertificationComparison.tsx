import React from 'react';
import { Certification } from '../types/roadmap';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { X, Check, TrendingUp, Award, Briefcase, DollarSign, BookOpen, CheckCircle2 } from 'lucide-react';

interface CertificationComparisonProps {
  selectedCertifications: Certification[];
  onRemove: (certId: string) => void;
  onClose: () => void;
}

export const CertificationComparison: React.FC<CertificationComparisonProps> = ({ 
  selectedCertifications, 
  onRemove,
  onClose
}) => {
  if (selectedCertifications.length === 0) return null;

  const officialProviders = [
    'Microsoft', 'AWS', 'Google', 'Google Cloud', 'Meta', 'IBM', 'CompTIA', 
    'HashiCorp', 'CNCF', 'Tableau', 'DeepLearning.AI', 'Docker', 'Red Hat', 
    'Oracle', 'Salesforce', 'Vmware', 'Cisco'
  ];
  const isOfficialProvider = (provider: string) => officialProviders.includes(provider);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tighter">Compare Certifications</h1>
          <p className="text-muted-foreground mt-1">Side-by-side comparison of your selected career paths.</p>
        </div>
        <Button variant="outline" onClick={onClose}>Back to Dashboard</Button>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          <div className="grid grid-cols-[200px_repeat(auto-fit,minmax(250px,1fr))] gap-4">
            {/* Header Row */}
            <div className="p-4 font-bold uppercase tracking-widest text-[10px] text-muted-foreground self-end">Feature</div>
            {selectedCertifications.map(cert => (
              <div key={cert.id} className="relative p-6 bg-card border-2 border-primary/10 rounded-2xl shadow-sm hover:border-primary/30 transition-all">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-2 right-2 h-6 w-6 rounded-full hover:bg-destructive/10 hover:text-destructive"
                  onClick={() => onRemove(cert.id)}
                >
                  <X size={14} />
                </Button>
                <div className="flex flex-col h-full">
                  <Badge variant="outline" className="w-fit mb-3 text-[9px] uppercase tracking-widest font-bold bg-muted/50">{cert.provider}</Badge>
                  <h3 className="font-bold text-lg leading-tight flex items-center gap-2 mb-2">
                    {cert.name}
                    {isOfficialProvider(cert.provider) && (
                      <Badge variant="secondary" className="bg-emerald-500 text-white border-none text-[8px] h-4 px-1.5 flex items-center gap-1 shrink-0">
                        <Check size={8} strokeWidth={4} /> Official
                      </Badge>
                    )}
                  </h3>
                  {cert.code && (
                    <div className="mt-auto pt-2 border-t border-dashed border-border flex items-center justify-between">
                      <span className="text-primary font-mono text-sm font-bold uppercase tracking-widest">{cert.code}</span>
                      <span className="text-[9px] font-bold text-muted-foreground uppercase opacity-50 tracking-tighter">Candidate ID Code</span>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Level Row */}
            <div className="p-4 bg-muted/40 rounded-lg flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
              <Award size={14} className="text-primary" /> Skill Level
            </div>
            {selectedCertifications.map(cert => (
              <div key={`level-${cert.id}`} className="p-4 flex items-center justify-center">
                <Badge variant={cert.level === 'Beginner' ? 'secondary' : cert.level === 'Intermediate' ? 'default' : 'destructive'}>
                  {cert.level}
                </Badge>
              </div>
            ))}

            {/* Experience Row */}
            <div className="p-4 bg-muted/40 rounded-lg flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
              <Briefcase size={14} className="text-primary" /> Req. Experience
            </div>
            {selectedCertifications.map(cert => (
              <div key={`exp-${cert.id}`} className="p-4 flex flex-col items-center justify-center font-bold">
                <span className={cert.minExperienceYears > 3 ? 'text-destructive' : 'text-primary'}>
                  {cert.minExperienceYears === 0 ? 'Fundamentals' : `${cert.minExperienceYears}+ Years`}
                </span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-tighter">Professional Context</span>
              </div>
            ))}

            {/* Demand Row */}
            <div className="p-4 bg-muted/40 rounded-lg flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
              <TrendingUp size={14} className="text-primary" /> Market Demand
            </div>
            {selectedCertifications.map(cert => (
              <div key={`demand-${cert.id}`} className="p-4 flex items-center justify-center">
                {cert.isHighDemand ? (
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                    <TrendingUp size={16} />
                    High Demand
                  </div>
                ) : (
                  <span className="text-muted-foreground text-sm">Moderate</span>
                )}
              </div>
            ))}

            {/* Cost Row */}
            <div className="p-4 bg-muted/40 rounded-lg flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
              <DollarSign size={14} className="text-primary" /> Est. Exam Cost
            </div>
            {selectedCertifications.map(cert => {
              const usdCost = cert.costs.find(c => c.currency === 'USD') || cert.costs[0];
              return (
                <div key={`cost-${cert.id}`} className="p-4 flex flex-col items-center justify-center">
                  <span className="text-xl font-black text-primary">
                    {usdCost.currency} {usdCost.examCost}
                  </span>
                  <span className="text-[10px] text-muted-foreground uppercase font-bold">Base Price</span>
                </div>
              );
            })}

            {/* Description Row */}
            <div className="p-4 bg-muted/40 rounded-lg flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
              <BookOpen size={14} className="text-primary" /> Goal & Scope
            </div>
            {selectedCertifications.map(cert => (
              <div key={`desc-${cert.id}`} className="p-4 text-sm text-muted-foreground leading-relaxed">
                {cert.description}
              </div>
            ))}

            {/* Resources Count Row */}
            <div className="p-4 bg-muted/40 rounded-lg flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
              <CheckCircle2 size={14} className="text-primary" /> Resources
            </div>
            {selectedCertifications.map(cert => {
              const officialCount = cert.resources.filter(r => r.type === 'Official Docs').length;
              const otherCount = cert.resources.length - officialCount;
              return (
                <div key={`res-${cert.id}`} className="p-4 flex flex-col items-center justify-center gap-1">
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <CheckCircle2 size={14} className="text-emerald-600" />
                    {cert.resources.length} Materials
                  </div>
                  <div className="flex gap-2">
                    {officialCount > 0 && <span className="text-[10px] text-emerald-600 font-bold uppercase">{officialCount} Official</span>}
                    {otherCount > 0 && <span className="text-[10px] text-blue-600 font-bold uppercase">{otherCount} Recommended</span>}
                  </div>
                </div>
              );
            })}

            {/* Highlights Row */}
            <div className="p-4 bg-muted/40 rounded-lg flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
              <TrendingUp size={14} className="text-primary" /> Key Highlights
            </div>
            {selectedCertifications.map(cert => (
              <div key={`highlight-${cert.id}`} className="p-4 space-y-2">
                {cert.isHighDemand && (
                  <div className="p-2 bg-emerald-50 rounded border border-emerald-100 flex items-center gap-2">
                    <TrendingUp size={12} className="text-emerald-600" />
                    <span className="text-[10px] font-bold text-emerald-700">High Growth</span>
                  </div>
                )}
                {cert.minExperienceYears === 0 && (
                  <div className="p-2 bg-blue-50 rounded border border-blue-100 flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-blue-600" />
                    <span className="text-[10px] font-bold text-blue-700">Starter Friendly</span>
                  </div>
                )}
                {cert.provider === 'Microsoft' && (
                  <div className="p-2 bg-slate-50 rounded border border-slate-100 flex items-center gap-2">
                    <Badge variant="ghost" className="h-3 p-0 text-[10px] font-bold">MS Learn</Badge>
                    <span className="text-[10px] font-bold text-slate-700 font-mono italic">Primary Ecosystem</span>
                  </div>
                )}
                {cert.resources.some(r => r.isFree) && (
                  <div className="p-2 bg-amber-50 rounded border border-amber-100 flex items-center gap-2">
                    <DollarSign size={12} className="text-amber-600" />
                    <span className="text-[10px] font-bold text-amber-700">Free Path Available</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedCertifications.length < 2 && (
        <div className="mt-8 p-6 bg-accent/20 rounded-xl border border-accent/30 text-center">
          <p className="text-accent-foreground font-medium">Select at least one more certification to see a side-by-side comparison.</p>
        </div>
      )}
    </div>
  );
};
