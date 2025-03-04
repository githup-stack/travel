import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  iconSrc?: string;
}

const Input: React.FC<InputProps> = ({ iconSrc, ...props }) => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setIsInputFocused(false);
    }
  };

  return (
    <div className="relative">
      {iconSrc && (
        <img
          src={iconSrc}
          alt="icon"
          className={`absolute inset-y-0 my-auto h-5 w-5 transition-all duration-300 ${
            isInputFocused ? "right-3" : "left-3"
          }`}
        />
      )}
      <input
        {...props}
        data-slot="input"
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={cn(
          "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          props.className,
        )}
        {...props}
      />
    </div>
  );
};

export default Input;
