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

import Container from './components/Container/Container';

import userData from './components/Profile/user.json';
import Profile from './components/Profile/Profile';

import statisticalData from './components/Statistics/statistical-data.json';
import Statistics from './components/Statistics/Statistics';

// import StatisticalSection from './components/Statistics/StatisticalSection';
// import StatisticsList from './components/Statistics/StatisticsList';

import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

function App() {
  return (
    <Container>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      {/* <StatisticalSection title="Upload stats">
        <StatisticsList stats={statisticalData} />
      </StatisticalSection> */}
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
}

export default App;
