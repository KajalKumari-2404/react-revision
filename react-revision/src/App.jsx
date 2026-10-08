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
// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const increase = () => {
//     setCount(count + 1);
//   };

//   const decrease = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   return (
//     <div>
//       <h1>Counter: {count}</h1>

//       {/* <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//       <br />
//       <button onClick={() => setCount(count - 1)}>
//         Decrease
//       </button> */}

//       <button onClick={increase}>Increase</button>
//       <br />
//       <button onClick={decrease}>Decrease</button>
//     </div>
//   );
// }

// export default App;



//useState + Input
// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <h1>My Name: {name}</h1>

//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//     </div>
//   );
// }

// export default App;


// usestate name+age

// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");

//   return (
//     <div>
//       <h1>Name: {name}</h1>
//       <h2>Age: {age}</h2>

//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <br />

//       <input
//         type="number"
//         placeholder="Enter your age"
//         value={age}
//         onChange={(e) => setAge(e.target.value)}
//       />
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";

// function App() {
//   const [user, setUser] = useState({
//     name: "",
//     age: "",
//     city: ""
//   });

//   return (
//     <div>
//       <h1>User Details</h1>

//       <input
//         type="text"
//         placeholder="Enter name"
//         value={user.name}
//         onChange={(e) =>
//           setUser({ ...user, name: e.target.value })
//         }
//       />

//       <br /><br />

//       <input
//         type="number"
//         placeholder="Enter age"
//         value={user.age}
//         onChange={(e) =>
//           setUser({ ...user, age: e.target.value })
//         }
//       />

//       <br /><br />

//       <input
//         type="text"
//         placeholder="Enter city"
//         value={user.city}
//         onChange={(e) =>
//           setUser({ ...user, city: e.target.value })
//         }
//       />

//       <h2>Name: {user.name}</h2>
//       <h2>Age: {user.age}</h2>
//       <h2>City: {user.city}</h2>
//     </div>
//   );
// }

// export default App;

//state: Array state
// import { useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]);

//   const addUser = () => {
//     setUsers([...users, "Kajal"]);
//   }; 
  //Jab addUser function chalega, to existing users ko rakho aur uske end me "Kajal" add kar do.

//   return (
//     <div>
//       <h1>Users List</h1>

//       <button onClick={addUser}>Add User</button>

//       {users.map((user, index) => (
//         <p key={index}>{user}</p>
//       ))}
//     </div>
//   );
// }

// export default App;


//Real application me user ka naam input se aayega.
// import { useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [name, setName] = useState("");

//   const addUser = () => {
//     setUsers([...users, name]);
//     setName("");
//   };

//   return (
//     <div>
//       <h1>Users List</h1>

//       <input
//         type="text"
//         placeholder="Enter user name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
        //Input box ke andar currently jo value hai, wo deta hai.(e.target.value)
        //onChange tab chalta hai jab user input ki value change karta hai.
      // />

      // <button onClick={addUser}>Add User</button>

      // {users.map((user, index) => (
        //Ab hum array ke andar ke users ko screen par show kar rahe hain.
//         <p key={index}>{user}</p>
//       ))}
//     </div>
//   );
// }

// export default App;

//Array State — Remove User
// import { useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [name, setName] = useState("");

//   const addUser = () => {
//     setUsers([...users, name]);
//     setName("");
//     //input box ko empty karne ke liye 
//   };

//   const removeUser = (indexToRemove) => {
//     const updatedUsers = users.filter(
//       //filter() Array me se condition ke according items select karke ek new array banana.
//       (user, index) => index !== indexToRemove
//     );

//     setUsers(updatedUsers);
//   };

//   return (
//     <div>
//       <h1>Users List</h1>

//       <input
//         type="text"
//         placeholder="Enter user name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <button onClick={addUser}>Add User</button>

//       {users.map((user, index) => (
//         <div key={index}>
//           <p>{user}</p>

//           <button onClick={() => removeUser(index)}>
//             Remove
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
      

//lazy loading
// import { lazy, Suspense } from "react";

// const Dashboard = lazy(() => import("./Dashboard"));

// function App() {
//   return (
//     <Suspense fallback={<h2>Loading...</h2>}>
//       <Dashboard />
//     </Suspense>
//   );
// }

// export default App;

import { lazy, Suspense } from "react";

const Dashboard = lazy(() => {
  console.log("Dashboard loading started...");

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Dashboard loaded!");
      resolve(import("./Dashboard"));
    }, 3000);
  });
});

function App() {
  return (
    <div>
      <h1>My React App</h1>

      <Suspense fallback={<h2>⏳ Loading Dashboard...</h2>}>
        <Dashboard />
      </Suspense>
    </div>
  );
}

export default App;