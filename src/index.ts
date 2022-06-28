import render from './main';

const root = document.querySelector("#root");
// @ts-ignore
const select = root.querySelector("select.select");

// @ts-ignore
render(root, {
    select: select,
    value: "A",
});