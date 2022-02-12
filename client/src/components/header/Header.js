import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Search from './Search'
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
const Header = () => {

    return (
        <div className="header bg-light">
            <nav className="navbar navbar-expand-lg navbar-light 
            bg-light align-middle">

                <Link to="/" className="logo">                   
                    <WbTwilightIcon onClick={() => window.scrollTo({top: 0})}></WbTwilightIcon>
                </Link>

                {/* <Search /> */}

                <Menu />
            </nav>
        </div>
    )
}

export default Header
