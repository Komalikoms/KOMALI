import React from 'react';

class Count extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }

    }

    increment(){
        this.setState(prevState=>({
            count : prevState.count+1
    }))
    }
    render(){
        return(
            <div>
                <div>count:{this.state.count}</div>
                <button onClick={()=>this.increment()} >increment</button>
            </div>
        )
    }
    
}
export default Count;