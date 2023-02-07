import { useForm } from "react-hook-form"
import { Container } from "../../components/container"
import { SectionForm } from "../../components/sectionForm"
import { SectionBox } from "../../components/sectionBox"
import { registerSchema } from "./registerSchema"
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler } from "react-hook-form/dist/types"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../contexts/userContext"
import { SectionLogo } from "../../components/sectionLogo"
import { DivInputStyled } from "../../components/sectionForm/styled"

interface iLoginForm {
    email: string;
    password: string;
}

export const LoginPage = () => {

    const { loginUser } = useContext(UserContext)

    const { register, handleSubmit, formState: {errors} } = useForm<iLoginForm>({
        mode: "onBlur",
        resolver: yupResolver(registerSchema)
    })

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate("/register")
    }

    const submitLogin: SubmitHandler<iLoginForm> = (data) => {
        loginUser(data)
    }

    return  <>
                <Container>
                    <SectionBox>
                        <SectionForm>
                            <form
                            noValidate
                            onSubmit={handleSubmit(submitLogin)}>
                                <h2>Login</h2>
                                <DivInputStyled>
                                    <label htmlFor="email">E-mail</label>
                                    <input 
                                    type="text" 
                                    placeholder="Digite seu nome aqui"
                                    id="email"
                                    {...register("email")} />
                                    {errors.email?.message && <span>{errors.email.message}</span>}
                                </DivInputStyled>
                                <DivInputStyled>
                                    <label htmlFor="password">Senha</label>
                                    <input 
                                    type="password" 
                                    placeholder="Digite sua senha aqui"
                                    id="password"
                                    {...register("password")}/>
                                    {errors.password?.message && <span>{errors.password.message}</span>}
                                </DivInputStyled>
                                <button type="submit">Logar</button>
                                <p>Crie sua conta para saborear muitas delicias e matar sua fome!</p>
                                <button type="button" onClick={handleNavigate}>Cadastrar</button>
                            </form>
                        </SectionForm>
                        <SectionLogo/>
                    </SectionBox>
                </Container>
            </>
}