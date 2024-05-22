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
import { createPortal } from "react-dom"
export function Lose(){
    return createPortal(<div id="losewarning">
    <p id="Losing">You Lose!</p>
</div>,document.body)

   
}
let clicked=[]
export function App(){
    const[score,setscore]=useState(0)
    const[high,sethigh]=useState(0)
   
    let images=[ 
        <img onClick={(event)=>{
       
            
         
            if(clicked.includes('1')){
                event.target.id="lose"
                document.getElementById('Losing').style.display="block"
                
                onanimationend=()=>{ 

                if(score>high){
 sethigh(score)
event.target.id=""
 setscore(0)
 clicked=[]
 document.getElementById('Losing').style.display="none"
}else {
               


                setscore(0)
                clicked=[]
                document.getElementById('Losing').style.display="none"
                      }  }
            }else {
                event.target.id='clicked'
                onanimationend=()=>{
                clicked.push('1')
                setscore(score+1)
                Imaging()
            } }
        }} className="card" src={clown1} value="1" key={1} alt="" />,
         <img onClick={(event)=>{
            if(clicked.includes('2')){
                event.target.id="lose"
                document.getElementById('Losing').style.display="block"
                
                onanimationend=()=>{ 

                if(score>high){
 sethigh(score)
event.target.id=""
 setscore(0)
 clicked=[]
 document.getElementById('Losing').style.display="none"
}else {
               


                setscore(0)
                clicked=[]
                document.getElementById('Losing').style.display="none"
                      }  }
            }else {
                event.target.id='clicked'
                onanimationend=()=>{
                clicked.push('2')
                setscore(score+1)
                Imaging()
            } }
        }}className="card"  src={clown2} value="2" key={2} alt="" />,
         <img onClick={(event)=>{
            if(clicked.includes('3')){
                event.target.id="lose"
                document.getElementById('Losing').style.display="block"
                
                onanimationend=()=>{ 

                if(score>high){
 sethigh(score)
event.target.id=""
 setscore(0)
 clicked=[]
 document.getElementById('Losing').style.display="none"
}else {
               


                setscore(0)
                clicked=[]
                document.getElementById('Losing').style.display="none"
                      }  }
            }else {
                event.target.id='clicked'
                onanimationend=()=>{
                clicked.push('3')
                setscore(score+1)
                Imaging()
            } }
        }}className="card"  src={clown3} value="3" key={3}  alt="" />,
         <img onClick={(event)=>{
            if(clicked.includes('4')){
                event.target.id="lose"
                document.getElementById('Losing').style.display="block"
                
                onanimationend=()=>{ 

                if(score>high){
 sethigh(score)
event.target.id=""
 setscore(0)
 clicked=[]
 document.getElementById('Losing').style.display="none"
}else {
               


                setscore(0)
                clicked=[]
                document.getElementById('Losing').style.display="none"
                      }  }
            }else {
                event.target.id='clicked'
                onanimationend=()=>{
                clicked.push('4')
                setscore(score+1)
                Imaging()
            } }
        }}className="card"  src={clown4} value="4" key={4} alt="" />,
         <img onClick={(event)=>{
            if(clicked.includes('5')){
                event.target.id="lose"
                document.getElementById('Losing').style.display="block"
                
                onanimationend=()=>{ 

                if(score>high){
 sethigh(score)
event.target.id=""
 setscore(0)
 clicked=[]
 document.getElementById('Losing').style.display="none"
}else {
               


                setscore(0)
                clicked=[]
                document.getElementById('Losing').style.display="none"
                      }  }
            }else {
                event.target.id='clicked'
                onanimationend=()=>{
                clicked.push('5')
                setscore(score+1)
                Imaging()
            } }
        }}className="card"  src={clown5} value="5"  key={5} alt="" />,
         <img onClick={(event)=>{
            if(clicked.includes('6')){
                event.target.id="lose"
                document.getElementById('Losing').style.display="block"
                
                onanimationend=()=>{ 

                if(score>high){
 sethigh(score)
event.target.id=""
 setscore(0)
 clicked=[]
 document.getElementById('Losing').style.display="none"
}else {
               


                setscore(0)
                clicked=[]
                document.getElementById('Losing').style.display="none"
                      }  }
            }else {
                event.target.id='clicked'
                onanimationend=()=>{
                clicked.push('6')
                setscore(score+1)
                Imaging()
            } }
        }}className="card"  src={clown6} value="6" key={6} alt="" />,
        <img onClick={(event)=>{
            if(clicked.includes('7')){
                event.target.id="lose"
                document.getElementById('Losing').style.display="block"
                
                onanimationend=()=>{ 

                if(score>high){
 sethigh(score)
event.target.id=""
 setscore(0)
 clicked=[]
 document.getElementById('Losing').style.display="none"
}else {
               


                setscore(0)
                clicked=[]
                document.getElementById('Losing').style.display="none"
                      }  }
            }else {
                event.target.id='clicked'
                onanimationend=()=>{
                clicked.push('7')
                setscore(score+1)
                Imaging()
            } }
        }}className="card"  src={clown7} value="7" key={7} alt="" />,
         <img onClick={(event)=>{
            if(clicked.includes('8')){
                event.target.id="lose"
                document.getElementById('Losing').style.display="block"
                
                onanimationend=()=>{ 

                if(score>high){
 sethigh(score)
event.target.id=""
 setscore(0)
 clicked=[]
 document.getElementById('Losing').style.display="none"
}else {
               


                setscore(0)
                clicked=[]
                document.getElementById('Losing').style.display="none"
                      }  }
            }else {
                event.target.id='clicked'
                onanimationend=()=>{
                clicked.push('8')
                setscore(score+1)
                Imaging()
            } }
        }}className="card"  src={clown8} value="8" key={8} alt="" />,
         <img onClick={(event)=>{
            if(clicked.includes('9')){
                event.target.id="lose"
                document.getElementById('Losing').style.display="block"
                
                onanimationend=()=>{ 

                if(score>high){
 sethigh(score)
event.target.id=""
 setscore(0)
 clicked=[]
 document.getElementById('Losing').style.display="none"
}else {
               


                setscore(0)
                clicked=[]
                document.getElementById('Losing').style.display="none"
                      }  }
            }else {
                event.target.id='clicked'
                onanimationend=()=>{
                clicked.push('9')
                setscore(score+1)
                Imaging()
            } }
        }}className="card" src={clown9} value="9" key={9} alt="" />,
         <img onClick={(event)=>{
            if(clicked.includes('10')){
                event.target.id="lose"
                document.getElementById('Losing').style.display="block"
                
                onanimationend=()=>{ 

                if(score>high){
 sethigh(score)
event.target.id=""
 setscore(0)
 clicked=[]
 document.getElementById('Losing').style.display="none"
}else {
               


                setscore(0)
                clicked=[]
                document.getElementById('Losing').style.display="none"
                      }  }
            }else {
                event.target.id='clicked'
                onanimationend=()=>{
                clicked.push('10')
                setscore(score+1)
                Imaging()
            } }
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

