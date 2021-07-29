import React from 'react';
import ZoomInIcon from '@material-ui/icons/ZoomIn';

export default function ProjectShow() {
    return (
        <div className="student-box">
            <div className="student-submit">
                <img src="./asset/user14.png" alt="boy"/>
                <div className="enlarge-img">
                    <h2>AIDEN submitted his project</h2>
                    <div className="project-image">
                        <img src="./asset/ScreenShot.png" alt="screenshot"/>
                    </div>
                    <div className="enlarge">
                        <ZoomInIcon/>
                        <p>Enlarge Photo</p>
                    </div>
                </div>
                <div className="date">
                    <h3>TUE 28 April 2020</h3>
                    <p>10:43 AM</p>
                </div>
            </div>
            
        </div>
    )
}
