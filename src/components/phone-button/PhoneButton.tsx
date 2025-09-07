import { Link, Typography, type TypographyProps } from "@mui/material";
import { memo, type FC } from "react";

const PhoneButton: FC<TypographyProps> = (props) => {
  return (
    <Link href="tel:+79128089519" className="!no-underline">
      <Typography {...props}>+7 (912) 808-95-19</Typography>
    </Link>
  );
};

export default memo(PhoneButton);
