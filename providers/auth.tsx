import React, { useRef, useState } from 'react'
import axios from 'axios'

export const AuthContext = React.createContext({})

export const AuthProvider = (props: any) => {

    const [name, setName] = useState<any>('')
    const [email, setEmail] = useState<any>('')
    const [phone, setPhone] = useState<any>('')
    const [message, setMessage] = useState<any>('')


    const formSend = (event: any) => {

        function teste(event: any) {
            const field = event.target

            function verifyErrors() {
                let foundError: any = false;

                for (const error in field.validity) {
                    if (error !== "customError" && field.validity[error]) {
                        foundError = error;
                    }
                }

                return foundError
            }
            const error = verifyErrors()
            console.log(error, 'erro')

            if (error) {
                field.setCustomValidity("esse campo é obrigatoriooooo")
            }
            else {
                field.setCustomValidity("")
            }

        }

        const Fields: any = document.querySelectorAll("[required]")

        for (const field of Fields) {
            field?.addEventListener("invalid", teste)
        }
        // if (!name || !email || !phone || !message) {
        //     alert('preencha os campos corretamente')
        // }
        // else {
        //     try {
        //         axios.post('https://obesidade-lp-default-rtdb.firebaseio.com/.json', {
        //             name: name,
        //             email: email,
        //             phone: phone,
        //             message: message,
        //         })
        //     }
        //     catch (error) {
        //         console.log(error, 'erro')
        //     }
        // }
    }



    return (
        <AuthContext.Provider value={{ setName, setEmail, setPhone, setMessage, formSend }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useFormAuth = () => React.useContext(AuthContext)