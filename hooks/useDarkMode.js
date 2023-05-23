import { useLocalStorage } from "./useLocalStorage";

export const darkMode = (key, initialValue) => {
    const [dark, setDark] = useLocalStorage(key, initialValue)

    const resetColor = () => {
        if (dark == true) {
            return dark;
        } else {
            setDark(true);
        } 
    }

    const handleToggle = () => {
        e.preventDefault();
    }

    const handleChanges = e => {
        setDark({ ...dark, [e.target.name]: e.target.value });
    }

    return [dark, resetColor, handleChanges, handleToggle];
}