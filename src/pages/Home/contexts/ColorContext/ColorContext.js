import { createContext } from 'react';
export const ColorContext = createContext({
    backup: '',
    bgColor: 'first',
    changeColor: () => {},
    commitColor: () => {},
    cancelColor: () => {},
})