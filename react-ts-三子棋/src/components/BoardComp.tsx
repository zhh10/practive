import React from 'react'
import ChessComp from "./ChessComp"
import {chess} from "../type/enums"
import "./BoardComp.css"
interface boardType{
    chesses:chess[],
    isGameover:boolean,
    onClick:(index:number) => void
}
const BoardComp:React.FC<boardType> = function(props) {
    const isGameover = props.isGameover!
    const list = props.chesses.map((item,i)=>{
        return <ChessComp key={i} type={item} clickEvent={()=>{
            if(!isGameover){props.onClick(i)}
        }}/>
    })
    return (
        <div className="board">
            {list}
        </div>
    )
}
// BoardComp.defaultProps = {
//     isGameover:false
// }
export default BoardComp