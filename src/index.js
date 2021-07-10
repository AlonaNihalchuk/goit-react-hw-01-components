import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';

// video repeta 1
// const element1 = React.createElement('span', { children: 'hello' });
// const element2 = React.createElement('span', { children: 'world' });

// const element = React.createElement('div', {
//   a: 10,
//   b: 20,
//   // детьми могут быть другие реакт элементы
//   children: [element1, ' ', element2],
// });
// console.log(element);
// ReactDOM.render(element, document.querySelector('#root'));

// video repeta 2

// const elem1 = <span>hello</span>;
// const elem2 = <span>world</span>;
// const elem = (
//   <div>
//     {elem1} {elem2}
//   </div>
// );
// console.log(elem);
// ReactDOM.render(elem, document.querySelector('#root'));

// repeta 3

// const data = paintings[1];

// const data = {
//   id: 'id-1',
//   url: 'https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg',
//   title: 'Feathers. Art abstract',
//   price: 500,
//   author: {
//     tag: 'ractapopulous',
//     url: 'https://pixabay.com/users/ractapopulous-24766/',
//   },
//   quantity: 10,
// };

// const painting1 = (
//   <div>
//     <img src={data.url} alt={data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>
//       Автор: <a href={data.author.url}>{data.author.tag}</a>
//     </p>
//     <p>Цена: {data.price} кредитов</p>
//     <p>Доступность: {data.quantity}</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// );
// const painting = paintings[2];

// here
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
