import Select from 'react-select';
import { useCallback, useLayoutEffect, useState } from 'preact/compat';

export default function App(props: any) {
  const {
    eventPrefix = 'fatti:',
    readOnly: initialReadOnly = false,
    disabled: initialDisabled = false,
    value: initialValue = [],
    options: initialOptions = null,
    select,
    onChange,
    onInput,
    onSelect,
    onBlur,
    onFocus,
    onInputChange,
    onKeyDown,
    onMenuOpen,
    onMenuClose,
    onMenuScrollTop,
    onMenuScrollBottom,
    ...rest
  } = props;

  const [readOnly, setReadOnly] = useState(initialReadOnly);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [value, setValue] = useState(initialValue);
  const [options, setOptions] = useState<null | any[]>(initialOptions);

  const emit = useCallback((name: string, ...data: any[]) => {
    if (!select) return;

    const event = new CustomEvent(`${eventPrefix}${name}`, {
      detail: data,
    });
    (select as HTMLSelectElement).dispatchEvent(event);
  }, [select, eventPrefix]);

  useLayoutEffect(() => {
    const initd = select.style.display;
    select.style.display = 'none';

    if (!initialOptions) {
      const opts = [];
      const opelements = [...select.querySelectorAll('option')];
      opelements.map((option) => {
        opts.push({
          value: option.getAttribute('value'),
          label: option.innerText
        });
      });
      setOptions(opts);
    }

    setDisabled(select.disabled);
    setReadOnly(select.readonly);

    console.log([select]);


    emit('init', select);
    return () => {
      select.style.display = initd;
      emit('destroy', select);
    };
  }, [select]);

  function handleChange(event: any) {
    typeof onChange === 'function' && onChange(event);
    emit('change', event);
    setValue(event.value);
  }

  function handleInput(event: any) {
    typeof onInput === 'function' && onInput(event);
    emit('input', event);
  }

  function handleInputChange(event: any) {
    typeof onInputChange === 'function' && onInputChange(event);
    emit('input-change', event);
  }

  return (<Select
    options={options}
    isDisabled={disabled}
    onChange={handleChange}
    onInput={handleInput}
    onInputChange={handleInputChange}
    value={value}
    {...rest}
  />);
}
