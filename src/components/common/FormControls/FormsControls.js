import React from 'react'
import styles from './FormsControls.module.css'
import {Field} from "redux-form";
import {required} from "../../../utils/validators/validators";


export const FormControl = ({input, meta: {touched, error, children}, ...props}) => {

    const hasError = error && touched;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (<FormControl {...props}><textarea{...input}{...restProps} placeholder={props.placeholder}/></FormControl>)
}


export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (<FormControl {...props}><input {...input}{...restProps} /></FormControl>)
}


export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
    <Field placeholder={placeholder} name={name}
           validate={validators}
           component={component}
        {...props}/>
        {text}
    </div>
)

