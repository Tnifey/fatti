import { SelectProps } from "./select";
export declare type SelectOptions = Partial<{
    wrapperElement?: "div" | string;
    wrapperClassName?: string;
}> & Omit<SelectProps, "parent" | "select" | "isMulti">;
export declare function createSelect(select: HTMLSelectElement, options?: SelectOptions): {
    parent: HTMLElement;
    select: HTMLSelectElement;
};
