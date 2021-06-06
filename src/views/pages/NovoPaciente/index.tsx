import React, { useState } from 'react';
import Menu from '../../../components/Menu'
import {DivComponent} from './styles'
import NavBar from '../../../components/NavBar';
import { useForm } from "react-hook-form";

import mockPacientes from '../../../mockPacientes';




const NovoPaciente: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);


  return (
      <DivComponent>
      <div className="page-container">
        <div className="top-Container">
        <NavBar />
        </div>
        <div className="content-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' placeholder='First Name' {...register('firstname', { required: 'Please enter your first name' })} />
            {errors.firstname && <p>{errors.firstname.message}</p>}
            <input type='text' placeholder='Last Name' {...register('lastname')} />
            <input 
              type='password' 
              placeholder='Your password' 
              {...register('password', { 
                required: "Please enter Password",
                minLength: { value: 8, message: "Too short" }
              })} />
              {errors.password && <p>{errors.password.message}</p>}
            <input type='submit' />
          </form>
        </div>
        <div className="bot-container">
          <Menu />
        </div>
          
      </div>
      </DivComponent>
  );
}

export default NovoPaciente;