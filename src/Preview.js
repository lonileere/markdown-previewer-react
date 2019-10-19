import React, {Component} from 'react';
import marked from 'marked';
import './Preview.css'

class Preview extends Component {

    getMarkdownText() {
        let parsedText = marked(this.props.preview)
        return { __html: parsedText};
    }
    render() {
        return (
            <div id="preview" dangerouslySetInnerHTML={this.getMarkdownText()}/>
        );
    }
}

Preview.propTypes = {};

export default Preview;