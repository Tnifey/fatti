import { render as preactRender } from 'preact';
import { useContext, useEffect } from 'preact/compat';
import App from './App'
import { Context } from './context';

export default function render(root: HTMLElement, props: any = {}) {
  const context = useContext(Context);
  useEffect(() => { context.updateProps(props); context.updateProps(props); }, []);
  preactRender(<Context.Provider value={context}><App /></Context.Provider>, root);
  return context;
}

