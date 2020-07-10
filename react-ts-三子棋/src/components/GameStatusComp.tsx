import React from 'react'
import {chess,GameStatus} from "../type/enums"
interface StatusType{
    gameStatus:GameStatus
    nextchess:chess.red|chess.black
}
const GameStatusComp:React.FC<StatusType> = function(props){
    let content
    if(props.gameStatus === GameStatus.gaming){
        if(props.nextchess === chess.red){
            content = <div>红方落子</div>
        }else{
            content = <div>黑方落子</div>
        }
    }else{
        if(props.gameStatus === GameStatus.redWin){
            content = <div>红方胜</div>
        }else if(props.gameStatus === GameStatus.blackWin){
            content = <div>黑方胜</div>
        }else if(props.gameStatus === GameStatus.equal){
            content = <div>平局</div>
        }
    }
    return (
        <div>
            {content}
        </div>
    )
}
export default GameStatusComp