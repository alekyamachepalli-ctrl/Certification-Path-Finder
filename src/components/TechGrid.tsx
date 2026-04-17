import React from 'react';
import { Technology } from '../types/roadmap';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { DynamicIcon } from './Icons';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';

interface TechGridProps {
  technologies: Technology[];
  onSelect: (tech: Technology) => void;
}

export const TechGrid: React.FC<TechGridProps> = ({ technologies, onSelect }) => {
  const groupedTech = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, Technology[]>);

  const categories = Object.keys(groupedTech).sort();

  return (
    <div className="space-y-12 p-6 md:p-10">
      {categories.map((category) => (
        <div key={category} className="space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-extrabold tracking-tight whitespace-nowrap">{category}</h2>
            <div className="h-[1px] w-full bg-border" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {groupedTech[category].map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="cursor-pointer"
                onClick={() => onSelect(tech)}
              >
                <Card className="group h-full border border-border bg-card hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden flex flex-col relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3.5 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <DynamicIcon name={tech.icon} size={24} />
                      </div>
                      <Badge variant="secondary" className="bg-muted text-muted-foreground border-none text-[10px] font-black uppercase tracking-widest px-2.5">
                        {tech.certifications.length} Specialized Paths
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-black tracking-tight group-hover:text-primary transition-colors">{tech.name}</CardTitle>
                    <CardDescription className="line-clamp-2 mt-2 text-xs leading-relaxed font-medium">
                      {tech.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pt-0">
                    <div className="h-[1px] w-full bg-border/50 mb-4" />
                    <div className="flex flex-wrap gap-2">
                      {tech.roles.slice(0, 3).map((role) => (
                        <span key={role} className="px-2.5 py-1 bg-muted text-muted-foreground rounded-lg text-[9px] font-black uppercase tracking-widest border border-transparent group-hover:border-primary/10 group-hover:bg-primary/5 group-hover:text-primary transition-all">
                          {role}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
