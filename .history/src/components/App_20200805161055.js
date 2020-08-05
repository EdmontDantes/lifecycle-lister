import React, {Component} from 'react'
import axios from 'axios'
import Placeholder from './Placeholder'
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


  render() {
    console.log('render lifecycle ran')
    return(
      <div>
        <Placeholder data={}
      </div>
    )
  }
}

export default App