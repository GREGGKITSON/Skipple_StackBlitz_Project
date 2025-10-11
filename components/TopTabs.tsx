"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700"] });

const links = [
  { href: "/", label: "HOME" },
  { href: "/how-it-works", label: "HOW IT WORKS" },
  { href: "/bin-size-guide", label: "BIN SIZE GUIDE" },
  { href: "/suppliers", label: "BECOME A SUPPLIER" },
  { href: "/about", label: "ABOUT" },
  { href: "/faq", label: "HELP & SUPPORT" },
];

export default function TopTabs() {
  const pathname = usePathname();
  const [pendingHref, setPendingHref] = useState<string | null>(null);

  useEffect(() => setPendingHref(null), [pathname]);

  return (
    <div
      className={`w-full border-b border-black/80 bg-[linear-gradient(#1a1a1a,#000000)] shadow-[0_2px_12px_rgba(0,0,0,0.35)] ${nunito.className}`}
    >
      <nav className="top-tabs mx-auto max-w-6xl px-2 sm:px-4 py-1 sm:py-2 grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-1 sm:gap-3">

        {/* Left: brand */}
        <div className="justify-self-start select-none text-base sm:text-xl font-bold tracking-tight text-neutral-200 drop-shadow-[0_1px_0_#000]">
          skipple
        </div>

        {/* Center: tabs */}
        <div className="justify-self-center flex flex-wrap items-center gap-1 sm:gap-3 text-xs sm:text-base">
          {links.map(({ href, label }) => {
            const isRouteActive =
              (href === "/" && pathname === "/") ||
              (href !== "/" && pathname.startsWith(href));
            const isActiveVisual = isRouteActive || pendingHref === href;

            const common =
              "relative rounded-t-xl border border-black/90 border-b-black/60 px-2 sm:px-4 py-1 sm:py-2 font-bold tracking-tight " +
              "shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_1px_0_rgba(255,255,255,0.04),0_6px_10px_rgba(0,0,0,0.25)] " +
              "transition-[transform,box-shadow,background,color] duration-150 ease-out";

            const inactive =
              "text-neutral-200 bg-[linear-gradient(#1e1e1e,#0f0f0f)] " +
              "hover:bg-[linear-gradient(#242424,#111111)] hover:-translate-y-[1px] " +
              "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_12px_22px_rgba(0,0,0,0.58)]";

            const active =
              "bg-[linear-gradient(#f9f9f9,#e5e5e5)] " +
              "shadow-[inset_0_1px_0_#ffffff,inset_0_-1px_0_rgba(0,0,0,0.12),0_6px_10px_rgba(0,0,0,0.25)]";

            return (
              <Link
                key={href}
                href={href}
                aria-current={isRouteActive ? "page" : undefined}
                data-active={isRouteActive ? "true" : "false"}
                className={`${common} ${isActiveVisual ? active : inactive}`}
                onMouseDown={() => setPendingHref(href)}
                onTouchStart={() => setPendingHref(href)}
              >
                <span style={isActiveVisual ? { color: "#000" } : undefined}>
                  {label}
                </span>
                {isActiveVisual && (
                  <span className="pointer-events-none absolute inset-x-4 -bottom-[6px] block h-[3px] rounded bg-[#E98855] shadow-[0_1px_0_rgba(0,0,0,0.25)]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right: spacer */}
        <div className="justify-self-end" aria-hidden="true"></div>
      </nav>
    </div>
  );
}
