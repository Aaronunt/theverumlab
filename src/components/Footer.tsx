import { Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Phone className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold text-foreground">
              TheVerumLab
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TheVerumLab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
