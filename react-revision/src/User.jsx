// function User(props) {
//   return (
//     <div>
//       <h1>Hello {props.name}</h1>
//       <h1>Age: {props.age}</h1>
//     </div>
//   );
// }

// export default User;


//another example of props

function User(props) {
  return (
    <>
      <h1>Branch {props.branch}</h1>
      <h2>Section {props.section}</h2>
    </>
  )
}

export default User