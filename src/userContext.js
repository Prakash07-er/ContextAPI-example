import React from 'react';

let UserContext =React.createContext();

export default UserContext;


export const UserProvider =({children}) => {

    let a = 5;
    return(
        <UserContext.Provider value={{a}}>
        {children}
    </UserContext.Provider>
    )
    
   
}