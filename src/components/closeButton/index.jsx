import React from 'react';
import { CloseIcon } from "../../assets/closeIcon/styles"
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

export const CloseButton = ({ pushTo }) => {
    const dispatch = useDispatch();
    let onClick = () => {};
    if (pushTo) onClick = () => dispatch(push(pushTo))
    return <CloseIcon onClick={onClick} />
}