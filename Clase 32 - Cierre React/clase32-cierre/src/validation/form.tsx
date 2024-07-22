import * as Yup from "yup"

export const formSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required().email(),
  phone: Yup.number().moreThan(999999, 'phone must be more than 6 digits'),
  password: Yup.string()
    .required()
    .min(8, "Password must be at least 8 characters"),
})
