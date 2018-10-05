import React, {Component} from 'react';

class Hello extends Component {
    componentDidMount() {
        console.log('Hello cdm');
    }
    render() {
        return (
            <div className="hello">
                hello <code>{this.props.name}</code>
            </div>
        )
    }
}

export default Hello