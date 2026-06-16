import { type FC } from "react";

interface labelProp {
  label?: string;
  styles?: string;
}

const Label: FC<labelProp> = ({ label = "", styles = "" }) => {
  return (
    <label className={`block text-sm font-medium text-gray-700 mb-1 ${styles}`}>
      {label}
    </label>
  );
};

export default Label;
