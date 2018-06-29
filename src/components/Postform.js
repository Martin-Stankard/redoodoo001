import React, { Component } from 'react'

class Postform extends Component {

    constructor(props){
        super(props);
        console.log('0constructor');
        this.state = {}
    }

    componentWillMount(){
        console.log('1componentWillMount');
    }
  
   render() {
        console.log("2render");
        
    return (
      <div>
        <h1>Add Post</h1>
        
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


export default Postform;