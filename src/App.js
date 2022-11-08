import { useState, useEffect } from 'react';
import './App.css'
import Cardlist from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";
const App=()=>{
  console.log("app rendred")
  const [members, setMembers]=useState([])
  const [searchedInput, setSearchedInput]=useState('')
      const searchFunction=(event)=>{
      const searchedValue=event.target.value.toLocaleLowerCase()
      setSearchedInput(searchedValue)
    }
    var filteredResults=members.filter((member)=>{return member.name.toLocaleLowerCase().includes(searchedInput)})
// if we call fetch without useEffect, fetching will make the App function to re-render indefinitely
// in order for it to stop we need to specify to useEffect when we want it to re-run
// in our case we only want it to re-run once 
// so we don't need to add any dependency in the array 
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response)=>{return response.json()})
      .then((users)=>{setMembers(users)})
    },[])
return <div>
<SearchBox className='search-box' onChangeHandler={searchFunction} placeholder='Search members'/>
<Cardlist members={filteredResults}/></div>
}
export default App 