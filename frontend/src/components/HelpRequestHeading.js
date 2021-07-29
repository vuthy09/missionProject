import React from 'react';
// import "../styles.css";
import ReplyIcon from '@material-ui/icons/Reply';
import DoneIcon from '@material-ui/icons/Done';

export default function HelpRequestHeading() {
    return (
        <div className="project-heading-title">
            <h1>Help Requests</h1>
            <div className="icon-with-title">
            <ReplyIcon/> <h3>  Reply</h3>
            <DoneIcon/> <h3>  Mark as done</h3>
            </div>
        </div>
    )
}