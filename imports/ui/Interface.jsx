import React, {Component} from 'react'
import {Container, Segment, Header, Image, Button, Icon, Table} from 'semantic-ui-react'

const InterfaceContainer = () => (
    <Segment
        textAlign='center'
        style={{ padding: '2em 2em' }}
        vertical
    >
        <div id='outer'>
            Outer
            <div id='particles-js'>
                <div id='inner'>Inner</div>
            </div>
        </div>
    </Segment>
)

export default class Interface extends Component {
    render() {
        return (
            <div className="main">
                <InterfaceContainer/>
            </div>
        )
    }
}