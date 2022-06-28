import { createRef, render as preactRender } from 'preact';
import classnames from 'classnames';
import Select, { SelectProps } from './select';

export type SelectOptions = Partial<{
  wrapperElement?: 'div' | string,
  wrapperClassName?: string;
}> & Omit<SelectProps, 'parent' | 'select' | 'isMulti'>;

export function createSelect(select: HTMLSelectElement, options: SelectOptions = {}) {
  const {
    wrapperElement,
    wrapperClassName,
    ...props
  } = options;

  const parent = select.parentElement;
  const wrapper = document.createElement(wrapperElement || 'div');
  parent?.appendChild(wrapper);

  const theWrapperClasses = classnames(
    'fatti__wrapper',
    wrapperClassName,
    [...select.classList.values()]
  ).split(' ');

  for (let classname of theWrapperClasses) {
    wrapper.classList.add(classname);
  }

  const parentRef = createRef<Element | HTMLDivElement>();
  parentRef.current = parent;

  const selectRef = createRef<Element | HTMLSelectElement>();
  selectRef.current = select;

  preactRender(<Select select={selectRef} parent={parentRef} {...props} />, wrapper);

  return { wrapper, parent, select };
}
