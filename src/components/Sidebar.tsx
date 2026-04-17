import React from 'react';
import { Technology } from '../types/roadmap';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import { DynamicIcon } from './Icons';
import { Filter, LayoutDashboard, BookMarked, Settings, HelpCircle, Award } from 'lucide-react';

interface SidebarProps {
  technologies: Technology[];
  selectedTech: Technology | null;
  onSelect: (tech: Technology | null) => void;
  onViewVouchers: () => void;
  currentView: 'dashboard' | 'vouchers' | 'detail' | 'comparison';
  isOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ technologies, selectedTech, onSelect, onViewVouchers, currentView, isOpen }) => {
  const groupedTech = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, Technology[]>);

  const categories = Object.keys(groupedTech).sort();

  return (
    <aside className={`
      fixed inset-y-0 left-0 z-40 w-[240px] bg-card border-r transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      md:translate-x-0 md:static md:block
    `}>
      <div className="flex flex-col h-full">
        <div className="p-5">
          <h2 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3 px-3">Main</h2>
          <nav className="space-y-1">
            <Button 
              variant="ghost"
              className={`w-full justify-start gap-3 text-sm h-10 px-3 rounded-md transition-all ${currentView === 'dashboard' ? 'bg-accent text-accent-foreground font-semibold' : 'text-muted-foreground hover:bg-muted'}`}
              onClick={() => onSelect(null)}
            >
              <LayoutDashboard size={16} />
              Dashboard
            </Button>
          </nav>

          <ScrollArea className="h-[calc(100vh-280px)] mt-4 pr-3">
            <div className="space-y-6 pb-6">
              {categories.map((category) => (
                <div key={category} className="space-y-2">
                  <h3 className="text-[9px] font-extrabold text-muted-foreground/60 uppercase tracking-[0.2em] px-3 mb-1">
                    {category}
                  </h3>
                  <div className="space-y-1">
                    {groupedTech[category].map((tech) => (
                      <Button
                        key={tech.id}
                        variant="ghost"
                        className={`w-full justify-start gap-3 text-[13px] h-9 px-3 rounded-md transition-all ${selectedTech?.id === tech.id ? 'bg-accent text-accent-foreground font-semibold' : 'text-muted-foreground hover:bg-muted'}`}
                        onClick={() => onSelect(tech)}
                      >
                        <DynamicIcon name={tech.icon} size={14} />
                        <span className="truncate">{tech.name}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <Separator className="my-6 opacity-50" />

          <h2 className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-3 px-3">My Collections</h2>
          <nav className="space-y-1">
            <Button 
              variant="ghost" 
              className="w-full justify-start gap-3 text-sm h-10 px-3 text-muted-foreground hover:bg-muted font-medium"
              onClick={() => onSelect(null)}
            >
              <BookMarked size={16} />
              Saved Roadmaps
            </Button>
            <Button 
              variant="ghost" 
              className={`w-full justify-start gap-3 text-sm h-10 px-3 transition-all ${currentView === 'vouchers' ? 'bg-accent text-accent-foreground font-semibold' : 'text-muted-foreground hover:bg-muted font-medium'}`}
              onClick={onViewVouchers}
            >
              <Award size={16} />
              Recommended Vouchers
            </Button>
          </nav>
        </div>

        <div className="mt-auto p-5 border-t">
          <nav className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-3 text-sm h-10 px-3 text-muted-foreground hover:bg-muted">
              <Settings size={16} />
              Settings
            </Button>
          </nav>
        </div>
      </div>
    </aside>
  );
};
