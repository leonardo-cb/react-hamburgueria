import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Link } from "react-router-dom"
import { Container } from "../../components/container"
import { SectionBox } from "../../components/sectionBox"
import { SectionForm } from "../../components/sectionForm"
import { DivHeaderFormStyled, DivInputStyled } from "../../components/sectionForm/styled"
import { SectionLogo } from "../../components/sectionLogo"
import { UserContext } from "../../contexts/userContext"
import { registerSchema } from "./registerSchema"

interface iRegisterForm {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const RegisterPage = () => {

    const { createUser } = useContext(UserContext)

    const { register, handleSubmit, formState: {errors} } = useForm<iRegisterForm>({
        mode: "onBlur",
        resolver: yupResolver(registerSchema)
    })

    const submitRegister: SubmitHandler<iRegisterForm> = (data) => {
        createUser(data)
    }
    
    return (
        <>
        <Container>
            <SectionBox>
                <SectionLogo />
                <SectionForm>
                    <form
                    onSubmit={handleSubmit(submitRegister)}>
                        <DivHeaderFormStyled>
                            <h2>Cadastro</h2>
                            <Link to="/">Retornar para o login</Link>
                        </DivHeaderFormStyled>
                        <DivInputStyled>
                            <label htmlFor="name">Nome</label>
                            <input 
                            type="text" 
                            placeholder="Digite seu nome aqui"
                            id="name"
                            {...register("name")} />
                            {errors.name?.message && <span>{errors.name.message}</span>}
                        </DivInputStyled>
                        <DivInputStyled>
                            <label htmlFor="email">E-mail</label>
                            <input 
                            type="email" 
                            placeholder="Digite sua email aqui"
                            id="email"
                            {...register("email")}/>
                            {errors.email?.message && <span>{errors.email.message}</span>}
                        </DivInputStyled>
                        <DivInputStyled>
                            <label htmlFor="password"></label>
                            <input 
                            type="password" 
                            placeholder="Senha"
                            id="password"
                            {...register("password")}/>
                            {errors.password?.message && <span>{errors.password.message}</span>}
                        </DivInputStyled>
                        <DivInputStyled>
                            <label htmlFor="confirm-password"></label>
                            <input 
                            type="password" 
                            placeholder="Confirmar Senha"
                            id="confirm-password"
                            {...register("confirmPassword")}/>
                            {errors.confirmPassword?.message && <span>{errors.confirmPassword.message}</span>}
                        </DivInputStyled>
                        <button type="submit">Cadastrar</button>
                    </form>
                </SectionForm>
            </SectionBox>
        </Container>
    </>
    )
}