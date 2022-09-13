function changeMode() //função uma responsabilidade so
{
  changeClasses();
  changeText();
}

function changeClasses()
{
  button.classList.toggle(darkModeClass) //se existe ele tira e se n ele coloca
  h1.classList.toggle(darkModeClass)
  body.classList.toggle(darkModeClass)
  footer.classList.toggle(darkModeClass)

}
function changeText()
{
  const lightMode= "Light Mode"
  const darkMode= "Dark Mode"
  if(body.classList.contains(darkModeClass)) //contains é p ve se tem escrito na class
  {
    button.innerHTML = lightMode;
    h1.innerHTML = darkMode +  " ON"
    return;
  }
  button.innerHTML = darkMode;
  h1.innerHTML = lightMode +  " ON"

}


const darkModeClass= 'dark-mode'
const button = document.getElementById('mode-selector');
const h1 =document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0]; //index vai retornar uma coleção, como so tem o body e o index é 0

button.addEventListener('click', changeMode)