import React, { Component } from 'react';
import Search from './Search';
import Profile from './Profile';
const API = 'https://api.github.com/users';
class Github extends Component{

    
    constructor(props){
        super(props);

        this.state = {
            username: '',
            name: '',
            avatar: '',
            repos: '',
            followers: '',
            following: '',
            homeURL: '',
            location: '',
            notFound: ''
        };
    }

    getProfile(username){
        let url = `${API}/${username}`;

        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                username: data.login,
                name: data.name,
                avatar: data.avatar_url,
                repos: data.public_repos,
                followers: data.followers,
                following: data.following,
                homeURL: data.html_url,
                location: data.location,
                notFound: data.message
            })
        })
        .catch((error) => console.log("There was some problem."));
    }

    componentDidMount(){
        this.getProfile(this.state.username);
    }

    render(){
        return(
            <div>
                <Search searchUsername={this.getProfile.bind(this)}/>
                <Profile data={this.state}/> 
            </div>
        );
    }
}

export default Github;