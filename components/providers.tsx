import React from "react";
import { TooltipProvider } from "./ui/tooltip";

function Providers({ children }: { children: React.ReactNode }) {
  return <TooltipProvider>{children}</TooltipProvider>;
}

export default Providers;
