import Logo from "./Logo";
import LeafMark from "./LeafMark";

export default function AuthShell({ headline, message, children }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Painel de marca */}
      <div className="relative hidden md:flex md:w-[44%] flex-col justify-between overflow-hidden bg-pink-deep px-12 py-10">
        <div
          className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-blob bg-cream/20"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-[-6rem] right-[-4rem] h-72 w-72 rounded-blob bg-pink-soft/30"
          aria-hidden="true"
        />

        <Logo tone="dark" />

        <div className="relative z-10 max-w-sm">
          <p className="font-display italic text-3xl leading-snug text-cream">
            {headline}
          </p>
          <p className="mt-4 text-cream/70 text-sm leading-relaxed">
            {message}
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-2 text-cream/50 text-xs">
          <LeafMark className="w-4 h-4" color="currentColor" />
          <span>Dando uma nova vida ao que já existe.</span>
        </div>
      </div>

      {/* Painel de formulário */}
      <div className="flex flex-1 items-center justify-center bg-cream px-6 py-12">
        <div className="w-full max-w-sm">
          <div className="mb-10 md:hidden">
            <Logo tone="light" />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
