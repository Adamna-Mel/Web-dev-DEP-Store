import { React, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'

const Login = () =>{
    const [email, setEmail] = useState('');
    const history = useHistory();

    function handleLogin(e) {
        e.preventDefault();
        
        if(email.trim() === '') {
            return;
        }

        let usuarioPosts = localStorage.getItem("_USUARIOS");
        let adicionarUsuario = true
        let usuPost;

        if (!usuarioPosts) {
            usuarioPosts = []

        } else {
            usuarioPosts = JSON.parse(usuarioPosts)
        }

        for(let i=0; i<usuarioPosts.length; i++) {
            if (usuarioPosts[i].email === email) {
                adicionarUsuario = false;
            }
        }

        if(adicionarUsuario) {
            usuPost = {
                email: email,
                posts: {}
            }
            usuarioPosts.push(usuPost)
            localStorage.setItem("_USUARIOS", JSON.stringify(usuarioPosts))
        }

        history.push(`/carrinho/${email}`)

    }

    return (
        <div>
            Pagina de Login
            
            <form onSubmit={handleLogin}>
                <input 
                    type="text"
                    placeholder="Informe seu email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />                    
                <button type="submit">
                    Login
                </button>

            </form>
        </div>
    )

}
export default Login;