import { Typography } from "@mui/material";
import clsx from "clsx";
import { memo, type FC } from "react";

interface IProps {
  className?: string;
}

const LogoTitle: FC<IProps> = ({ className }) => {
  return (
    <Typography className={clsx("!text-[2rem] !font-bold", className)}>
      Writogen
    </Typography>
  );
};

export default memo(LogoTitle);
