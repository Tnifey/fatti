import { createRef, render as preactRender } from "preact";
import classnames from "classnames";
import Select, { SelectProps } from "./select";

export type SelectOptions = Partial<{
  wrapperElement?: "div" | string;
  wrapperClassName?: string;
  replace: boolean;
}> &
  Omit<SelectProps, "parent" | "select" | "isMulti">;

export function createSelect(
  select: HTMLSelectElement,
  options: SelectOptions = {},
) {
  const {
    wrapperElement,
    wrapperClassName,
    replace = true,
    ...props
  } = options;

  const parent = select.parentElement!;
  const className = classnames("fatti__wrapper", wrapperClassName, [
    // @ts-ignore
    ...select.classList.values(),
  ]);

  const parentRef = createRef<Element | HTMLDivElement>();
  parentRef.current = parent;

  const cloneOrNot = replace ? select.cloneNode(true) : select;

  if (replace) {
    props["name"] = select.name;
    props["inputId"] = select.id;

    select.remove();
  }

  const selectRef = createRef<Element | HTMLSelectElement>();
  selectRef.current = cloneOrNot as unknown as HTMLSelectElement;

  preactRender(
    <Select
      select={selectRef}
      parent={parentRef}
      className={className}
      {...props}
    />,
    parent,
  );

  return { parent, select };
}
