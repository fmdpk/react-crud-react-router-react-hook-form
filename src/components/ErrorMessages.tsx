import type { FC } from "react";
import type { FieldErrors } from "react-hook-form";
import type { IFormInput } from "./ReactHookForm";

interface ErrorMessageProp {
  errors: FieldErrors<IFormInput>;
  field: string;
}

export const ErrorMessages: FC<ErrorMessageProp> = ({ errors, field }) => {
  return (
    <>
      {errors[field] && (
        <p className="text-red-500 text-sm mt-2">{errors[field].message}</p>
      )}
    </>
  );
};
