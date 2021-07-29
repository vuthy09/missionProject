import React from 'react';
import {Link} from 'react-router-dom';
import ProgressTracker from '../pages/ProgressTracker';
import ProjectSubmission from '../pages/ProjectSubmission';
import StudentProfile from '../pages/StudentProfile';
import HelpRequest from '../pages/HelpRequest';

export default function MainContent(){
    return(
        <div className="container">
            <ul className="container-list">
                <li>
                    <Link to="/take-screenshot">
                        {'Take Screenshot'}
                    </Link>
                </li>
                <li>
                    <Link to="/help-center">
                    {'Help Center'}
                    </Link>
                </li>
                <li>
                    <Link to="/more-projects">
                    {'More Projects'}
                    </Link>
                </li>
            </ul>
             {window.location.pathname === '/project-submission' ? <ProjectSubmission/> : ''}
             {window.location.pathname === '/progress-tracker' ? <ProgressTracker/> : ''} 
             {window.location.pathname === '/student-profile' ? <StudentProfile/> : ''} 
             {window.location.pathname === '/help-request' ? <HelpRequest/> : ''} 
                         
        </div>
    )
}