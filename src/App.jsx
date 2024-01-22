import { Component } from "react";
import  { ToastContainer }  from  'react-toastify' ; 
import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from './components/ImageGallery/ImageGallery'

export class App extends Component {
  state = {
    formData: ''
  }

  handleFormSubmit = formData => {
    this.setState({ formData });
  }
  render () {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit}/>
        <ImageGallery />
        <ToastContainer autoClose={3000}/> 
      </div>
    );
  };
};
