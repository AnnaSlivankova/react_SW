import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsedValue: boolean
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody collapsed={props.collapsedValue}/>
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <>{props.title}</>
}

type AccordionBodyType = {
    collapsed: boolean
}

function AccordionBody(props: AccordionBodyType) {
    if (props.collapsed === false) {
        return (
            <div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        );
    }

    if (props.collapsed === true) {
        return <div></div>
    }

    return <div></div>
}


export default Accordion;