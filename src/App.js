import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Alert} from 'react-bootstrap';
import Web3 from 'web3';
const App = () => {
  const [account, setAccount] = useState();
  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider);
      console.log('Web3Version: ' + web3.version);
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);
      console.log('Account: ' + accounts[0]);
    }
  
    load();
  
   }, []);
  return (
    <Container className="px-4 py-5">
      <Row>
        <Col>
          <Alert variant='info'>
            <p>Ваш аккаунт: <b>{account}</b></p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};
export default App;