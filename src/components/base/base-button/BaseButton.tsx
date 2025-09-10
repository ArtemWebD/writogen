import { Button, type ButtonProps } from "@mui/material";
import clsx from "clsx";
import { memo, type FC, type ReactNode } from "react";

interface IProps extends ButtonProps {
  children?: ReactNode | ReactNode[];
}

const BaseButton: FC<IProps> = ({ children, className, ...props }) => {
  return (
    <Button
      variant="contained"
      className={clsx(
        className,
        "!bg-main-color !text-white-color !normal-case"
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default memo(BaseButton);
