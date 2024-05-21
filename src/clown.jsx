import _ from "lodash"
import clown1 from "./assets/clowns/clown1.jpeg"
import clown2 from "./assets/clowns/clown2.jpeg"
import clown3 from "./assets/clowns/clown3.jpeg"
import clown4 from "./assets/clowns/clown4.jpeg"
import clown5 from "./assets/clowns/clown5.jpeg"
import clown6 from "./assets/clowns/clown6.jpeg"
import clown7 from "./assets/clowns/clown7.jpeg"
import clown8 from "./assets/clowns/clown8.jpeg"
import clown9 from "./assets/clowns/clown9.jpeg"
import clown10 from "./assets/clowns/clown10.jpeg"
import { useState } from "react"

let clicked=[]
export function App(){
    const[score,setscore]=useState(0)
    const[high,sethigh]=useState(0)
   
    let images=[ 
        <img onClick={()=>{
            console.log(clicked)
            if(clicked.includes('1')){
                alert('You Lose')
               if(score>high){
sethigh(score)

}
                setscore(0)
                clicked=[]
            }else {
                clicked.push('1')
                setscore(score+1)
                Imaging()
            } 
        }} className="card" src={clown1} value="1" key={1} alt="" />,
        <img onClick={()=>{
            if(clicked.includes('2')){
                alert('You Lose')
                if(score>high){
sethigh(score)

}
                 setscore(0)
                clicked=[]
            }else {
                clicked.push('2')
                setscore(score+1)
                Imaging()
            } 
        }}className="card"  src={clown2} value="2" key={2} alt="" />,
        <img onClick={()=>{
            if(clicked.includes('3')){
                alert('You Lose')
                if(score>high){
sethigh(score)

}
                 setscore(0)
                clicked=[]
            }else {
                clicked.push('3')
                setscore(score+1)
                Imaging()
            } 
        }}className="card"  src={clown3} value="3" key={3}  alt="" />,
        <img onClick={()=>{
            if(clicked.includes('4')){
                alert('You Lose')
                if(score>high){
sethigh(score)

}
                 setscore(0)
                clicked=[]
            }else {
                clicked.push('4')
                setscore(score+1)
                Imaging()
            } 
        }}className="card"  src={clown4} value="4" key={4} alt="" />,
        <img onClick={()=>{
            if(clicked.includes('5')){
                alert('You Lose')
                if(score>high){
sethigh(score)

}
                 setscore(0)
                clicked=[]
            }else {
                clicked.push('5')
                setscore(score+1)
                Imaging()
            } 
        }}className="card"  src={clown5} value="5"  key={5} alt="" />,
        <img onClick={()=>{
            if(clicked.includes('6')){
                alert('You Lose')
                if(score>high){
sethigh(score)

}
                 setscore(0)
                clicked=[]
            }else {
                clicked.push('6')
                setscore(score+1)
                Imaging()
            } 
        }}className="card"  src={clown6} value="6" key={6} alt="" />,
        <img onClick={()=>{
            if(clicked.includes('7')){
                alert('You Lose')
                if(score>high){
sethigh(score)

}
                 setscore(0)
                clicked=[]
            }else {
                clicked.push('7')
                setscore(score+1)
                Imaging()
            } 
        }}className="card"  src={clown7} value="7" key={7} alt="" />,
        <img onClick={()=>{
            if(clicked.includes('8')){
                alert('You Lose')
                if(score>high){
sethigh(score)

}
                 setscore(0)
                clicked=[]
            }else {
                clicked.push('8')
                setscore(score+1)
                Imaging()
            } 
        }}className="card"  src={clown8} value="8" key={8} alt="" />,
        <img onClick={()=>{
            if(clicked.includes('9')){
                alert('You Lose')
                if(score>high){
sethigh(score)

}
                 setscore(0)
                clicked=[]
            }else {
                clicked.push('9')
                setscore(score+1)
                Imaging()
            } 
        }}className="card" src={clown9} value="9" key={9} alt="" />,
        <img onClick={()=>{
            if(clicked.includes('10')){
                alert('You Lose')
                if(score>high){
sethigh(score)

}
                 setscore(0)
                clicked=[]
            }else {
                clicked.push('10')
                setscore(score+1)
                Imaging()
            } 
        }}className="card"  src={clown10} value="10"  key={10} alt="" />
    ]

    function Imaging(){
   
        let image=_.shuffle(images)
       return <div>
        {image[0]}
        {image[1]}
        {image[2]}
        {image[3]}
        {image[4]}
        {image[5]}
       </div>
       
    }
    function UI(){
      
        return <div id="container">
            <p id="title">Do not press the same clown twice</p>
            <div id="score">
                Score: {score} Highscore: {high}
            </div>
            <div id="cardcontainer">
                <Imaging/>
            </div>
    
        </div>
    }
    return <UI/>
}

