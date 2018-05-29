import React from 'react';
import NavigationBar from '../../imports/ui/Menu.jsx';
import Footer from '../../imports/ui/Footer.jsx';

export const MainLayout = ({content}) => (
    <div className="main_layout" style={{position: 'absolute', width:'100%', height: '100%'}}>
        <NavigationBar />
        <div id='particles-js' style={{position: 'absolute', width: '100%', height: '100%', background: 'linear-gradient(0deg,#b2d8d8,#fff)'}}></div>
        <div style={{position: 'relative', maxWidth: '1200px', marginRight: 'auto', marginLeft: 'auto', height: '100%', marginTop: 'auto', marginBottom: 'auto'}}>
        <main>
            {content}
        </main>
        </div>
        <div style={{position:'relative', marginTop: 'auto', width: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto'}}>
            <Footer />
        </div>
    </div>

)