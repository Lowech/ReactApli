import './App.css';
import { Link } from "react-router-dom";
import Header from './components/header/header';
import FormBlock from './components/formBlock/formBlock';
import { useSelector, useDispatch } from 'react-redux';
import { dispalyVisibli, displayHiden } from './redux/counterSlice';

function App() {
  const value = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  
function openForm(){
  if(value === "none"){
    dispatch(dispalyVisibli());
  }else{
    dispatch(displayHiden());
  }
}
  return (
    <div className="App">
      <header >
        <Header/>
      </header>
      <FormBlock/>
      <main className="App-main">
        <div className="blockHeader">
          <p className="blockHeader-text">Место для получения медицинской помощи</p>
        </div>
        <div className="blockNav">
          <button onClick={openForm} className="blockNav-button">Войти</button>
          <nav>
            <Link className="blockNav-link" to="/contacts">Контакты</Link>
          </nav>
        </div>
        <div className="blockTable">
          <div className="blockTable-items">
            <img src={require("./img/circleSec.png")} className="blockTable-items__logo" alt="logo"/>
            <span className="blockTable-items__text1">Онлайн-прием</span>
            <div className="blockTable-items__line"></div>
            <span className="blockTable-items__text2">Рыба текст</span>
          </div>
          <div className="blockTable-items">
            <img src={require("./img/circleSec2.png")} className="blockTable-items__logo" alt="logo"/>
            <span className="blockTable-items__text1">Экстренный Случай</span>
            <div className="blockTable-items__line"></div>
            <span className="blockTable-items__text2">Рыба текст</span>
          </div>
          <div className="blockTable-items">
            <img src={require("./img/circleSec3.png")} className="blockTable-items__logo" alt="logo"/>
            <span className="blockTable-items__text1">Лечение рака</span>
            <div className="blockTable-items__line"></div>
            <span className="blockTable-items__text2">Рыба текст</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
