import React, {Component} from 'react'
import {Container, Segment, Header, Image, Button, Icon, Table, Grid, List} from 'semantic-ui-react'

const MarketplaceAccountContainer = () => (
    <Segment
        textAlign='left'
        style={{ padding: '2em 2em' }}
        vertical
    >
        <Grid>
            <Grid.Row columns={2} divided>
                <Grid.Column width={12}>
                    <List size='huge'>
                        <List.Item>
                            <List.Header>Ethereum Address</List.Header>
                            {web3.eth.defaultAccount}
                            {web3.eth.defaultBlock}
                        </List.Item>
                        <List.Item>
                            <List.Header>Registered</List.Header>
                            Reference the Smart Contract.
                        </List.Item>
                        <List.Item>
                            <List.Header>Current Balance</List.Header>
                            List the value of MetaMask account.
                        </List.Item>
                        <List.Item>
                            <List.Header>Current Holdings</List.Header>
                            Reference the Smart Contract.
                        </List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Icon name='hand peace' size='massive' color='teal' />
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