import { Box, Container, Link, Typography } from "@mui/material";
import { memo } from "react";
import BaseH2 from "../base/base-title/BaseH2";
import BaseH3 from "../base/base-title/BaseH3";
import PhoneButton from "../phone-button/PhoneButton";
import { motion } from "framer-motion";
import ContactsForm from "./ContactsForm";
import useIntersection from "../../hooks/intersection/useIntersection";

const ContactsSection = () => {
  const { isIntersecting, ref } = useIntersection({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <Box className="bg-white-color pt-[6rem] pb-[6rem]" id="contacts">
      <Container>
        <BaseH2 className="text-center">
          Не нашли интересующей информации?
        </BaseH2>
        <BaseH3 className="!mt-[4rem] !text-center">
          Готовы ответить на все вопросы, связанные <br />с разработкой
          информационных систем
        </BaseH3>
        <Box
          display={"flex"}
          className="items-start justify-between flex-col lg:flex-row gap-9 lg:gap-5 mt-[4rem]"
        >
          <Box className="w-full text-center lg:text-start" ref={ref}>
            <PhoneButton className="!text-3xl" />
            <Link href="mailto:ip.shadrin@list.ru" className="!no-underline">
              <Typography className="!text-3xl !mt-2">
                ip.shadrin@list.ru
              </Typography>
            </Link>
            <Typography className="!text-lg !mt-9">
              Юридический адрес:
              <br />
              Челябинская область г. Коркино ул.Мира д.9 кв.92
            </Typography>
          </Box>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={
              isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <ContactsForm />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default memo(ContactsSection);
