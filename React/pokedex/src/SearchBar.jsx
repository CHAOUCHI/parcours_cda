import "./SearchBar.css";
export function SearchBar({onSearch}){
    
    return (
        <div>
            <input type="text" onChangeCapture={onSearch} className="search_bar"/>
        </div>
    );
}