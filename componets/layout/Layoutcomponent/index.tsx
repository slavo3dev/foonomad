import {Fragment} from "react";
import {MainNavigation} from "../MainNavigation";


export function LayoutComponent(props) {
   
    return (
        <Fragment>
            <MainNavigation />
            <main>{props.children}</main>
        </Fragment>
    )
}