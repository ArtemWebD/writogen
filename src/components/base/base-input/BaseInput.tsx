import clsx from "clsx";
import { memo, type FC, type InputHTMLAttributes } from "react";

const BaseInput: FC<InputHTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  return (
    <input
      {...props}
      className={clsx(
        "w-full border border-main-color rounded-xl pt-3 pb-3 pl-3 pr-3 outline-hidden"
      )}
    />
  );
};

export default memo(BaseInput);
