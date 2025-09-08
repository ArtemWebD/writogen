import { Box, IconButton, Modal, Typography } from "@mui/material";
import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type FC,
} from "react";
import type { IProduct } from "../../App";
import CartProduct from "./CartProduct";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CartForm from "./CartForm";
import BaseButton from "../base/base-button/BaseButton";
import { motion } from "framer-motion";

interface IProps {
  open: boolean;
  products: IProduct[];
  onClose: () => void;
  onDelete: (id: number) => void;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  maxWidth: "100%",
  bgcolor: "var(--color-white-color)",
  boxShadow: 24,
  p: 4,
};

const CartModal: FC<IProps> = ({ open, products, onClose, onDelete }) => {
  const [submited, setSubmited] = useState(false);

  const totalPrice = useMemo(
    () =>
      products.reduce((acc, value) => {
        acc += value.price;
        return acc;
      }, 0),
    [products]
  );

  const changeSubmited = useCallback(() => setSubmited(true), [setSubmited]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (submited) {
        setSubmited(false);
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, [submited, setSubmited]);

  return (
    <Modal open={open}>
      <>
        {products.length ? (
          <Box sx={style}>
            <Typography className="!text-main-color !text-2xl !font-bold">
              Услуги:
            </Typography>
            <Box
              display={"flex"}
              className="mt-7 flex-col gap-3 border-t border-b border-gray-color"
            >
              {products.map((product, i) => (
                <CartProduct key={i} product={product} onDelete={onDelete} />
              ))}
            </Box>
            <Box className="mt-9">
              <CartForm onSubmit={changeSubmited} />
              <Box display={"flex"} className="justify-end mt-5">
                <Typography className="!text-black-color !font-bold">
                  Итого: {totalPrice} ₽
                </Typography>
              </Box>
              {submited && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="flex justify-center items-center w-full pt-9 pb-9 bg-green-500 mt-5 rounded"
                >
                  <Typography className="!text-2xl !text-white-color">
                    Заявка успешно отправлена
                  </Typography>
                </motion.div>
              )}
              <BaseButton
                className="!mt-5 !pt-3 !pb-3 !pl-9 !pr-9 w-full"
                type="submit"
                form="cartForm"
              >
                Заказать
              </BaseButton>
            </Box>
          </Box>
        ) : (
          <Box
            sx={style}
            display={"flex"}
            className="!p-[8rem] justify-center items-center"
          >
            <Typography className="!text-4xl !text-black-color text-center">
              Корзина пуста
            </Typography>
          </Box>
        )}
        <IconButton className="!absolute top-2 right-2" onClick={onClose}>
          <CancelOutlinedIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </>
    </Modal>
  );
};

export default memo(CartModal);
