export default function FormField({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
  required = true,
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-sm font-medium text-ink/70">{label}</span>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 w-full rounded-none border-0 border-b-2 border-ink/15 bg-transparent px-1 py-2 text-ink placeholder:text-ink/35 transition-colors focus:border-pink-deep focus:outline-none"
      />
    </label>
  );
}
