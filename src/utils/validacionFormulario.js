import {mixed,object,string} from "yup"

let useSchema = object( {
nombre: string().required(),
telefono: string().min(5)   .required(),
email: string().email().required(),

} )

const validateForm = async(dataForm) => {
    try{
        await useSchema.validate(dataForm)
        return { status: "succes"}

    }
    catch(error) { 
        return { status: "error", message: error.message}
    }

}

export default validateForm