
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="text-xl">Loading...</div>
        </div>
      </div>
    );
  }

  if (user) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Dashboard />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Sign in to access your dashboard and start using the application.
        </p>
        <div className="space-y-4">
          <Link to="/auth" className="block">
            <Button size="lg" className="w-full">
              Sign In / Sign Up
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground">
            Create an account or sign in to get started
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
