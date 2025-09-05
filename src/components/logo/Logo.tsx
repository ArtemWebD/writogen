import { Link } from "@mui/material";
import { memo } from "react";

const Logo = () => {
  return (
    <Link href="/">
      <img src="/images/logo/logo.png" alt="Logo" width={50} />
    </Link>
  );
};

export default memo(Logo);
