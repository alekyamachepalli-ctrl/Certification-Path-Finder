import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { DynamicIcon } from './Icons';
import { motion } from 'motion/react';
import { ExternalLink, Tag, Clock, CheckCircle2 } from 'lucide-react';

export const VouchersPage: React.FC = () => {
  const vouchers = [
    {
      id: 'v1',
      title: "Microsoft Cloud Skills Challenge",
      description: "Earn a free certification exam by completing a collection of Microsoft Learn modules.",
      discount: "100% OFF",
      provider: "Microsoft",
      expiry: "Limited Time",
      type: "Challenge-based",
      url: "https://learn.microsoft.com/en-us/training/challenges",
      color: "bg-blue-500"
    },
    {
      id: 'v2',
      title: "AWS Certification Vouchers",
      description: "Get 50% discount on your next exam after passing any AWS certification.",
      discount: "50% OFF",
      provider: "AWS",
      expiry: "Permanent",
      type: "Retake/Next Exam",
      url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
      color: "bg-orange-500"
    },
    {
      id: 'v3',
      title: "Google Cloud Innovators Plus",
      description: "Subscribe to get a free certification voucher and $500 Google Cloud credits.",
      discount: "1 Free Exam",
      provider: "Google Cloud",
      expiry: "Annual",
      type: "Subscription",
      url: "https://cloud.google.com/innovators",
      color: "bg-emerald-500"
    },
    {
      id: 'v4',
      title: "CompTIA Academic Pricing",
      description: "Significant discounts for students with a valid .edu email address.",
      discount: "Up to 60% OFF",
      provider: "CompTIA",
      expiry: "Ongoing",
      type: "Student Discount",
      url: "https://academic-store.comptia.org/",
      color: "bg-red-500"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10">
      <div className="mb-10">
        <h1 className="text-4xl font-black tracking-tighter mb-4 text-primary">Recommended Vouchers</h1>
        <p className="text-muted-foreground font-medium text-lg max-w-2xl">
          Access curated discounts and free certification opportunities from top cloud providers to accelerate your career at lower costs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vouchers.map((v, idx) => (
          <motion.div
            key={v.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="h-full border border-border bg-card overflow-hidden hover:shadow-xl transition-all group">
              <div className={`h-2 w-full ${v.color}`} />
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={`${v.color} text-white border-none font-black`}>{v.discount}</Badge>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    <Clock size={10} /> {v.expiry}
                  </div>
                </div>
                <CardTitle className="text-xl font-black">{v.title}</CardTitle>
                <CardDescription className="text-xs font-medium leading-relaxed mt-2">
                  {v.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-tighter bg-muted">
                    {v.provider}
                  </Badge>
                  <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-tighter bg-muted text-primary">
                    {v.type}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-emerald-600">
                    <CheckCircle2 size={14} />
                    <span className="text-[11px] font-black uppercase tracking-widest">Verified</span>
                  </div>
                  <Button asChild size="sm" className="gap-2 font-bold rounded-xl shadow-lg shadow-primary/20">
                    <a href={v.url} target="_blank" rel="noopener noreferrer">
                      Claim Offer <ExternalLink size={14} />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 p-8 rounded-3xl bg-primary/5 border border-primary/10 text-center">
        <h2 className="text-2xl font-black tracking-tight mb-3">Don't miss out on free learning</h2>
        <p className="text-muted-foreground text-sm font-medium mb-6 max-w-xl mx-auto">
          Many providers offer limited-time challenges that include free exam vouchers. We monitor these daily to ensure you get the best value.
        </p>
        <Button variant="outline" className="rounded-xl border-primary/20 hover:bg-primary/5 text-primary font-bold">
          Notify Me of New Offers
        </Button>
      </div>
    </div>
  );
};
