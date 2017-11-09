import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import {Link, Route} from 'react-router-dom';
import TodoList from './todo_list';
import AddItem from './add_item';

const App = () => (
    <div>
        <div className="container">
            <h1 className="center-align" >To do list 2</h1>
            <Route exact path="/" component={TodoList} />
            <Route path="/add-item" component={AddItem} />
        </div>
    </div>
);

export default App;
