import { useState } from 'react';
import  './formBlock.css';
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { stateName, displayHiden,buttonTextChange } from '../../redux/counterSlice';

function FormBlock() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const value = useSelector(state => state.counter.value);
  
  const [evInputLogin,setEvInputLogin] = useState("");
  const [evInputPassword,setEvInputPassword] = useState("");
  
 
function avtorization(){
  
  if(/[\_\#\=\№\!\:\;\%\+\?\^\-]/g.test(evInputPassword) 
    && /\w/gi.test(evInputPassword) 
      && evInputPassword.length >= 8){
        if(evInputLogin != ""){
          dispatch(displayHiden());
          dispatch(stateName(evInputLogin));
          dispatch(buttonTextChange("Выйти"));
          localStorage.setItem("name", evInputLogin);
          localStorage.setItem("buttonText", "Выйти");
          navigate('/personalArea');

        }else{
          alert('Введите логин.');
        } 

  }else{
    alert('Пароль должен состоять из '+'a-z, A-Z, 0-9, # = № ! : ; % ? + ^ -'+' не менее 8 знаков.');
  }
}

  return (
    <div className="formBlock-fon" style={{display:value}}>
      <form action="#" className="formBlock" >
        <div className="formBlock-containerText">
          <p className="formBlock-text">Авторизуйтесь</p>
        </div>
        <div className="formBlock-input">
          <input value={evInputLogin} type="text" className="formBlock-login" onChange={(e)=>{setEvInputLogin(e.target.value)}} placeholder="ваш логин"/>
          <input value={evInputPassword} type="text"  className="formBlock-password" onChange={(e)=>{setEvInputPassword(e.target.value)}} placeholder="ваш пароль"/>
        </div>
        <nav className="formBlock-nav">
         <button onClick={avtorization} className="formBlock-link" type='button'>вход</button>
        </nav>
      </form> 
    </div>
    
  );
}

export default FormBlock;