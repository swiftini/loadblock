import React from 'react'
import { Tab, Container, Header, Icon } from 'semantic-ui-react'
import MarketplaceAccount from './MarketplaceAccount.jsx';

const panes = [
    { menuItem: 'Account', render: () => <MarketplaceAccount/> },
    { menuItem: 'Funds', render: () => <Tab.Pane>Funds panel.</Tab.Pane> },
    { menuItem: 'Indices', render: () => <Tab.Pane>Funds panel.</Tab.Pane> },
    { menuItem: 'Council', render: () => <Tab.Pane>Council panel.</Tab.Pane> },
    { menuItem: 'Strategies', render: () => <Tab.Pane>Strategies panel.</Tab.Pane> },
]

const Marketplace = () => (
    <Container>
        <Header
            style={{fontSize: '2.5em', paddingTop: '1em'}}
            textAlign='center'
        >
            <Header.Content>
                Inveth Marketplace

                {web3.eth.accounts[0]!=null ?
                    <Header.Subheader> {web3.eth.accounts[0]} </Header.Subheader> :
                    <Header.Subheader> Account not detected. Please check your settings. </Header.Subheader> }

            </Header.Content>
        </Header>
        <Tab menu={{ color: 'teal', fluid: true}} panes={panes} />
    </Container>
)

export default Marketplace