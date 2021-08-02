import React from 'react';
import InputType from '../../common/types/InputType';
import classes from './Input.module.css';


const Input: React.FC<{input: InputType, reference: React.RefObject<HTMLInputElement>}> = (props) => {
  
  return (
    <div className={classes['input-container']}>
      <input 
        className={classes.input} 
        {...props.input} 
        ref={props.reference}
        maxLength={30}
      />
      <i className={classes[props.input.icon]}></i>
    </div>
  );
};

export default Input;
