import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const AuthContext = React.createContext({})

export const AuthProvider = (props: any) => {

    const [name, setName] = useState<any>('')
    const [email, setEmail] = useState<any>('')
    const [phone, setPhone] = useState<any>('')
    const [message, setMessage] = useState<any>('')
    const [error, setError] = useState<boolean>()

    console.log(name, 'name')

    const formSend = () => {
        function teste(event: any) {
            event.preventDefault();
            const field = event.target
            const validation = ValidateField(field)

            validation()

            const error = ValidateField(field)
        }

        const Fields: any = document.querySelectorAll("[required]")

        function ValidateField(field: any) {
            function verifyErrors() {
                let foundError: any = false;

                for (const error in field.validity) {
                    if (field.validity[error] && !field.validity.valid) {
                        foundError = error;
                    }
                }

                return foundError
            }

            function customMessage(typeError: any) {
                const messages: any = {
                    text: {
                        valueMissing: "Por favor,preencha este campo"
                    },
                    email: {
                        valueMissing: "Email é obrigatorio",
                        typeMismatch: "Por favor,preencha um email valido",
                    },
                    number: {
                        valueMissing: "Por favor,preencha este campo"
                    },
                    textarea: {
                        valueMissing: "Por favor,preencha este campo"
                    }
                }
                return messages[field.type][typeError]

            }

            function setCustomMessage(message: any) {
                const spanError = field.parentNode.querySelector('span')
                if (message) {
                    spanError.classList.add('error')
                    spanError.innerHTML = message
                }
                else {
                    spanError.classList.remove("error")
                    spanError.innerHTML = ""
                }
            }

            return function () {

                const error: any = verifyErrors()

                console.log(error, 'error')

                if (error) {
                    setError(true)
                    const message: any = customMessage(error)
                    field.style.borderColor = "#782424"
                    setCustomMessage(message)
                }
                else {
                    field.style.borderColor = "#008C28"
                    setCustomMessage('')
                }
            }
        }

        for (const field of Fields) {
            field.addEventListener("invalid", (event: any) => {
                event.preventDefault()
                teste(event)
            })
            field.addEventListener("blur", teste)
        }
        if (name !== '') {
            document.querySelector("form")?.addEventListener("submit", event => {
                console.log('1')


                console.log('2')
                axios.post('https://obesidade-lp-default-rtdb.firebaseio.com/.json', {
                    name: name,
                    email: email,
                    phone: phone,
                    message: message,
                }).then(() => window.location.reload())
                event.preventDefault()
            })
        }

    }




    return (
        <AuthContext.Provider value={{ setName, setEmail, setPhone, setMessage, formSend, error }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useFormAuth = () => React.useContext(AuthContext)

// if (!name || !email || !phone || !message) {
//             ''
//         }
//         else {
//             try {
//                 axios.post('https://obesidade-lp-default-rtdb.firebaseio.com/.json', {
//                     name: name,
//                     email: email,
//                     phone: phone,
//                     message: message,
//                 })
//             }
//             catch (error) {
//                 console.log(error, 'erro')
//             }
//         }