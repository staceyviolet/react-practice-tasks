import * as React from 'react'


export default function FormInput({fieldName, labelText, fieldValue, onChange}) {

    return (
        <div>
            <label htmlFor={fieldName}>{labelText}</label>
            <input name={fieldName}
                   id={fieldName}
                   value={fieldValue}
                   onChange={onChange}/>
        </div>

    )

}
