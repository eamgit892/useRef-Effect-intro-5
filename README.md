# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Завдання 0
Реалізуйте декілька компонентів, які будуть відображати пости та коментарі. Дані отримайте через 
API з порталу https://jsonplaceholder.typicode.com - /posts та /comments.
Самостійна діяльність студента


### Завдання 1
Створити 3 елементи input для імені, прізвища та емейл адреси. До кожного елементу input застосувати хук useRef. 
Створити елемент button та функцію, яка буде збирати введенні в input дані та додавати їх в state. Порада: використовуйте масив об'єктів, як тип даних для state.

### Завдання 2 
Створити хук useEffect, який при кожному рендері компоненту буде виводити останнє значення 
стейту в консоль.

### Завдання 3
Створити дочірній компонент, який буде приймати props, та передайте в нього якийсь об'єкт. 
Відобразіть даний props в інтерфейсі. 

Що відбудеться, якщо props зміниться?