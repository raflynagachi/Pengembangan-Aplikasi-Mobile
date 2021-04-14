import React, {useState} from 'react';
import { Menu, Anchor, Drawer, Button } from 'antd'; 
const { Link } = Anchor;

export default function AppHeader() {
    const	[visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => { 
        setVlsible(false); 
    };
    return(
        <div className="container-fluid">
            <div className="header">
                <div className="mobileHidden">
                    <Anchor targetOffset="65">
                        <Link href="#homes" title="Home"/>
                        <Link href="#feature" title="Features" /> 
                        <Link href="#about" title="About" />
                        <Link href="#contact" title="Contact"/> 
                    </Anchor>
                </div>
                <div className="mobileVisible">
                <Button type="primary" onClick={showDrawer}> 
                    <i className="fas fa-bars"></i>
                </Button>
                <Drawer
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}>
                    <Anchor targetOffset="65">
                        <Link href="#homes" title="Home" />
                        <Link href="#about" title="About" />
                        <Link href="#feature" title="Features" />
                        <Link href="#contact" title="Contact" />
                    </Anchor>
                </Drawer>
            </div>
        </div>
    </div>
    )
}
