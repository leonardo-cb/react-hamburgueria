import * as yup from "yup";

export const registerSchema = yup.object().shape({
    name: yup.string().required("O nome é obrigatório"),
    password: yup.string().required("A senha é obrigatória")
    .min(6, "A senha precisa ter no mínimo 6 caractéres"),
    email: yup.string().required("O email é obrigatório")
    .email("Digite um e-amil válido"),
    confirmPassword: yup.string().required("Confirmar senha")
    .oneOf([yup.ref("password")], "As senhas não são iguais")
})