import React from 'react';
// import "../styles.css";
import GetAppIcon from '@material-ui/icons/GetApp';
import DoneIcon from '@material-ui/icons/Done';

export default function ProjectHeading() {
    return (
        <div className="project-heading-title">
            <h1>Project Submissions</h1>
            <div className="icon-with-title">
            <GetAppIcon/> <h3>  Download Files</h3>
            <DoneIcon/> <h3>  Mark as Complete Project</h3>
            </div>
        </div>
    )
}
