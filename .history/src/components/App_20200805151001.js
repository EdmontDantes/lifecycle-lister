import React, {Component} from 'react'

class Lifecycle extends Component {
  state= {
    list: [],
    toggle: true
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log('HandleClick ran')
    const newList = [...this.state.list];
    newList.push({ name: 'handleclick me'});

    this.setState({
      list: newList
    });
  };

  handleToggle = (e) => {
    e.preventDefault();
    console.log('handleToggle clicked');
    this.setState({
      toggle: !this.state.toggle
    })
  }

  componentDidMount(){
    console.log('ComponentDidMount ran');
    setTimeout(() => {
      let list = [{name: 'bo'}];
      this.setState({
        list
      });
    }, 3000)
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate ran');
    if(prevState.toggle !== this.state.toggle) {
      console.log('make a db call');
      const newList = [...this.state.list];
      newList.push({ name: 'updated name' });
      this.setState({
        list: newList
      })
    }
  };

  render() {
    console.log('render lifecycle ran')
    return(
      <div>
      {this.state.list.length!==0 ? (
        <div>
        
        <h1 style={{background: 'lightgrey'}}>Hello Lifecycle Component</h1>
        <ul style={{fontSize: '3em', lineHeight: '2em'}}>
          {this.state.list.map((element, idx) => {
            return <li key={idx}>{element.name}</li>
          })}
        </ul>
        <button onClick={this.handleClick} style={{color: 'black', backgroundColor: 'lightblue', fontSize: '25px', borderRadius: '90%', margin: '10px'}}>Name</button>
        <button onClick={this.handleToggle} style={{color: 'black', backgroundColor: 'lightgreen', fontSize: '18px', margin: '10px'}}>Toggle</button>
        
        </div>
        ) : (<h1>Loading</h1>)}
      </div>
    )
  }
}

export default Lifecycle