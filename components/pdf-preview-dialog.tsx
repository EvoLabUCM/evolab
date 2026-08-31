"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface PDFPreviewDialogProps {
  isOpen: boolean
  onClose: () => void
  title: string
}

export function PDFPreviewDialog({ isOpen, onClose, title }: PDFPreviewDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-full h-[80vh]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="flex-1 w-full h-full min-h-[60vh]">
          <iframe
            src="http://colinholbrook.com/Colin_Holbrook_Curriculum_Vitae.pdf"
            className="w-full h-full rounded-md"
            title={`PDF preview: ${title}`}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
