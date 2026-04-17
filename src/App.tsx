import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { TechGrid } from './components/TechGrid';
import { RoadmapDetail } from './components/RoadmapDetail';
import { CertificationComparison } from './components/CertificationComparison';
import { VouchersPage } from './components/VouchersPage';
import { Footer } from './components/Footer';
import { useRoadmaps } from './hooks/useRoadmaps';
import { Technology, Certification } from './types/roadmap';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2, ArrowRightLeft, X, Search } from 'lucide-react';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';

export default function App() {
  const { roadmaps, loading, error } = useRoadmaps();
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);
  const [selectedCerts, setSelectedCerts] = useState<Certification[]>([]);
  const [comparisonTechId, setComparisonTechId] = useState<string | null>(null);
  const [experienceLevel, setExperienceLevel] = useState<number>(0); // 0, 1, 3, 5
  const [searchQuery, setSearchQuery] = useState('');
  const [isComparing, setIsComparing] = useState(false);
  const [showVouchers, setShowVouchers] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const filteredRoadmaps = roadmaps.map(tech => ({
    ...tech,
    certifications: tech.certifications.filter(cert => cert.minExperienceYears <= experienceLevel)
  })).filter(tech => {
    const hasCerts = tech.certifications.length > 0;
    const matchesSearch = tech.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         tech.roles.some(role => role.toLowerCase().includes(searchQuery.toLowerCase()));
    return hasCerts && matchesSearch;
  });

  const toggleCertSelection = (cert: Certification, techId: string) => {
    setSelectedCerts(prev => {
      const exists = prev.find(c => c.id === cert.id);
      if (exists) {
        const next = prev.filter(c => c.id !== cert.id);
        if (next.length === 0) setComparisonTechId(null);
        return next;
      }
      
      if (comparisonTechId && comparisonTechId !== techId) {
        // Attempting to add from a different domain
        alert(`You can only compare certifications within the same domain. Please clear your current selection to compare ${techId} tracks.`);
        return prev;
      }

      if (prev.length >= 3) return prev; 
      
      if (prev.length === 0) setComparisonTechId(techId);
      return [...prev, cert];
    });
  };

  const removeCert = (certId: string) => {
    setSelectedCerts(prev => {
      const next = prev.filter(c => c.id !== certId);
      if (next.length === 0) setComparisonTechId(null);
      return next;
    });
  };

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="text-muted-foreground font-medium animate-pulse">Loading Roadmaps...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background p-4">
        <div className="max-w-md text-center space-y-4">
          <div className="bg-destructive/10 text-destructive p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
            <span className="text-2xl font-bold">!</span>
          </div>
          <h2 className="text-2xl font-bold">Something went wrong</h2>
          <p className="text-muted-foreground">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        onMenuClick={toggleSidebar}
      />
      
      <div className="flex">
        <Sidebar 
          technologies={filteredRoadmaps} 
          selectedTech={selectedTech} 
          currentView={
            isComparing ? 'comparison' : 
            showVouchers ? 'vouchers' : 
            selectedTech ? 'detail' : 'dashboard'
          }
          onSelect={(tech) => {
            setSelectedTech(tech);
            setIsSidebarOpen(false);
            setIsComparing(false);
            setShowVouchers(false);
          }}
          onViewVouchers={() => {
            setShowVouchers(true);
            setSelectedTech(null);
            setIsComparing(false);
            setIsSidebarOpen(false);
          }}
          isOpen={isSidebarOpen}
        />
        
        <main className="flex-1 overflow-x-hidden">
          <AnimatePresence mode="wait">
            {isComparing ? (
              <motion.div
                key="comparison"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <CertificationComparison 
                  selectedCertifications={selectedCerts}
                  onRemove={removeCert}
                  onClose={() => setIsComparing(false)}
                />
              </motion.div>
            ) : showVouchers ? (
              <motion.div
                key="vouchers"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <VouchersPage />
              </motion.div>
            ) : selectedTech ? (
              <motion.div
                key="detail"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <RoadmapDetail 
                  tech={selectedTech} 
                  onBack={() => setSelectedTech(null)}
                  selectedCerts={selectedCerts}
                  onToggleCert={toggleCertSelection}
                  experienceLevel={experienceLevel}
                />
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Dashboard Hero Section */}
                <div className="relative overflow-hidden bg-primary text-primary-foreground">
                  <div className="absolute inset-0 hero-gradient opacity-90" />
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                  
                  <div className="relative z-10 p-10 md:p-16 max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                      <div className="max-w-3xl">
                        <Badge variant="secondary" className="bg-white/20 text-white border-none mb-6 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em]">
                          Professional Career Navigator
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-none">
                          Master Your Next <br /> 
                          Professional Cloud Path.
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl font-medium leading-relaxed mb-8">
                          Navigate structured learning roadmaps, earn high-demand certifications, and access official curated resources for Data, Cloud, and AI engineering.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center gap-2">
                          <div className="relative group w-full sm:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50 group-focus-within:text-white transition-colors" />
                            <input 
                              type="text" 
                              placeholder="Search 15+ specialized roles (e.g. Data Engineer)..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-md placeholder:text-white/40 transition-all text-white font-medium"
                            />
                          </div>
                          <Button 
                            className="w-full sm:w-auto px-8 py-7 bg-white text-primary hover:bg-white/90 font-black rounded-2xl transition-all shadow-xl"
                            onClick={() => {
                              const el = document.getElementById('tech-grid-start');
                              if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                          >
                            Find Paths
                          </Button>
                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/50 mr-2">Top Categories:</span>
                          {['Data Engineering', 'Cloud & DevOps', 'Cybersecurity', 'Data Science'].map((cat) => (
                            <button
                              key={cat}
                              onClick={() => {
                                setSearchQuery(cat);
                                const el = document.getElementById('tech-grid-start');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                              }}
                              className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white text-[11px] font-bold text-white hover:text-primary transition-all backdrop-blur-md border border-white/10"
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl space-y-6 shrink-0 w-full lg:w-auto">
                        <div>
                          <h3 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-4">Experience Filter</h3>
                          <div className="grid grid-cols-2 gap-2">
                            {[
                              { label: 'Starter', val: 0, desc: 'Student' },
                              { label: 'Junior', val: 1, desc: '0-2 Yrs' },
                              { label: 'Mid-Level', val: 3, desc: '3-5 Yrs' },
                              { label: 'Senior+', val: 5, desc: 'Lead' }
                            ].map((lvl) => (
                              <button
                                key={lvl.val}
                                onClick={() => setExperienceLevel(lvl.val)}
                                className={`
                                  flex flex-col items-start p-3 rounded-xl transition-all border
                                  ${experienceLevel === lvl.val 
                                    ? 'bg-white text-primary border-white shadow-lg scale-[1.02]' 
                                    : 'bg-white/5 text-white border-white/10 hover:bg-white/10'}
                                `}
                              >
                                <span className="text-[10px] font-black uppercase tracking-tighter">{lvl.label}</span>
                                <span className={`text-[9px] ${experienceLevel === lvl.val ? 'text-primary/60' : 'text-white/40'}`}>{lvl.desc}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-8">
                          <div className="text-center">
                            <div className="text-2xl font-black">12+</div>
                            <div className="text-[8px] uppercase tracking-widest text-white/50">Tracks</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-black">45+</div>
                            <div className="text-[8px] uppercase tracking-widest text-white/50">Certifications</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-black">200+</div>
                            <div className="text-[8px] uppercase tracking-widest text-white/50">Resources</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 pt-16 relative" id="tech-grid-start">
                  <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 -z-10" />
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
                    <div>
                      <h2 className="text-3xl font-black tracking-tighter text-primary">Explore Path Catalog</h2>
                      <p className="text-muted-foreground font-medium text-sm">Select a domain to begin your structured learning journey.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="rounded-full px-3 py-1 font-bold text-[10px] uppercase tracking-widest text-primary border-primary/20">
                        {filteredRoadmaps.length} Tracks Available
                      </Badge>
                    </div>
                  </div>
                  <TechGrid 
                    technologies={filteredRoadmaps} 
                    onSelect={(tech) => {
                      setSelectedTech(tech);
                      setShowVouchers(false);
                    }} 
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* Floating Comparison Bar */}
      <AnimatePresence>
        {selectedCerts.length > 0 && !isComparing && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4"
          >
            <div className="bg-card border-2 border-primary/20 shadow-2xl rounded-2xl p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {selectedCerts.map(cert => (
                  <Badge key={cert.id} variant="secondary" className="gap-2 px-3 py-1.5 whitespace-nowrap">
                    {cert.code || cert.name.substring(0, 10) + '...'}
                    <X 
                      size={14} 
                      className="cursor-pointer hover:text-destructive transition-colors" 
                      onClick={() => removeCert(cert.id)}
                    />
                  </Badge>
                ))}
                {selectedCerts.length < 3 && (
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-2">
                    {3 - selectedCerts.length} more slots
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-2 shrink-0">
                <Button 
                  size="sm" 
                  className="gap-2 font-bold"
                  disabled={selectedCerts.length < 2}
                  onClick={() => setIsComparing(true)}
                >
                  <ArrowRightLeft size={16} />
                  Compare {selectedCerts.length}
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setSelectedCerts([])}>
                  <X size={18} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 md:hidden" 
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}
