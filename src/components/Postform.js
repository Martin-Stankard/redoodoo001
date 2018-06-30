import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {createPost} from '../actions/postActions';


class Postform extends Component {

    constructor(props){
        super(props);
        console.log('0.Postform.constructor');
        this.state = {
            title:'',
            body:''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange=(e)=>{
        this.setState({[e.target.name]: e.target.value});
    }

    componentWillMount(){
        console.log('1.Postform.componentWillMount');
    }
  
    onSubmit(e){
        e.preventDefault();

        const post = {
            title:  this.state.title,
            body: this.state.body
        }
      this.props.createPost(post); 
    }

    render() {
            console.log("2.Postform.render");
            
        return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>Title:</label><br/>
                    <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
                </div>
                <div>
                    <label>Body:</label><br/>
                    <textarea name="body" onChange={this.onChange} value={this.state.body}/>
                </div>
                <br/>
                <button type="submit">submit</button>
            </form>
        </div>
        )
    }
  
    componentDidCatch(){
        console.log('3.Postform.componentDidCatch');
    }

    componentDidMount(){
        console.log('4.Postform.componentDidMount');
    }
    
    componentDidUpdate(){
        console.log('8.Postform.componentDidUpdate');
    }

    componentWillReceiveProps(){
        console.log('6.Postform.componentWillReceiveProps');
    }

    componentWillUnmount(){
        console.log('7.Postform.componentWillUnmount');
    }

    componentWillUpdate(){
        console.log('5.Postform.componentWillUpdate');
    }


}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(Postform);