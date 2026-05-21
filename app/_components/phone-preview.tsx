"use client";

import Image from "next/image";
import { hover } from "motion";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

type PhonePreviewProps = {
  variant: "desktop" | "mobile";
};

const previewConfig = {
  desktop: {
    wrapperWidth: 351,
    wrapperHeight: 692,
    phoneWidth: 310,
    phoneHeight: 674,
    phoneShadow: "10px 24px 64px rgba(0, 0, 0, 0.12)",
    maxRotateX: 8,
    maxRotateY: 10,
    maxShiftX: 10,
    maxShiftY: 12,
    maxLift: 24,
  },
  mobile: {
    wrapperWidth: 1108,
    wrapperHeight: 1452,
    phoneWidth: 1108,
    phoneHeight: 1452,
    phoneAspectRatio: "1108 / 1452",
    phoneShadow: "none",
    maxRotateX: 0,
    maxRotateY: 0,
    maxShiftX: 0,
    maxShiftY: 0,
    maxLift: 0,
  },
} as const;

const hoverSpring = {
  stiffness: 190,
  damping: 24,
  mass: 0.72,
  restDelta: 0.001,
};

const scaleSpring = {
  stiffness: 220,
  damping: 28,
  mass: 0.8,
  restDelta: 0.001,
};

export function PhonePreview({ variant }: PhonePreviewProps) {
  const isDesktop = variant === "desktop";
  const config = previewConfig[variant];
  const frameRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const liftZ = useMotionValue(0);
  const hoverScale = useMotionValue(0);
  const baseScale = useMotionValue(1);
  const smoothOffsetX = useSpring(offsetX, hoverSpring);
  const smoothOffsetY = useSpring(offsetY, hoverSpring);
  const smoothRotateX = useSpring(rotateX, hoverSpring);
  const smoothRotateY = useSpring(rotateY, hoverSpring);
  const smoothLiftZ = useSpring(liftZ, hoverSpring);
  const smoothHoverScale = useSpring(hoverScale, scaleSpring);
  const smoothBaseScale = useSpring(baseScale, scaleSpring);
  const layerScale = useTransform(() => smoothBaseScale.get() * (1 + smoothHoverScale.get()));
  const baseRotate = isDesktop ? "3.58deg" : "0deg";
  const layerTransform = useMotionTemplate`translate3d(${smoothOffsetX}px, ${smoothOffsetY}px, ${smoothLiftZ}px) rotateX(${smoothRotateX}deg) rotateY(${smoothRotateY}deg) rotate(${baseRotate}) scale(${layerScale})`;

  useEffect(() => {
    const resetMotion = () => {
      offsetX.set(0);
      offsetY.set(0);
      rotateX.set(0);
      rotateY.set(0);
      liftZ.set(0);
      hoverScale.set(0);
    };

    const node = frameRef.current;

    if (!node || variant !== "desktop" || prefersReducedMotion) {
      resetMotion();
      return;
    }

    const updateFromPointer = (event: PointerEvent) => {
      const bounds = node.getBoundingClientRect();
      const relativeX = (event.clientX - bounds.left) / bounds.width;
      const relativeY = (event.clientY - bounds.top) / bounds.height;
      const centeredX = relativeX * 2 - 1;
      const centeredY = relativeY * 2 - 1;
      const edgeBias = Math.min(1, Math.hypot(centeredX, centeredY));

      offsetX.set(centeredX * config.maxShiftX);
      offsetY.set(centeredY * config.maxShiftY);
      rotateX.set(-centeredY * config.maxRotateX);
      rotateY.set(centeredX * config.maxRotateY);
      liftZ.set(config.maxLift - edgeBias * 4);
      hoverScale.set(0.018);
    };

    return hover(node, (_, startEvent) => {
      updateFromPointer(startEvent);

      const handlePointerMove = (event: PointerEvent) => {
        updateFromPointer(event);
      };

      node.addEventListener("pointermove", handlePointerMove, { passive: true });

      return () => {
        node.removeEventListener("pointermove", handlePointerMove);
        resetMotion();
      };
    });
  }, [
    config.maxLift,
    config.maxRotateX,
    config.maxRotateY,
    config.maxShiftX,
    config.maxShiftY,
    hoverScale,
    liftZ,
    offsetX,
    offsetY,
    prefersReducedMotion,
    rotateX,
    rotateY,
    variant,
  ]);

  return (
    <div
      ref={frameRef}
      className="phone-preview-frame relative shrink-0"
      style={isDesktop ? {
        height: "min(77dvh, 1107px)",
        width: "calc(min(77dvh, 1107px) * (351 / 692))",
        perspective: "1400px",
      } : {
        width: "90vw",
        maxWidth: "362px",
        aspectRatio: `${config.wrapperWidth} / ${config.wrapperHeight}`,
      }}
    >
      <div className="phone-preview-stage absolute inset-0 flex items-center justify-center">
        <motion.div
          className="phone-preview-motion-layer"
          style={{
            transform: layerTransform,
            transformStyle: "preserve-3d",
            willChange: isDesktop ? "transform" : undefined,
          }}
          initial={false}
        >
          {isDesktop ? (
            <video
              src="/moments-preview.mp4"
              poster="/phone-preview-figma.png"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-label="Moments phone preview video"
              className="phone-preview-video block object-cover"
              style={{
                height: "min(75dvh, 1078px)",
                width: "auto",
                aspectRatio: "310 / 674",
                borderRadius: "min(5.56dvh, 80px)",
                boxShadow: config.phoneShadow,
              }}
            />
          ) : (
            <Image
              src="/moments-preview-mobile.png"
              alt="Grid of Moments cards previewing the app"
              width={1108}
              height={1452}
              priority
              sizes="(max-width: 1023px) 90vw, 320px"
              className="block h-auto w-[154.69vw] max-w-[550px]"
            />
          )}
        </motion.div>
      </div>
    </div>
  );
}
