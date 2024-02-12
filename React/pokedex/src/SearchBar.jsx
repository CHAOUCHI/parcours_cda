import "./SearchBar.css";
export function SearchBar({onSearch}){
    return (
        <div>
            <input type="text" onChange={onSearch} className="search_bar"/>
        </div>
    );
}