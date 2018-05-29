import React, {Component} from 'react'
import {Container, Segment, Header, Image, Button, Icon, Table, Grid, List} from 'semantic-ui-react'

const MarketplaceAccountContainer = () => (
    <Segment
        textAlign='center'
        style={{ padding: '2em 2em' }}
        vertical
    >

        <Header
            as='h1'
            style={{fontSize: '2em'}}
            textAlign='center'
        >
            <Icon name='world' color='teal' />
            <Header.Content>
                Inveth Decision Token (IDT)
            </Header.Content>
        </Header>
        <Container text>
            <p>Holders of the Inveth Decision Token can vote on various propositions. Our newseletter will alert IDT holders about upcoming propositions
                , such as this one for options. </p>
            <Header as='h2'>
                <Icon name='calculator' />
                <Header.Content>
                    Options Pricing Formula
                    <Header.Subheader>
                        This formula determines the price of an option, also known as the premium.
                    </Header.Subheader>
                </Header.Content>
            </Header>
            <div>
                <Button.Group>
                    <Button content='Black Scholes' icon='check' color='teal' />
                    <Button.Or />
                    <Button content='Cox-Ross-Rubenstein' icon='check' color='teal' />
                    <Button.Or />
                    <Button content='Monte Carlo' icon='check' color='teal' />
                </Button.Group>
                <br />
            </div>
            <Header as='h2'>
                <Icon name='time' />
                <Header.Content>
                    Options Duration Style
                    <Header.Subheader>
                        European options are exercised on the day of expiration, while American options can be exercised
                        anytime throughout their lifecycle.
                    </Header.Subheader>
                </Header.Content>
            </Header>
            <div>
                <Button.Group>
                    <Button content='European' icon='checkmark' color='teal' />
                    <Button.Or />
                    <Button content='American' icon='checkmark' color='teal' />
                </Button.Group>
                <br />
            </div>
        </Container>
        <Grid>
            <Grid.Row columns={2} divided>
                <Grid.Column width={8}>
                    <Icon name='hand peace' size='massive' color='teal' />
                </Grid.Column>
                <Grid.Column width={8}>
                    <List>
                        <List.Item>
                            <List.Header>Name</List.Header>
                            John Quarnstrom
                        </List.Item>
                        <List.Item>
                            <List.Header>Education</List.Header>
                            Bachelor of Software Engineering, ASU (<i>2018</i>)
                        </List.Item>
                        <List.Item>
                            <List.Header>Other Projects</List.Header>
                            Co-founderand CTO of <a href="http://www.loadblock.io">LoadBlock</a> <br />
                            Lead Developer of ASU Ticket App (<i>utilizing <a href="http://www.aventus.io">Aventus</a></i>)
                        </List.Item>
                        <List.Item>
                            <List.Header>Ethereum Address - Donations Welcome</List.Header>
                            0x67FCDe77395bbd8952D74846397a49f0c8d74818
                        </List.Item>
                    </List>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
)

export default class MarketplaceAccount extends Component {
    render() {
        return (
            <div className="main">
                <MarketplaceAccountContainer/>
            </div>
        )
    }
}