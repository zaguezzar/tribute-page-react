import React from 'react'

class Timeline extends React.Component {
    render() {
        return (
            <li className="my-3"><strong>{this.props.year} -</strong> {this.props.text}</li>
        )
    }
}

export default Timeline