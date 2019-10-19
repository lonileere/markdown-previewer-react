import React, {Component} from 'react';
import './App.css';
import Preview from "./Preview";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: `<h1> Hi guys whats going on </h1> <h2> I am testing my markdown previewer rn </h2>`,
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
              <textarea type="text" onChange={this.handleChange} className="form-control" rows="10">
                {this.state.input}
              </textarea>
            </div>
          </div>
        </div>
    );
  }
}
export default App;
