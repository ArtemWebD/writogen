import { Box } from "@mui/material";
import { memo, type FC } from "react";
import Logo from "./Logo";
import LogoTitle from "./LogoTitle";
import { motion } from "framer-motion";

interface IProps {
  animate?: boolean;
  className?: string;
}

const LogoBox: FC<IProps> = ({ animate, className }) => {
  return (
    <Box display={"flex"} gap={"0.5rem"} alignItems={"center"}>
      {animate ? (
        <>
          <motion.div
            initial={{ y: "-1rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Logo />
          </motion.div>
          <motion.span
            initial={{ maxWidth: 0 }}
            animate={{ maxWidth: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ overflow: "hidden" }}
          >
            <LogoTitle className={className} />
          </motion.span>
        </>
      ) : (
        <>
          <Logo />
          <LogoTitle className={className} />
        </>
      )}
    </Box>
  );
};

export default memo(LogoBox);
