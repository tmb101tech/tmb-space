import { useState, useEffect } from 'react';
import { format, addDays } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Booking {
  booking_date: string;
  booking_time: string;
}

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour < 21; hour++) {
    for (let minute of [0, 30]) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      slots.push(time);
    }
  }
  return slots;
};

export const SessionBooking = () => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [bookedSlots, setBookedSlots] = useState<Booking[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeSlots = generateTimeSlots();

  useEffect(() => {
    fetchBookings();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('bookings-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'bookings'
        },
        (payload) => {
          console.log('New booking received:', payload);
          // Add the new booking to the list
          setBookedSlots((prev) => [...prev, payload.new as Booking]);
        }
      )
      .subscribe();

    // Cleanup subscription on unmount
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchBookings = async () => {
    const { data, error } = await supabase
      .from('bookings')
      .select('booking_date, booking_time');

    if (error) {
      console.error('Error fetching bookings:', error);
    } else {
      setBookedSlots(data || []);
    }
  };

  const isSlotBooked = (date: Date, time: string) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    return bookedSlots.some(
      (booking) => booking.booking_date === dateStr && booking.booking_time === time
    );
  };

  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday = 0, Saturday = 6
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime || !name || !contact) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all fields and select a date and time.',
        variant: 'destructive',
      });
      return;
    }

    if (isSlotBooked(selectedDate, selectedTime)) {
      toast({
        title: 'Slot Unavailable',
        description: 'This time slot has already been booked. Please select another.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.from('bookings').insert({
      name,
      contact,
      booking_date: format(selectedDate, 'yyyy-MM-dd'),
      booking_time: selectedTime,
    });

    setIsSubmitting(false);

    if (error) {
      if (error.code === '23505') {
        toast({
          title: 'Slot Already Taken',
          description: 'This time slot was just booked by someone else. Please select another.',
          variant: 'destructive',
        });
        fetchBookings();
      } else {
        toast({
          title: 'Booking Failed',
          description: 'An error occurred while booking your session. Please try again.',
          variant: 'destructive',
        });
      }
    } else {
      toast({
        title: 'Session Booked! 🎉',
        description: `Your session on ${format(selectedDate, 'PPP')} at ${selectedTime} has been confirmed. More details will be sent to ${contact}.`,
      });

      // Reset form
      setSelectedDate(undefined);
      setSelectedTime('');
      setName('');
      setContact('');
      fetchBookings();
    }
  };

  return (
    <Card className="glass-effect p-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-heading font-bold mb-2">Book a Session with TMB</h2>
        <p className="text-muted-foreground font-body">
          Schedule a 30-minute consultation session (Mon-Fri, 9am-9pm)
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="booking-name" className="font-body mb-2 block">
              Your Name *
            </Label>
            <Input
              id="booking-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <Label htmlFor="booking-contact" className="font-body mb-2 block">
              Email or WhatsApp *
            </Label>
            <Input
              id="booking-contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="email@example.com or +234XXXXXXXXXX"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label className="font-body mb-2 flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" />
              Select Date *
            </Label>
            <div className="border rounded-lg p-2">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) =>
                  date < new Date() || isWeekend(date)
                }
                className={cn("pointer-events-auto")}
                fromDate={new Date()}
                toDate={addDays(new Date(), 60)}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              * Weekends are not available
            </p>
          </div>

          <div>
            <Label className="font-body mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Select Time *
            </Label>
            <div className="border rounded-lg p-4 max-h-[400px] overflow-y-auto space-y-2">
              {selectedDate ? (
                timeSlots.map((time) => {
                  const isBooked = isSlotBooked(selectedDate, time);
                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => !isBooked && setSelectedTime(time)}
                      disabled={isBooked}
                      className={cn(
                        'w-full p-3 rounded-md text-sm font-medium transition-colors',
                        selectedTime === time
                          ? 'bg-primary text-primary-foreground'
                          : isBooked
                          ? 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                          : 'bg-secondary hover:bg-secondary/80'
                      )}
                    >
                      {time} {isBooked && '(Booked)'}
                    </button>
                  );
                })
              ) : (
                <p className="text-center text-muted-foreground py-8">
                  Please select a date first
                </p>
              )}
            </div>
          </div>
        </div>

        {selectedDate && selectedTime && (
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <p className="font-body text-sm">
              <strong>Selected:</strong> {format(selectedDate, 'PPP')} at {selectedTime}
            </p>
          </div>
        )}

        <Button
          type="submit"
          size="lg"
          className="w-full glow-ring"
          disabled={isSubmitting || !selectedDate || !selectedTime || !name || !contact}
        >
          {isSubmitting ? 'Booking...' : 'Book Session'}
        </Button>
      </form>
    </Card>
  );
};
