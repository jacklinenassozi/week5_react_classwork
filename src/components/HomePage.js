import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component{
    render(){
        return(<div>
            <h2>About Us:we are hack your future students</h2>
            <Link to='/user'>all users</Link>
            <Link to='/countdown'>countdown</Link>
            </div>
        )
    }
}



export default HomePage;