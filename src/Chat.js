import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "./Chat.css";
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";


function Chat() {



  return (
    <div className="chat">
      <div className="chat_header">
      <Avatar src={`https://ui-avatars.com/api/?background=D682CB&color=fff&name=Django`} />

        <div className="chat_headerInfo">
          <h3>Django</h3>
          <p>visto fulma upto(templet)
          </p>
          </div>
          <div className="chat_headerRight">
            <IconButton>
              <SearchOutlined />
            </IconButton>
            

            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
    
      </div>
    <div className="chat_body">

     <p className="chat_message" >
      assicurative professionale
     <span className="chat_name">Django </span>
  
       
       <span className="chat_timestamp">
       3:54pm
       </span>
       
       </p>
       <p className="chat_message ">
       Lorem ipsum dolor sit amet. Aut laborum dolorem nam eaque deleniti et aperiam velit qui velit obcaecati. 
        <span className="chat_name">django </span>
     
          
          <span className="chat_timestamp">
     3:55pm
          </span>
          
          </p>

          <p className="chat_message chat_reciever">
       Lorem ipsum dolor sit amet. Aut laborum dolorem nam eaque deleniti et aperiam velit qui velit obcaecati. 
        <span className="chat_name">marco </span>
     
          
          <span className="chat_timestamp">
     3:55pm
          </span>
          
          </p>
          <p className="chat_message ">
       Lorem ipsum dolor sit amet. Aut laborum dolorem nam eaque deleniti et aperiam velit qui velit obcaecati. 
        <span className="chat_name">django </span>
     
          
          <span className="chat_timestamp">
     3:55pm
          </span>
          
          </p>
          <p className="chat_message chat_reciever">
       Lorem ipsum dolor sit amet. Aut laborum dolorem nam eaque deleniti et aperiam velit qui velit obcaecati. 
        <span className="chat_name">marco</span>
     
          
          <span className="chat_timestamp">
     3:55pm
          </span>
          
          </p>
      </div>
    <div className="chat_footer">
      <InsertEmoticonIcon />
      <form>
        <input placeholder="type a message" type="text" />
        <button type="submit">send a message</button>

      </form>
      <IconButton>
              <AttachFile />
            </IconButton>
      <MicIcon/>

    </div>
    </div>
  );
}

export default Chat;
