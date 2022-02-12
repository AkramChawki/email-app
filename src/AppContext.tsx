import React, { createContext, useContext, useState } from "react";
import { useQuery } from "react-query";
import { fetchData } from "./Api";
import Spinner from "./components/Spinner";
import { EmailType } from "./types";

interface AppContextProps {
    emails: EmailType[];
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
    filtredEmails: EmailType[]
}

const AppContext = createContext({} as AppContextProps);

export function AppContextProvider({children}: {children: React.ReactNode}) {
    const [emails, setemails] = useState<EmailType[]>([]);
    const [searchValue, setSearchValue] = useState("");
    const filtredEmails = React.useMemo (() => emails.filter(email => {
        return (
            email.first_name.toLowerCase().startsWith(searchValue.toLowerCase()) ||
            email.last_name.toLowerCase().startsWith(searchValue.toLowerCase())
        )
    }), [emails, searchValue]);

    const { isLoading, isError} = useQuery("fetchData", fetchData, {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
        onSuccess: (e) => setemails(e)
      }
      )
    return (
        <AppContext.Provider value={{
            emails,
            searchValue,
            setSearchValue,
            filtredEmails
        }}>
            { isLoading && <Spinner />}
            { !isLoading && children }
        </AppContext.Provider>
    )
}

export function useStore() {
    const state = useContext(AppContext);
    return state;
}

export function useGetEmail(id: number) {
 const {emails} = useStore();
 return emails.find(email => email.id === id);   
}