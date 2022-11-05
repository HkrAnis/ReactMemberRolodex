import { Component } from "react";
class App extends Component{
  constructor(){
    super()
    this.state={
      members:[]
  }
}
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{return response.json()})
    .then((users)=>{this.setState(()=>{return {members:users}},()=>{console.log(users)})})
  }
  render(){
    return <div>
      <input type='Search' placeholder='Search' onChange={
        (event)=>{this.setState(()=>{
          var filteredResults=this.state.members.filter((member)=>{return member.name.includes(event.target.value)})
          return {members:filteredResults}
          })}
      }
      />
      {this.state.members.map((member)=>{return <h1 key={member.id}>{member.name}</h1>})}
    </div>
  }

}
export default App 