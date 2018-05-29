import React from 'react'
import { Tab, Container, Header, Icon } from 'semantic-ui-react'
import MarketplaceAccount from './MarketplaceAccount.jsx';

const panes = [
    { menuItem: 'Introduction', render: () => <Tab.Pane><MarketplaceAccount /></Tab.Pane> },
    { menuItem: 'Futures', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Funds', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    { menuItem: 'Council', render: () => <Tab.Pane>Tab555555Content</Tab.Pane> },
    { menuItem: 'Strategies', render: () => <Tab.Pane>Tab 5 Content</Tab.Pane> },
]

const Resources = () => (
    <Container>
        <br />
        <br />
        <Tab menu={{ secondary: true, fluid: true, tabular: 'right' }} panes={panes} />
    </Container>
)

export default Resources