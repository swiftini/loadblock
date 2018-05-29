import React, {Component} from 'react'
import {Segment, Header, Button, Icon, Grid} from 'semantic-ui-react'

export default class Home extends Component {

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        if (name=='Home') {
            FlowRouter.go('/');
        }
        else if (name=='Mission') {
            FlowRouter.go('/mission')
        }
        else if (name=='Resources') {
            FlowRouter.go('/resources')
        }
    }

    render() {
        return (
                <Segment
                    textAlign='center'
                    vertical
                >
                    <br />
                    <Header
                        as='h1'
                        style={{fontSize: '4em'}}
                        textAlign='center'
                        icon >
                        <Icon name='world' color='teal' size='huge'/>
                        <Header.Content>
                            Inveth
                            <Header.Subheader>
                                Your gateway to Ethereum
                            </Header.Subheader>
                        </Header.Content>
                    </Header>
                    <Header
                        as='h1'
                        style={{ fontSize: '2.2em'}}
                        textAlign='center'
                    >
                        Funds, Indices, Futures, and Dividends
                    </Header>
                    <Header
                        as='h1'
                        style={{ fontSize: '1.5em', fontWeight: 'lighter' }}
                        textAlign='center'
                    >
                        Find new ways to invest your Ethereum with our lightning-fast UI.
                    </Header>
                    <br />
                    <br />
                    <br />
                    <Grid columns='four' divided>
                        <Grid.Row>
                            <Grid.Column>
                                <Header as='h3' icon textAlign='center'>
                                    <a href="http://inveth.slack.com" color='black'>
                                    <Icon link name='slack' color='black'/>
                                    </a>
                                    <Header.Content>
                                        Slack Channel
                                    </Header.Content>
                                    <Header.Subheader>
                                        <a href="http://inveth.slack.com">inveth.slack.com</a>
                                    </Header.Subheader>
                                </Header>
                            </Grid.Column>
                            <Grid.Column>
                                <Header as='h3' icon textAlign='center'>
                                    <a href="http://www.medium.com/inveth" color='black'>
                                    <Icon name='medium' color='black'/>
                                    </a>
                                    <Header.Content>
                                        Articles
                                    </Header.Content>
                                    <Header.Subheader>
                                        <a href="http://www.medium.com/inveth">medium.com/inveth</a>
                                    </Header.Subheader>
                                </Header>
                            </Grid.Column>
                            <Grid.Column>
                                <Header as='h3' icon textAlign='center'>
                                    <a href="http://www.github.io/inveth" color='black'>
                                    <Icon name='code' color='black' />
                                    </a>
                                    <Header.Content>
                                        Open-Source Code
                                    </Header.Content>
                                    <Header.Subheader>
                                        <a href="http://www.github.io/inveth">github.io/inveth</a>
                                    </Header.Subheader>
                                </Header>
                            </Grid.Column>
                            <Grid.Column>
                                <Header as='h3' icon textAlign='center'>
                                    <a href="http://www.inveth.io/vote" color='black'>
                                    <Icon name='law' color='black'/>
                                    </a>
                                    <Header.Content>
                                        Propositions
                                    </Header.Content>
                                    <Header.Subheader>
                                        <a href="http://www.inveth.io/vote">inveth.io/vote</a>
                                    </Header.Subheader>
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <br />
                    <br />
                </Segment>
        )
    }
}