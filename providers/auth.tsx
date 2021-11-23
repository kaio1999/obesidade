import React, { useState } from 'react'

export const AuthContext = React.createContext({})

export const AuthProvider = (props: any) => {
    const [form, setForm] = useState<any>({
        name: '',
        email: '',
        phone: 0,
        message: '',
    })

    return (
        <AuthContext.Provider value={{ form, setForm }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useFormAuth = () => React.useContext(AuthContext)