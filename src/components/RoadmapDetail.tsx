import React from 'react';
import { Technology, Certification, Resource, RoadmapStep, PortfolioProject } from '../types/roadmap';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { ScrollArea } from './ui/scroll-area';
import { DynamicIcon } from './Icons';
import { 
  ExternalLink, CheckCircle2, Award, BookOpen, Briefcase, 
  DollarSign, MapPin, Download, Share2, Check, ArrowRightLeft, 
  Lightbulb, Globe, Code, Layers 
} from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { motion } from 'motion/react';

interface RoadmapDetailProps {
  tech: Technology;
  onBack: () => void;
  selectedCerts: Certification[];
  onToggleCert: (cert: Certification, techId: string) => void;
  experienceLevel: number;
}

export const RoadmapDetail: React.FC<RoadmapDetailProps> = ({ tech, onBack, selectedCerts, onToggleCert, experienceLevel }) => {
  const [activeStepId, setActiveStepId] = React.useState<string | null>(tech.roadmap[0]?.id || null);
  const primaryCert = tech.certifications[0];
  const isSelected = (certId: string) => selectedCerts.some(c => c.id === certId);

  // Filter certifications by experience level to show what's suitable
  const suitableCerts = tech.certifications.filter(c => c.minExperienceYears <= experienceLevel);

  const officialProviders = [
    'Microsoft', 'AWS', 'Google', 'Google Cloud', 'Meta', 'IBM', 'CompTIA', 
    'HashiCorp', 'CNCF', 'Tableau', 'DeepLearning.AI', 'Docker', 'Red Hat', 
    'Oracle', 'Salesforce', 'Vmware', 'Cisco'
  ];

  const isOfficialProvider = (provider: string) => officialProviders.includes(provider);

  const allResources = tech.certifications.flatMap(c => c.resources);
  const officialResources = allResources.filter(r => r.type === 'Official Docs');
  const recommendedResources = allResources.filter(r => r.type !== 'Official Docs');

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Button variant="ghost" className="mb-6 gap-2 text-muted-foreground hover:text-foreground" onClick={onBack}>
        <DynamicIcon name="ChevronRight" className="rotate-180" size={16} />
        Back to Dashboard
      </Button>

      <div className="bento-grid">
        {/* Hero Card */}
        <div className="bento-card hero-card hero-gradient col-span-2 row-span-2 p-8 flex flex-col justify-between text-white border-none shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-none uppercase text-[10px] tracking-widest px-3">Active Technology Path</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-none uppercase text-[10px] tracking-widest px-3">Expert Verified</Badge>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tighter mb-4">{tech.name}</h1>
            <p className="text-white/80 text-sm leading-relaxed max-w-md">
              {tech.description}
            </p>
          </div>
          
            {primaryCert && (
            <div className="mt-8 pt-6 border-t border-white/20 relative z-10">
              <div className="flex justify-between items-end">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-[10px] uppercase tracking-widest opacity-70">Primary Certification</div>
                    {primaryCert.minExperienceYears > 0 && (
                      <Badge variant="secondary" className="bg-white/10 text-white border-none text-[9px] h-4">
                        Requires {primaryCert.minExperienceYears}+ Years XP
                      </Badge>
                    )}
                    {isOfficialProvider(primaryCert.provider) && (
                      <Badge variant="secondary" className="bg-emerald-500 text-white border-none text-[9px] h-4 flex items-center gap-1">
                        <Check size={8} strokeWidth={4} /> Official
                      </Badge>
                    )}
                  </div>
                  <div className="text-2xl font-mono font-bold mb-1">{primaryCert.code}</div>
                  <div className="text-sm opacity-90 font-medium">{primaryCert.name}</div>
                </div>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className={`gap-2 font-bold ${isSelected(primaryCert.id) ? 'bg-emerald-500 text-white hover:bg-emerald-600' : 'bg-white/20 text-white hover:bg-white/30 border-none'}`}
                  onClick={() => onToggleCert(primaryCert, tech.id)}
                >
                  {isSelected(primaryCert.id) ? (
                    <><Check size={16} /> Selected</>
                  ) : (
                    <><ArrowRightLeft size={16} /> Add to Compare</>
                  )}
                </Button>
              </div>
            </div>
          )}
          
          {/* Decorative background icon */}
          <div className="absolute -right-10 -bottom-10 opacity-10 rotate-12">
            <DynamicIcon name={tech.icon} size={240} />
          </div>
        </div>

        {/* Roadmap Card */}
        <div className="bento-card col-span-2 row-span-1 bg-card border border-border p-6 flex flex-col relative overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-bold uppercase tracking-widest">Interactive Roadmap</h3>
            <Badge variant="secondary" className="bg-muted text-muted-foreground border-none text-[10px] px-3">{tech.roadmap.length} Steps</Badge>
          </div>
          
          <div className="flex justify-between items-center relative mt-2 mb-8 px-4">
            <div className="absolute left-8 right-8 top-3.5 h-0.5 bg-accent/30 z-0" />
            {tech.roadmap.sort((a, b) => a.order - b.order).map((step, idx) => (
              <button 
                key={step.id} 
                className="flex flex-col items-center gap-2 relative z-10 transition-transform active:scale-95"
                onClick={() => setActiveStepId(step.id)}
              >
                <motion.div 
                  animate={{ 
                    scale: activeStepId === step.id ? 1.2 : 1,
                    backgroundColor: activeStepId === step.id ? 'var(--primary)' : 'var(--accent)'
                  }}
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold shadow-sm ${activeStepId === step.id ? 'text-white' : 'text-accent-foreground'}`}
                >
                  {step.order}
                </motion.div>
                <span className={`text-[8px] font-bold uppercase tracking-tighter transition-colors ${activeStepId === step.id ? 'text-primary' : 'text-muted-foreground'}`}>
                  {step.title.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>

          <motion.div 
            key={activeStepId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 p-4 bg-muted/30 rounded-xl border border-border/50"
          >
            {tech.roadmap.find(s => s.id === activeStepId) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-2 text-primary">
                    {tech.roadmap.find(s => s.id === activeStepId)?.title}
                  </h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    {tech.roadmap.find(s => s.id === activeStepId)?.description}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {tech.roadmap.find(s => s.id === activeStepId)?.concepts && (
                    <div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/60 mb-2">Core Concepts</div>
                      <div className="flex flex-wrap gap-1">
                        {tech.roadmap.find(s => s.id === activeStepId)?.concepts?.map(c => (
                          <Badge key={c} variant="outline" className="text-[8px] py-0 h-4 border-primary/20 bg-primary/5 text-primary">{c}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {tech.roadmap.find(s => s.id === activeStepId)?.outcomes && (
                    <div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/60 mb-2">Key Outcomes</div>
                      <ul className="space-y-1">
                        {tech.roadmap.find(s => s.id === activeStepId)?.outcomes?.map(o => (
                          <li key={o} className="text-[9px] text-muted-foreground flex items-start gap-1">
                            <Check size={8} className="mt-0.5 text-emerald-500" strokeWidth={3} /> {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Career Roles Card */}
        <div className="bento-card col-span-1 row-span-1 bg-card border border-border p-6">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Career Roles</h3>
          <div className="flex flex-wrap gap-2">
            {tech.roles.map((role) => (
              <span key={role} className="px-3 py-1 bg-accent text-accent-foreground rounded-md text-[11px] font-bold">
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Market Demand Card */}
        <div className="bento-card col-span-1 row-span-1 bg-card border border-border p-6 flex flex-col justify-center items-center text-center">
          <h3 className="text-[10px] font-bold uppercase tracking-widest mb-2 text-muted-foreground">Market Demand</h3>
          <div className="text-3xl font-black text-emerald-600">High</div>
          <div className="text-[10px] font-bold text-muted-foreground mt-1">+18% Annual Growth</div>
        </div>

        {/* Pricing Card */}
        <div className="bento-card col-span-1 row-span-2 bg-card border border-border p-6 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold uppercase tracking-widest">Cost by Location</h3>
            <div className="flex gap-1">
              <Badge variant="outline" className="text-[9px] bg-primary/5 text-primary border-primary/20">Official Rates</Badge>
            </div>
          </div>
          <p className="text-[11px] text-muted-foreground mb-4 leading-relaxed">Local exam fees and estimated study material costs for the {primaryCert?.provider} platform.</p>
          
          <ScrollArea className="flex-1">
            <div className="space-y-4 pr-3">
              {primaryCert?.costs.map((cost, idx) => (
                <div key={idx} className="flex flex-col gap-1.5 p-3 rounded-lg bg-muted/30 border border-border/40 hover:border-primary/20 transition-all">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">{cost.region}</span>
                    <span className="text-xs font-black text-primary">{cost.currency} {cost.examCost.toLocaleString()}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <div className="flex flex-col">
                      <span className="text-[8px] uppercase text-muted-foreground/70 font-bold">Learning</span>
                      <span className="text-[10px] font-medium truncate">{cost.learningCost}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[8px] uppercase text-muted-foreground/70 font-bold">Practice</span>
                      <span className="text-[10px] font-medium truncate">{cost.practiceCost}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/10 text-[9px] leading-relaxed text-muted-foreground">
            <span className="font-bold text-primary italic uppercase tracking-widest text-[8px] block mb-1">Fee Disclaimer</span>
            Pricing excludes local VAT/GST and periodic vendor discounts. "Learning" refers to core specialized modules.
          </div>
        </div>

        {/* Resources Card */}
        <div className="bento-card col-span-1 row-span-2 bg-card border border-border p-6 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold uppercase tracking-widest">Resources</h3>
            <div className="flex gap-1">
              <Badge variant="outline" className="text-[9px] bg-emerald-50 text-emerald-700 border-emerald-200">Official</Badge>
              <Badge variant="outline" className="text-[9px] bg-blue-50 text-blue-700 border-blue-200">Top Rated</Badge>
            </div>
          </div>
          <ScrollArea className="flex-1">
            <div className="space-y-4 pr-4">
              {officialResources.length > 0 && (
                <div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2 flex items-center gap-1">
                    <CheckCircle2 size={10} className="text-emerald-500" /> Official Materials
                  </div>
                  <div className="space-y-1">
                    {officialResources.slice(0, 4).map((res) => (
                      <a 
                        key={res.id} 
                        href={res.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-2 border-b border-border/50 last:border-none group"
                      >
                        <span className="text-[11px] font-semibold group-hover:text-primary transition-colors truncate mr-2">{res.title}</span>
                        <ExternalLink size={10} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {recommendedResources.length > 0 && (
                <div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2 flex items-center gap-1">
                    <BookOpen size={10} className="text-blue-500" /> Recommended
                  </div>
                  <div className="space-y-1">
                    {recommendedResources.slice(0, 4).map((res) => (
                      <a 
                        key={res.id} 
                        href={res.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-2 border-b border-border/50 last:border-none group"
                      >
                        <span className="text-[11px] font-medium group-hover:text-primary transition-colors truncate mr-2">{res.title}</span>
                        <Badge variant="ghost" className="text-[8px] h-3.5 px-1 bg-muted text-muted-foreground">{res.type.split(' ')[0]}</Badge>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>

        {/* Job Prep Card */}
        <div className="bento-card col-span-1 row-span-1 bg-card border border-border p-6 flex flex-col min-h-[320px]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-bold uppercase tracking-widest">Apply & Job Prep</h3>
            <Badge variant="outline" className="text-[9px] font-black uppercase bg-primary/5 text-primary border-primary/10">Placement Ready</Badge>
          </div>
          
          <div className="space-y-6 flex-1">
            {tech.jobPrep && tech.jobPrep.length > 0 ? (
              <>
                {/* Resumes */}
                <div>
                  <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                    <DynamicIcon name="FileText" size={10} /> Resume Templates
                  </div>
                  <div className="space-y-2">
                    {tech.jobPrep.filter(r => r.title.toLowerCase().includes('resume') || r.type === 'Interview Prep' && r.title.toLowerCase().includes('cv')).map(res => (
                      <a key={res.id} href={res.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2 rounded-lg bg-muted/30 hover:bg-muted transition-all group border border-border/50">
                        <span className="text-[11px] font-bold truncate group-hover:text-primary">{res.title}</span>
                        <ExternalLink size={10} className="text-muted-foreground opacity-30 group-hover:opacity-100" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Portfolio */}
                <div>
                  <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-2"><Briefcase size={10} /> Portfolio Guidance</span>
                    {tech.portfolioProjects && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="text-[9px] text-primary hover:underline flex items-center gap-1">
                            <Lightbulb size={10} /> View Project Ideas
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                              <Briefcase className="text-primary" />
                              {tech.name} Portfolio Mastery
                            </DialogTitle>
                            <DialogDescription>
                              Structured guidance on building and presenting technical portfolios.
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="space-y-6 mt-4">
                            <section>
                              <h4 className="text-sm font-bold flex items-center gap-2 mb-3">
                                <Code size={16} className="text-primary" /> Curated Project Ideas
                              </h4>
                              <div className="grid grid-cols-1 gap-4">
                                {tech.portfolioProjects.map(project => (
                                  <div key={project.id} className="p-4 rounded-xl bg-muted/30 border border-border">
                                    <div className="flex justify-between items-start mb-2">
                                      <h5 className="font-bold text-sm">{project.title}</h5>
                                      <Badge variant="outline" className="text-[9px] py-0 h-4">{project.difficulty}</Badge>
                                    </div>
                                    <p className="text-xs text-muted-foreground mb-3">{project.description}</p>
                                    <div className="flex items-start gap-2 p-2 rounded bg-primary/5 border border-primary/10 mb-3">
                                      <Globe size={12} className="mt-0.5 text-primary shrink-0" />
                                      <p className="text-[10px] leading-relaxed italic"><span className="font-bold uppercase not-italic">Use Case:</span> {project.realWorldUseCase}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                      {project.technicalStack.map(stack => (
                                        <Badge key={stack} variant="secondary" className="text-[8px] h-3.5 px-1 bg-primary/10 text-primary border-none">{stack}</Badge>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </section>

                            <Separator />

                            <section>
                              <h4 className="text-sm font-bold flex items-center gap-2 mb-3">
                                <Layers size={16} className="text-primary" /> Portfolio Presentation Tips
                              </h4>
                              <ul className="space-y-2 text-xs text-muted-foreground">
                                <li className="flex items-start gap-2">
                                  <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                  <span><strong>The "Why" Matters:</strong> Don't just show code. Explain the business problem you solved or the technical constraint you overcame.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                  <span><strong>Architectural Diagrams:</strong> Always include a high-level system diagram for {tech.name} projects to show you understand the big picture.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                  <span><strong>Documentation:</strong> Ensure your README includes a "How to Run" section and a clear "Results/Impact" section.</span>
                                </li>
                              </ul>
                            </section>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                  <div className="space-y-2">
                    {tech.jobPrep.filter(r => r.type === 'Portfolio Guide' || r.title.toLowerCase().includes('portfolio') || r.title.toLowerCase().includes('projects')).map(res => (
                      <div key={res.id} className="space-y-1">
                        <a href={res.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all group border border-primary/10">
                          <div className="flex flex-col">
                            <span className="text-[11px] font-bold text-primary truncate max-w-[180px]">{res.title}</span>
                            {res.lastVerified && (
                              <span className="text-[8px] text-muted-foreground font-mono">Verified: {res.lastVerified}</span>
                            )}
                          </div>
                          <ExternalLink size={10} className="text-primary opacity-30 group-hover:opacity-100" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interviews */}
                <div>
                  <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                    <DynamicIcon name="Play" size={10} /> Mock Interviews
                  </div>
                  <div className="space-y-2">
                    {tech.jobPrep.filter(r => r.title.toLowerCase().includes('interview') || r.title.toLowerCase().includes('mock')).map(res => (
                      <div key={res.id} className="space-y-1">
                        <a href={res.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-all group border border-transparent hover:border-border">
                          <div className="w-6 h-6 rounded bg-red-100 flex items-center justify-center text-red-600">
                            <DynamicIcon name="Play" size={10} />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-[10px] font-bold truncate group-hover:text-primary">{res.title}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-[8px] text-muted-foreground font-medium uppercase">{res.provider}</span>
                              {res.lastVerified && (
                                <span className="text-[8px] text-muted-foreground hidden group-hover:block font-mono">• {res.lastVerified}</span>
                              )}
                            </div>
                          </div>
                        </a>
                        {res.alternativeUrls && res.alternativeUrls.length > 0 && (
                          <div className="px-11 pb-1">
                            {res.alternativeUrls.map((altUrl, idx) => (
                              <a key={idx} href={altUrl} target="_blank" rel="noopener noreferrer" className="text-[8px] text-muted-foreground hover:text-primary transition-colors block">
                                ↳ Alternative Resource {idx + 1}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center py-8 opacity-40">
                <Briefcase size={40} strokeWidth={1} className="mb-4" />
                <p className="text-[11px] font-bold uppercase tracking-widest">Resources Coming Soon</p>
                <p className="text-[9px] mt-1">Our career experts are curating paths for this track.</p>
              </div>
            )}
          </div>
        </div>

        {/* Stats Card */}
        <div className="bento-card col-span-1 row-span-1 bg-card border border-border p-6 flex flex-col justify-center items-center text-center">
          <h3 className="text-[10px] font-bold uppercase tracking-widest mb-2 text-muted-foreground">Certifications</h3>
          <div className="text-3xl font-black text-primary">{tech.certifications.length}</div>
          <div className="text-[10px] font-bold text-muted-foreground mt-1">Available Paths</div>
        </div>

        {/* All Certifications List Card */}
        <div className="bento-card col-span-2 row-span-1 bg-card border border-border p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold uppercase tracking-widest">Recommended Certifications</h3>
            <span className="text-[10px] font-bold text-muted-foreground italic">Showing paths for {experienceLevel === 0 ? 'Starters' : experienceLevel + '+ Years Exp.'}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {suitableCerts.length > 0 ? suitableCerts.map(cert => (
              <div key={cert.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border/50 group hover:border-primary/30 transition-all">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-bold text-primary font-mono">{cert.code}</span>
                    <span className="text-[9px] text-muted-foreground font-bold uppercase tracking-tighter bg-muted px-1 rounded">{cert.level}</span>
                    {isOfficialProvider(cert.provider) && (
                      <Badge variant="outline" className="text-[8px] h-3.5 px-1.5 border-emerald-200 text-emerald-700 bg-emerald-50">Official</Badge>
                    )}
                  </div>
                  <span className="text-xs font-bold truncate max-w-[150px]">{cert.name}</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`h-8 px-2 gap-1 text-[10px] font-bold uppercase tracking-tighter ${isSelected(cert.id) ? 'text-emerald-600' : 'text-muted-foreground hover:text-primary'}`}
                  onClick={() => onToggleCert(cert, tech.id)}
                >
                  {isSelected(cert.id) ? (
                    <><Check size={12} /> Added</>
                  ) : (
                    <><ArrowRightLeft size={12} /> Compare</>
                  )}
                </Button>
              </div>
            )) : (
              <div className="col-span-2 py-8 text-center border-2 border-dashed border-muted rounded-xl">
                <p className="text-sm text-muted-foreground">No certifications found for this experience level. Try lowering your selection.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
