import React, { Component } from 'react';

class Search extends Component{
    search(e)
    {
        e.preventDefault();
        this.props.searchUsername(this.state.username);
        this.refs.username.value = '';
    }
    constructor(props)
    {
        super(props);

        this.state = {
            username: ''
        };
    }
    updateState(event)
    {
        let username = event.target.value;
        this.setState({
            username
        });
    }
    render(){
        return(
            <div className="center-align container">
                <div className="input-field col s12 m4 l6">
                    <form onSubmit={this.search.bind(this)}>
                        <input type="text" className="validate" ref="username" onChange= {this.updateState.bind(this)}/>  
                        <label for="user_name">Search User name and hit enter</label>       
                    </form>         
                </div>
            </div>
        );
    }
}

export default Search;