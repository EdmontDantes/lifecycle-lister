import React, {Component} from 'react'
import axios from 'axios'
import 
class App extends Component {
  state= {
    data: [],
  };



  componentDidMount(){
    console.log('ComponentDidMount ran');
    axios.get('https://jsonplaceholder.typicode.com/albums/1/photos').then((albumFullData) => {
    let savedAlbumData = []
    let newAlbumData = [...albumFullData.data.slice(0, 20)]
    savedAlbumData = [...newAlbumData]
    // console.log(savedAlbumData)
    this.setState({
      data: savedAlbumData
    })
    }).catch((error) => console.log(error))
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
      
      </div>
    )
  }
}

export default App