import { AppBar, Box, Toolbar } from "@mui/material";
import { memo, useState } from "react";
import LogoBox from "../logo/LogoBox";
import PhoneButton from "../phone-button/PhoneButton";
import BaseButton from "../base/base-button/BaseButton";
import BaseIconButton from "../base/base-button/BaseIconButton";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="absolute"
      className="header !bg-[rgba(255,255,255,0.5)] !shadow-none"
    >
      <Toolbar>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
          className="pb-4 pt-4 pl-1 pr-1 border-b border-[rgba(233,74,60,0.25)]"
        >
          <LogoBox />
          <Box
            display={"flex"}
            alignItems={"center"}
            className={`!gap-5 absolute botton-0 right-0 !flex-col !translate-y-[100%] ${
              open ? "!translate-x-[0]" : "!translate-x-[100%]"
            } transition-transform duration-500 !bg-white-color !w-screen !pt-5 sm:static sm:!flex-row sm:!translate-y-0 sm:!translate-x-0 sm:!bg-transparent sm:!w-fit sm:!p-0`}
          >
            <PhoneButton />
            <BaseButton>Заказать звонок</BaseButton>
          </Box>
          <BaseIconButton className="sm:!hidden" onClick={() => setOpen(!open)}>
            <AnimatePresence mode="wait">
              {!open ? (
                <motion.span
                  key={"close-burger"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="flex !h-fit"
                >
                  <MenuOutlinedIcon className="!text-[2rem]" />
                </motion.span>
              ) : (
                <motion.span
                  key={"open-burger"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="flex !h-fit"
                >
                  <CloseSharpIcon className="!text-[2rem]" />
                </motion.span>
              )}
            </AnimatePresence>
          </BaseIconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default memo(Header);
