import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidate, setFormValidate ] = useState( {} );
    const formIsValid = useMemo(() => {
        return Object.keys(formValidate).every(key => formValidate[key] === null);
    }, [formValidate]);

    useEffect(() => {
        createValidators()
    }, [formState])


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }
    const createValidators = () =>{
        const formCheckedValues = {};
        for(const formField of Object.keys(formValidations)){
            const [fn,errorMessage = "Este campo es requerido."] = formValidations[formField];
            const valueForm = formState[formField];
            const isValid = fn(valueForm);
            formCheckedValues[`${formField}Valid`] = isValid ? null : errorMessage;
        }
        setFormValidate(formCheckedValues);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        formIsValid,
        ...formValidate
    }
}