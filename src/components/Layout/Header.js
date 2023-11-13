import React, { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    
    return <Fragment>
        <header className={classes.header}>
            <h1>DejobsMeals</h1>
            <HeaderCartButton handleShowCart={props.onShowCart}/>
        </header>
        <div className={classes["main-image"]}>
            <img  src={mealsImage} alt="A table full of delicious menu" />
        </div>
    </Fragment>
};

export default Header;