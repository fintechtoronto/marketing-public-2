import { Metadata } from "next";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export const metadata: Metadata = {
  title: "Theme Test | FintechToronto",
  description: "Test the theme switching functionality",
};

export default function ThemeTestPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Theme Switching Test</h1>
      
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Toggle Theme</h2>
          <p className="text-muted-foreground mb-4">
            Click the button below to toggle between dark and light themes.
          </p>
          <div>
            <ThemeToggle />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-medium mb-2">Text Colors</h3>
            <p className="mb-2">Default text color</p>
            <p className="text-primary mb-2">Primary text color</p>
            <p className="text-muted-foreground mb-2">Muted text color</p>
          </div>
          
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-medium mb-2">Background Colors</h3>
            <div className="p-4 bg-background border mb-2">Default background</div>
            <div className="p-4 bg-primary text-primary-foreground mb-2">Primary background</div>
            <div className="p-4 bg-secondary text-secondary-foreground mb-2">Secondary background</div>
          </div>
        </div>
      </div>
    </div>
  );
}
