import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { FooterLink } from "./SidebarData";
export default function Sidebar() {
 
  return (
    <div className="sidebar">
      <div className="avatar-container">
      <img src="./asset/teacher.png" className="avatar" alt="teacher"/>
      </div>
      <ul className="sidebarList">
        {SidebarData.map((item, index) => {
          return (
            <li
              key={index}
              className="rowLink"
              
              onClick={(e)=>{
                e.preventDefault();
                window.location.pathname = item.path;
              }}
            >
              <Link to={item.path} className="Link" id={window.location.pathname === item.path ? "current" : ""}>
                <div id="icons">{item.icon}</div>
                <div id="title">{item.title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
        <div className="arr-container">
        <img src="./asset/arrow.png" className="arrow" alt="arrow"/>
        </div>
        <div className="footerLink-container">
        <ul className="footerLink">
          {FooterLink.map((item, index)=>{
            return(
              <li key={index} className="footerRow">
              <Link to={item.path} className="footerRowLink">
                <div id="icons">{item.icon}</div>
                <div id="title">{item.title}</div>
              </Link>
              </li>
            )
          })}
        </ul>
        </div>
    </div>
  );
}
