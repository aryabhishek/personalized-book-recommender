import { ReactElement } from "react";

interface ButtonProps {
    text: string | ReactElement;
    size: "sm" | "md" | "lg";
    variant: "primary" | "secondary";
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
};

const sizeStyles: any = {
    "sm": "px-2 py-1 text-sm rounded-sm",
    "md": "px-4 py-2 text-base rounded-md",
    "lg": "px-6 py-3 text-lg rounded-lg",
}

const variantStyles: any = {
    "primary": "bg-myPurple-600 text-white",
    "secondary": "bg-gray-300 text-myPurple-600",
}

const defaultStyles = "transition-colors duration-300 flex items-center justify-center px-4 py-2 rounded-md mx-2 gap-1 text-lg";

const hoverStyles = "hover:bg-[#181818] hover:text-white";
export default function Button(props: ButtonProps) {
    return (
        <button className={`${sizeStyles[props.size]} ${variantStyles[props.variant]} ${defaultStyles} ${hoverStyles}`}
            onClick={props.onClick}>
            {props.startIcon}
            {props.text}
            {props.endIcon}
        </button>
    );
}