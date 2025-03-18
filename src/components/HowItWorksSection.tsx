
import React from 'react';
import { Separator } from '@/components/ui/separator';

type Step = {
  number: number;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: 1,
    title: 'Create your profile',
    description: 'Sign up and tell us about your skills, experience, and placement goals.'
  },
  {
    number: 2,
    title: 'Get your personalized plan',
    description: 'Receive a customized study plan based on your profile and timeline.'
  },
  {
    number: 3,
    title: 'Practice consistently',
    description: 'Work through coding challenges, study materials, and mock interviews.'
  },
  {
    number: 4,
    title: 'Track your progress',
    description: 'Monitor your improvement and adjust your plan as needed.'
  },
  {
    number: 5,
    title: 'Apply with confidence',
    description: 'Use the application tracker to manage your job applications and interviews.'
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A simple, effective process to guide you through SDE placement preparation.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-start mb-8">
                <div className="flex-shrink-0 mr-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-px h-16 bg-border" />
                  )}
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
