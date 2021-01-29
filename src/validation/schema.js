import * as yup from "yup";


export default yup.object().shape({
    pizzaSize: yup
    .string()
    .required("A Size Is Required"),
})