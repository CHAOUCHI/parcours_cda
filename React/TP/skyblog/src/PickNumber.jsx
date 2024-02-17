export function PickNumber(onValueChange){
    function updateValue(event){
        onValueChange(event.target.value);
    }
    return (
        <div>
            <input type="number" onInput={updateValue}/>
        </div>
    )
}