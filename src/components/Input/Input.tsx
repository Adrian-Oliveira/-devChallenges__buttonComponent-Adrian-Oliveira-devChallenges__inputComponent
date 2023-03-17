import React, { forwardRef, } from 'react';

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
    fullWidth?:boolean,
    rows?:number,
    size?:"sm"|"md"|"lg",
}

type Ref = HTMLTextAreaElement;

const Input = forwardRef<Ref,Props >(({label ="Label", className="", placeHolder = "Placeholder",
                                        error= false, disabled = false,helperText = "",
                                        startIcon= '',endIcon= '',value ='', fullWidth=false,
                                        rows=1,size = "md", },
                                        ref)=>{

    return(
        
        <div className={`
                        ${fullWidth?`inputComponent--fullWidth`:null}
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
                                ${fullWidth?`inputComponent__inputContainer--fullWidth`:null}
                                ${rows>1?'inputComponent__inputContainer--multiRows':''}


                             `}
            >
                
                {!!startIcon?
                    <i className="material-icons inputComponent__startIcon">{startIcon}</i>
                :null}
                
                <textarea
                    rows={rows} 
                    name='input'
                    className={`inputComponent__input
                                ${disabled?'inputComponent__input--disabled':''}
                                ${rows>1?'inputComponent__input--multiRows':''}
                              `}
                              
                    style={{height: `${rows*2}rem`}}
                    
                    disabled={disabled}
                    placeholder={placeHolder}
                    defaultValue={value}
                    ref={ref}
                ></textarea>

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
