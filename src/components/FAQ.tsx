import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Do you only build websites, or are there other services you offer?",
    answer: "I offer comprehensive digital services beyond web development! I specialize in web design and development, brand identity design, and social media management. Whether you need a stunning website, a cohesive brand identity, or strategic social media presence, I can help your business establish and grow its online identity."
  },
  {
    question: "Where are you located?",
    answer: "I'm based in Lagos, Nigeria. I work with businesses and individuals both locally in Lagos and remotely across Nigeria and internationally. Distance is no barrier to creating exceptional digital experiences for your business."
  },
  {
    question: "Are you still a student?",
    answer: "Yes, I'm currently a student at Lagos University of Science and Technology (LASUTECH). I balance my studies with my passion for web development and design, bringing fresh perspectives and cutting-edge knowledge to every project I undertake."
  },
  {
    question: "How long does it take to build a website?",
    answer: "The timeline depends on your project's complexity. For simple websites (landing pages, portfolios, small business sites), you can expect delivery within 3-5 days. For complex websites like e-commerce platforms, custom web applications, or sites with advanced features, the timeline is typically 2+ weeks. I always ensure quality isn't compromised for speed!"
  },
  {
    question: "What types of websites do you build?",
    answer: "I build different types of websites tailored to your needs - from simple landing pages and portfolios to complex e-commerce platforms and custom web applications. Every website I create helps businesses and individuals establish their identity online and grow their digital presence. Whether you're starting fresh or scaling up, I've got you covered."
  },
  {
    question: "What else do you do for fun?",
    answer: "Beyond coding and design, I'm passionate about my faith as a Christian, which guides my work ethic and values. I also enjoy exploring new technologies, staying updated with the latest web trends, and finding creative ways to solve problems. I believe in continuous growth - both personally and professionally."
  },
  {
    question: "How can a website help my business stand out?",
    answer: "A professional website is your business's digital storefront - it's often the first impression potential customers have of your brand. A well-designed website helps establish credibility, showcases your products or services 24/7, reaches a wider audience, and provides a platform for customer engagement. It's essential for building your business strategy and growing your online presence in today's digital world."
  },
  {
    question: "Do you work with small businesses and startups?",
    answer: "Absolutely! I'm passionate about helping businesses of all sizes establish their online identity. Whether you're a startup looking to make your first digital impression or an established business wanting to upgrade your online presence, I provide tailored solutions that fit your needs and budget to help your business stand out and grow."
  },
  {
    question: "Do you work alone or with a team?",
    answer: "I primarily work independently, which allows me to maintain a personal touch and direct communication with my clients. However, for larger projects that require specialized skills, I am open to collaborating with a trusted network of professionals to ensure the best results for your business."
  }
];

export const FAQ = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <HelpCircle className="w-10 h-10 text-primary" />
          <h2 className="text-4xl font-heading font-bold">Frequently Asked Questions</h2>
        </div>
        <p className="text-muted-foreground font-body max-w-2xl mx-auto">
          Got questions about building your business online? Find answers to common questions about my services, timeline, and approach.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AccordionItem 
                value={`item-${index}`} 
                className="glass-effect px-6 rounded-lg border-none"
              >
                <AccordionTrigger className="text-left font-heading hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>

      {/* Structured Data for FAQs */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>
    </section>
  );
};