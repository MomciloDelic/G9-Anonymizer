import React from 'react';
import Bar from './Bar';
import CardContainer from './CardContainer';
import DemoContainer from './DemoContainer';
import HeaderContainer from './HeaderContainer';
import Footer from './Footer';


const Layout: React.FC = () => {
    return (
        <React.Fragment>
          <Bar/>
         <HeaderContainer/>
          <CardContainer/>
          <DemoContainer/>
          <Footer/>
      </React.Fragment>
    )
}

export default Layout;