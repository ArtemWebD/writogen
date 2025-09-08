import { Box, Container, Grid } from "@mui/material";
import { memo, type FC } from "react";
import BaseH2 from "../base/base-title/BaseH2";
import BaseH3 from "../base/base-title/BaseH3";
import ProductCard from "./ProductCard";
import type { IProduct } from "../../App";

interface IProps {
  onAddProduct?: (product: IProduct) => void;
}

const ProductSection: FC<IProps> = ({ onAddProduct }) => {
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
            id={1}
            title="Мобильные приложения"
            imageUrl="/images/products/1.webp"
            price={3000}
            description="Которые сократят расходы в производственных процессах и увеличат лояльность конечных покупателей"
            onAddProduct={onAddProduct}
          />
          <ProductCard
            id={2}
            title="Корпоративные приложения"
            imageUrl="/images/products/2.webp"
            price={5000}
            description="1С, SAP, самописные системы - всё на одном экране. Создаем единую внутреннюю среду в компаниях"
            onAddProduct={onAddProduct}
            animationDelay={0.15}
          />
          <ProductCard
            id={3}
            title="AR и VR приложения"
            imageUrl="/images/products/3.webp"
            price={4000}
            description="Для диагностики и управления промышленным оборудованием, адресного хранения на складах"
            onAddProduct={onAddProduct}
            animationDelay={0.3}
          />
          <ProductCard
            id={4}
            title="Индивидуальная разработка"
            imageUrl="/images/products/4.webp"
            price={1000}
            description="Готовы создать программное обеспечение для различного вида устройств"
            onAddProduct={onAddProduct}
            animationDelay={0.45}
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default memo(ProductSection);
