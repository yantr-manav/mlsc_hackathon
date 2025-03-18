
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pb-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white dark:from-blue-950/20 dark:to-background -z-10" />
      
      {/* Abstract shapes */}
      <div className="absolute top-20 right-0 w-1/3 h-1/3 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-10 w-1/4 h-1/4 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 animate-fade-in">
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
              Your path to SDE placement success
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Structured preparation for 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              {" SDE placements"}
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            A complete platform to help you prepare for SDE placement interviews with structured study plans, coding challenges, mock interviews, and progress tracking.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="group">
              <Link to="/signup">
                Get started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/dashboard">
                Explore dashboard
              </Link>
            </Button>
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="mt-16 relative mx-auto max-w-5xl">
          <div className="glass-card p-2 md:p-4 rounded-xl shadow-2xl">
            <div className="aspect-[16/9] overflow-hidden rounded-lg border border-border">
              <div className="bg-secondary/50 w-full h-full flex items-center justify-center">
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-4 border-b p-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20"></div>
                    <div>
                      <div className="h-4 w-40 bg-primary/20 rounded-md"></div>
                      <div className="h-3 w-24 bg-muted rounded-md mt-2"></div>
                    </div>
                    <div className="ml-auto flex gap-2">
                      <div className="h-8 w-8 rounded-md bg-muted"></div>
                      <div className="h-8 w-8 rounded-md bg-muted"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                    <div className="col-span-2 space-y-4">
                      <div className="h-8 w-48 bg-primary/20 rounded-md"></div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-32 rounded-lg bg-muted"></div>
                        <div className="h-32 rounded-lg bg-muted"></div>
                      </div>
                      <div className="h-40 rounded-lg bg-muted"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-8 w-32 bg-primary/20 rounded-md"></div>
                      <div className="h-24 rounded-lg bg-muted"></div>
                      <div className="h-24 rounded-lg bg-muted"></div>
                      <div className="h-24 rounded-lg bg-muted"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -left-5 -bottom-5 w-24 h-24 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute right-10 top-10 w-20 h-20 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-xl animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
