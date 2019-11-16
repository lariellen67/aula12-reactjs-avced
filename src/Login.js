import React from 'react';
import IFSP_Logo from './images/IFSP_Logo.png';
import './Login.css';


export default function Login(){
    
    return(

        <div className="login-container">

            <div className="menu">
                <nav> 
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="specs.html">Especificações</a></li>
                    <li><a href="fotos.html">Fotos</a></li>
                    <li><a href="multimidia.html">Multimídia</a></li>    
                    <li><a href="fale-conosco.html">Fale Conosco</a></li>
                </ul>
                </nav>
            </div>

            <form>
                <h3>Preencha os campos abaixo para se cadastrar no portal do IFSP</h3>
                <img src={IFSP_Logo} alt="Cadastro IFSP"></img>
                <input placeholder="Digite o seu nome"></input>
                <input placeholder="Digite o seu último nome"></input>
                <input placeholder="Digite o seu e-mail"/>
                <input placeholder="Digite uma senha"></input>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );

}
    

