import * as yup from 'yup'

const formSchema = yup.object().shape({
    Name: yup
        .string()
        .trim()
        .required('Name Required')
        .min(2, 'name must be atleast 2 characters'),
    Size: yup
        .string()
        .required()
        .oneOf(['9 inch', '10 inch', '12 inch'], 'Size is Required'),
    Sauce: yup
        .string()
        .oneOf(['alfredo', 'marinara'], 'Sauce is required'),
    Pepperoni: yup.boolean(),
    Sausage: yup.boolean(),
    CanadianBacon: yup.boolean(),


})
export default formSchema