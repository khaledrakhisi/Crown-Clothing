import React from "react";

import "./Button.scss"

interface IProps{
    id: string,
    type: "button" | "submit" | "reset" | undefined,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    isGoogleSignIn?: boolean,
}

const Button : React.FunctionComponent<IProps> = ({id, isGoogleSignIn, children, ...otherProps}) => {
    return (
        <button className= {`${isGoogleSignIn ? "signin-with-google" : ""} custom-button`} id={id} {...otherProps}>{children}</button>
    );
}

export default Button;