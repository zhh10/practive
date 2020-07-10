import React from 'react'
import {chess} from "../type/enums"
// import { on } from 'cluster'
import "./ChessComp.css"
interface chessTypes{
    type:chess,
    clickEvent:()=>void
}
export default function ChessComp({type,clickEvent}:chessTypes) {
    let c
    if(type === chess.red){
        c = <div className='chess red'></div>
    }else if(type === chess.black){
        c = <div className='chess black'></div>
    }
    return (
        <div className="chessComp" onClick={()=>{
            if(type === chess.none && clickEvent){
                clickEvent()
            }
        }}>
            {c}
        </div>
    )
}

