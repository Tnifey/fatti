import { createSelect } from "./main";

const root = document.querySelector("#root");
// @ts-ignore
const select = root.querySelector("select.select")! as any as HTMLSelectElement;

(() => {
  // @ts-ignore
  const fat = createSelect(select, {
    classNamePrefix: "fatti",
  });

  fat.select.addEventListener("fatti:change", console.log);
})();

const preview = document.querySelector<HTMLPreElement>("pre.preview")!;
preview.innerText = select.value;

select.addEventListener("fatti:change", event => {
  // @ts-ignore
  const value = event.target.value;
  preview.innerText = value;
});

select.addEventListener("change", event => {
  console.log("select change", event);
  // @ts-ignore
  const value = event.target.value;
  preview.innerText = value;
});

select.addEventListener("fatti:init", event => {
  console.log("init", event);
});

document.body
  .querySelector(".toggle-disable")
  ?.addEventListener("click", () => {
    select.disabled = !select.disabled;
  });

const options = [
  "loading",
  "clearable",
  // 'searchable',
  "rtl",
];

const buttons = document.body.querySelector(".options-buttons")!;
buttons.innerHTML = "";

options.forEach(name => {
  const button = document.createElement("button");
  button.type = "button";
  button.innerText = `data-${name}`;

  button.addEventListener("click", () => {
    const attr = `data-${name}`;

    if (select.hasAttribute(attr)) {
      select.removeAttribute(attr);
    } else {
      select.setAttribute(attr, "");
    }
  });

  buttons.appendChild(button);
});
