import React, { forwardRef, LegacyRef, MouseEventHandler } from 'react';

import './input.scss';

interface Props {
    label?:string,
    className?:string,
    placeHolder?:string,
    error?:boolean,
    disabled?: boolean,
    helperText?:string,
    startIcon?:string,
    endIcon?:string,
    size?:"sm"|"md"|"lg",
}

type Ref = HTMLInputElement;

const Input = forwardRef<Ref,Props >(({label ="Label", className="", placeHolder = "Placeholder",
                                        error= false, disabled = false,helperText = "",
                                        startIcon= '',endIcon= '',size = "md", },
                                        ref)=>{

    return(
        <div className={`inputComponent 
                        ${error?'inputComponent--error':''} 
                        ${className}`}>
            
            {!!helperText?
                <span className='inputComponent__helperText'>{helperText}</span>
                :null}
            <input 
                type='text'
                name='input'
                className="inputComponent__input"

                
                disabled={disabled}
                placeholder={placeHolder}
                ref={ref}>

            </input>
            <label htmlFor="input" className='inputComponent__label'>{label}</label>
        </div>
    );
}
)

export {Input};
