import {MemoryRouter} from "react-router-dom";
import {render} from "@testing-library/react"

function renderWrapper(props){
    return(
        <MemoryRouter>
            {props.children}
        </MemoryRouter>
    )
}

export function wrappedRender(element, options){
    render(element, {wrapper: renderWrapper, ...options});
}

