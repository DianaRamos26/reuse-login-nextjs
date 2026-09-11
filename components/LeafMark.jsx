export default function LeafMark({ className = "w-8 h-8", color = "#F6F2E9" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 40C8 22 20 8 40 8C40 28 28 40 8 40Z"
        fill={color}
      />
      <path
        d="M9 39L37 11"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
