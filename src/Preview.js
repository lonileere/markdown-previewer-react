import React, {Component} from 'react';
import './Preview.css'

class Preview extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div id="preview">
                {this.props.preview}
            </div>
        );
    }
}

Preview.propTypes = {};

export default Preview;