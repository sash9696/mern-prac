

//create the context

import { createContext, useContext, useEffect, useState } from "react";

//use the provider component to provide the data to the tree 

//use consumer component to consume data


const ThemeContext = createContext();


export function ThemeProvider({children}){

    const [theme, setTheme] = useState('light');


    //effects

    //empty dependency array it will called after the component mounts or gets
    //inserted to the dom
    // useEffect(function(){
    //     console.log(`useEffect called`)
    // }, [])


    //first time it will called and the subequently will be called when theme changes

    useEffect(function(){
        console.log(`useEffect called`)

        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    const toggleTheme = () => {
        // setTheme(theme === 'light' ? "dark" : 'light')
        setTheme((prevTheme) => prevTheme === 'light' ? "dark" : 'light' )
    }

    

    console.log({children})

    const data = {
        theme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={data}>
                {children}
        </ThemeContext.Provider>
    )
}


export const useTheme = () => useContext(ThemeContext)
