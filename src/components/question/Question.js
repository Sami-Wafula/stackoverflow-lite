import React from "react";
import './Question.css'

const Question = ()=>{
    return(
        <>
        <div className="q-main">
            <div className="q-header">
                <div className="q-title">
                    <div><h5>Design error while using Figma for Desktop</h5></div>
                    <div><button>Ask a question</button></div>   
                </div>
                <div className="q-stats">
                    <div><h5>Asked: today</h5></div>
                    <div><h5>Modified: today</h5></div>
                    <div><h5>Views: 0 times</h5></div>
                </div>
            </div>
            <div className="q-body">
                <div className="q-content">
                <div className="updown">
                    <div className="down">&and;</div>
                    <div><h5>0</h5></div>
                    <div className="up">&or;</div>
                </div>    
                <div><h5>I am getting a design error while using Figma design tool for desktop. 
                    I am getting a design error while using Figma design tool for desktop. 
                    I am getting a design error while using Figma design tool for desktop. 
                    I am getting a design error while using Figma design tool for desktop. 
                    I am getting a design error while using Figma design tool for desktop. 
                    I am getting a design error while using Figma design tool for desktop. 
                    I am getting a design error while using Figma design tool for desktop. 
                    I am getting a design error while using Figma design tool for desktop.</h5>
                </div>
                </div>
                <div className="q-tags">
                    <div><h5>Figma</h5></div>
                    <div><h5>Desktop</h5></div>
                    <div><h5>Design</h5></div>
                    <div className="tag-q-author"><h5>Sami_w asked 1 sec ago</h5></div>
                </div>
                
            </div>
            <div className="q-answer">
                <div><input  className="answer"></input></div>
                <div><button>Post your answer</button></div>
            </div>
        </div>
        </>
    )
}

export default Question;