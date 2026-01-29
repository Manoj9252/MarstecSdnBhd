import { useRef, ReactNode, useEffect, useState } from "react";
import { motion, useInView, Variants, useScroll, useTransform, useSpring } from "framer-motion";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  variant?: "fadeUp" | "fadeLeft" | "fadeRight" | "scale" | "stagger" | "reveal" | "blur" | "rotate3D" | "slideReveal";
  delay?: number;
  duration?: number;
  once?: boolean;
}

const variants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  stagger: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  reveal: {
    hidden: { opacity: 0, y: 100, rotateX: -15 },
    visible: { opacity: 1, y: 0, rotateX: 0 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
  rotate3D: {
    hidden: { opacity: 0, rotateY: -30, x: -50 },
    visible: { opacity: 1, rotateY: 0, x: 0 },
  },
  slideReveal: {
    hidden: { opacity: 0, x: -100, skewX: -10 },
    visible: { opacity: 1, x: 0, skewX: 0 },
  },
};

export function ScrollAnimation({
  children,
  className = "",
  variant = "fadeUp",
  delay = 0,
  duration = 0.7,
  once = true,
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-20px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function Parallax({ children, className = "", speed = 0.5 }: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
}

interface CounterProps {
  value: string;
  className?: string;
  duration?: number;
}

export function AnimatedCounter({ value, className = "", duration = 2 }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericPart = value.match(/\d+/)?.[0];
    const prefix = value.match(/^[^\d]*/)?.[0] || "";
    const suffix = value.match(/[^\d]*$/)?.[0] || "";

    if (!numericPart) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseInt(numericPart, 10);
    const steps = 40;
    const stepDuration = (duration * 1000) / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += targetNum / steps;
      if (current >= targetNum) {
        setDisplayValue(`${prefix}${targetNum}${suffix}`);
        clearInterval(timer);
      } else {
        setDisplayValue(`${prefix}${Math.floor(current)}${suffix}`);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {displayValue}
    </motion.span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const words = text.split(" ");

  return (
    <motion.span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex mr-2">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 20, rotateX: -90 }}
              transition={{
                duration: 0.4,
                delay: delay + wordIndex * 0.1 + charIndex * 0.03,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{ display: "inline-block", transformOrigin: "bottom" }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function Magnetic({ children, className = "", strength = 0.3 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ClipRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "top" | "bottom";
  delay?: number;
}

export function ClipReveal({ children, className = "", direction = "left", delay = 0 }: ClipRevealProps) {
  const ref = useRef(null);
  // FIX: Reduced margin from -100px to -20px to make it reveal sooner
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  const clipPaths = {
    left: {
      hidden: "inset(0% 100% 0% 0%)",
      visible: "inset(0% 0% 0% 0%)",
    },
    right: {
      hidden: "inset(0% 0% 0% 100%)",
      visible: "inset(0% 0% 0% 0%)",
    },
    top: {
      hidden: "inset(0% 0% 100% 0%)",
      visible: "inset(0% 0% 0% 0%)",
    },
    bottom: {
      hidden: "inset(100% 0% 0% 0%)",
      visible: "inset(0% 0% 0% 0%)",
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: clipPaths[direction].hidden, opacity: 0 }}
      animate={
        isInView
          ? { clipPath: clipPaths[direction].visible, opacity: 1 }
          : { clipPath: clipPaths[direction].hidden, opacity: 0 }
      }
      transition={{ duration: 0.8, delay, ease: [0.65, 0, 0.35, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScaleOnScrollProps {
  children: ReactNode;
  className?: string;
}

export function ScaleOnScroll({ children, className = "" }: ScaleOnScrollProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className={className}>
      {children}
    </motion.div>
  );
}

interface FloatingProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
}

export function Floating({ children, className = "", duration = 3, distance = 10 }: FloatingProps) {
  return (
    <motion.div
      animate={{
        y: [-distance, distance, -distance],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface GlowPulseProps {
  children: ReactNode;
  className?: string;
  color?: string;
}

export function GlowPulse({ children, className = "", color = "var(--copper)" }: GlowPulseProps) {
  return (
    <motion.div
      animate={{
        boxShadow: [
          `0 0 20px 0px ${color}40`,
          `0 0 40px 10px ${color}60`,
          `0 0 20px 0px ${color}40`,
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}