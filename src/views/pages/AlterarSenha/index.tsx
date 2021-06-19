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

        // setIsLoading(true)
    //     api.post('/senha', data)
    //   .then(
    //     response => {
    //       toast.success('Senha alterada com sucesso!', {
    //         position: "top-right",
    //         autoClose: 2000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true
    //       })
    //       reset({ ...defaultValues })
    //     }
    //   ).catch(err => {
    //     toast.error("Oops! Não foi possível alterar a sua senha", {
    //       position: "top-right",
    //       autoClose: 2000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true
    //     })
    //   }
    //   ).finally(() => setIsLoading(false))

    });

    return (
        <StyleComponent>
            <div className="page-containter">
                <div className="top">
                    <NavBar />
                </div>
                <div className="mid content-container">
                    <form autoComplete="off" onSubmit={onSubmit}>
                        <input type='password' placeholder='Digite a sua senha atual' {...register('senhaAtual', {
                            required: "Digite a sua senha atual",
                            pattern:{ value: passwordValidationRegex, message: "Senha está fora do padrão precisa ter 8 caracteres e um número"},
                            maxLength: {value: 20 , message: "Senha está muito longa"},
                            minLength: {value: 8 , message: "Senha está muito curta"}
                        } )} />
                        {errors.senhaAtual && <p>{errors.senhaAtual.message}</p>}
                        <input type='password' placeholder='Digite a nova senha' {...register('novaSenha', {
                            required: "Digite a nova senha",
                            pattern:{ value: passwordValidationRegex, message: "Senha está fora do padrão precisa ter 8 caracteres e um número"},
                            maxLength: {value: 20 , message: "Senha está muito longa"},
                            minLength: {value: 8 , message: "Senha está muito curta"}                       
                        })} />
                        {errors.novaSenha && <p>{errors.novaSenha.message}</p>}
                        <input type='password' placeholder='Confirmar a nova senha' {...register('confirmarSenha', {
                            required: "Confirmae a nova senha",
                            pattern:{ value: passwordValidationRegex, message: "Senha está fora do padrão precisa ter 8 caracteres e um número"},
                            maxLength: {value: 20 , message: "Senha está muito longa"},
                            minLength: {value: 8 , message: "Senha está muito curta"}
                        })} />
                        {errors.confirmarSenha && <p>{errors.confirmarSenha.message}</p>} 
                        <input type="submit" className="submit" value="Enviar" />
                    </form>
                </div>
                <div className="bot">
                    <Menu />
                </div>
            </div>
        </StyleComponent>
    )
}

export default AlterarSenha;