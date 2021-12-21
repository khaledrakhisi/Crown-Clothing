import React from "react";

import "./Button.scss"

interface IProps{
    id: string,
    type?: "button" | "submit" | "reset",
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    isBlueStyle?: boolean,
}

const Button : React.FunctionComponent<IProps> = ({id, isBlueStyle, children, ...otherProps}) => {
    return (
        <button className= {`${isBlueStyle ? "blue-style" : ""} custom-button`} id={id} {...otherProps}>{children}</button>
    );
}

export default Button;