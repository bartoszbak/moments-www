"use client";

import { hover } from "motion";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

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
    wrapperWidth: 213,
    wrapperHeight: 420,
    phoneWidth: 188,
    phoneHeight: 409,
    phoneShadow: "6.073px 14.575px 38.868px rgba(0, 0, 0, 0.12)",
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
  const config = previewConfig[variant];
  const frameRef = useRef<HTMLDivElement>(null);
  const [desktopScale, setDesktopScale] = useState(1);
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
  const layerTransform = useMotionTemplate`translate3d(${smoothOffsetX}px, ${smoothOffsetY}px, ${smoothLiftZ}px) rotateX(${smoothRotateX}deg) rotateY(${smoothRotateY}deg) rotate(3.58deg) scale(${layerScale})`;

  useEffect(() => {
    if (variant === "desktop") {
      baseScale.set(desktopScale);
      return;
    }

    baseScale.jump(1);
  }, [baseScale, desktopScale, variant]);

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

  useEffect(() => {
    const node = frameRef.current;

    if (!node || variant !== "desktop") {
      setDesktopScale(1);
      return;
    }

    const container = node.parentElement;

    if (!container) {
      setDesktopScale(1);
      return;
    }

    const updateScale = () => {
      const bounds = container.getBoundingClientRect();
      const availableWidth = Math.max(bounds.width - 48, config.wrapperWidth);
      const availableHeight = Math.max(bounds.height - 48, config.wrapperHeight);
      const nextScale = Math.min(
        1.28,
        Math.max(1, Math.min(availableWidth / config.wrapperWidth, availableHeight / config.wrapperHeight)),
      );

      setDesktopScale((currentScale) => (Math.abs(currentScale - nextScale) < 0.01 ? currentScale : nextScale));
    };

    updateScale();

    const resizeObserver = new ResizeObserver(() => {
      updateScale();
    });

    resizeObserver.observe(container);
    window.addEventListener("resize", updateScale);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, [config.wrapperHeight, config.wrapperWidth, variant]);

  const previewScale = variant === "desktop" ? desktopScale : 1;

  return (
    <div
      ref={frameRef}
      className="phone-preview-frame relative shrink-0"
      style={{
        width: `${config.wrapperWidth * previewScale}px`,
        height: `${config.wrapperHeight * previewScale}px`,
        perspective: variant === "desktop" ? "1400px" : undefined,
      }}
    >
      <div className="phone-preview-stage absolute inset-0 flex items-center justify-center">
        <motion.div
          className="phone-preview-motion-layer"
          style={{
            transform: layerTransform,
            transformStyle: "preserve-3d",
            willChange: variant === "desktop" ? "transform" : undefined,
          }}
          initial={false}
        >
          <video
            src="/moments-preview.mp4"
            poster="/phone-preview-figma.png"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-label="Moments phone preview video"
            className="phone-preview-video block h-auto w-auto object-cover"
            style={{
              width: `${config.phoneWidth}px`,
              height: `${config.phoneHeight}px`,
              boxShadow: config.phoneShadow,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
