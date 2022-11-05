import { Component } from "react";
class App extends Component{
  constructor(){
    super()
    this.state={
      members:[],
      searchedInput:''
  }
}
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{return response.json()})
    .then((users)=>{this.setState(()=>{return {members:users}},()=>{console.log(users)})})
  }
  render(){
    var filteredResults=this.state.members.filter((member)=>{return member.name.toLocaleLowerCase().includes(this.state.searchedInput)})
    return <div>
      <input type='Search' placeholder='Search' onChange={
        (event)=>{this.setState(()=>{
          const searchedValue=event.target.value.toLocaleLowerCase()
          return {searchedInput:searchedValue}
          })}
      }
      />
      {filteredResults.map((member)=>{return <h1 key={member.id}>{member.name}</h1>})}
    </div>
  }

}
export default App 