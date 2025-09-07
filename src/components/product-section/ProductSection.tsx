import { Box, Container, Grid } from "@mui/material";
import { memo } from "react";
import BaseH2 from "../base/base-title/BaseH2";
import BaseH3 from "../base/base-title/BaseH3";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  return (
    <Box className="bg-white-color pt-[6rem] pb-[6rem]">
      <Container className="!flex flex-col justify-center items-center">
        <BaseH2 className="text-center">
          Эксперты в цифровизации процессов
        </BaseH2>
        <BaseH3 className="!mt-[4rem] !text-center">
          Используем современные технологии для решения
          <br /> бизнес-задач клиентов
        </BaseH3>
        <Grid
          container
          spacing={4}
          justifyContent={"space-between"}
          alignContent={"center"}
          justifyItems={"center"}
          className="!mt-[4rem]"
        >
          <ProductCard
            title="Мобильные приложения"
            imageUrl="/images/products/1.webp"
            price={3000}
            description="Которые сократят расходы в производственных процессах и увеличат лояльность конечных покупателей"
          />
          <ProductCard
            title="Корпоративные приложения"
            imageUrl="/images/products/2.webp"
            price={5000}
            description="1С, SAP, самописные системы - всё на одном экране. Создаем единую внутреннюю среду в компаниях"
            animationDelay={0.15}
          />
          <ProductCard
            title="AR и VR приложения"
            imageUrl="/images/products/3.webp"
            price={4000}
            description="Для диагностики и управления промышленным оборудованием, адресного хранения на складах"
            animationDelay={0.3}
          />
          <ProductCard
            title="Индивидуальная разработка"
            imageUrl="/images/products/4.webp"
            price={1000}
            description="Готовы создать программное обеспечение для различного вида устройств"
            animationDelay={0.45}
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default memo(ProductSection);
