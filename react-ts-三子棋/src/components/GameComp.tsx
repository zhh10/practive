import React from 'react'
import {chess,GameStatus} from "../type/enums"
import BoardComp from "./BoardComp" 
import GameStatusComp from "./GameStatusComp"

interface IState{
    chesses:chess[] 
    gameStatus:GameStatus,
    nextchess:chess.red | chess.black
}

export default class GameComp extends React.Component<{},IState>{
    state:IState = {
        chesses:[],
        gameStatus:GameStatus.gaming,
        nextchess:chess.black
    }
    init(){
        const arr:chess[] = []
        for(var i = 0;i<9;i++){
            arr.push(chess.none)
        }
        this.setState(prevState => ({
            chesses:arr,
            gameStatus:GameStatus.gaming,
            nextchess:chess.black
        }))
    }
    // 判断规则
    getStatus(chesses:chess[],index:number){
        //1.判断是否有一方获得胜利
        const horMin = Math.floor(index/3) * 3;
        const verMin = index % 3;
        if ((chesses[horMin] === chesses[horMin + 1] && chesses[horMin] === chesses[horMin + 2])
            ||
            (chesses[verMin] === chesses[verMin + 3] && chesses[verMin] === chesses[verMin + 6])
            ||
            (chesses[0] === chesses[4] && chesses[0] === chesses[8] && chesses[0] !== chess.none)
            ||
            (chesses[2] === chesses[4] && chesses[2] === chesses[6] && chesses[2] !== chess.none)){
                if(chesses[index] === chess.red){
                    return GameStatus.redWin
                }else{
                    return GameStatus.blackWin
                }
        }
        // 2. 判断是否平局
        if(!chesses.includes(chess.none)){
            return GameStatus.equal
        }
        // 3.游戏正在进行
        return GameStatus.gaming
    }
    // 初始化
    componentDidMount(){
        this.init()
    }
    // 棋子点击事件 
    handleChessClick(index:number){
        let arr:chess[] = [...this.state.chesses];
        arr[index] = this.state.nextchess 
        this.setState(prevState => ({
            chesses:arr,
            gameStatus:this.getStatus(arr, index),
            nextchess:this.state.nextchess === chess.black?chess.red:chess.black
        }))
    }
    render(){
        return(
            <div style={{ textAlign:'center'}}>
                <h1>三子棋游戏</h1>
                <GameStatusComp 
                gameStatus={this.state.gameStatus}
                nextchess={this.state.nextchess}/>
                <BoardComp 
                chesses={this.state.chesses}
                isGameover = {this.state.gameStatus!==GameStatus.gaming}
                onClick={this.handleChessClick.bind(this)}/>
                <button onClick={this.init.bind(this)}>重新开始</button>
            </div>
        )
    }
}
