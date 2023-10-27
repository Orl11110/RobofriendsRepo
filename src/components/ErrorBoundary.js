import React from 'react';

class ErrorBoundary extends React.Component{
    constructor(props){
        super();
        this.state= {
            hasError: false
        }
    }

    componentDidCatch(error, info){
           this.setState({hasError:true})
    }

    render(){
        if(this.state.hasError){
            return <h1>Oooops</h1>
        }
        console.log("PROPS ", this.children);
        return this.props.children;
    }

}

export default ErrorBoundary; 