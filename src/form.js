  //   this.handleChange = this.handleChange.bind(this);
  // }
  // handleChange(event){
  //   if(event.target.name==="todo"){this.setState({value:event.target.value})}
  // }

  handleChange(event) {
    if (event.target.name === "toDoTask") {
      this.setState({ value: event.target.value });
      console.log(this.state.value);
    } else {
    }
  }