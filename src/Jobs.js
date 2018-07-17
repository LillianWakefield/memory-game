import React, {Component} from 'react';
import './Jobs.css'
import './MemoryGame.css';
import JobsListItem from './JobsListItem.js'
import axios from 'axios'
import {Switch, Route} from 'react-router-dom';
import Job from './Job.js';


class Jobs extends Component {
    constructor(props){
        super(props);
        this.state = {
            jobs:[],
        }
    }
componentWillMount(){
    axios.get("/api/jobs")
    .then(({data})=>{
       this.setState({jobs: data})
    })
}
    render (){
        var jobsJSX = this.state.jobs.map((jobs, index)=>{
           return <JobsListItem key={index} {...jobs}/>
        })
        return (
            <div className="App">
        <header className="App-header">
          <h1 className="App-title">Jobs in Atlanta</h1>
          <h3>Click to explore jobs</h3>
        </header>
        <div className="Jobs">
            <Route exact path="/jobs" render={ () => jobsJSX}/>
            <Route path="/jobs/:id" component={Job}/>
            </div>
            </div>
        )
    }
}
export default Jobs;