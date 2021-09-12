import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  phone: yup
    .string()
    // .matches(/^+998\d{9}$/)
    .required(),
  password: yup.string().required().min(6),
})

export const registerSchema = yup
  .object()
  .shape({
    name: yup.string().min(3).required(),
    email: yup.string().email().required(),
  })
  .concat(loginSchema)
