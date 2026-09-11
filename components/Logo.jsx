import LeafMark from "./LeafMark";

export default function Logo({ tone = "dark" }) {
  const textColor = tone === "dark" ? "text-cream" : "text-pink-deep";
  const leafColor = tone === "dark" ? "#F7E1EA" : "#E8A9C0";

  return (
    <div className={`flex items-center gap-2 ${textColor}`}>
      <LeafMark className="w-7 h-7" color={leafColor} />
      <span className="font-display text-2xl italic tracking-tight">
        ReUse!
      </span>
    </div>
  );
}
