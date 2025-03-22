import clsx from "clsx";

interface CloseIconProps {
  size?: "size-s" | "size-m";
  onClick: () => void
}

const CloseIcon: React.FC<CloseIconProps> = ({ size = "size-m", onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={clsx("current cursor-pointer", {
        "w-6 h-6": size === "size-s",
        "w-10 h-10": size === "size-m",
      })}
      onClick={onClick}
    >
      <rect width="100" height="100" rx="15" className="fill-transparent" />
      <line
        x1="25"
        y1="25"
        x2="75"
        y2="75"
        stroke="white"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <line
        x1="75"
        y1="25"
        x2="25"
        y2="75"
        stroke="white"
        strokeWidth="12"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CloseIcon;
