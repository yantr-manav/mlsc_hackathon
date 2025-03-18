
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto glass-card p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your SDE Placement Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of students who have successfully prepared for and secured SDE placements with our platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="group">
              <Link to="/signup">
                Get started for free
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/pricing">
                View pricing
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
