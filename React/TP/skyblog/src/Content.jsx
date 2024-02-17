import { useState } from "react";

export function Content({style}){
    const [content,setContent] = useState("Ecrivez ici...");

    function changeContent(event){
        setContent(event.target.value);
    }
    return (
        <div>
            <textarea onChange={changeContent} cols="30" rows="10" defaultValue={content}></textarea>
            <pre style={style}>
                {content}
            </pre>
            {/* <div dangerouslySetInnerHTML={{__html:content}}>
            </div> */}
        </div>
    )
}