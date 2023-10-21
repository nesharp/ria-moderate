'use client'
import classNames from "classnames";
export const Button = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <button
      type="submit"
      className={classNames(
        className,
        "bg-green-500 py-2 rounded-md px-10 text-white font-normal mt-2 ml-0"
      )}
    >
      {children}
    </button>
  );
};
