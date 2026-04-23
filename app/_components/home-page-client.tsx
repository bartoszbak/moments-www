"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

import { FeaturesModal } from "@/app/_components/features-modal";
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
        src="/moments-icon-figma.png"
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
      <span className="h-3 w-px bg-[#d5d9db]" aria-hidden="true" />
      <Link href="/terms">Terms</Link>
    </nav>
  );
}

type HomeActionRowProps = {
  primaryLabel: string;
  mobile?: boolean;
  onOpenFeatures: () => void;
};

function HomeActionRow({ primaryLabel, mobile = false, onOpenFeatures }: HomeActionRowProps) {
  const prefersReducedMotion = useReducedMotion();
  const hoverTransition = { type: "spring" as const, stiffness: 360, damping: 26, mass: 0.74 };
  const hoverLift = prefersReducedMotion ? undefined : { y: -1, scale: 1.01 };
  const tapPress = prefersReducedMotion ? undefined : { scale: 0.985 };

  return (
    <div className={`moments-action-group flex ${mobile ? "w-full flex-col gap-3" : "flex-wrap items-center gap-3"}`}>
      <motion.div whileHover={hoverLift} whileTap={tapPress} transition={hoverTransition}>
        <Link
          href={siteConfig.appStoreUrl}
          className={`moments-download-button inline-flex items-center justify-center rounded-[16px] bg-[#00b9ff] px-6 text-[17px] font-semibold leading-[17px] text-black ${mobile ? "h-[49px] w-full text-center" : "h-[49px]"}`}
        >
          {primaryLabel}
        </Link>
      </motion.div>

      <motion.button
        type="button"
        className={`moments-features-open-button inline-flex items-center justify-center rounded-[16px] border border-[#d7e9f1] bg-[#f7fcff] px-6 text-[17px] font-semibold leading-[17px] text-[#0d3545] ${mobile ? "h-[49px] w-full" : "h-[49px]"}`}
        whileHover={hoverLift}
        whileTap={tapPress}
        transition={hoverTransition}
        onClick={onOpenFeatures}
      >
        What&apos;s inside
      </motion.button>
    </div>
  );
}

export function HomePageClient() {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  return (
    <>
      <div className="bg-white text-black">
        <div className="hidden xl:block">
          <div className="mx-auto flex min-h-screen w-full" style={{ maxWidth: 'var(--layout-max-width)' }}>
            <section className="flex h-screen w-[689px] flex-col justify-between overflow-hidden p-[42px]">
              <HomeBrandMark />
              <div className="flex w-full flex-col gap-[42px]">
                <div className="flex w-full flex-col gap-3">
                  <h1
                    className="text-[50px] font-semibold leading-[55px]"
                    style={{ fontFeatureSettings: "'liga' 0" }}
                  >
                    Count down to events,
                    <br />
                    reflect on the past, and
                    <br />
                    manifest what&apos;s next.
                  </h1>
                  <p
                    className="w-[484px] text-[17px] font-semibold leading-[17px]"
                    style={{ fontFeatureSettings: "'ss02' 1, 'liga' 0" }}
                  >
                    Make every moment move you forward.
                  </p>
                </div>
                <div className="flex flex-col items-start gap-4">
                  <HomeActionRow primaryLabel="Download Moments" onOpenFeatures={() => setIsFeaturesOpen(true)} />
                  <p
                    className="pl-[6px] text-[17px] font-medium leading-[17px] text-[#939b9e]"
                    style={{ fontFeatureSettings: "'liga' 0" }}
                  >
                    Built for iPhone and iPad.
                  </p>
                </div>
              </div>
            </section>

            <section className="relative flex min-w-0 flex-1 items-center justify-center overflow-hidden p-[42px]">
              <PhonePreview variant="desktop" />
              <div className="absolute bottom-[42px] right-[60px]">
                <HomeLegalLinks />
              </div>
            </section>
          </div>
        </div>

        <div className="xl:hidden">
          <div className="mx-auto flex min-h-screen w-full max-w-[402px] flex-col bg-white">
            <section className="flex h-[532px] items-center justify-center overflow-hidden">
              <PhonePreview variant="mobile" />
            </section>

            <section className="flex flex-1 flex-col px-8 pb-8 pt-8">
              <div className="flex flex-1 flex-col items-center justify-between gap-10">
                <HomeBrandMark />
                <div className="flex w-full flex-col gap-[42px]">
                  <div className="flex w-full flex-col gap-3 text-center">
                    <h1
                      className="text-[27px] font-semibold leading-[normal]"
                      style={{ fontFeatureSettings: "'liga' 0" }}
                    >
                      Count down to events,
                      <br />
                      reflect on the past, and
                      <br />
                      manifest what&apos;s next.
                    </h1>
                    <p
                      className="text-[17px] font-semibold leading-[17px]"
                      style={{ fontFeatureSettings: "'ss02' 1, 'liga' 0" }}
                    >
                      Make every moment move you forward.
                    </p>
                  </div>
                  <HomeActionRow
                    primaryLabel="Download Moments for iOS"
                    mobile
                    onOpenFeatures={() => setIsFeaturesOpen(true)}
                  />
                </div>
              </div>
            </section>

            <div className="pb-[39px]">
              <HomeLegalLinks centered />
            </div>
          </div>
        </div>
      </div>

      <FeaturesModal isOpen={isFeaturesOpen} onClose={() => setIsFeaturesOpen(false)} />
    </>
  );
}
