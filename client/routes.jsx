import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from "./layouts/main_layout";
import Home from '../imports/ui/Home.jsx';
import Resources from '../imports/ui/Resources.jsx';
import Marketplace from '../imports/ui/Marketplace.jsx';

FlowRouter.route('/', {
    action() {
        mount(MainLayout, {
            content: (<Home/>)
        });
    }
});

FlowRouter.route('/marketplace', {
    action() {
        mount(MainLayout, {
            content: (<Marketplace />)
        });
    }
});

FlowRouter.route('/resources', {
    action() {
        mount(MainLayout, {
            content: (<Resources />)
        });
    }
});