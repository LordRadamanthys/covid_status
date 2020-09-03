import React,{createContext, useState} from 'react'
const DarkContext = createContext<Provider>({} as Provider)

interface Provider {
    darkmode: boolean,
    setDark: any
}

export const DarkModeContext: React.FC = ({children}) => {
    const [darkmode, setDark] = useState(false)
    return (
        < DarkContext.Provider value={{ setDark, darkmode }}>
            {children}
        </DarkContext.Provider >
    )
}


export default DarkContext