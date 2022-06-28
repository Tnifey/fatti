import { render as preactRender } from 'preact';
import App from './App';

export function Select(root: HTMLElement, props: any = {}) {
  preactRender(<App {...props} />, root);

  props.select.addEventListener('fatti:change', console.log);

  return props.select;
}
