import React from 'react';
import './App.css';
// import {chess} from "./type/enums"
// import BoardComp from "./components/BoardComp" 
import GameComp from "./components/GameComp"

function App() {
  return (
    <div>
      <GameComp />
      {/* <BoardComp chesses={chessList} onClick={(i)=>{
        console.log(i)
      }}/> */}
      {/* <ChessComp type={chess.none} clickEvent={()=>{console.log('极限挑战')}}/>
      <ChessComp type={chess.black} clickEvent={()=>{console.log('极限挑战')}}/>
      <ChessComp type={chess.red} clickEvent={()=>{console.log('极限挑战')}}/> */}
    </div>
    
  );
}

export default App
