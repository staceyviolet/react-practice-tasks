import * as React from 'react'
import FormInput  from '../WorkoutsTrack/FormInput';
import './addClockForm.css'

export const AddClockForm = ({ name, timezone, handleChange, handleSubmit }) => {
    return (
        <div className={'add-clock-form'}>
            <form onSubmit={handleSubmit}>
                <FormInput fieldName={'name'} fieldValue={name} labelText={'Название'}
                           onChange={handleChange}/>
                <FormInput fieldName={'timezone'} fieldValue={timezone} labelText={'Временная Зона'}
                           onChange={handleChange}/>
                <button type={'submit'}>Добавить</button>
            </form>
        </div>
    )
}
