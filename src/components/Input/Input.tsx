import React, { forwardRef, LegacyRef, MouseEventHandler } from 'react';

import './input.scss';

interface Props {
    label?:string,
    className?:string,
    placeHolder?:string,
    disabled?: boolean,
    startIcon?:string,
    endIcon?:string,
    size?:"sm"|"md"|"lg",
}

type Ref = HTMLInputElement;

const Input = forwardRef<Ref,Props >(({label ="Label", className="",  disabled = false,
                                        placeHolder = "Placeholder",
                                        startIcon= '',endIcon= '',size = "md", },
                                        ref)=>{

    return(
        <div className={`${className} inputComponent`}>
            <label htmlFor="input" className='inputComponent__label'>{label}</label>
            <input 
                type='text'
                name='input'
                id='input'

                className='inputComponent__input'

                disabled={disabled}
                placeholder={placeHolder}
                ref={ref}>

            </input>
        </div>
    );
}
)

export {Input};
