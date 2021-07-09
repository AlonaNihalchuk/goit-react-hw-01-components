// import logo from './logo.svg';
import './App.css';
// import React from 'react';
// import ReactDom from 'react-dom';
import PaintingList from './components/PaintingList';
import paintings from './paintings.json';
import Section from './components/Section';

export default function App() {
  return (
    <div>
      <Section title="top week">
        <PaintingList items={paintings} />
      </Section>
      <Section title="top month" />
    </div>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React!
//         </a>
//       </header>
//     </div>
//   );
// }
