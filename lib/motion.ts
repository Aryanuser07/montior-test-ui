import type { Variants } from "framer-motion";

// Unified motion constants - Apple/Linear standard curve
export const PREMIUM_EASE = [0.16, 1, 0.3, 1] as const;
export const DURATION_FAST = 0.3;
export const DURATION_NORMAL = 0.6;
export const DURATION_SLOW = 0.9;

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATION_NORMAL,
      ease: PREMIUM_EASE,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION_NORMAL,
      ease: PREMIUM_EASE,
    },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION_NORMAL,
      ease: PREMIUM_EASE,
    },
  },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION_NORMAL,
      ease: PREMIUM_EASE,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const hoverCardVariants: Variants = {
  initial: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.01,
    transition: {
      duration: DURATION_FAST,
      ease: PREMIUM_EASE,
    },
  },
};
