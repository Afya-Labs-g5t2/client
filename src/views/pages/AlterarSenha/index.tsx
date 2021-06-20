import React, { useState } from 'react';
import { StyleComponent } from './style';
import Menu from '../../../components/Menu';
import NavBar from '../../../components/NavBar';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AlterarSenha: React.FC = () => {
    const passwordValidationRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const defaultValues:{ senhaAtual:string, novaSenha:string, confirmarSenha:string }= {
        "senhaAtual": "",
        "novaSenha": "",
        "confirmarSenha": ""
    };
    const { register, setValue, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues});
    
    const onSubmit = handleSubmit(data =>{
        console.log(data)

    });

    return (
        <StyleComponent>
            <div className="page-container">
                <div className="top-container">
                    <NavBar title={'Alterar senha'}/>
                </div>
                <div className="mid content-container">
                    <div className="form-wrapper">
                    <form autoComplete="off" onSubmit={onSubmit}>
                        <input type='password' autoComplete="nope" placeholder='Digite a sua senha atual' {...register('senhaAtual', {
                            required: "Digite a sua senha atual",
                            pattern:{ value: passwordValidationRegex, message: "Senha está fora do padrão precisa ter 8 caracteres e um número"},
                            maxLength: {value: 20 , message: "Senha está muito longa"},
                            minLength: {value: 8 , message: "Senha está muito curta"}
                        } )} />
                        {errors.senhaAtual && <p>{errors.senhaAtual.message}</p>}
                        <input type='password' autoComplete="nope" placeholder='Digite a nova senha' {...register('novaSenha', {
                            required: "Digite a nova senha",
                            pattern:{ value: passwordValidationRegex, message: "Senha está fora do padrão precisa ter 8 caracteres e um número"},
                            maxLength: {value: 20 , message: "Senha está muito longa"},
                            minLength: {value: 8 , message: "Senha está muito curta"}                       
                        })} />
                        {errors.novaSenha && <p>{errors.novaSenha.message}</p>}
                        <input type='password' autoComplete="nope" placeholder='Confirmar a nova senha' {...register('confirmarSenha', {
                            required: "Confirmae a nova senha",
                            pattern:{ value: passwordValidationRegex, message: "Senha está fora do padrão precisa ter 8 caracteres e um número"},
                            maxLength: {value: 20 , message: "Senha está muito longa"},
                            minLength: {value: 8 , message: "Senha está muito curta"}
                        })} />
                        {errors.confirmarSenha && <p>{errors.confirmarSenha.message}</p>} 
                        <input type="submit" className="submit-btn" value="Enviar" />
                    </form>
                </div>
                </div>
                <div className="bot-container">
                    <Menu />
                </div>
            </div>
        </StyleComponent>
    )
}

export default AlterarSenha;