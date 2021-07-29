import React from 'react';
import Checkboxes from '../components/Checkbox'
import ProjectHeading from '../components/ProjectHeading';
import ProjectShow from '../components/ProjectShow';
import SubmitShow from '../components/SubmitShow'
import SubmitShow2 from '../components/SubmitShow2';

export default function ProjectSubmission() {
    return (
        <div className="container-box">
                <div>
                    <ProjectHeading/>
                </div>
                <div className="project-container">
                    <Checkboxes/>
                    <ProjectShow/>
                </div>
                <div className="project-container">
                    <Checkboxes/>
                    <SubmitShow/>
                </div>
                <div className="project-container">
                    <Checkboxes/>
                    <SubmitShow2/>
                </div>
        </div>
    )
}
