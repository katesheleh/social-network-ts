import React from 'react';
import styles from './LoginForm.module.css';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input, InputPsw} from '../../common/FormControls/FormControls';
import {maxLengthCreator, required} from '../../../utils/validators/validators';

export type LoginFormDataType = {
  email: string
  password: string
  rememberMe: boolean
}

// validate field max length
const maxLength = maxLengthCreator(30)

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {
  return (
      <form className={styles.form} onSubmit={props.handleSubmit}>
        <div className={styles.formRow}>
          <label htmlFor='login_login'>Login</label>
          <Field
              component={Input}
              validate={[required, maxLength]}
              name={'email'}
              placeholder={'email'}
              id={'login_email'}
          />
        </div>
        <div className={styles.formRow}>
          <label htmlFor='login_psw'>Password</label>
          <Field
              component={InputPsw}
              validate={[required, maxLength]}
              name={'password'}
              placeholder={'Password'}
              id={'login_psw'}/>
        </div>
        <div className={styles.formRow}>
          <Field
              component={'input'}
              name={'rememberMe'}
              type='checkbox'
              id={'login_rememberMe'}
              className={styles.inputCheckbox}/>
          <label htmlFor='login_rememberMe'>Remember me</label>
        </div>
        <div className={styles.formRow}>
          <button
              type={'submit'}
              className={styles.button}>Send</button>
        </div>
      </form>
  )
}


export default reduxForm<LoginFormDataType>({
  // a unique name for the form
  form: 'login'
})(LoginForm)