// components/Button.tsx
import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent) => void;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "danger" | "outline";
    className?: string;
    disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = "button",
    variant = "primary",
    className = "",
    disabled = false,
}) => {
    const baseStyles =
        "cursor-pointer px-4 lg:px-6 h-10 lg:h-12 rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center justify-center whitespace-nowrap";
    const variants: Record<string, string> = {
        primary:
            "border border-[#54505833] shadow-[0px_1px_1px_#5450581a,0px_4px_8px_#54505805,inset_0px_-2px_4px_#0000001f] bg-[#f9f8fa] bg-gradient-to-b from-white to-[#f9f8fa] text-[#363338] ",
        secondary:
            "shadow-[0px_2px_12px_#54505840,0px_2px_3px_#54505845,inset_0px_-2px_4px_#00000099] bg-[#363338] bg-gradient-to-b from-[#545058] to-[#363338] text-white",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
        ${baseStyles} ${variants[variant]} 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
        >
            {children}
        </button>
    );
};

export default Button;
