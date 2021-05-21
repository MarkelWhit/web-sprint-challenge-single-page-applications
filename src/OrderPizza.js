
const initialOrders = [] ;
const initialFormValues = {
    /////NAME/////
    Name: '',
    ///DROPDOWN///
    Size:'',
    ///RADIO BUTTONS///
    Sauce:'',
    ///Checkboxes///
    Pepperoni: false,
    Sausage: false,
    CanadianBacon: false,
    SpicyItalianSausage: false,
    GrilledChicken: false,
    Onions: false,
    GreenPepper: false,
    DicedTomatoes: false,
    BlackOlives: false,
    RoastedGarlic: false,
    ArtichokeHearts: false,
    ThreeCheese: false, 
    Pineapple: false,
    ExtraCheese: false,
////COMMENTBOX///
    SpecialInstructions:"Anything else you'd like to add?",
}
const initialFormErrors = {
    Size:'',
    Sauce:'',
    SpecialInstructions:'',
}

export default function PizzaOrder() {
const initialDisabled = true;
const [order, setOrder] = useState(initialOrders)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

const formSubmit = () => {
    const newOrder = {
        Size: formValues.Size.trim(),
        Sauce: formValues.Sauce.trim(),
        Toppings: ['Pepperoni','Sausage','Canadian Bacon','Spicy Italian Sausage','Grilled Chicken','Onions','Green Pepper','Diced Tomatos','Black Olives','Roasted Garlic','Artichoke Hearts','Three Cheese','Pineapple','Extra Cheese'].filter(topping => formValues[topping])
  
    } 
     (newOrder)
}}