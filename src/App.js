import './App.css';
import React from 'react';
import {fetchJokes} from './api/api';
class App extends React.Component{
  state = {
    jokes: [],
  }
  async componentDidMount(){
    const fetchedData = await fetchJokes();
    this.setState({jokes:fetchedData});
  }
  render(){
    return(
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <span class="navbar-brand mb-0 h1"><img alt = "icon" src = "./ico.png" style = {{height:30}}></img> What A Joke</span>
          <h5 style = {{color:"white"}}>Reload Page to generate new jokes</h5>
        </nav>
        {
          this.state.jokes.map((item) =>
            <div class="card" style = {{margin: 10}}>
              <div class="card-body">
                <h2>{item.setup}</h2>
                <button type="button" class="btn btn-primary" onClick = {() => {alert(item.punchline);}}>Show Answer</button>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
