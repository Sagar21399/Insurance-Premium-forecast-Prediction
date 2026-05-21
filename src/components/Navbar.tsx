import { Activity } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-6xl">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
            <Activity className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-semibold text-foreground tracking-tight">Insurace Forecaste</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
  {[
    // { name: "Platform", path: "/platform" },
    // { name: "Models", path: "/models" },
    // { name: "Docs", path: "/docs" },
    // { name: "Pricing", path: "/pricing" },
  ].map((pages) => (
    <Link
      key={pages.name}
      to={pages.path}
      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      {pages.name}
    </Link>
  ))}
</div>
        <div className="flex items-center gap-3">
          {/* <a href="http://localhost:8080/auth" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            Sign In
          </a> */}
          <a href="http://localhost:8081/auth" className="text-sm font-medium gradient-primary text-primary-foreground px-4 py-2 rounded-lg">
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
