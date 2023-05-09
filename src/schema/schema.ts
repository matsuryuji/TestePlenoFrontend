import * as Yup from 'yup';

export const LOGIN_SCHEMA = Yup.object({
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: Yup
    .string()
    .min(8, 'Senha deve conter pelo menos 8 caractéres')
    .required('Senha é obrigatório'),
});

