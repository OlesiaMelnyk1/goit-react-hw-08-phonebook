import { useRef } from 'react';

import {
  Form,
  FormLabel,
  FormInput,
  LoginButton,
  LoginRegister,
  LoginSection,
} from './LoginRegisterForm.styled';

function LoginRegisterForm({ onSubmit, isLoginForm = false }) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const createUserData = event => {
    event.preventDefault();
    const formData = {
      ...(!isLoginForm && { name: nameInputRef.current.value }),
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    onSubmit(formData);
    event.target.reset();
  };

  return (
    <LoginSection>
      <LoginRegister>{isLoginForm ? 'Login' : 'Register'}</LoginRegister>
      <Form onSubmit={createUserData}>
        {isLoginForm ? null : (
          <FormLabel>
            <span>Name</span>
            <FormInput
              type="text"
              name="name"
              placeholder="Anna Copeland"
              required
              ref={nameInputRef}
            />
          </FormLabel>
        )}
        <FormLabel>
          <span>Email</span>
          <FormInput
            type="email"
            name="email"
            placeholder="mail@gmail.com"
            required
            ref={emailInputRef}
          />
        </FormLabel>
        <FormLabel>
          <span>Password</span>
          <FormInput
            type="password"
            name="password"
            placeholder="*******"
            required
            ref={passwordInputRef}
          />
        </FormLabel>
        <LoginButton type="submit">
          {isLoginForm ? 'Log In' : 'Register'}
        </LoginButton>
      </Form>
    </LoginSection>
  );
}

export default LoginRegisterForm;
