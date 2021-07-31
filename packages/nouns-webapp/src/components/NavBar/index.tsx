import { useAppSelector } from '../../hooks';
import { useEthers } from '@usedapp/core';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import ShortAddress from '../ShortAddress';
import classes from './NavBar.module.css';
import logo from '../../assets/logo.svg';
import NavBarItem from './NavBarItem';

const NavBar = () => {
  const activeAccount = useAppSelector(state => state.account.activeAccount);
  const { activateBrowserWallet } = useEthers();

  const connectedContent = (
    <>
      <NavBarItem>
        <a
          href="https://faucet.rinkeby.io/"
          className={classes.getFakeEth}
          target="_blank"
          rel="noreferrer"
        >
          GET RINKEBY ETH
        </a>
      </NavBarItem>
      <NavBarItem className={classes.connectedBtn}>
        <ShortAddress>{activeAccount}</ShortAddress>
        <span className={classes.greenStatusCircle} />
      </NavBarItem>
    </>
  );

  const disconnectedContent = (
    <NavBarItem className={classes.connectBtn} onClick={() => activateBrowserWallet()}>
      Connect Wallet
    </NavBarItem>
  );

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className={classes.navBarBrand}>
          <img
            src={logo}
            width="70"
            height="70"
            className="d-inline-block align-middle"
            alt="Nouns DAO logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          {activeAccount ? connectedContent : disconnectedContent}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
