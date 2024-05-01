import React from 'react';
import { Link } from 'react-router-dom';
const links = [{
    name: "Home",
    href: "/Home",
},
{
    name: "About",
    href: "/About",
},
];

const NavBar = () => {
    return (
        <div>
            {links.map((x) => (
                <Link key={x.id} to={x.href}>{x.name}</Link>
            ))}
        </div>
    );
};


export default NavBar