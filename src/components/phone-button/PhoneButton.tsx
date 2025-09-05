import { Link, Typography } from "@mui/material";
import { memo } from "react";

const PhoneButton = () => {
  return (
    <Link href="tel:+79128089519" className="!no-underline">
      <Typography>+7 (912) 808-95-19</Typography>
    </Link>
  );
};

export default memo(PhoneButton);
