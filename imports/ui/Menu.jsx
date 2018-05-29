import React, { Component } from 'react'
import { Menu, Icon, Header, Segment } from 'semantic-ui-react'

export default class NavigationBar extends Component {
    state = { activeItem: 'Home' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        if (name=='Home') {
            FlowRouter.go('/');
        }
        else if (name=='Marketplace') {
            FlowRouter.go('/marketplace')
        }
        else if (name=='Resources') {
            FlowRouter.go('/resources')
        }
    }

    render() {
        const { activeItem } = this.state;

        return (
            <div>

                <Menu compact inverted attached='top' pointing>
                        <Menu.Item header>
                            <Header inverted as='h3'>
                                <Icon name='world' color='teal'/>
                                <Header.Content>
                                    Inveth
                                    <Header.Subheader>
                                        Ethereum Finance
                                    </Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Menu.Item>
                        <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} color='teal' />
                    <Menu.Item name='Marketplace' active={activeItem === 'Marketplace'} onClick={this.handleItemClick} color='teal'/>
                        <Menu.Item name='Resources' active={activeItem === 'Resources'} onClick={this.handleItemClick} color='teal' />

                        <Menu.Menu position='right'>
                            <Menu.Item>
                                {web3.currentProvider.isMetaMask ?
                                    <Header inverted textAlign='right'>
                                        <Header.Content>
                                            MetaMask Detected
                                            <Header.Subheader>
                                                {(() => {
                                                    switch (web3.currentProvider.publicConfigStore._state.networkVersion) {
                                                        case "1": return "Connected to Main Network";
                                                        case "3": return "Warning! Connected to Ropsten.";
                                                        case "42": return "Warning! Connected to Kovan.";
                                                        case "4": return "Warning! Connected to Rinkeby.";
                                                        default: return "Warning! Connected to Unknown Network.";
                                                    }
                                                })()}
                                            </Header.Subheader>
                                        </Header.Content>
                                    </Header> :
                                    <Header inverted textAlign='right'>
                                        <Header.Content>
                                            MetaMask Not Detected
                                            <Header.Subheader>
                                                Please download <a href="https://www.metamask.io">MetaMask</a>.
                                            </Header.Subheader>
                                        </Header.Content>
                                    </Header>}
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
            </div>
        )
    }
}
