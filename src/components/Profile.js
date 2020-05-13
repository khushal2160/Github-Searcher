import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem }  from 'react-bootstrap';

class Profile extends Component{


    render(){
        let userdata = this.props.data;
        
        if(userdata.notFound === "Not Found")
        {
            return(
                <div>
                    <h2>Oops!</h2>
                    <p>User is anonymous, i guess.</p>
                </div>
            );
        }
        else
        {
            return(
                <div className="row container mx-auto">
                    <Card className="ml-auto mr-auto col-4">
                        <Card.Img variant="top" src={userdata.avatar} style={{ width: '15rem'}}/>
                    </Card>
                    <Card className="col-8">
                        <Card.Body>
                            <Card.Title>{userdata.name}</Card.Title>

                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Followers: {userdata.followers} </ListGroupItem>
                                <ListGroupItem>Following: {userdata.following} </ListGroupItem>
                                <ListGroupItem>Repositories: {userdata.repos} </ListGroupItem>
                                <ListGroupItem>Location: {userdata.location} </ListGroupItem>
                            </ListGroup>
                            
                            <Card.Link target="_blank" href={userdata.homeURL}>See Profile</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            );
        }
    }
}

export default Profile;