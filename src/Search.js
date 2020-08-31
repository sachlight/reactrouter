import React,{useState} from 'react';
const Search=()=>{
    const [img, setImg] = useState('')
    const inputEvent=(e)=>{
        const data=e.target.value
        console.log(data)
    }
    return(
        <>
            <input type="text"
            placeholder="Search"
            value={img} 
                onChange={inputEvent}
            />
        </>
    )
}
export default Search;