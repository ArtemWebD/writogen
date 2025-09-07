import { Box, FormControl, FormHelperText, Typography } from "@mui/material";
import {
  memo,
  useCallback,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import BaseInput from "../base/base-input/BaseInput";
import BaseButton from "../base/base-button/BaseButton";
import { withMask } from "use-mask-input";
import { motion } from "framer-motion";

const ContactsForm = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

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
      setSuccess(false);
    } else {
      setError(false);
      setSuccess(true);
      setPhone("");
    }
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <FormControl className="w-full">
        <BaseInput
          type="tel"
          ref={withMask("+7 (999) 999-99-99")}
          placeholder="+7 (999) 999-99-99"
          value={phone}
          onChange={handlePhoneChange}
        />
        {error && (
          <FormHelperText className="!text-red-500 !font-bold">
            Обязательное поле
          </FormHelperText>
        )}
      </FormControl>
      <FormControl className="w-full !mt-5">
        <BaseInput type="text" placeholder="Как к Вам обращаться?" />
      </FormControl>
      {success && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full p-9 bg-green-500 text-center mt-5 rounded-lg"
        >
          <Typography className="!text-2xl !text-white-color">
            Заявка успешно отправлена!
          </Typography>
        </motion.div>
      )}
      <BaseButton className="!mt-9 !pt-3 !pb-3 !pl-9 !pr-9" type="submit">
        Отправить запрос
      </BaseButton>
    </form>
  );
};

export default memo(ContactsForm);
