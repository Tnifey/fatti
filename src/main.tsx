import { render as preactRender } from 'preact';
import App from './App'

export default function render(root: HTMLElement, props: any = {}) {
  if(root) {
    preactRender(<App {...props} />, root)
  }
}

