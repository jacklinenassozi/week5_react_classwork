import React from 'react';



class HyfUsers extends React.Component{
    constructor(props){
        super(props);
        this.state={users:[]};
    }
    componentDidMount(){
        console.log('fetching')
        fetch('https://api.github.com/orgs/hackyourfuture-cph/members')
        .then((response)=>response.json())
        .then((data)=>{
            //console.log(data);
            this.setState({users:data})
        })
    }
    componentWillUnmount(){
        console.log('unmounting')
    }
    
    render(){
        return(
            <ul>
            {this.state.users.map((user)=>
                <li>{user.login}</li>)}
            </ul>
        )
            
    }
}
export default HyfUsers;