import './Login.ccs';
import I from '../../image/I.png';
import F from '../../image/F.png';
import G from '../../image/G.png';

function Login(){
    return(
     <>
        <div>
           <div>
            <h1>Login</h1>
               <div>
                    <h4>E-mail:</h4>
                    <h4>Senha:</h4>
                </div> 
                <div>
                    <h5>criar conta</h5>
                    <h5>Entrar</h5>
                </div>
                <div>
                    <h3>Logar com:</h3>
                        <img src={I} alt=""/>
                        <img src={F} alt=""/>
                        <img src={G} alt=""/>
                </div>
           </div>
        </div>
     </>
    )
}

export default Login;