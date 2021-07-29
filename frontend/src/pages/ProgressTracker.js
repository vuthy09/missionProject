import React from 'react';
import FileCopyIcon from '@material-ui/icons/FileCopy';

export default function ProgressTracker() {
    const nums = [];
    for(let i = 1; i <= 15; i++){
        nums.push(i);
    }
    return (
        <div className="container-box">
                <div className='headTitle'>
                    <h3>beginner course</h3>
                    <h5><FileCopyIcon/><span>export as speadsheet</span></h5>
                </div>
            <div className="container-project-box">
                <div className="project-complete-box">
                    <div className="project-completed-heading">
                        <h3>AIDEN ANDREWS</h3>
                        <p>4/15 project completed</p>
                    </div>
                    <div className="container-nums">
                        {nums.map((num, index) =>{
                           return(
                               <div className="listNums" key={index}>
                                {num}
                               </div>
                            )
                        })}
                    </div>
                </div>

                <div className="project-complete-box">
                    <div className="project-completed-heading">
                    <h3>COURTNEY BRISTOL</h3>
                    <p>1/15 project completed</p>
                    </div>
                    <div className="container-nums">
                    {nums.map((num, index) =>{
                    return(
                        <div className="listNums1" key={index}>
                            {num}
                        </div>
                        )
                    })}
                    </div>
                </div>

                <div className="project-complete-box">
                    <div className="project-completed-heading">
                    <h3>MAGINI CORTES</h3>
                    <p>4/15 project completed</p>
                    </div>
                    <div className="container-nums">
                    {nums.map((num, index) =>{
                    return(
                        <div className="listNums2" key={index}>
                            {num}
                        </div>
                        )
                    })}
                    </div>
                </div>

                <div className="project-complete-box"> 
                    <div className="project-completed-heading">
                        <h3>RAWIRI FLECHER</h3>
                        <p>7/15 project completed</p>
                    </div>
                    <div className="container-nums">
                        {nums.map((num, index) =>{
                           return(
                               <div className="listNums3" key={index}>
                                {num}
                               </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
