import { useState } from "react";

export function App({socket}){
  const [isConnected,setIsConnected] = useState(false);
  const [messages,setMessages] = useState([]);

  function handleSubmit(event){
    event.preventDefault();
    const content = event.target.querySelector("#message").value;
    const msg = {
      content : content,
      date : Date.now(),
      author : "Massinissa"
    }
    socket.emit("send_msg",msg);
  }

  function handleConnexion(){
    setIsConnected(true);
    socket.on("new_msg",(newMessage)=>{
      console.log(messages);
      setMessages([
        ...messages,
        newMessage
      ]);
    });
  }

  const messageElements = messages.map((message,i)=>{
    return <p key={i}>{message.content}</p>;
  })
  return (
    <div>
      <h1>Client Chat</h1>
      <button onClick={handleConnexion}>Se connecter</button>
      <form onSubmit={handleSubmit} hidden={isConnected == false}>
        <input type="text" id="message" />
        <button>Envoyer</button>
      </form>
      <div>
        {messageElements}
      </div>
    </div>
  )
}