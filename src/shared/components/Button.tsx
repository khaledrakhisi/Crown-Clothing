import React from "react";

import "./Button.scss"

interface IProps{
    id: string,
    type: "button" | "submit" | "reset" | undefined,
}

const Button : React.FunctionComponent<IProps> = ({id, children, ...otherProps}) => {
    return (
        <button className="custom-button" id={id} {...otherProps}>{children}</button>
    );
}

export default Button;