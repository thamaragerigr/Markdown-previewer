import React from 'react';

class MarkdownPreview extends React.Component {
    render() {
        return (
          <div>
             <textarea
                  className="input"
                  value={this.props.text}
                >
                  {" "}
            </textarea>
          </div>
        )
      }
}
  
export default MarkdownPreview;