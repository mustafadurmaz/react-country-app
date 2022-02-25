import { useState } from "react";
import { Container, DropdownButton, Dropdown, Nav } from "react-bootstrap";
import ContinentPage from "./Continent";
// import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";



interface dataType {
    continents: Array<continentsTypes>;
    countries: Array<countriesTypes>;
}

interface continentsTypes {
    __typename: string;
    name: string;
}

interface countriesTypes {
    __typename: string;
    name: string;
}

export default function ContinentList({ continents, countries }: dataType) {
    console.log(continents);
    console.log(countries);



    return (

        <>
            <Container>
                <DropdownButton id="dropdown-basic-button" title="Kıtalar">
                    {continents?.map(({ name }) => (
                        <Dropdown.Item href={name}>{name}</Dropdown.Item>
                    ))}

                </DropdownButton>
            </Container>
        </>
    );
}

