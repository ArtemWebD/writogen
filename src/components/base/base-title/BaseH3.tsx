import { Typography, type TypographyProps } from "@mui/material";
import clsx from "clsx";
import { memo, type FC } from "react";

const BaseH3: FC<TypographyProps> = ({ children, className, ...props }) => {
  return (
    <Typography
      variant="h3"
      className={clsx("!text-2xl !font-normal", className)}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default memo(BaseH3);
