import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChats.css";

function SidebarChats(props) {

  return (
   
      <div className="sidebarChat">
      <Avatar src={`https://ui-avatars.com/api/?background=${props.color}&color=fff&name=${props.id}`}/>
      <div className="sidebarChat_info">
        <h2>{props.name}</h2>
      <p>orem ipsum dolor sit </p>
     
      </div>
    </div>




  );
}

export default SidebarChats;
