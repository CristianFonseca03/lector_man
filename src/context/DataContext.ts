import {createContext, useContext} from "react";

export type DataContextType = {
    url: string
}
export const DataContext = createContext<DataContextType>({
    url: '',
});
export const useData = () => useContext(DataContext);
