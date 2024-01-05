import React from 'react';

import Badge from "react-bootstrap/Badge";

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputMarkdown: "",
    };
  }

  updateInput(input) {
    this.setState({ inputMarkdown : input });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                <Badge className="text-align-center" variant="light">
                  Markdown Preview
                </Badge>
              </h1>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Input
                  </Badge>
                </h4>
                <div className="markdown-input">
                  <textarea
                    className="input-box"
                    value={this.state.inputMarkdown}
                    onChange={(e) => {
                      this.updateInput(e.target.value)
                    }}>
                  </textarea>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Preview
                  </Badge>
                </h4>
                <div className="preview-box"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
