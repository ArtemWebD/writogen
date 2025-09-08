import { Box, Container, Typography } from "@mui/material";
import { memo } from "react";
import LogoBox from "../logo/LogoBox";

const Footer = () => {
  return (
    <Box className="w-full pt-9 pb-9 bg-black-color">
      <Container>
        <Box
          display={"flex"}
          className="justify-between items-start sm:items-center gap-5 sm:gap-0 flex-col sm:flex-row"
        >
          <LogoBox className="!text-white-color" />
          <Typography className="!text-white-color">© 2025 Writogen</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default memo(Footer);
