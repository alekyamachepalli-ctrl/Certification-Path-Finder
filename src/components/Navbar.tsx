import React from 'react';
import { DynamicIcon } from './Icons';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Moon, Sun, Search, Menu } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  onMenuClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, onMenuClick }) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card h-16 flex items-center">
      <div className="container flex h-full items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick}>
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2 font-extrabold text-xl tracking-tighter text-primary">
            <span>PathFinder.pro</span>
          </div>
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-sm mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search for paths (e.g. 'Azure Data')..."
              className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex gap-2">
            <Badge variant="secondary" className="bg-accent text-accent-foreground border-none px-3">v2.4 Stable</Badge>
            <Badge variant="secondary" className="bg-muted text-muted-foreground border-none px-3">Region: Global</Badge>
          </div>
          <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </nav>
  );
};
