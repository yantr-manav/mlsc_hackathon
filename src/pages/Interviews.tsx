
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Calendar, 
  Clock, 
  MessageSquare, 
  Video, 
  Users, 
  User, 
  Star, 
  PlusCircle, 
  Search,
  Layers,
  Code,
  CheckCircle
} from 'lucide-react';

type Interview = {
  id: number;
  company: string;
  position: string;
  type: 'Technical' | 'Behavioral' | 'System Design' | 'HR' | 'Mock';
  date: string;
  time: string;
  duration: string;
  mode: 'Video' | 'Phone' | 'In-person';
  status: 'Scheduled' | 'Completed' | 'Upcoming';
  interviewer?: string;
  notes?: string;
};

const interviewsData: Interview[] = [
  {
    id: 1,
    company: "Google",
    position: "Software Development Engineer",
    type: "Technical",
    date: "Nov 18, 2023",
    time: "2:00 PM",
    duration: "1 hour",
    mode: "Video",
    status: "Upcoming",
    interviewer: "John Smith"
  },
  {
    id: 2,
    company: "Mock Interview",
    position: "Practice Session",
    type: "System Design",
    date: "Nov 15, 2023",
    time: "10:00 AM",
    duration: "45 minutes",
    mode: "Video",
    status: "Scheduled",
    interviewer: "Mentor Network"
  },
  {
    id: 3,
    company: "Microsoft",
    position: "Software Engineer",
    type: "Behavioral",
    date: "Nov 12, 2023",
    time: "3:30 PM",
    duration: "45 minutes",
    mode: "Video",
    status: "Completed",
    interviewer: "Sarah Johnson",
    notes: "Asked about team collaboration and conflict resolution."
  },
  {
    id: 4,
    company: "Amazon",
    position: "SDE I",
    type: "Technical",
    date: "Nov 10, 2023",
    time: "11:00 AM",
    duration: "1 hour",
    mode: "Video",
    status: "Completed",
    interviewer: "Michael Chen",
    notes: "Covered binary trees, dynamic programming, and system design basics."
  },
  {
    id: 5,
    company: "Mock Interview",
    position: "Practice Session",
    type: "Behavioral",
    date: "Nov 8, 2023",
    time: "4:00 PM",
    duration: "30 minutes",
    mode: "Video",
    status: "Completed",
    interviewer: "AI Interview Assistant",
    notes: "Worked on improving responses for leadership and teamwork questions."
  },
  {
    id: 6,
    company: "Facebook",
    position: "Software Engineer",
    type: "Technical",
    date: "Nov 22, 2023",
    time: "1:00 PM",
    duration: "1 hour",
    mode: "Video",
    status: "Upcoming"
  },
  {
    id: 7,
    company: "Mock Interview",
    position: "Practice Session",
    type: "Technical",
    date: "Nov 20, 2023",
    time: "5:00 PM",
    duration: "1 hour",
    mode: "Video",
    status: "Upcoming",
    interviewer: "Peer Review"
  }
];

const mockFeedback = [
  {
    id: 1,
    interviewType: "Technical",
    date: "Nov 8, 2023",
    score: 4,
    strengths: ["Good understanding of algorithms", "Clear explanations", "Efficient code"],
    improvements: ["Time management", "Edge case handling"],
    notes: "Overall good performance. Continue practicing more complex problems."
  },
  {
    id: 2,
    interviewType: "Behavioral",
    date: "Nov 5, 2023",
    score: 3.5,
    strengths: ["Strong examples", "Good storytelling", "Professional demeanor"],
    improvements: ["Be more concise", "Quantify achievements more clearly"],
    notes: "Work on structuring answers using the STAR method more consistently."
  },
  {
    id: 3,
    interviewType: "System Design",
    date: "Oct 30, 2023",
    score: 3,
    strengths: ["Logical approach", "Good understanding of tradeoffs"],
    improvements: ["Component details", "Scaling considerations", "Database design"],
    notes: "Need more practice on large-scale distributed systems design."
  }
];

const Interviews = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredInterviews, setFilteredInterviews] = useState(interviewsData);
  
  // Filter interviews based on search query
  const filterInterviews = (query: string) => {
    if (!query.trim()) {
      setFilteredInterviews(interviewsData);
      return;
    }
    
    const lowercaseQuery = query.toLowerCase();
    const filtered = interviewsData.filter(interview => 
      interview.company.toLowerCase().includes(lowercaseQuery) ||
      interview.position.toLowerCase().includes(lowercaseQuery) ||
      interview.type.toLowerCase().includes(lowercaseQuery)
    );
    
    setFilteredInterviews(filtered);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterInterviews(query);
  };

  const upcomingInterviews = filteredInterviews.filter(i => i.status === 'Upcoming' || i.status === 'Scheduled');
  const completedInterviews = filteredInterviews.filter(i => i.status === 'Completed');
  
  // Get the next upcoming interview
  const nextInterview = upcomingInterviews.length > 0 ? upcomingInterviews[0] : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Interview Preparation</h1>
            <p className="text-muted-foreground">Schedule and track your interview preparation.</p>
          </div>
          
          {nextInterview && (
            <div className="mb-8">
              <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                      <Badge className="mb-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800">
                        Next Interview
                      </Badge>
                      <h2 className="text-2xl font-medium mb-1">{nextInterview.company}</h2>
                      <p className="text-muted-foreground mb-3">{nextInterview.position} - {nextInterview.type} Interview</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-primary" />
                          {nextInterview.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-primary" />
                          {nextInterview.time} ({nextInterview.duration})
                        </div>
                        <div className="flex items-center">
                          <Video className="h-4 w-4 mr-2 text-primary" />
                          {nextInterview.mode}
                        </div>
                        {nextInterview.interviewer && (
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-2 text-primary" />
                            {nextInterview.interviewer}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
                      <Button variant="secondary">Reschedule</Button>
                      <Button>Prepare Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex gap-3">
              <Button className="flex items-center gap-2">
                <PlusCircle className="h-4 w-4" />
                Schedule Mock Interview
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                View Calendar
              </Button>
            </div>
            
            <div className="relative flex-1 sm:flex-none sm:min-w-[300px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search interviews..."
                className="pl-10 py-2 pr-4 w-full h-10 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>
          
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="feedback">Feedback & Analysis</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming">
              <div className="space-y-4">
                {upcomingInterviews.length > 0 ? (
                  upcomingInterviews.map(interview => (
                    <InterviewCard key={interview.id} interview={interview} />
                  ))
                ) : (
                  <div className="text-center p-8">
                    <div className="text-muted-foreground mb-2">No upcoming interviews</div>
                    <Button className="mt-2">Schedule a Mock Interview</Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="completed">
              <div className="space-y-4">
                {completedInterviews.length > 0 ? (
                  completedInterviews.map(interview => (
                    <InterviewCard key={interview.id} interview={interview} />
                  ))
                ) : (
                  <div className="text-center p-8">
                    <div className="text-muted-foreground">No completed interviews</div>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="feedback">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Technical Interviews</CardTitle>
                      <CardDescription>Coding and algorithm skills</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-3xl font-bold">3.8/5</p>
                          <p className="text-sm text-muted-foreground">Average Score</p>
                        </div>
                        <div className="h-14 w-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                          <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Problem Solving</span>
                          <span className="font-medium">4.2/5</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Code Quality</span>
                          <span className="font-medium">3.8/5</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Optimization</span>
                          <span className="font-medium">3.5/5</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">System Design</CardTitle>
                      <CardDescription>Architecture and design skills</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-3xl font-bold">3.2/5</p>
                          <p className="text-sm text-muted-foreground">Average Score</p>
                        </div>
                        <div className="h-14 w-14 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                          <Layers className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Architecture</span>
                          <span className="font-medium">3.5/5</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Scalability</span>
                          <span className="font-medium">3.0/5</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Trade-offs</span>
                          <span className="font-medium">3.2/5</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Behavioral</CardTitle>
                      <CardDescription>Communication and soft skills</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-3xl font-bold">4.0/5</p>
                          <p className="text-sm text-muted-foreground">Average Score</p>
                        </div>
                        <div className="h-14 w-14 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                          <Users className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Communication</span>
                          <span className="font-medium">4.2/5</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Leadership</span>
                          <span className="font-medium">3.8/5</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Problem Solving</span>
                          <span className="font-medium">4.0/5</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Recent Feedback</h3>
                  <div className="space-y-4">
                    {mockFeedback.map(feedback => (
                      <Card key={feedback.id}>
                        <CardContent className="p-5">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800">
                                  {feedback.interviewType}
                                </Badge>
                                <span className="text-sm text-muted-foreground">{feedback.date}</span>
                              </div>
                              <div className="flex items-center mt-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${i < Math.floor(feedback.score) ? 'text-yellow-400 fill-yellow-400' : 'text-muted'} ${i === Math.floor(feedback.score) && feedback.score % 1 > 0 ? 'text-yellow-400 fill-yellow-400 opacity-60' : ''}`} 
                                  />
                                ))}
                                <span className="ml-2 text-sm font-medium">{feedback.score}/5</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="text-sm font-medium mb-2 flex items-center text-green-600 dark:text-green-400">
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Strengths
                              </h4>
                              <ul className="text-sm space-y-1 pl-5 list-disc">
                                {feedback.strengths.map((strength, i) => (
                                  <li key={i}>{strength}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium mb-2 flex items-center text-orange-600 dark:text-orange-400">
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Areas for Improvement
                              </h4>
                              <ul className="text-sm space-y-1 pl-5 list-disc">
                                {feedback.improvements.map((improvement, i) => (
                                  <li key={i}>{improvement}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          {feedback.notes && (
                            <div className="mt-3 pt-3 border-t text-sm">
                              <p className="font-medium mb-1">Additional Notes:</p>
                              <p className="text-muted-foreground">{feedback.notes}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Recommended Practice</CardTitle>
                <CardDescription>
                  Based on your interview performance, we recommend focusing on these areas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-blue-50 dark:bg-blue-950/30 border-0">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                          <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="font-medium">Dynamic Programming</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Practice more complex DP problems to improve your algorithm skills.
                      </p>
                      <Button variant="outline" size="sm" className="w-full bg-white dark:bg-black/50">
                        View Practice Problems
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-indigo-50 dark:bg-indigo-950/30 border-0">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-full">
                          <Layers className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h3 className="font-medium">System Design</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Focus on scalability and distributed systems concepts.
                      </p>
                      <Button variant="outline" size="sm" className="w-full bg-white dark:bg-black/50">
                        View Design Exercises
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-violet-50 dark:bg-violet-950/30 border-0">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-violet-100 dark:bg-violet-900/30 p-2 rounded-full">
                          <MessageSquare className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                        </div>
                        <h3 className="font-medium">Behavioral Questions</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Practice structured responses using the STAR method.
                      </p>
                      <Button variant="outline" size="sm" className="w-full bg-white dark:bg-black/50">
                        View Practice Questions
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const InterviewCard = ({ interview }: { interview: Interview }) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Upcoming':
        return <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30">Upcoming</Badge>;
      case 'Scheduled':
        return <Badge className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/30">Scheduled</Badge>;
      case 'Completed':
        return <Badge className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30">Completed</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Technical':
        return <Code className="h-10 w-10 text-blue-500" />;
      case 'Behavioral':
        return <MessageSquare className="h-10 w-10 text-violet-500" />;
      case 'System Design':
        return <Layers className="h-10 w-10 text-indigo-500" />;
      case 'HR':
        return <Users className="h-10 w-10 text-pink-500" />;
      default:
        return <MessageSquare className="h-10 w-10" />;
    }
  };

  return (
    <Card className={`hover:shadow-md transition-shadow ${interview.status === 'Completed' ? 'opacity-80' : ''}`}>
      <CardContent className="p-5">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            {getTypeIcon(interview.type)}
          </div>
          
          <div className="flex-grow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
              <div>
                <h3 className="font-medium text-lg">{interview.company}</h3>
                <p className="text-muted-foreground">{interview.position} - {interview.type} Interview</p>
              </div>
              {getStatusBadge(interview.status)}
            </div>
            
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mt-2">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {interview.date}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {interview.time} ({interview.duration})
              </span>
              <span className="flex items-center">
                <Video className="h-4 w-4 mr-1" />
                {interview.mode}
              </span>
              {interview.interviewer && (
                <span className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {interview.interviewer}
                </span>
              )}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 mt-4 md:mt-0">
            {interview.status === 'Completed' ? (
              <Button>View Feedback</Button>
            ) : (
              <Button>Prepare</Button>
            )}
            {interview.status !== 'Completed' && (
              <Button variant="outline">Reschedule</Button>
            )}
          </div>
        </div>
        
        {interview.notes && (
          <div className="mt-4 pt-4 border-t text-sm">
            <span className="font-medium">Notes:</span> {interview.notes}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Interviews;
