
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Code, 
  Briefcase, 
  BookOpen, 
  MessageSquare, 
  Menu, 
  X
} from 'lucide-react';

type NavItem = {
  label: string;
  path: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: <LayoutDashboard className="h-4 w-4 mr-2" />,
  },
  {
    label: 'Study Plan',
    path: '/study-plan',
    icon: <BookOpen className="h-4 w-4 mr-2" />,
  },
  {
    label: 'Coding Challenges',
    path: '/challenges',
    icon: <Code className="h-4 w-4 mr-2" />,
  },
  {
    label: 'Job Applications',
    path: '/applications',
    icon: <Briefcase className="h-4 w-4 mr-2" />,
  },
  {
    label: 'Interviews',
    path: '/interviews',
    icon: <MessageSquare className="h-4 w-4 mr-2" />,
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4",
        isScrolled 
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <span className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700">
              PrepifyPath
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:text-foreground hover:bg-accent"
                )}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="ghost" size="sm">
              <Link to="/login">Sign In</Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden animate-in">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium flex items-center",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:text-foreground hover:bg-accent"
                )}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
            <div className="pt-4 pb-3 border-t border-border">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <Button asChild variant="ghost" size="sm" className="w-full justify-start">
                    <Link to="/login">Sign In</Link>
                  </Button>
                </div>
                <div className="ml-3">
                  <Button asChild size="sm" className="w-full justify-start">
                    <Link to="/signup">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
