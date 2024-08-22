import { ReactNode } from "react";

type TooltipProps = {
    message: string;
    children: ReactNode;
};

function Tooltip({ message, children }: TooltipProps) {
  return (
    <div className="group relative flex items-center">
        {children}
        <span className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-max px-2 py-1 text-xs text-white bg-gray-600 bg-opacity-90 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           {message} 
        </span>
    </div>
  )
}

export default Tooltip;