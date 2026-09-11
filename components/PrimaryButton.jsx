export default function PrimaryButton({ children, type = "submit" }) {
  return (
    <button
      type={type}
      className="w-full rounded-full bg-pink-deep px-6 py-3 text-cream font-medium tracking-wide transition-transform hover:bg-[#98395C] active:scale-[0.99]"
    >
      {children}
    </button>
  );
}
