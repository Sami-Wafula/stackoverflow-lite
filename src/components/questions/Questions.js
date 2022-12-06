import React from "react";
import "./Questions.css"

const Questions = ()=>{
    return(
        <>
        <div className="question-body">
            <div className="question">
            <div><h5>All questions</h5></div>
            <div><button>Ask a Question</button></div>
            </div>
            <div className="questions-view">
                <div className="question-stats">
                   <div className="stat"><h5>0 votes</h5></div>
                    <div className="stat"><h5>0 answers</h5></div>
                    <div className="stat"><h5>0 views</h5></div>
                </div>
                <div className="question-body">
                <div className="question-header"><h5>Design error while building StackOverflow clone using ReactJs, Node and Sql</h5></div>
                <div className="question-body"><h5>I am trying to build StackOverflow-lite using React Js, Node and Sql. However, my stacks are not overflowing as expected. I hav...</h5></div>
                <div className="question-tags">
                    <div className="tag"><h5>ReactJs</h5></div>
                    <div className="tag"><h5>Node</h5></div>
                    <div className="tag"><h5>Desktop</h5></div>
                    <div className="author"><h5>Sami Wafula asked 22 sec ago</h5></div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Questions;