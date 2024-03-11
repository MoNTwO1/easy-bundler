import './style.less'
import Handlebars from 'handlebars';
import * as Components from './components'
import * as Pages from './views';

let currentPage = '';

interface Pages {
  [key: string]: string[];
}

const pages:Pages  = {
  'chat': [Pages.ChatPage],
  'login': [Pages.LoginPage],
  'notFound': [Pages.NotFoundPage],
  'serverError': [Pages.ServerErrorPage],
  'registration': [Pages.RegistrationPage],
  'profile': [Pages.ProfilePage],
};

Object.entries(Components).forEach(([ name, component ]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page: string) {
  console.log('page', page)
  console.log(pages)
  const [ source, args ] = pages[page];
  currentPage = page;
  console.log(source)
  const handlebarsFunct = Handlebars.compile(source);
  document.body.innerHTML = handlebarsFunct(args);
}

document.addEventListener('DOMContentLoaded', () => {
  navigate('login');
});

document.addEventListener('click', e => {
   const page = (e.target as HTMLElement).getAttribute('page');
   console.log('on click',page)
  //  let check = loginFormValidation()
  //   console.log(check)
  if (page && page !== currentPage) {
    if (currentPage === 'login' && page === 'chat') {
        let check = loginFormValidation()
        if (check) {
            currentPage = page;
            navigate(page)
            e.preventDefault()
            e.stopImmediatePropagation()
        } 
        else {
            e.preventDefault()
            e.stopImmediatePropagation()
        }
    } 
    else if (currentPage === 'registration' && page === 'chat') {
        let checkPass = registerFormValidation()
        if (checkPass) {
          currentPage = page;
            navigate(page)
            e.preventDefault()
            e.stopImmediatePropagation()
        } 
        else {
            e.preventDefault()
            e.stopImmediatePropagation()
        }
    } 
    else if (currentPage === 'login' && page === 'registration') {
      currentPage = page;
        navigate(page)
        e.preventDefault()
        e.stopImmediatePropagation()
    } 
  }
});

function loginFormValidation() {
  let login = (document.getElementById("login") as HTMLInputElement).value;
  if (login && login === '123') {
      (document.getElementById("loginField") as HTMLInputElement).innerHTML = "Неверный логин";
      return false;
  } else {
    (document.getElementById("loginField") as HTMLInputElement).innerHTML = "";
  }
  return true;
}

function registerFormValidation() {
  let pas1 = (document.getElementById("password") as HTMLInputElement);
  let pas2 = (document.getElementById("passwordRepeat") as HTMLInputElement);
  if (pas1 && pas2.value && pas1.value !== pas2.value) {
      pas1.classList.add('password__warning');
      pas2.classList.add('password__warning');
      (document.getElementById("passwordRepeatField") as HTMLInputElement).innerHTML = "Пароли не совпадают";
      return false;
  } else {
    if(pas1 && pas2){
      pas1.classList.remove("password__warning");
      pas2.classList.remove("password__warning");
      (document.getElementById("passwordRepeatField") as HTMLInputElement).innerHTML = "";
    }
  }
  return true;
}

