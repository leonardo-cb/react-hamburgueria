import * as yup from "yup";

export const registerSchema = yup.object().shape({
    email: yup.string().required("O email é obrigatório")
    .email("Forneça um e-mail válido"),
    password: yup.string().required("A senha é obrigatória")
})