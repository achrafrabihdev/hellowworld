import React from 'react'

// 3iwad n7ato props kamala fi parametre n9adro n3azlo ghi ach bghina
const NavBar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <a className="navbar-brand">Navbar <span className="badge badge-pill bg-secondary">{totalCounters}</span></a>
            </div>
        </nav>
    )
}
export default  NavBar;