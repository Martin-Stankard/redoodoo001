import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions/postActions';

class Posts extends Component {

    constructor(props){
        super(props);
        console.log('0.Posts.constructor');
        this.state = {
            posts: []
        }
    }

componentWillMount(){
    console.log('1.Posts.componentWillMount');
    this.props.fetchPosts();
}
  
   render() {
       console.log("2.Posts.render");
       const postItems = this.props.posts.map(post =>(
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>    
        </div> 
       ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
  
componentDidCatch(){
    console.log('3.Posts.componentDidCatch');
}

componentDidMount(){
    console.log('4.Posts.componentDidMount');
}
    
componentDidUpdate(){
    console.log('8.Posts.componentDidUpdate');
}

componentWillReceiveProps(){
    console.log('6.Posts.componentWillReceiveProps');
}

componentWillUnmount(){
    console.log('7.Posts.componentWillUnmount');
}

componentWillUpdate(){
    console.log('5.Posts.componentWillUpdate');
}


}

Posts.propTypes = {
    fetchPosts:PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired 
}

const mapStateToProps = state => ({
    posts:state.posts.items
});

export default connect(mapStateToProps, {fetchPosts})(Posts);