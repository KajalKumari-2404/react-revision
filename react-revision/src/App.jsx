//Ye ek JavaScript function hai.
// function App() {
  // return (
    //HTML jaisa dikhta hai, lekin React me hum ise JSX kehte hain.
    // <h1>Hello React</h1>
  // );
// }

// export default App;

// function Welcome() {
//   return (
//     <h1>Welcome to React</h1>
//   );
// }

// export default Welcome;

// const name = "Kajal";
// const age = "20"

// function App() {
//   return (
//     <>
//     <h1>Hello {name}</h1>
//     <h1>Age: {age}</h1>
//     </>
//   );
// }

// export default App;


// import Navbar from "./Navbar";
// import Home from "./Home";
// import About from "./About";
// import Footer from "./Footer";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Home />
//       <About />
//       <Footer />
//     </div>
//   );
// }

// export default App;


// import User from "./User";

// function App() {
//   return (
//     <div>
//       <User name="Kajal" age={20} />
//     </div>
//   );
// }

// export default App;

// import User from "./User";

// function App() {
//   return (
//     <>
//     <User branch="CSE" section="C"/>
//     </>
//   )
// }
// export default App;

//props example 2

// import User from "./User";

// function App() {
//   return (
//     <div>
//       <h1>User Details</h1>

//       <User
//         name="Kajal"
//         age={20}
//         city="Bhopal"
//       />

//       <User
//         name="Aayushi"
//         age={22}
//         city="Indore"
//       />

//       <User
//         name="Disha"
//         age={21}
//         city="Delhi"
//       />
//     </div>
//   );
// }

// export default App;

// import User from "./User";

// function App() {
//   return (
//     <>
//     <h1>User Details</h1>
//     <User name="Kajal" age={20} city="Bhopal" stream="PCM" />
//     <User name="Ayushi" age={22} city="Indore" stream="PCB" />
//     <User name="Bhavika" age={19} city="Delhi" stream="PCMB" />
//     </>
//   )
// }

// export default App

// useState
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Counter: {count}</h1>

      {/* <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <br />
      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button> */}

      <button onClick={increase}>Increase</button>
      <br />
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default App;
















// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
