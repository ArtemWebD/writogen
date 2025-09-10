import { Box, Typography } from "@mui/material";
import { memo, type FC } from "react";
import type { IProduct } from "../../App";
import BaseIconButton from "../base/base-button/BaseIconButton";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

interface IProps {
  product: IProduct;
  onDelete: (id: number) => void;
}

const CartProduct: FC<IProps> = ({ product, onDelete }) => {
  return (
    <Box display={"flex"} className="p-2 items-center gap-4">
      <Box className="w-[70px] h-[70px] rounded overflow-hidden">
        <img
          src={product.image}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </Box>
      <Box>
        <Typography className="!text-black-color !font-bold">
          {product.title}
        </Typography>
        <Typography className="!text-sm !mt-1">От {product.price} ₽</Typography>
      </Box>
      <BaseIconButton className="!ml-auto" onClick={() => onDelete(product.id)}>
        <CancelOutlinedIcon />
      </BaseIconButton>
    </Box>
  );
};

export default memo(CartProduct);
