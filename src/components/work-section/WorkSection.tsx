import { Box, Container } from "@mui/material";
import { memo } from "react";
import BaseH2 from "../base/base-title/BaseH2";
import BaseH3 from "../base/base-title/BaseH3";
import WorkStep from "./WorkStep";
import useIntersection from "../../hooks/intersection/useIntersection";
import { motion } from "framer-motion";

const WorkSection = () => {
  const { isIntersecting, ref } = useIntersection({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <Box className="bg-gray-color pt-[6rem] pb-[6rem]">
      <Container>
        <BaseH2 className="text-center">Как мы работаем</BaseH2>
        <BaseH3 className="!mt-[4rem] !text-center">
          Над цифровой трансформацией бизнеса
          <br />
          наших клиентов
        </BaseH3>
        <Box
          display={"flex"}
          className="flex-col lg:flex-row items-center lg:items-stretch lg:justify-between mt-[4rem]"
          ref={ref}
        >
          <WorkStep
            image="/images/work/1.webp"
            isIntersecting={isIntersecting}
            animationDelay={0}
          >
            <>
              Проводим первичное <br />
              ИТ-обследование
            </>
            <>
              Аналитики формируют карты бизнес-процессов и предлагают
              инструменты автоматизации с обозначением выгод для заказчика
            </>
          </WorkStep>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={
              isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex flex-col lg:flex-row justify-between grow gap-5 pt-[30px] pb-[30px] lg:pt-[50px] lg:pb-0"
          >
            <Box className="w-[4px] h-[4px] bg-text-color rounded-full" />
            <Box className="w-[4px] h-[4px] bg-text-color rounded-full" />
            <Box className="w-[4px] h-[4px] bg-text-color rounded-full" />
            <Box className="w-[4px] h-[4px] bg-text-color rounded-full" />
            <Box className="w-[4px] h-[4px] bg-text-color rounded-full" />
          </motion.div>
          <WorkStep
            image="/images/work/2.webp"
            isIntersecting={isIntersecting}
            animationDelay={0.1}
          >
            <>Согласовываем техническое задание</>
            <>
              Экспертами подготавливается пакет документации, который определяет
              цели и задачи ИТ-проекта, фиксируется стоимость
            </>
          </WorkStep>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={
              isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex flex-col lg:flex-row justify-between grow gap-5 pt-[30px] pb-[30px] lg:pt-[50px] lg:pb-0"
          >
            <Box className="w-[4px] h-[4px] bg-text-color rounded-full" />
            <Box className="w-[4px] h-[4px] bg-text-color rounded-full" />
            <Box className="w-[4px] h-[4px] bg-text-color rounded-full" />
            <Box className="w-[4px] h-[4px] bg-text-color rounded-full" />
            <Box className="w-[4px] h-[4px] bg-text-color rounded-full" />
          </motion.div>
          <WorkStep
            image="/images/work/3.webp"
            isIntersecting={isIntersecting}
            animationDelay={0.2}
          >
            <>Реализуем проект в обозначенные сроки</>
            <>
              При работе с ИТ-проектами мы используем как «жесткую» так и
              «гибкую» методолгию реализации, как желает заказчик
            </>
          </WorkStep>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={
              isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex flex-col lg:flex-row justify-between grow gap-5 pt-[30px] pb-[30px] lg:pt-[50px] lg:pb-0"
          >
            <Box className="w-[4px] h-[4px] bg-text-color rounded-full" />
            <Box className="w-[4px] h-[4px] bg-text-color rounded-full" />
            <Box className="w-[4px] h-[4px] bg-text-color rounded-full" />
            <Box className="w-[4px] h-[4px] bg-text-color rounded-full" />
            <Box className="w-[4px] h-[4px] bg-text-color rounded-full" />
          </motion.div>
          <WorkStep
            image="/images/work/4.webp"
            isIntersecting={isIntersecting}
            animationDelay={0.3}
          >
            <>
              Трансформируем <br />
              бизнес-процессы
            </>
            <>
              После процесса тестирования готового решения мы готовы оказывать
              методологическое и техническое сопровождение
            </>
          </WorkStep>
        </Box>
      </Container>
    </Box>
  );
};

export default memo(WorkSection);
