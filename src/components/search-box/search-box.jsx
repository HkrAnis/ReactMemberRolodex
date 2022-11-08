
import './search-box.styles.css'
const SearchBox=({onChangeHandler, placeholder, className})=>{
    return <input 
    className={className}
    type='Search'
    onChange={onChangeHandler} 
    placeholder={placeholder} />

}
export default SearchBox