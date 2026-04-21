"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

type FeaturesModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const featureItems = [
  {
    title: "Upcoming countdowns",
    body: "Pin the dates that matter and keep the next big moment visually close instead of buried in a calendar list.",
    accent: "01",
  },
  {
    title: "Past reflections",
    body: "Revisit milestones after they happen and turn finished events into something worth keeping, not just something crossed off.",
    accent: "02",
  },
  {
    title: "Manifestation mode",
    body: "Shape future moments with intentional prompts, a calmer writing flow, and a more personal reason to come back every day.",
    accent: "03",
  },
  {
    title: "Widgets that stay alive",
    body: "Surface selected moments on your home screen so the app still feels present even when it is closed.",
    accent: "04",
  },
  {
    title: "Reminders and calendar sync",
    body: "Turn meaningful dates into recurring nudges and optional calendar entries without rebuilding them in multiple places.",
    accent: "05",
  },
  {
    title: "AI-assisted writing",
    body: "Generate reflection and manifestation text when you want momentum, while still keeping the core experience centered on your own moments.",
    accent: "06",
  },
] as const;

const panelVariants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      delayChildren: 0.05,
      staggerChildren: 0.045,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.99,
    transition: {
      duration: 0.18,
      ease: [0.4, 0, 1, 1],
      when: "afterChildren",
      staggerDirection: -1,
      staggerChildren: 0.02,
    },
  },
} as const;

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.22,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: {
      duration: 0.14,
      ease: [0.4, 0, 1, 1],
    },
  },
} as const;

export function FeaturesModal({ isOpen, onClose }: FeaturesModalProps) {
  const prefersReducedMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const modalVariants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.14 } },
        exit: { opacity: 0, transition: { duration: 0.12 } },
      }
    : panelVariants;

  const cardVariants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.12 } },
        exit: { opacity: 0, transition: { duration: 0.1 } },
      }
    : itemVariants;

  return (
    <AnimatePresence initial={false}>
      {isOpen ? (
        <div className="moments-features-modal-root fixed inset-0 z-50">
          <motion.button
            key="backdrop"
            type="button"
            aria-label="Close feature overview"
            className="moments-features-modal-backdrop absolute inset-0 bg-[rgba(7,16,24,0.46)] backdrop-blur-[18px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.12 : 0.2, ease: "easeOut" }}
            onClick={onClose}
          />

          <div className="moments-features-modal-shell relative z-10 flex min-h-full items-end justify-center p-4 md:items-center md:p-8">
            <motion.section
              key="panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="moments-features-title"
              aria-describedby="moments-features-description"
              className="moments-features-modal-panel relative w-full max-w-[920px] overflow-hidden rounded-[34px] border border-[rgba(255,255,255,0.6)] bg-[linear-gradient(180deg,rgba(255,255,255,0.97)_0%,rgba(242,249,252,0.96)_100%)] p-5 text-black shadow-[0_30px_110px_rgba(10,25,32,0.22)] md:p-8"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
            >
              <div
                aria-hidden="true"
                className="moments-features-modal-glow pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(19,182,255,0.18),transparent_62%)]"
              />

              <div className="moments-features-modal-header relative flex flex-col gap-6 border-b border-[rgba(13,40,52,0.08)] pb-6">
                <div className="moments-features-modal-topline flex items-start justify-between gap-4">
                  <div className="moments-features-modal-intro flex flex-col gap-3">
                    <span className="moments-features-modal-kicker inline-flex w-fit rounded-full bg-[rgba(0,185,255,0.12)] px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#007cad]">
                      Feature Overview
                    </span>
                    <div className="moments-features-modal-copy flex max-w-[620px] flex-col gap-3">
                      <h2 id="moments-features-title" className="text-[30px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[42px]">
                        What&apos;s inside Moments
                      </h2>
                      <p id="moments-features-description" className="max-w-[620px] text-[15px] leading-[1.55] text-[#52636b] md:text-[17px]">
                        A calmer iPhone experience for anticipating the future, honoring the past, and keeping meaningful dates visible in the places you already look.
                      </p>
                    </div>
                  </div>

                  <motion.button
                    ref={closeButtonRef}
                    type="button"
                    aria-label="Close feature overview"
                    className="moments-features-modal-close inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(13,40,52,0.08)] bg-white/80 text-[22px] leading-none text-[#0c1e27] shadow-[0_8px_30px_rgba(12,30,39,0.08)]"
                    whileHover={prefersReducedMotion ? undefined : { scale: 1.04, y: -1 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
                    transition={{ type: "spring" as const, stiffness: 360, damping: 28, mass: 0.7 }}
                    onClick={onClose}
                  >
                    <span aria-hidden="true">×</span>
                  </motion.button>
                </div>

                <motion.div className="moments-features-modal-chips flex flex-wrap gap-2" variants={cardVariants}>
                  {["Countdowns", "Reflections", "Manifestation", "Widgets", "Calendar sync", "AI writing"].map((chip) => (
                    <span
                      key={chip}
                      className="moments-features-modal-chip inline-flex rounded-full border border-[rgba(0,123,173,0.12)] bg-white/72 px-3 py-1.5 text-[12px] font-medium tracking-[0.01em] text-[#0f516b]"
                    >
                      {chip}
                    </span>
                  ))}
                </motion.div>
              </div>

              <motion.div
                className="moments-features-modal-grid relative mt-6 grid gap-3 md:mt-7 md:grid-cols-2"
                initial={false}
              >
                {featureItems.map((feature) => (
                  <motion.article
                    key={feature.title}
                    className="moments-features-card rounded-[24px] border border-[rgba(13,40,52,0.08)] bg-white/80 p-5 shadow-[0_10px_35px_rgba(12,30,39,0.05)]"
                    variants={cardVariants}
                  >
                    <div className="moments-features-card-index mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#00a5df]">
                      {feature.accent}
                    </div>
                    <h3 className="moments-features-card-title text-[20px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#071923]">
                      {feature.title}
                    </h3>
                    <p className="moments-features-card-body mt-3 text-[14px] leading-[1.55] text-[#5b6970] md:text-[15px]">
                      {feature.body}
                    </p>
                  </motion.article>
                ))}
              </motion.div>
            </motion.section>
          </div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
