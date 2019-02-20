import React from 'react';
import '../../App.css';

const inputElement = (props) => {

    let elem = null;
    const inputClasses = [];
    inputClasses.push('InputElement');

    if (props.invalid && props.shoudValidate && props.touched) {
        inputClasses.push('Invalid');
    }


    switch (props.elementType){
        case ('input'):
            elem = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.changed} />;
            break;
        case ('textarea'):
            elem = <textarea 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.changed} />;
            break;
        case ('select'):
            elem = <select  
                className={inputClasses.join(' ')}                 
                value={props.value}
                onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>;
            break;
        default:
            elem = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}  
 />;             
    }
    

    return (
        <div className='Input'>
            <label>{props.label}</label>
            {elem}
        </div>
    );
};

export default inputElement;
