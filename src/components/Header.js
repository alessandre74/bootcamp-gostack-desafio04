import React from 'react'

import Facebook from '../assets/facebook.png'

function Header() {
    return (
        <header>
            <nav>
                <img src={Facebook} alt="" />
                <div>
                    <span>Meu Perfil</span>
                    <i className="material-icons">account_circle</i>
                </div>
            </nav>
        </header>
    )
}

export default Header