"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { PhonePreview } from "@/app/_components/phone-preview";
import { siteConfig } from "@/app/_lib/site-content";

function HomeBrandMark() {
  return (
    <Link
      href="/"
      className="flex w-[99px] flex-col items-center gap-2 text-black"
      aria-label="Moments home"
    >
      <Image
        src="/moments-icon.png"
        alt="Moments app icon"
        width={1024}
        height={1024}
        sizes="80px"
        priority
        className="h-20 w-20 rounded-[24px] object-cover"
      />
      <span className="text-[17px] font-semibold leading-[17px]">
        Moments
      </span>
    </Link>
  );
}

function HomeLegalLinks({ centered = false }: { centered?: boolean }) {
  return (
    <nav
      aria-label="Legal"
      className={`flex items-center gap-4 text-[17px] font-medium leading-[17px] text-[#939b9e] ${centered ? "justify-center" : ""}`}
      style={{ fontFeatureSettings: "'ss02' 1, 'liga' 0" }}
    >
      <Link href="/privacy">Privacy</Link>
      {centered && <span aria-hidden="true" className="h-3 w-px bg-[#939b9e]" />}
      <Link href="/terms">Terms</Link>
    </nav>
  );
}

type HomeActionRowProps = {
  primaryLabel: string;
  mobile?: boolean;
};

function HomeActionRow({ primaryLabel, mobile = false }: HomeActionRowProps) {
  const prefersReducedMotion = useReducedMotion();
  const hoverTransition = { type: "spring" as const, stiffness: 360, damping: 26, mass: 0.74 };
  const hoverLift = prefersReducedMotion ? undefined : { y: -1, scale: 1.01 };
  const tapPress = prefersReducedMotion ? undefined : { scale: 0.985 };

  return (
    <div className={`moments-action-group flex ${mobile ? "w-full flex-col gap-3" : "flex-wrap items-center gap-3"}`}>
      <motion.div whileHover={hoverLift} whileTap={tapPress} transition={hoverTransition}>
        <Link
          href={siteConfig.appStoreUrl}
          className={`moments-download-button text-[17px] font-semibold leading-[17px] text-black ${
            mobile
              ? "flex w-full items-center justify-between rounded-[20px] bg-[#f5f5f5] p-[20px]"
              : "inline-flex h-[49px] items-center justify-center rounded-[16px] bg-[#f8e0d8] px-6"
          }`}
        >
          {mobile ? (
            <>
              <span className="pl-3">{primaryLabel}</span>
              <Image
                src="/moments-icon.png"
                alt=""
                aria-hidden="true"
                width={36}
                height={36}
                sizes="36px"
                className="rounded-[9px]"
              />
            </>
          ) : (
            primaryLabel
          )}
        </Link>
      </motion.div>
    </div>
  );
}

export function HomePageClient() {
  return (
    <div className="bg-white text-black">
      <div className="hidden lg:block">
        <div className="mx-auto flex min-h-screen w-full" style={{ maxWidth: 'var(--layout-max-width)' }}>
          <section className="flex h-screen w-[689px] flex-col justify-between overflow-hidden p-[42px]">
            <HomeBrandMark />
            <div className="flex w-full flex-col gap-[42px]">
              <div className="flex w-full flex-col gap-3">
                <h1
                  className="font-[family-name:var(--font-display-primary)] text-[50px] font-medium leading-[55px]"
                  style={{ fontFeatureSettings: "'liga' 0" }}
                >
                  <span className="italic">Count down</span>
                  <span>{` to events,`}</span>
                  <br />
                  <span className="italic">reflect</span>
                  <span>{` on the past, and`}</span>
                  <br />
                  <span className="italic">manifest</span>
                  <span>{` what’s next.`}</span>
                </h1>
                <p
                  className="w-[484px] text-[17px] font-semibold leading-[17px]"
                  style={{ fontFeatureSettings: "'ss02' 1, 'liga' 0" }}
                >
                  Make every moment move you forward.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4">
                <HomeActionRow primaryLabel="Download Moments" />
                <p
                  className="pl-[6px] text-[17px] font-medium leading-[17px] text-[#939b9e]"
                  style={{ fontFeatureSettings: "'liga' 0" }}
                >
                  Built for iPhone and iPad.
                </p>
              </div>
            </div>
          </section>

          <section className="relative flex min-w-0 flex-1 items-center justify-center p-[42px]">
            <PhonePreview variant="desktop" />
            <div className="absolute bottom-[42px] right-[60px]">
              <HomeLegalLinks />
            </div>
          </section>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="mx-auto flex h-[100dvh] w-full max-w-[402px] flex-col bg-white">
          <div
            aria-hidden="true"
            className="min-h-0 w-full flex-1 bg-cover bg-bottom bg-no-repeat"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #fff 6.604%, rgba(255,255,255,0.5) 22.017%, rgba(255,255,255,0) 39.727%), url('/moments-mobile-hero.jpg')",
            }}
          />

          <div className="flex w-full shrink-0 flex-col bg-white pb-[max(24px,env(safe-area-inset-bottom))]">
            <div className="flex w-full flex-col gap-3 px-8 pb-8 pt-8 text-center">
              <h1
                className="font-[family-name:var(--font-display-primary)] text-[30px] font-medium leading-[1.15] text-black"
                style={{ fontFeatureSettings: "'liga' 0" }}
              >
                <span className="italic">Count down</span>
                <span>{` to events, `}</span>
                <span className="italic">reflect</span>
                <span>{` on the past, and `}</span>
                <span className="italic">manifest</span>
                <span>{` what’s next.`}</span>
              </h1>
              <p
                className="text-[17px] font-medium leading-[17px]"
                style={{ fontFeatureSettings: "'ss02' 1, 'liga' 0" }}
              >
                Make every moment move you forward.
              </p>
            </div>
            <div className="flex w-full flex-col items-center gap-6 px-4">
              <HomeActionRow primaryLabel="Get Moments for iOS" mobile />
              <HomeLegalLinks centered />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
