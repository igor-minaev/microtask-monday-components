import React from "react";

type HeaderType = {
    titleForHeader: string
}

export const Header = (props: HeaderType) => {
    return (
        <>{props.titleForHeader}</>
    )
}