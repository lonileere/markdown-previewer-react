import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Preview from "./Preview";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
   handleChange = function(event){
    this.setState({input : event.target.value})
   };
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="jumbotron">
                <h1 className="display-4">Markdown Previewer</h1>
                <p className="lead">Created using Bootstrap 4 and React</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Preview preview={this.state.input}/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 offset-sm-3">
              <textarea type="text" onChange={this.handleChange} className="form-control" rows="10"></textarea>
            </div>
          </div>
        </div>
    );
  }
}
export default App;
