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
    value?:string,
    size?:"sm"|"md"|"lg",
}

type Ref = HTMLInputElement;

const Input = forwardRef<Ref,Props >(({label ="Label", className="", placeHolder = "Placeholder",
                                        error= false, disabled = false,helperText = "",
                                        startIcon= '',endIcon= '',value ='',size = "md", },
                                        ref)=>{

    return(
        
        <div className={`
                        ${error?'inputComponent--error':'inputComponent'}
                        ${className}`}>
            
            {!!helperText?
                <span className={`inputComponent__helperText
                                  ${error?'inputComponent__helperText--error':
                                 ''}`}>
                    {helperText}
                </span>
                :null}

            <label className={` 
                                ${disabled?'inputComponent__inputContainer--disabled':
                                 error?'inputComponent__inputContainer--error':
                                 'inputComponent__inputContainer'}
                             
                                 ${!!size?`inputComponent__inputContainer--${size}`:null}
                             `}>
                
                {!!startIcon?
                    <i className="material-icons inputComponent__startIcon">{startIcon}</i>
                :null}
                
                <input 
                    type='text'
                    name='input'
                    className={`inputComponent__input
                                ${disabled?'inputComponent__input--disabled':''}
                              `}

                    
                    disabled={disabled}
                    placeholder={placeHolder}
                    defaultValue={value}
                    ref={ref}
                />

                {!!endIcon?  
                    <i className="material-icons inputComponent__endIcon">{endIcon}</i>
                :null}
            </label>
                
            <span className={`
                              ${error?'inputComponent__label--error':'inputComponent__label'}
                            `}>{label}</span>
        </div>
    );
}
)

export {Input};
