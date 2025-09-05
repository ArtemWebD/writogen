import { Button } from "@mui/material";
import { memo, type FC, type ReactNode } from "react";

interface IProps {
  children?: ReactNode | ReactNode[];
}

const BaseButton: FC<IProps> = ({ children }) => {
  return (
    <Button
      variant="contained"
      className="!bg-main-color !text-white-color !normal-case"
    >
      {children}
    </Button>
  );
};

export default memo(BaseButton);
