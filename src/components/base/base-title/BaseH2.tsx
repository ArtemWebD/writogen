import { Typography, type TypographyProps } from "@mui/material";
import clsx from "clsx";
import { memo, type FC } from "react";

const BaseH2: FC<TypographyProps> = ({ children, className, ...props }) => {
  return (
    <Typography
      variant="h2"
      className={clsx("!text-main-color !text-4xl !font-bold", className)}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default memo(BaseH2);
