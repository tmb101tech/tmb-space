import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Shield, CheckCircle } from 'lucide-react';

export const AdminSetup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const { toast } = useToast();

  const setupAdmin = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/setup-admin`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) throw new Error(data.error);

      setIsComplete(true);
      toast({
        title: 'Admin Setup Complete!',
        description: 'You can now login with the password',
      });
    } catch (error: any) {
      console.error('Setup error:', error);
      toast({
        title: 'Setup Error',
        description: error.message || 'Failed to setup admin account',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isComplete) {
    return (
      <Card className="glass-effect p-6 mb-6 border-primary/20">
        <div className="flex items-center gap-3 text-primary">
          <CheckCircle className="w-5 h-5" />
          <div>
            <p className="font-semibold">Admin account is ready!</p>
            <p className="text-sm text-muted-foreground mt-1">
              Use password: <code className="bg-muted px-2 py-1 rounded">administrator@123</code>
            </p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="glass-effect p-6 mb-6">
      <div className="flex items-start gap-4">
        <Shield className="w-6 h-6 text-primary mt-1" />
        <div className="flex-1">
          <h3 className="font-semibold mb-2">First Time Setup</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Click below to create your admin account. You'll be able to login with just the password.
          </p>
          <Button
            onClick={setupAdmin}
            disabled={isLoading}
            className="glow-ring"
          >
            {isLoading ? 'Setting up...' : 'Create Admin Account'}
          </Button>
        </div>
      </div>
    </Card>
  );
};
