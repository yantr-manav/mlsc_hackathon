
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type TestimonialProps = {
  content: string;
  author: string;
  role: string;
  image: string;
};

const testimonials: TestimonialProps[] = [
  {
    content: "PrepifyPath's structured approach helped me organize my preparation and land offers from two top tech companies. The mock interviews were extremely helpful.",
    author: "Anisha Patel",
    role: "SDE at Amazon",
    image: ""
  },
  {
    content: "The coding challenges and structured study plan helped me improve my problem-solving skills significantly. I went from struggling with easy problems to confidently solving hard ones.",
    author: "Raj Sharma",
    role: "SDE at Google",
    image: ""
  },
  {
    content: "The job application tracker saved me so much time and helped me stay on top of all my applications. The interview preparation guidance was invaluable.",
    author: "Priya Verma",
    role: "SDE at Microsoft",
    image: ""
  }
];

const Testimonial = ({ content, author, role, image }: TestimonialProps) => {
  const initials = author.split(' ').map(name => name[0]).join('');
  
  return (
    <Card className="h-full bg-white dark:bg-black/50 hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="mb-6 text-lg text-muted-foreground">
          <span className="text-4xl text-primary">"</span>
          {content}
          <span className="text-4xl text-primary">"</span>
        </div>
        <div className="flex items-center">
          <Avatar className="h-12 w-12 border-2 border-primary/20">
            <AvatarImage src={image} alt={author} />
            <AvatarFallback className="bg-primary/10 text-primary font-medium">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <p className="font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from students who transformed their preparation journey with our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
