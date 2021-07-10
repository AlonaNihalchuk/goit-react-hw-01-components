// // import logo from './logo.svg';
// // import React from 'react';
// // import ReactDom from 'react-dom';

// import './App.css';

// import PaintingList from './components/PaintingList';
// import paintings from './paintings.json';
// import Section from './components/Section';

// export default function App() {
//   return (
//     <div>
//       <Section title="top week">
//         <PaintingList items={paintings} />
//       </Section>
//       <Section title="top month" />
//     </div>
//   );
// }

// // comment
// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React!
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

import userData from './components/Profile/user.json';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <Profile
      name={userData.name}
      tag={userData.tag}
      location={userData.location}
      avatar={userData.avatar}
      stats={userData.stats}
    />
  );
}

export default App;
