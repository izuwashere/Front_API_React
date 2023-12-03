import { useState } from "react"

export const useUserForm = (initialState = {}) =>{

    const [form, setForm] = useState(initialState);

    //cambios
    //Despone los input
    const handleChanges = ({target}) =>{
        const {name,value} = target;

        //Armando un json, para que creca luego
        setForm({
            ...form,
            [name]:value,
        })
    }

    return{
        form,setForm,handleChanges
    }


}