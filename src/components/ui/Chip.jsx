import { cn } from "../../utils";

const Chip = ({ size = "base", children, className, ...props }) => {
  return (
    <div
      className={cn(
        "flex flex-row items-center bg-primary rounded-full px-3 py-1 text-white w-fit font-bold select-none",
        size === "sm" && "text-xs",
        size === "base" && "text-sm",
        size === "lg" && "text-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Chip;
