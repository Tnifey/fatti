import { Select } from './main';

const root = document.querySelector("#root");
// @ts-ignore
const select = root.querySelector("select.select");

// @ts-ignore
Select(root, {
    select,
});