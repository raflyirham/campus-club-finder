import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...classes) => {
  return twMerge(clsx(classes));
};

const valueOrDefault = (value, defaultValue) => {
  return value || defaultValue;
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export { cn, valueOrDefault, formatDate };
