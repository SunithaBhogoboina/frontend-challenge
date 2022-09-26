import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonGroup } from '@chakra-ui/react'
import "./Dashboard.scss";
import { useDashboardStore } from './store/Dashboard.store';

const  ToggleButton  = (props) => {
  const symbols = props.symbol.length > 0 ? props.symbol.split('-') : [];
  const [isOff, setIsOff] = useState(true);
  const getTickerPerSymbolData = useDashboardStore((state: any) => state.getTickerPerSymbolData);

  const togglePairing = (index) => {
    setIsOff(!isOff);
    getTickerPerSymbolData(symbols[index]+symbols[index == 1 ? 0 : 1]);
  }

  return (
    <ButtonGroup className="toggle-button" style={{display: symbols?.[0] ? 'inline' : 'none'}}>
        <Button className="button" colorScheme='blue' size='xs' variant={isOff ? 'solid' : 'outline'} onClick={() => togglePairing(0)} >{symbols?.[0]}</Button>
        <Button className="button" style={{marginLeft: 0}} colorScheme='blue' size='xs' variant={isOff ? 'outline' : 'solid'} onClick={() => togglePairing(1)} >{symbols?.[1]}</Button>
    </ButtonGroup>
  );
}

export default ToggleButton;