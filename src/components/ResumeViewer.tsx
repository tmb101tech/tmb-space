import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Eye, Download, ExternalLink } from 'lucide-react';
import resumePdf from '@/assets/Updated resume.pdf';

interface ResumeViewerProps {
  trigger?: React.ReactNode;
}

export const ResumeViewer = ({ trigger }: ResumeViewerProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="lg" variant="outline" className="gap-2">
            <Eye size={20} />
            View Resume
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Resume - Toluwani Moses Bakare</span>
            <div className="flex gap-2">
              <Button asChild size="sm" variant="outline" className="gap-2">
                <a href={resumePdf} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  Open
                </a>
              </Button>
              <Button asChild size="sm" className="gap-2">
                <a href={resumePdf} download>
                  <Download size={16} />
                  Download
                </a>
              </Button>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 w-full overflow-hidden rounded-lg border border-border">
          <iframe
            src={`${resumePdf}#toolbar=0&navpanes=0`}
            className="w-full h-full"
            title="Resume"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
