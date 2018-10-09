import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Divider } from 'semantic-ui-react';
import { Menu, Icon, Dropdown, Segment, Image, Header, Grid, List, Input, Button } from 'semantic-ui-react'

class TopMenu extends React.Component {
    render() {
        return (
            <Menu borderless className="topmenu">
            <Container>
            <Menu.Item fitted><Icon name="facebook f"/></Menu.Item>
            <Menu.Item fitted><Icon name="twitter"/></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest"/></Menu.Item>
            <Menu.Item fitted><Icon name="instagram"/></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home"/></Menu.Item>
            <Menu.Item fitted><Icon name="search"/></Menu.Item>
            <Menu.Item fitted><Icon name="user"/></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
            <Dropdown.Menu>
            <Dropdown.Item>The cart is currently empty.</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </Container>
        </Menu>
    )
    }
}

class IslandSnowLogo extends React.Component {
    render() {
        return (
            <Image src='https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/logo.png?15691486226381689305' centered/>
    )
    }
}

class MiddleMenu extends React.Component {
    render() {
        return (
            <Menu secondary>
        <Grid centered container>
        <Dropdown item text="MEN">
            <Dropdown.Menu>
            <Dropdown.Item>TANK TOPS</Dropdown.Item>
        <Dropdown.Item>SHIRTS</Dropdown.Item>
        <Dropdown.Item>LONG SLEEVE SHIRTS</Dropdown.Item>
        <Dropdown.Item>SWEATSHIRTS & JACKETS</Dropdown.Item>
        <Dropdown.Item>ALOHA SHIRTS</Dropdown.Item>
        <Dropdown.Item>BOARDSHORTS & POOL SHORTS</Dropdown.Item>
        <Dropdown.Item>ACCESSORIES</Dropdown.Item>
        <Dropdown.Item>BAGS & WALLETS</Dropdown.Item>
        <Dropdown.Item>STICKERS</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="WOMEN">
            <Dropdown.Menu>
            <Dropdown.Item>TANK TOPS</Dropdown.Item>
        <Dropdown.Item>SHIRTS</Dropdown.Item>
        <Dropdown.Item>LONG SLEEVE SHIRTS</Dropdown.Item>
        <Dropdown.Item>SWEATSHIRTS </Dropdown.Item>
        <Dropdown.Item>HATS</Dropdown.Item>
        <Dropdown.Item>ACCESSORIES</Dropdown.Item>
        <Dropdown.Item>BAGS & WALLETS</Dropdown.Item>
        <Dropdown.Item>STICKERS</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="KIDS">
            <Dropdown.Menu>
            <Dropdown.Item>SHIRTS</Dropdown.Item>
            <Dropdown.Item>ONESIES</Dropdown.Item>
            <Dropdown.Item>SWEATSHIRTS </Dropdown.Item>
            <Dropdown.Item>ACCESSORIES</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="BRANDS">
            <Dropdown.Menu>
            <Dropdown.Item>ALOHA SURF PROJECT</Dropdown.Item>
        <Dropdown.Item>DA MOKES</Dropdown.Item>
        <Dropdown.Item>FARMERS MARKET HAWAII </Dropdown.Item>
        <Dropdown.Item>HAWAII DOMESTIC MARKET</Dropdown.Item>
        <Dropdown.Item>HERSCHEL SUPPLY CO.</Dropdown.Item>
        <Dropdown.Item>HILIFE</Dropdown.Item>
        <Dropdown.Item>ISLAND SNOW HAWAII</Dropdown.Item>
        <Dropdown.Item>KAILUA BOYS</Dropdown.Item>
        <Dropdown.Item>KAILUA GIRLS</Dropdown.Item>
        <Dropdown.Item>KA'OHAO</Dropdown.Item>
        <Dropdown.Item>LANIKAI CANOE CLUB </Dropdown.Item>
        <Dropdown.Item>MOKULUA HULA</Dropdown.Item>
        <Dropdown.Item>PATAGONIA</Dropdown.Item>
        <Dropdown.Item>REYN SPOONER</Dropdown.Item>
        <Dropdown.Item>RVCA HAWAII</Dropdown.Item>
        <Dropdown.Item>SRF</Dropdown.Item>
        <Dropdown.Item>STANCE</Dropdown.Item>
        <Dropdown.Item>STUSSY</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        <Menu.Item>SEARCH</Menu.Item>
        </Grid>
        </Menu>
    )
    }
}
class FullWidthImage extends React.Component {
    render() {
        return (
            <Image src='https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/slide1.jpg?15691486226381689305' fluid/>
    )
    }
}

class FooterMenu extends React.Component {
    render() {
        return (
            <Grid className='footer-background'>
            <Grid columns={3} centered container>
        <Grid.Column>
        Navagation
        <hr/>
        <List>
        <List.Item>About Us</List.Item>
        <List.Item>Videos</List.Item>
        <List.Item>Store Locations</List.Item>
        <List.Item>Shipping & Returns</List.Item>
        <List.Item>Terms & Conditions</List.Item>
        <List.Item>Privacy Policy</List.Item>
        </List>
        </Grid.Column>
        <Grid.Column>
        Main Menu
        <hr/>
        <List>
        <List.Item>Men</List.Item>
        <List.Item>Women</List.Item>
        <List.Item>Kids</List.Item>
        <List.Item>Brands</List.Item>
        <List.Item>Search</List.Item>
        </List>
        </Grid.Column>
        <Grid.Column>
        Connect
        <hr/>
        <List>
        <List.Item>Sign up for the latest updates</List.Item>
        <List.Item><Input placeholder='Enter email address' />
            <Button color='black'>Join</Button></List.Item>
        </List>
        </Grid.Column>
        </Grid>
        </Grid>
    )
    }
}

class IslandSnow extends React.Component {

    render() {
        return (
            <div>
            <TopMenu/>
            <IslandSnowLogo/>
            <MiddleMenu/>
            <FullWidthImage/>
            <FooterMenu/>
            </div>
    );
    }
}

ReactDOM.render(
<IslandSnow/>
    , document.getElementById('root'));