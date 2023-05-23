import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
    const [dark, setDark] = useLocalStorage("key", false);
    return [dark, setDark];
}