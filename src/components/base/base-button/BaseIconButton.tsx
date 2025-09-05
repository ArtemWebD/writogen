import { IconButton, type IconButtonProps } from "@mui/material";
import { memo, type FC } from "react";

const BaseIconButton: FC<IconButtonProps> = ({ children, ...props }) => {
  return <IconButton {...props}>{children}</IconButton>;
};

export default memo(BaseIconButton);
