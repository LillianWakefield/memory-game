import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './JobsListItem.css'
import './MemoryGame.css';

class JobListItem extends Component {
    constructor(props){
        super(props);
    }
   clickHandler() {
      this.props.history.push('/jobs/' + this.props.id)
   }
    render (){
        return (
            < div className="JobsListItem" onClick={this.clickHandler.bind(this)}>
            <div className="left">
            <b>{this.props.title}</b>
            <div>{this.props.company}</div>
            </div>
            <div className="right">
                <b>{this.props.type}</b>
                <div>{this.props.created_at}</div>
                </div>
                </div>
        )
    }
}

export default withRouter(JobListItem);