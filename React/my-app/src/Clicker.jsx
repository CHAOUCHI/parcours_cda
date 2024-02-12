export function Clicker(){
    function handleClick(){
        alert("Click !");
    }
    return <button onClick={handleClick}>Click me !</button>
}