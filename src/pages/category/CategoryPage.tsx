import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface IMatchName{
    categoryName: string,
}

interface IProps extends RouteComponentProps<IMatchName> {}

const CategoryPage: React.FunctionComponent<IProps> = ({match}) => {
    console.log("Here  ", match);
    
    return <div>{match.params.categoryName}</div>;
}

export default CategoryPage;