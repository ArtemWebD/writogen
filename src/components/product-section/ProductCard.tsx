import { Box, Card, CardContent, Typography } from "@mui/material";
import { memo, useCallback, useState, type FC } from "react";
import BaseButton from "../base/base-button/BaseButton";
import clsx from "clsx";
import useIntersection from "../../hooks/intersection/useIntersection";
import { motion } from "framer-motion";
import type { IProduct } from "../../App";

interface IProps {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  animationDelay?: number;
  onAddProduct?: (product: IProduct) => void;
}

const ProductCard: FC<IProps> = ({
  title,
  imageUrl,
  description,
  price,
  id,
  animationDelay = 0,
  onAddProduct,
}) => {
  const [hover, setHover] = useState(false);

  const { isIntersecting, ref } = useIntersection<HTMLDivElement>({
    threshold: 0.4,
    triggerOnce: true,
  });

  const addProduct = useCallback(() => {
    if (onAddProduct) {
      onAddProduct({ title, image: imageUrl, price, id });
    }
  }, [onAddProduct, title, imageUrl, price, id]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
      transition={{ duration: 0.6, delay: animationDelay }}
      className="w-full xl:w-[560px]"
    >
      <Card
        className={`w-full xl:w-[560px] h-[359px] !pt-5 !pl-4 !pb-5 !cursor-pointer max-w-full bg-cover bg-centet no-repeat relative before:absolute before:left-0 before:top-0 before:w-full before:h-full before:inset-0 before:bg-[rgba(54,54,54,0.6)]`}
        style={{ backgroundImage: `url(${imageUrl})` }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        ref={ref}
      >
        <CardContent
          className={clsx(
            "!relative !z-1 w-full h-full !flex !flex-col transition-transform duration-400",
            hover ? "xl:!translate-y-0" : "xl:!translate-y-[55%]"
          )}
        >
          <Typography className="!text-3xl xl:!text-4xl !font-bold w-full pb-5 xl:!h-[120px] xl:p-0 border-b border-main-color">
            <span className="inline-block !max-w-[206px] !text-white-color">
              {title}
            </span>
          </Typography>
          <Typography
            className={clsx(
              "!text-white-color xl:!text-lg pt-5 xl:h-[90px] xl:p-0 !flex items-end transition-opacity duration-500",
              hover ? "xl:!opacity-100" : "xl:!opacity-0"
            )}
          >
            {description}
          </Typography>
          <Box
            className={clsx(
              "!mt-auto transition-opacity duration-500",
              hover ? "xl:!opacity-100" : "xl:!opacity-0"
            )}
          >
            <BaseButton
              className="!pt-2 !pb-2 !pl-5 !pr-5 !text-xl"
              onClick={addProduct}
            >
              Заказать от{" "}
              <span className="!font-bold !text-white-color !text-xl ml-2">
                {price} ₽
              </span>
            </BaseButton>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default memo(ProductCard);
