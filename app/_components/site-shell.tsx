import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type SiteShellProps = {
  children: ReactNode;
};

export function BrandMark({ centered = false }: { centered?: boolean }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 text-neutral-950 ${centered ? "justify-center" : ""}`}
      aria-label="Moments home"
    >
      <span className="relative h-14 w-14 overflow-hidden rounded-[18px] border border-white/60 shadow-[0_12px_30px_rgba(99,169,255,0.2)]">
        <Image
          src="/moments-icon-figma.png"
          alt="Moments app icon"
          fill
          sizes="56px"
          className="object-cover"
          priority
        />
      </span>
      <span className="font-sans text-[0.95rem] font-semibold tracking-[-0.03em]">
        Moments
      </span>
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-shell mx-auto flex w-full max-w-[1440px] justify-center px-6 pb-8 pt-4 md:justify-end md:px-10 lg:px-12">
      <nav
        aria-label="Legal"
        className="flex items-center gap-4 text-[0.78rem] text-neutral-500"
      >
        <Link href="/privacy" className="transition hover:text-neutral-900">
          Privacy
        </Link>
        <span className="h-3 w-px bg-neutral-300" />
        <Link href="/terms" className="transition hover:text-neutral-900">
          Terms
        </Link>
      </nav>
    </footer>
  );
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--page-bg)] text-neutral-950">
      <div className="absolute inset-y-0 right-[17.5%] hidden w-px bg-white/65 md:block" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(129,213,255,0.25),transparent_22%),radial-gradient(circle_at_15%_82%,rgba(255,212,229,0.22),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,244,239,0.98))]" />
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:120px_120px]" />
      <div className="relative">{children}</div>
    </div>
  );
}
