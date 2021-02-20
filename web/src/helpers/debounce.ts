let delayTimer: NodeJS.Timeout;
export const debounce = <T>(func: (input: T) => void, input: T, timeout: number) => {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(() => {
        func(input);
    }, 200);
}