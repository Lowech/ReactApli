import Header from '../header/header';
import  '../personalArea/personalArea.css';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { stateName, buttonTextChange } from '../../redux/counterSlice';
import FormBlock from '../formBlock/formBlock';

function PersonalArea() {

  const name = useSelector(state => state.counter.name);
  const dispatch = useDispatch();

  dispatch(stateName(localStorage.getItem('name')));
  dispatch(buttonTextChange(localStorage.getItem('buttonText')));
   
function signOut(){
  dispatch(buttonTextChange("Войти"));
  dispatch(stateName(""));
}

  return (
    <div className="PersonalArea">
      <header >
        <Header/>
      </header>
      <FormBlock/>
      <main className="PersonalArea-main">
        <div className="PersonalArea-blockText">
          <p className="PersonalArea-block__text">Контакты, {name}</p>
        </div>
        <nav className="PersonalArea-blockButton">
          <Link onClick={signOut} className="PersonalArea-blockButton__signOut" to="/">Выйти из аккаунта</Link>
          <Link className="PersonalArea-blockButton__link" to="/contacts">Перейти в контакты</Link>
        </nav>
      </main>
    </div>
  );
}

export default PersonalArea;
