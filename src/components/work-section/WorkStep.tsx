import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { memo, type FC, type ReactNode } from "react";

interface IProps {
  isIntersecting?: boolean;
  animationDelay?: number;
  children: ReactNode[];
  image: string;
}

const WorkStep: FC<IProps> = ({
  image,
  children,
  isIntersecting,
  animationDelay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ delay: animationDelay, duration: 0.75 }}
      className="flex flex-col items-center justify-start gap-4 w-[280px]"
    >
      <Box className="w-[113px] h-[113px] rounded-full border overflow-hidden">
        <img src={image} alt="Work" className="w-full h-full object-cover" />
      </Box>
      <Typography
        className="!text-black-color !font-bold text-center"
        style={{ whiteSpace: "pre-wrap" }}
      >
        {children[0]}
      </Typography>
      <Typography className="text-center !text-[0.9rem]">
        {children[1]}
      </Typography>
    </motion.div>
  );
};

export default memo(WorkStep);
