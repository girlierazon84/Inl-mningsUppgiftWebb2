import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [option, setOption] = useState('')

    return (
        <UserContext.Provider value={ [option, setOption] }>
            { props.children }
        </UserContext.Provider>
    )
}