import React, {Component} from 'react'
import {Container, Segment, Header, Image, Button, Icon, Table} from 'semantic-ui-react'

const FooterContainer = () => (
    <Segment
        vertical
        inverted
    >

        <Container textAlign='left'>
            <h3>John Quarnstrom <br /><i>founder@inveth.io</i></h3>
            BTC - 19i3wXCWishs65MSbX7MueFjwYLkMmMYHP<br />
            ETH - 0x67FCDe77395bbd8952D74846397a49f0c8d74818<br />
        </Container>
    </Segment>
)

export default class Interface extends Component {
    render() {
        return (
            <FooterContainer/>
        )
    }
}