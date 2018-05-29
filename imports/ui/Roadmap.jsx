import React, {Component} from 'react'
import {Container, Segment, Header, Button, Icon, List, Grid} from 'semantic-ui-react'

const RoadmapContainer = () => (
    <Segment
        vertical
    >
        <br />

        <Header
            as='h1'
            style={{fontSize: '4em'}}
            textAlign='center'>
            <Icon name='world' color='teal' size='huge'/>
            <Header.Content>
                Roadmap
            </Header.Content>
        </Header>
        <Container text>
            <p>Smart contracts are capable of facilitating complex, yet secure financial transactions between unknown parties - however, it is nearly impossible
                to interact, manage, and track various smart contracts on the Ethereum network without the right software.</p>
            <p>That's why we're building a reliable and powerful user interface to help you create and manage smart contracts.</p>
            <p>With Inveth you have access to a wide range of financial smart contracts and a simple way to track them.
                Furthermore, we provide this interface for free. Your only costs are the transaction
                fees built-in to smart contracts (view Resources//Fees for more information).</p>
            <p>Technology is increasing at a very fast pace, and Ethereum has proven itself to be a reliable and
                cost-efficient way to conduct finance. To get started, head over to our <a href='resources'>resources</a> page.</p>
        </Container>
        <br />
        <br />

        <Header
            as='h1'
            style={{fontSize: '4em'}}
            textAlign='center'>
            <Icon name='world' color='teal' size='huge'/>
            <Header.Content>
                Disclaimer
            </Header.Content>
        </Header>
        <Container text>
            <p>We would like to warn investors that Ethereum and its underlying smart contracts are not 100% secure.
                There could be vulnerabilities within the Ethereum network, including its smart contracts.</p>
            <p>We therefore caution investors that are considering investing any amount of Ethereum through Inveth.
                We are not liable for any loss (<i>or gain</i>) that occurs through the use of this platform.</p>
            <p>More importantly ... <b>never invest more than you can afford to lose</b>.</p>
        </Container>
        <br />
        <br />
    </Segment>
)

export default class Roadmap extends Component {
    render() {
        return (
            <div className='main' style={{position: 'relative', maxWidth: '1200px', marginRight: 'auto', marginLeft: 'auto', height: '100%'}}>
                <RoadmapContainer/>
            </div>
        )
    }
}