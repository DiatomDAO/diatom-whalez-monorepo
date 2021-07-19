import { useEffect } from 'react';
import { useEthers } from '@usedapp/core';
import { useAppDispatch } from './hooks';
import { setActiveAccount } from './state/slices/account';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { BigNumber } from '@usedapp/core/node_modules/ethers';
import { useAuction } from './wrappers/nounsAuction';
import config from './config';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import CurrentAuction from './components/CurrentAuction/CurrentAuction';
import Banner from './components/Banner';
import HistoryCollection from './components/HistoryCollection';
import Documentation from './components/Documentation';
import NetworkAlert from './components/NetworkAlert';
import Footer from './components/Footer';

function App() {
  const { account, chainId } = useEthers();
  const dispatch = useAppDispatch();
  const history = createBrowserHistory();
  const auction = useAuction(config.auctionProxyAddress);

  useEffect(() => {
    // Local account array updated
    dispatch(setActiveAccount(account));
  }, [account, dispatch]);

  return (
    <div className="App">
      {chainId !== 4 && <NetworkAlert />}
      <NavBar />
      <Router history={history}>
        <Switch>
          <Route path="/">
            <CurrentAuction auction={auction} />
            <Banner />
            <HistoryCollection
              latestNounId={auction && BigNumber.from(auction.nounId).sub(1)}
              historyCount={10}
              rtl={true}
            />
            <Documentation />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
