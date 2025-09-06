import { motion, type MotionProps } from "framer-motion";
import { memo, type FC } from "react";

interface IProps extends MotionProps {
  text: string;
  className?: string;
  delay?: number;
}

const BaseAnimatedText: FC<IProps> = ({ text, className, delay, ...props }) => {
  const typingAnimation = {
    hidden: {
      maxWidth: 0,
    },
    visible: {
      maxWidth: "100%", // или используйте 'fit-content'
      transition: {
        duration: 2, // Длительность анимации ввода
        delay: delay || 0,
        ease: "linear",
      },
    },
  };

  const cursorAnimation = {
    blink: {
      opacity: [0, 1, 0], // Мерцание курсора
      transition: {
        duration: 0.8, // Длительность мерцания
        repeat: Infinity,
      },
    },
  };

  return (
    <span className="flex items-center">
      <motion.span
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
        variants={typingAnimation}
        initial="hidden"
        animate="visible"
        className="overflow-hidden inline-block !text-main-color"
      >
        {text}
      </motion.span>
      <motion.span
        variants={cursorAnimation}
        animate="blink"
        className="!text-main-color"
      >
        |
      </motion.span>
    </span>
  );
};

export default memo(BaseAnimatedText);
