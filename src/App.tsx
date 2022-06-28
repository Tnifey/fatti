import { useContext } from 'preact/hooks';
import Select from 'react-select';
import { Context } from './context';

export default function App() {
  const { props } = useContext(Context);
  return (<Select {...props} />);
}
