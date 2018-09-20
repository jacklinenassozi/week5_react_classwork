import React from "react";


class Clock extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructing");
    this.state = { time: new Date().toLocaleTimeString() };
  }

  componentDidMount() {
    console.log("done mounting");
    this.id = setInterval(() => {
      const newTime = new Date().toLocaleTimeString();
      this.setState({ time: newTime });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  render() {
    //console.log("rendering");
    return (
        
      <p >
        {this.state.time}
      </p>
      
    );
  }
}

export default Clock;