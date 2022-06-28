import { useEffect } from "preact/hooks";

export function useMutationObserver(ref: any, options: MutationObserverInit = { attributes: true, childList: true, subtree: true }, callback?: Function) {
    useEffect(() => {
        const mutationObserver = new MutationObserver(mutations => {
            mutations.forEach(mutation => callback?.(mutation));
        });

        mutationObserver.observe(ref.current, options);
        return () => {
            mutationObserver?.disconnect?.();
        };
    }, [ref, options, callback]);
}
