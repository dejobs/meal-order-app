import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const HeaderCartButton = props => {

    const {addItem, removeItem, totalAmount, items} = useContext(CartContext)

    const numberofCartItems = items.reduce( (curNumber, item) => {
        return curNumber + item.amount
    }, 0

    )


    return <button onClick={props.handleShowCart} className={classes.button}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberofCartItems}</span>
    </button>
}

export default HeaderCartButton;