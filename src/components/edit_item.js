import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {addItem, getSingle, deleteItem} from "../actions";

class EditItem extends Component {
    componentDidMount() {
        this.props.getSingle(this.props.match.params.id);
        console.log('props id', this.props)
    }

    renderInput({input, label, type, meta:{touched, error}}){
        return (
            <div>
                <label>{label}</label>
                <input {...input} type={type} />
                <p className="red-text text-darken-2" >{touched&&error}</p>
            </div>
        )
    }

    submitItem(values) {
        console.log("form values", values);
        this.props.deleteItem(this.props.single._id);

        this.props.addItem(values).then(()=> {
            this.props.history.push('/')
        })
    }

    itemToEditTitle() {
        return this.props.title
    }

    itemToEditDetails(){
        return this.props.details
    }

    render () {

        // if(!single){
        //     return <div>Loading...</div>
        // }

        const {single} = this.props;
        const {handleSubmit, reset} = this.props;
        console.log(this.props);
        return (
            <div>
                <h1 className="center-align">{single===null ? 'Edit Item' : single.title}</h1>
                <div className="right-align">
                    <Link className="btn purple darken-2" to="/">Go Back</Link>
                </div>
                <form onSubmit={handleSubmit((vals) => this.submitItem(vals))} >
                    <Field name="title" component={this.renderInput} type="text" label="Title"/>
                    <Field name="details" component={this.renderInput} type="text" label="Details"/>
                    <div className="right-align">
                        <button className="btn green darken-2" > Save </button>
                        <button style={{marginLeft: '8px'}} className="btn yellow darken-4" onClick={reset} type="button">Reset</button>
                    </div>
                </form>

            </div>
        )

    }
}

function validation(values) {
    const error = {};
    if(!values.title){
        error.title = 'Please enter a title';
    }
    if(!values.details){
        error.details = 'Please enter details'
    }

    return error;
}

EditItem = reduxForm({
    form: 'add-item',
    validate: validation,
})(EditItem);

function mapStateToProps(state) {
    return {
        single: state.todo.single
    }
}

export default connect(mapStateToProps, {addItem, getSingle, deleteItem})(EditItem);