import React from "react";
import "./Sidebar.css";
import SidebarChats from "./SidebarChats";


import { SearchOutlined } from "@material-ui/icons";

function Sidebar() {


  return (
    <div className="sidebar">
      <div className="sidebar_header">
    <p>Opened</p>
        <div className="sidebar_headerRight">
       <p>Solved</p>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar_chats">
          <SidebarChats name="paola Maria Giacalone" id="PM"color="b2ebe6" />
          <SidebarChats name="Antonio Fulco" id="AF" color="b4ebb2"/>
          <SidebarChats name="Chiara" id="C" color="d48d37"/>
          <SidebarChats name="Dario Clementi" id="DC"color="D0B398"/>
          <SidebarChats name="Claudia " id="C" color="a298d0"/>
          <SidebarChats name="Marco" id="M" color="D098C9"/>
          <SidebarChats name="Django" id="D" color="D682CB"/>

   
      </div>
    </div>
  );
}

export default Sidebar;
