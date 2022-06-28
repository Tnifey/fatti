import { createContext } from "preact";

export const Context = createContext({
    props: {},
    updateProps(props: any) {
        this.props = props;
    },
});
