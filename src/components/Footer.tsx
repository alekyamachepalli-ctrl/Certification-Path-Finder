import React from 'react';
import { DynamicIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-card py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 font-extrabold text-xl tracking-tighter text-primary mb-6">
            <span>PathFinder.pro</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
            Empowering professionals and students to navigate their career paths with structured roadmaps, 
            verified certifications, and high-quality learning resources.
          </p>
        </div>
        
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest mb-6">Platform</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors font-medium">All Roadmaps</a></li>
            <li><a href="#" className="hover:text-primary transition-colors font-medium">Certifications</a></li>
            <li><a href="#" className="hover:text-primary transition-colors font-medium">Learning Resources</a></li>
            <li><a href="#" className="hover:text-primary transition-colors font-medium">Pricing Guide</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest mb-6">Support</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors font-medium">Help Center</a></li>
            <li><a href="#" className="hover:text-primary transition-colors font-medium">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors font-medium">Terms of Service</a></li>
            <li><a href="#" className="hover:text-primary transition-colors font-medium">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border text-center text-[11px] font-bold uppercase tracking-widest text-muted-foreground/60">
        <p>© {new Date().getFullYear()} PathFinder.pro Career Guidance. All rights reserved.</p>
      </div>
    </footer>
  );
};
