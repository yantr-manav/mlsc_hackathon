
import React from 'react';
import { 
  LayoutDashboard, 
  Code, 
  Calendar, 
  MessageSquare, 
  BarChart,
  Users,
  BookOpen
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: FeatureProps[] = [
  {
    icon: <BookOpen className="h-8 w-8 text-blue-500" />,
    title: 'Personalized Study Plans',
    description: 'Customized study schedules based on your strengths and weaknesses, aligned with placement deadlines.'
  },
  {
    icon: <Code className="h-8 w-8 text-indigo-500" />,
    title: 'Coding Challenges',
    description: 'Practice with a variety of coding problems that simulate real-world SDE placement tests.'
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-violet-500" />,
    title: 'Mock Interviews',
    description: 'Schedule mock interviews with industry professionals or AI-driven systems for personalized feedback.'
  },
  {
    icon: <Calendar className="h-8 w-8 text-pink-500" />,
    title: 'Application Tracker',
    description: 'Track job applications, deadlines, and interview schedules to never miss important dates.'
  },
  {
    icon: <BarChart className="h-8 w-8 text-orange-500" />,
    title: 'Progress Tracking',
    description: 'Monitor your progress in coding, interview prep, and application status with timely reminders.'
  },
  {
    icon: <Users className="h-8 w-8 text-cyan-500" />,
    title: 'Expert Mentorship',
    description: 'Access to mentors including industry professionals and alumni to guide your preparation process.'
  }
];

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <Card className="bg-card border border-border transition-all duration-300 hover:shadow-md hover:border-primary/20 h-full">
      <CardHeader className="pb-2">
        <div className="mb-3 rounded-full w-12 h-12 flex items-center justify-center bg-background">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-secondary/50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Tools for SDE Placement Success</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to prepare for and ace your SDE placement interviews, all in one platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <Feature {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
