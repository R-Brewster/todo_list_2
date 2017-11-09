import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getSingle, toggleComplete, deleteItem} from '../actions'

class SingleItem extends Component {
    componentDidMount() {
        this.props.getSingle(this.props.match.params.id);
    }

    toggleComplete(){
        console.log('Toggle complete: ', this.props);
        this.props.toggleComplete(this.props.single._id);
    }

    delete(){
        this.props.deleteItem(this.props.single._id).then(()=> {
            this.props.history.push('/')
        });
    }

    timeCreated(){
        let timeStamp = parseInt(this.props.single.created);
        let time = new Date(timeStamp);
        return time.toLocaleString()
    }

    timeCompleted(){
        console.log('Time completed', this.props.single.completed);
        let timeStamp = parseInt(this.props.single.completed);
        let time = new Date(timeStamp);
        let resultingTime = time.toLocaleString();
        if (resultingTime === "Invalid Date"){
            let resultingTime = " ";
            return resultingTime
        }
        else {
            return resultingTime
        }
    }

    render() {

        const {single} = this.props;

        if(!single){
            return <div>Loading...</div>
        }

        return(
            <div className="collection with-header" >
                <div className="right-align">
                    <Link className="btn red darken-2" to="/">Go Back</Link>
                </div>
                <h3 className="collapsible-header" >{this.props.single.title}</h3>
                <p className="collection-item">{single.details}</p>
                <p className="collection-item">Created By: {single.userId}</p>
                <p className="collection-item">Time Created: {this.timeCreated()}</p>
                <p className="collection-item">Status: {single.complete ? 'Item Complete' : 'Item Incomplete'} </p>
                <p className="collection-item">Time Completed: {this.timeCompleted()}</p>
                <button onClick={() => this.toggleComplete()} className={`btn ${single.complete ? 'red' : 'green'}`} >{single.complete ? 'Restore' : 'Complete'}</button>
                <button style={{margin: '8px'}} onClick={() => this.delete()} className="btn red darken-4">Delete</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        single: state.todo.single
    }
}

export default connect(mapStateToProps, {getSingle,toggleComplete,deleteItem})(SingleItem);