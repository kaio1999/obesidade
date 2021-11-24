import React, { useState } from 'react'
import axios from 'axios'

export const AuthContext = React.createContext({})

export const AuthProvider = (props: any) => {

    const [name, setName] = useState<any>('')
    const [email, setEmail] = useState<any>('')
    const [phone, setPhone] = useState<any>('')
    const [message, setMessage] = useState<any>('')

    const [form, setForm] = useState<any>({
        name: name,
        email: email,
        phone: phone,
        message: message,
    })

    const formSend = () => {
        try {
            axios.post('https://obesidade-lp-default-rtdb.firebaseio.com/.json', {
                name: name,
                email: email,
                phone: phone,
                message: message,
            })
        }
        catch (error) {
            console.log(error, 'erro')
        }
    }



    return (
        <AuthContext.Provider value={{ setName, setEmail, setPhone, setMessage, formSend }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useFormAuth = () => React.useContext(AuthContext)