import React from "react";
import PowerInputIcon from "@material-ui/icons/PowerInput";
import SchoolIcon from "@material-ui/icons/School";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import AssignmentIcon from "@material-ui/icons/Assignment";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
export const SidebarData = [
  {
    id: 1,
    title: "Progress Tracker",
    icon: <PowerInputIcon />,
    path: "/progress-tracker"
  },
  {
    id: 2,
    title: "Student Profiles",
    icon: <SchoolIcon />,
    path: "/student-profile"
  },
  {
    id: 3,
    title: "Help Requests",
    icon: <LiveHelpIcon />,
    path: "/help-request"
  },
  {
    id: 4,
    title: "Project Submissions",
    icon: <AssignmentIcon />,
    path: "/project-submission"
  },
  {
    id: 5,
    title: "Project Library",
    icon: <LocalLibraryIcon />,
    path: "/project-library"
  }
];

export const FooterLink = [
  {
    title: "Profile",
    icon: <AccountCircleIcon/>,
    path: "/profile"
  },
  {
    title: "Setting",
    icon: <SettingsIcon/>,
    path: "/setting"
  },
  {
    title: "Log out",
    icon: <ExitToAppIcon/>,
    path: "/logout"
  },
]
