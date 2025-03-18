
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Briefcase, 
  Calendar, 
  Clock, 
  Check, 
  X, 
  AlertCircle, 
  PlusCircle, 
  ChevronRight, 
  Building, 
  FileText, 
  Search,
  MoreHorizontal
} from 'lucide-react';

type Application = {
  id: number;
  company: string;
  position: string;
  location: string;
  deadline: string;
  status: 'To Apply' | 'Applied' | 'Interview' | 'Offer' | 'Rejected';
  dateApplied?: string;
  nextStep?: string;
  logo?: string;
  notes?: string;
};

const applications: Application[] = [
  {
    id: 1,
    company: "Google",
    position: "Software Development Engineer",
    location: "Mountain View, CA",
    deadline: "Nov 30, 2023",
    status: "Applied",
    dateApplied: "Nov 10, 2023",
    nextStep: "Online Assessment",
    logo: ""
  },
  {
    id: 2,
    company: "Microsoft",
    position: "Software Engineer",
    location: "Redmond, WA",
    deadline: "Dec 15, 2023",
    status: "Interview",
    dateApplied: "Nov 5, 2023",
    nextStep: "Technical Interview on Nov 18, 2023",
    logo: ""
  },
  {
    id: 3,
    company: "Amazon",
    position: "SDE I",
    location: "Seattle, WA",
    deadline: "Dec 1, 2023",
    status: "To Apply",
    nextStep: "Prepare resume and apply",
    logo: ""
  },
  {
    id: 4,
    company: "Facebook",
    position: "Software Engineer",
    location: "Menlo Park, CA",
    deadline: "Nov 25, 2023",
    status: "Applied",
    dateApplied: "Nov 8, 2023",
    nextStep: "Waiting for response",
    logo: ""
  },
  {
    id: 5,
    company: "Apple",
    position: "Software Development Engineer",
    location: "Cupertino, CA",
    deadline: "Dec 10, 2023",
    status: "To Apply",
    nextStep: "Tailor resume and apply",
    logo: ""
  },
  {
    id: 6,
    company: "Netflix",
    position: "Software Engineer",
    location: "Los Gatos, CA",
    deadline: "Nov 28, 2023",
    status: "Rejected",
    dateApplied: "Nov 2, 2023",
    logo: ""
  },
  {
    id: 7,
    company: "Twitter",
    position: "Software Development Engineer",
    location: "San Francisco, CA",
    deadline: "Dec 5, 2023",
    status: "Applied",
    dateApplied: "Nov 12, 2023",
    nextStep: "Online Assessment scheduled for Nov 20, 2023",
    logo: ""
  },
  {
    id: 8,
    company: "Salesforce",
    position: "Associate Software Engineer",
    location: "San Francisco, CA",
    deadline: "Dec 15, 2023",
    status: "Offer",
    dateApplied: "Oct 30, 2023",
    nextStep: "Review offer by Nov 25, 2023",
    logo: ""
  }
];

const Applications = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredApplications, setFilteredApplications] = useState(applications);
  
  // Filter applications based on search query
  const filterApplications = (query: string) => {
    if (!query.trim()) {
      setFilteredApplications(applications);
      return;
    }
    
    const lowercaseQuery = query.toLowerCase();
    const filtered = applications.filter(app => 
      app.company.toLowerCase().includes(lowercaseQuery) ||
      app.position.toLowerCase().includes(lowercaseQuery) ||
      app.location.toLowerCase().includes(lowercaseQuery)
    );
    
    setFilteredApplications(filtered);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterApplications(query);
  };

  // Counts for statistics
  const totalApplications = applications.length;
  const applied = applications.filter(app => app.status === 'Applied').length;
  const interviews = applications.filter(app => app.status === 'Interview').length;
  const offers = applications.filter(app => app.status === 'Offer').length;
  const rejected = applications.filter(app => app.status === 'Rejected').length;
  const toApply = applications.filter(app => app.status === 'To Apply').length;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Job Applications</h1>
            <p className="text-muted-foreground">Track and manage your SDE job applications.</p>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold mb-1">{totalApplications}</p>
                <p className="text-sm text-muted-foreground">Total</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold mb-1 text-blue-600 dark:text-blue-400">{toApply}</p>
                <p className="text-sm text-muted-foreground">To Apply</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold mb-1 text-indigo-600 dark:text-indigo-400">{applied}</p>
                <p className="text-sm text-muted-foreground">Applied</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold mb-1 text-violet-600 dark:text-violet-400">{interviews}</p>
                <p className="text-sm text-muted-foreground">Interviews</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold mb-1 text-green-600 dark:text-green-400">{offers}</p>
                <p className="text-sm text-muted-foreground">Offers</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold mb-1 text-red-600 dark:text-red-400">{rejected}</p>
                <p className="text-sm text-muted-foreground">Rejected</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <Button className="flex items-center gap-2">
              <PlusCircle className="h-4 w-4" />
              Add New Application
            </Button>
            
            <div className="relative flex-1 sm:flex-none sm:min-w-[300px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search applications..."
                className="pl-10 py-2 pr-4 w-full h-10 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-6 mb-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="to-apply">To Apply</TabsTrigger>
              <TabsTrigger value="applied">Applied</TabsTrigger>
              <TabsTrigger value="interview">Interview</TabsTrigger>
              <TabsTrigger value="offer">Offer</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <ApplicationList applications={filteredApplications} />
            </TabsContent>
            
            <TabsContent value="to-apply">
              <ApplicationList applications={filteredApplications.filter(app => app.status === 'To Apply')} />
            </TabsContent>
            
            <TabsContent value="applied">
              <ApplicationList applications={filteredApplications.filter(app => app.status === 'Applied')} />
            </TabsContent>
            
            <TabsContent value="interview">
              <ApplicationList applications={filteredApplications.filter(app => app.status === 'Interview')} />
            </TabsContent>
            
            <TabsContent value="offer">
              <ApplicationList applications={filteredApplications.filter(app => app.status === 'Offer')} />
            </TabsContent>
            
            <TabsContent value="rejected">
              <ApplicationList applications={filteredApplications.filter(app => app.status === 'Rejected')} />
            </TabsContent>
          </Tabs>
          
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
                <CardDescription>Applications with deadlines in the next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applications
                    .filter(app => app.status === 'To Apply')
                    .slice(0, 3)
                    .map(app => (
                      <div key={app.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Building className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">{app.company}</h4>
                            <p className="text-sm text-muted-foreground">{app.position}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <p className="text-sm font-medium">Deadline</p>
                            <p className="text-sm text-muted-foreground">{app.deadline}</p>
                          </div>
                          <Button variant="outline" size="sm">
                            Apply Now
                          </Button>
                        </div>
                      </div>
                    ))}
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

const ApplicationList = ({ applications }: { applications: Application[] }) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'To Apply':
        return <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30">To Apply</Badge>;
      case 'Applied':
        return <Badge className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/30">Applied</Badge>;
      case 'Interview':
        return <Badge className="bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 hover:bg-violet-100 dark:hover:bg-violet-900/30">Interview</Badge>;
      case 'Offer':
        return <Badge className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30">Offer</Badge>;
      case 'Rejected':
        return <Badge className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30">Rejected</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'To Apply':
        return <FileText className="h-5 w-5 text-blue-500" />;
      case 'Applied':
        return <Briefcase className="h-5 w-5 text-indigo-500" />;
      case 'Interview':
        return <Calendar className="h-5 w-5 text-violet-500" />;
      case 'Offer':
        return <Check className="h-5 w-5 text-green-500" />;
      case 'Rejected':
        return <X className="h-5 w-5 text-red-500" />;
      default:
        return <AlertCircle className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-4">
      {applications.length > 0 ? (
        applications.map(app => (
          <Card key={app.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    {getStatusIcon(app.status)}
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                      <h3 className="font-medium">{app.position}</h3>
                      <span className="text-sm text-muted-foreground">at {app.company}</span>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Building className="h-4 w-4 mr-1" />
                        {app.location}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Deadline: {app.deadline}
                      </span>
                      {app.dateApplied && (
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          Applied: {app.dateApplied}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {getStatusBadge(app.status)}
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="hidden sm:flex items-center">
                    View Details
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
              
              {app.nextStep && (
                <div className="mt-4 pt-4 border-t text-sm">
                  <span className="font-medium">Next Step:</span> {app.nextStep}
                </div>
              )}
              
              <div className="mt-4 sm:hidden">
                <Button variant="outline" size="sm" className="w-full">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <div className="text-center p-8">
          <div className="text-muted-foreground mb-2">No applications found</div>
          <Button variant="outline" size="sm" className="mt-2">
            Add your first application
          </Button>
        </div>
      )}
    </div>
  );
};

export default Applications;
