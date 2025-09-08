import { FormControl, FormHelperText, Typography } from "@mui/material";
import {
  memo,
  useCallback,
  useState,
  type ChangeEvent,
  type FC,
  type FormEvent,
} from "react";
import BaseInput from "../base/base-input/BaseInput";
import { withMask } from "use-mask-input";

interface IProps {
    onSubmit: () => void;
}

const CartForm: FC<IProps> = ({ onSubmit }) => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

  const handlePhoneChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPhone(e.target.value);
    },
    [setPhone]
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (phone.length !== 18) {
      setError(true);
    } else {
        onSubmit();
      setError(false);
      setPhone("");
    }
  }

  return (
    <form onSubmit={handleSubmit} id="cartForm">
      <FormControl className="w-full">
        <Typography className="pl-1">Ваш номер телефона:</Typography>
        <BaseInput
          type="tel"
          ref={withMask("+7 (999) 999-99-99")}
          placeholder="+7 (999) 999-99-99"
          value={phone}
          className="mt-1"
          onChange={handlePhoneChange}
        />
        {error && (
          <FormHelperText className="!text-red-500 !font-bold">
            Обязательное поле
          </FormHelperText>
        )}
      </FormControl>
    </form>
  );
};

export default memo(CartForm);
