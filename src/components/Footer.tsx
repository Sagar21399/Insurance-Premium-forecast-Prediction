import { Activity } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md gradient-primary flex items-center justify-center">
              <Activity className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground text-sm">Precision-Insurance</span>
          </div>
          <p className="text-xs text-muted-foreground font-mono">
            © 2026 PremiumML. Adaptive Insurance Intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
