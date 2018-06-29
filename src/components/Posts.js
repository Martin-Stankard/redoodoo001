import React, { Component } from 'react'

class Posts extends Component {

    constructor(props){
        super(props);
        console.log('0constructor');
        this.state = {
            posts: []
        }
    }

componentWillMount(){
    console.log('1componentWillMount');
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => this.setState({posts:json}));
}
  
   render() {
       console.log("2render");
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
    console.log('3componentDidCatch');
}

componentDidMount(){
    console.log('4componentDidMount');
}
    
componentDidUpdate(){
    console.log('8componentDidUpdate');
}

componentWillReceiveProps(){
    console.log('6componentWillReceiveProps');
}

componentWillUnmount(){
    console.log('7componentWillUnmount');
}

componentWillUpdate(){
    console.log('5componentWillUpdate');
}


}


export default Posts;