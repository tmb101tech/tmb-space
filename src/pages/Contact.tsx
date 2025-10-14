import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { SessionBooking } from '@/components/SessionBooking';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    brandAbout: '',
    goals: '',
    services: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.whatsapp) {
      toast({
        title: 'WhatsApp Required',
        description: 'Please provide your WhatsApp number',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Message Sent!',
      description: 'Thank you for reaching out. I will get back to you soon.',
    });

    const whatsappUrl = `https://wa.me/${formData.whatsapp.replace(/\D/g, '')}`;
    window.open(whatsappUrl, '_blank');

    setFormData({
      name: '',
      email: '',
      phone: '',
      whatsapp: '',
      brandAbout: '',
      goals: '',
      services: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-heading font-bold mb-6">Get In Touch</h1>
          <p className="text-xl font-body text-muted-foreground">
            Let's discuss your project and how I can help bring your vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Mail, label: 'Email', value: 'mosesbakare48@gmail.com' },
            { icon: Phone, label: 'Phone', value: '+234 802 632 2742' },
            { icon: MapPin, label: 'Location', value: 'Nigeria' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-effect p-6 text-center">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-body text-muted-foreground mb-1">{item.label}</p>
                <p className="font-body font-semibold">{item.value}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <SessionBooking />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="glass-effect p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="font-body">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="font-body">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="font-body">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="whatsapp" className="font-body">WhatsApp *</Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    placeholder="+234XXXXXXXXXX"
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="brandAbout" className="font-body">What is your brand about? *</Label>
                <Textarea
                  id="brandAbout"
                  name="brandAbout"
                  value={formData.brandAbout}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="Tell us about your brand, business, or project..."
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="goals" className="font-body">What do you want to achieve? *</Label>
                <Textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="Describe your goals and what success looks like for you..."
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="services" className="font-body">Which of our services do you need? *</Label>
                <Select
                  value={formData.services}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, services: value }))}
                  required
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Branding & Design">Branding & Design</SelectItem>
                    <SelectItem value="Video & Photography">Video & Photography</SelectItem>
                    <SelectItem value="Creative Consulting">Creative Consulting</SelectItem>
                    <SelectItem value="Multiple Services">Multiple Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="font-body">Additional Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any additional information you'd like to share..."
                  className="mt-2"
                />
              </div>

              <Button type="submit" size="lg" className="w-full glow-ring">
                Send Message
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
