import React, { Component } from 'react'

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
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => this.setState({posts:json}));
}
  
   render() {
       console.log("2.Posts.render");
       const postItems = this.state.posts.map(post =>(
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


export default Posts;