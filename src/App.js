// import MarkdownPreview from "./components/MarkdownPreviewer.js";
import "./App.css";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
let marked = require("marked");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  resetInput = () => {
    this.setState({ markdown: '' });
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                {" "}
                <div className="text-align-center" variant="light">
                  Markdown Previewer
                </div>
              </h1>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              {" "}
              <div className="text-center">
                <h4  className="text-align-center sub-title" variant="secondary">
                    Markdown 
                    <Button variant="outline-secondary" className="trash-button" onClick={this.resetInput}><i className="fas fa-trash-alt"></i></Button>{' '}
                </h4>
              </div>
              <div className="input inputStyle">
              <Form.Control
                    as="textarea" 
                    rows="21" 
                    className="input"
                    value={this.state.markdown}
                    onChange={(e) => {
                      this.updateMarkdown(e.target.value);
                    }} />
                </div>
              </div>
            {/* <MarkdownPreview text={this.state.markdown}/> */}

            <div className="col-md-6 mt-5 mt-md-0">
              {" "}
              <div className="col text-center">
                <h4 className="text-align-center sub-title" variant="secondary">
                    Preview
                </h4>
              </div>
               <div
                className="outputStyle"
                dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
                >
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}