import React from 'react';

import { marked } from 'marked';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputMarkdown: "",
    };
  }

  updateInput(input) {
    this.setState({ inputMarkdown: input });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1 class="text-white text-center">
                Markdown Preview
              </h1>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <div className="col text-center">
                <h4 class="text-white text-center">
                  Input
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
                <h4 class="text-white text-center">
                  Preview
                </h4>
                <div
                  className="preview-box"
                  dangerouslySetInnerHTML={{ __html: marked(this.state.inputMarkdown) }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
