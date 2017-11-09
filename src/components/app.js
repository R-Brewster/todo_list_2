import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import {Link, Route} from 'react-router-dom';
import TodoList from './todo_list';
import AddItem from './add_item';
import SingleItem from './single_item';
import EditItem from'./edit_item';

const App = () => (
    <div>
        <div className="container">
            <Route exact path="/" component={TodoList} />
            <Route path="/add-item" component={AddItem} />
            <Route path="/item/:id" component={SingleItem} />
            <Route path="/edit-item/:id" component={EditItem}/>
        </div>
    </div>
);

export default App;

// Add delete button that redirects back to home page
//Make a back button that goes back to home page
//On view single item page, in addition to delete and back, add time when completed and time when completed (look up linux timestamps), also clean up styling
//Make todo list color coded in accordance with complete or incomplete (Could also make it into 2 separate lists)
//Have done by Friday