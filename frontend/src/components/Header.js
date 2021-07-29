import React from 'react';



export default function Header(){
    return(
        <div className="header">
            <div className="logo">
                <img src="./asset/Logo.png" className="img-logo" alt="logo"/>
            </div>
            <div className="flag-logo">
                <img src="./asset/Flag.png" className="flag" alt="flag"/>
                <img src="./asset/Maori.png" alt="Maori_flag"/>
            </div>
        </div>
    );
}