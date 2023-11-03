import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
    
    const [text, setText] = useState("");

    const {setSearchTerm, fetchRandomMeal} = useGlobalContext()

    const handleChange = (e) => {
        setText(e.target.value)
     }

     const handleSubmit = (e) => {
        e.preventDefault()
        if(text) {
            setSearchTerm(text);
        }
     }

     const handleRandomMeal = () => {
        setSearchTerm("");
        setText("");
        fetchRandomMeal()
     }
      

    return (
        <header className="search-container">
             <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={text} className="form-input" placeholder="type favourite meal" type="text" />
            <button className="btn" type="submit">search</button>
            <button onClick={handleRandomMeal} className="btn btn-hipster">suprise me!</button>
        </form>
        </header>
    )
}

export default Search;