/// <reference types="react" />
import { Props as ReactSelectProps } from "react-select";
export declare type SelectProps = Partial<Omit<ReactSelectProps, "options">> & {
    parent: any;
    select: any;
};
export default function Select(props: SelectProps): JSX.Element;
