// import logo from './logo.svg';
// import './App.css';
// import React,{useState} from 'react';

// function App() {
//   const [val,setVal]=useState("")
//   return (
//     <div className="App">
      
//       <h1>Controlled component</h1>

//       <input type='text' value={val} onChange={(e)=>setVal(e.target.value)} />

//       <h3>input : {val}</h3>
//     </div>
//   );
// }

// export default App;


import React from "react";

class App extends React.Component{

  constructor(){
    super();
    this.state={
      val:""
    }
  }

  handleChamge=(e)=>{

    this.setState({
      val:e.target.value
    });
  }

  render(){
    return(
      <>
      <input type="text" value={this.state.val} onChange={this.handleChamge}/>

      <h3>input : {this.state.val}</h3>
      </>
    )
  }
}
export default App