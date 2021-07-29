import React from 'react';
import Checkboxes from '../components/Checkbox';
import HelpRequestHeading from '../components/HelpRequestHeading';
import HelpRequestShow from '../components/HelpRequestShow'


export default function HelpRequest() {
    return (
        <div className="container-box">
        <div>
            <HelpRequestHeading/>
        </div>
        <div className="project-container">
            <Checkboxes/>
            <HelpRequestShow/>
        </div>
        <div className="project-container">
            <Checkboxes/>
            <HelpRequestShow/>
        </div>
        <div className="project-container">
            <Checkboxes/>
            <HelpRequestShow/>
        </div>
        <div className="project-container">
            <Checkboxes/>
            <HelpRequestShow/>
        </div>
        </div>
    )
}
