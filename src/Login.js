import React from 'react';
import IFSP_Logo from './images/IFSP_Logo.png';
import './Login.css';



export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state= {message: "em progresso..."};
    }

    sendMessage = () =>{
        this.setState({message: "completa. Acesse o seu e-mail e clique no link de autenticação :)"});
    }

    render(){
    return(

        <div className="login-container">
            <div className="menu">
                <nav> 
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="cursos.html">Cursos</a></li>
                    <li><a href="fotos.html">Fotos</a></li>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="cadastro.html">Cadastro</a></li>
                    <li><a href="contato.html">Fale Conosco</a></li>
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
                <button type="button" onClick={this.sendMessage}>Enviar</button>
                <h4>A sua solicitação de cadastro está {this.state.message}</h4>
            </form>
        </div>
    );
    }
}
    

