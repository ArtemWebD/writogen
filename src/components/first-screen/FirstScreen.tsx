import { Box, Container, Typography } from "@mui/material";
import { memo } from "react";
import BaseAnimatedText from "../base/base-animations/BaseAnimatedText";
import BaseButton from "../base/base-button/BaseButton";
import { GLOBAL_ANIMATION_DELAY, GLOBAL_ANIMATION_DURATION } from "../../const";

const FirstScreen = () => {
  return (
    <Box
      width={"100%"}
      height={"100vh"}
      className="bg-[url(/images/first-screen/bg.webp)] bg-cover bg-center bg-no-repeat !relative before:!absolute before:w-full before:h-full before:!bg-[rgba(255,255,255,0.65)]"
    >
      <Container className="flex flex-col items-start justify-center w-full h-full relative z-1">
        <Typography
          variant="h1"
          fontWeight={"bold"}
          className="!text-main-color !text-[3.2rem]"
        >
          IT-решения,
          <br /> приносящие прибыль
        </Typography>
        <Typography className="!text-xl !mt-9 !inline-block">
          Вам пригодится наш опыт
        </Typography>
        <Typography className="!text-xl !flex gap-2">
          в{" "}
          <BaseAnimatedText
            text="цифровизации бизнес-процессов"
            delay={0.5 + GLOBAL_ANIMATION_DURATION + GLOBAL_ANIMATION_DELAY}
          />
        </Typography>
        <BaseButton
          size="large"
          className="!mt-9 !text-xl !pt-4 !pb-4 !pl-[4rem] !pr-[4rem]"
        >
          Выбрать решение
        </BaseButton>
      </Container>
    </Box>
  );
};

export default memo(FirstScreen);
