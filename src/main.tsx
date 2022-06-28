import { createRef, render as preactRender } from 'preact';
import classnames from 'classnames';
import App from './App';

export function Select(select: HTMLSelectElement, props: any = {}) {
  const parent = select.parentElement;
  const root = document.createElement(props.wrapperElement || 'div');
  parent?.appendChild(root);
  for (let classname of classnames('fatti__wrapper', props.classes, [...select.classList.values()]).split(' ')) {
    root.classList.add(classname);
  }

  const parentRef = createRef<Element | HTMLDivElement>();
  parentRef.current = parent;

  const selectRef = createRef<Element | HTMLSelectElement>();
  selectRef.current = select;

  preactRender(<App select={selectRef} parent={parentRef} />, root);

  return {
    wrapper: root,
    parent,
    select,
  };
}
