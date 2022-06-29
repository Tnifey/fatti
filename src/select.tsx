import ReactSelect, { Props as ReactSelectProps } from "react-select";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "preact/compat";
import { useMutationObserver } from "./useMutationObserver";

export type SelectProps = Partial<Omit<ReactSelectProps, "options">> & {
  parent: any;
  select: any;
};

export default function Select(props: SelectProps) {
  const {
    parent,
    select,
    onChange,
    onInputChange,
    onBlur,
    onFocus,
    onKeyDown,
    onMenuClose,
    onMenuOpen,
    onMenuScrollToBottom,
    onMenuScrollToTop,
    ...rest
  } = props;

  const [disabled, setDisabled] = useState<boolean>(
    rest.isDisabled ?? select?.current?.disabled,
  );
  const [rtl, setRtl] = useState<boolean>(
    rest.isRtl ?? select?.current?.hasAttribute("data-rtl"),
  );
  const [loading, setLoading] = useState<boolean>(
    rest.isLoading ?? select?.current?.hasAttribute("data-loading"),
  );
  const [searchable, setSearchable] = useState<boolean>(
    rest.isSearchable ?? select?.current?.hasAttribute("data-searchable"),
  );
  const [clearable, setClearable] = useState<boolean>(
    rest.isClearable ?? select?.current?.hasAttribute("data-clearable"),
  );
  const [value, setValue] = useState<any>(select?.current?.value);
  const [options, setOptions] = useState<any[]>([]);

  const handleMutation = useCallback((mutation: MutationRecord) => {
    // mutations of select itself
    if (mutation.target !== select.current) return;
    const target = mutation.target as any as HTMLSelectElement;

    // mutations of select attributes
    if (mutation.type === "attributes" && mutation.attributeName) {
      console.log(
        "mutated",
        mutation.attributeName,
        target.getAttribute(mutation.attributeName),
      );

      switch (mutation.attributeName) {
        case "disabled": {
          return setDisabled(target.disabled);
        }
        case "data-loading": {
          return setLoading(target.hasAttribute("data-loading"));
        }
        case "data-searchable": {
          return setSearchable(target.hasAttribute("data-searchable"));
        }
        case "data-clearable": {
          return setClearable(target.hasAttribute("data-clearable"));
        }
        case "data-rtl": {
          return setRtl(target.hasAttribute("data-rtl"));
        }
      }
    }
  }, []);

  const mutationObserverOptions = useMemo<MutationObserverInit>(
    () => ({
      attributes: true,
      subtree: true,
    }),
    [],
  );

  useMutationObserver(select, mutationObserverOptions, handleMutation);

  function getSelectOptions(current: HTMLSelectElement) {
    if (!current) return [];
    const itemsOptions = current.querySelectorAll("option") as unknown as any[];
    if (!itemsOptions?.length) return [];

    const items = [...itemsOptions];
    if (!items?.length) return [];

    return items
      .map(option => {
        return {
          value: option.getAttribute("value"),
          label: option.innerText,
          disabled: option.disabled,
          selected: option.selected,
        };
      })
      .filter(Boolean);
  }

  const emit = useCallback((name: string, ...data: any[]) => {
    const current = select.current;
    if (!current) return;
    const event = new CustomEvent(`select:${name}`, {
      detail: data,
      // @ts-ignore
      select: current,
    });
    current.dispatchEvent(event);
  }, []);

  useEffect(() => {
    const current = select.current as HTMLSelectElement;

    const handler = (event: any) => {
      if (!event.isTrusted) return;
      const val = event?.target?.value;
      const item = options?.find?.(({ value }) => val == value) ?? null;
      setValue(item);
    };

    current.addEventListener("change", handler);
    return () => {
      current.removeEventListener("change", handler, false);
    };
  }, [select.current, options]);

  useEffect(() => {
    const current = select.current;
    if (!current) return;

    emit("before-init", current);

    const initd = current.style.display;
    // current.style.display = "none";

    const opts = getSelectOptions(current);
    setOptions(opts);

    const initValue = current.value;
    current.value = initValue;

    if (initValue) {
      const init = opts?.find(({ value }) => value == initValue) ?? null;
      setValue(init);
      emit("change", init);
    }

    emit("init", current);

    return () => {
      current.style.display = initd;
      emit("destroy", current);
    };
  }, [select]);

  function getSelectedValues(optss?: any): string[] {
    const opts = [...(optss || select.current.querySelectorAll("option"))];
    return opts
      .filter((option: HTMLOptionElement) => {
        return option.getAttribute("selected") === "true";
      })
      .map((option: HTMLOptionElement) => option.value);
  }

  function setOptionsSelected(value) {
    select.current
      .querySelectorAll("option")
      .forEach((option: HTMLOptionElement) => {
        if (option.getAttribute("value") === value) {
          option.setAttribute("selected", "true");
        } else {
          option.removeAttribute("selected");
        }
      });
  }

  useEffect(() => {
    setOptionsSelected(value?.value);
    emit("change", value);
    const theEvent = new Event("change");
    select.current.dispatchEvent(theEvent);
  }, [select, value]);

  function handleChange(event: any) {
    setValue(event);
    select.current.value = event?.value;

    const theEvent = new Event("change");
    select.current.dispatchEvent(theEvent);
  }

  function handleInputChange(event: any) {
    emit("inputchange", event);
  }

  function handleBlur(event: any) {
    emit("blur", event);
    const theEvent = new Event("blur");
    select.current.dispatchEvent(theEvent);
  }

  function handleFocus(event: any) {
    emit("focus", event);
    const theEvent = new Event("focus");
    select.current.dispatchEvent(theEvent);
  }

  function handleKeyDown(event: any) {
    emit("keydown", event);
  }

  function handleMenuClose() {
    emit("menuclose");
  }

  function handleMenuOpen() {
    emit("menuopen");
  }

  function handleMenuScrollToBottom(event: any) {
    emit("menuscrolltobottom", event);
  }

  function handleMenuScrollToTop(event: any) {
    emit("menuscrolltotop", event);
  }

  return (
    <ReactSelect
      options={options}
      isDisabled={disabled}
      isLoading={loading}
      isSearchable={searchable}
      isClearable={clearable}
      isRtl={rtl}
      onChange={handleChange}
      onInputChange={handleInputChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      onMenuClose={handleMenuClose}
      onMenuOpen={handleMenuOpen}
      onMenuScrollToBottom={handleMenuScrollToBottom}
      onMenuScrollToTop={handleMenuScrollToTop}
      value={value}
      {...rest}
    />
  );
}
