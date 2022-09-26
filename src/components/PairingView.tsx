import React, { useEffect, useState } from "react";
import { useDashboardStore } from "./store/Dashboard.store";
import { useParams } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import "./Dashboard.scss";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  ButtonGroup, 
  Button, 
  Flex, 
  Heading
} from '@chakra-ui/react';

const PairingView = () => {
    const tickerPerSymbolData = useDashboardStore((state: any) => state.tickerPerSymbolData);  
    const getTickerPerSymbolData = useDashboardStore((state: any) => state.getTickerPerSymbolData);
    const { pairing } = useParams();
    const [percentageFlag, setPercentageFlag] = useState(true);
    const [priceFlag, setPriceFlag] = useState(false);

    useEffect(() => {
        getTickerPerSymbolData(pairing?.substring(1, pairing.length-1));
        // console.log("getTickerPerSymbolData : " + tickerPerSymbolData);
    }, []);

    const showPercentages = () => {
        setPercentageFlag(true);
        setPriceFlag(false);
    }

    const showPrice = () => {
        setPercentageFlag(false);
        setPriceFlag(true);
    }

    return (
        <div className="pairing-view">
            <div style={{display: 'block'}}>
                <Heading>Pairing Details
                    <ToggleButton symbol={tickerPerSymbolData && tickerPerSymbolData.data && Object.keys(tickerPerSymbolData.data).length > 0 ? tickerPerSymbolData.data.display_symbol : ''} />
                </Heading>
            </div>
            <Flex>
            {
                tickerPerSymbolData && tickerPerSymbolData.data && Object.keys(tickerPerSymbolData.data).length > 0 ? 
                <TableContainer>
                    <Table variant='simple' size='sm'>
                        <Thead>
                            <Tr>
                                <Th rowSpan={2}>Symbol</Th>
                                <Th rowSpan={2}>Time</Th>
                                <Th colSpan={3}>Averages</Th>
                                <Th colSpan={5}>Changes
                                    <ButtonGroup className="toggle-button">
                                        <Button className="button" colorScheme='blue' size='xs' variant={percentageFlag ? 'solid' : 'outline'} onClick={showPercentages} >{'Percent'}</Button>
                                        <Button className="button" style={{marginLeft: 0}} colorScheme='blue' size='xs' variant={priceFlag ? 'solid' : 'outline'} onClick={showPrice} >{'Price'}</Button>
                                    </ButtonGroup>
                                </Th>
                            </Tr>
                            <Tr>
                                <Th>Day</Th>
                                <Th>Week</Th>
                                <Th>Month</Th>
                                <Th>Day</Th>
                                <Th>Hour</Th>
                                <Th>Week</Th>
                                <Th>Month</Th>
                                <Th>Year</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>{tickerPerSymbolData.data.display_symbol}</Td>
                                <Td>{tickerPerSymbolData.data.display_timestamp}</Td>
                                <Td isNumeric>{tickerPerSymbolData.data.averages.day}</Td>
                                <Td isNumeric>{tickerPerSymbolData.data.averages.week}</Td>
                                <Td isNumeric>{tickerPerSymbolData.data.averages.month}</Td>
                                <Td isNumeric>{percentageFlag ? tickerPerSymbolData.data.changes.percent.day : tickerPerSymbolData.data.changes.price.day}</Td>
                                <Td isNumeric>{percentageFlag ? tickerPerSymbolData.data.changes.percent.hour : tickerPerSymbolData.data.changes.price.hour}</Td>
                                <Td isNumeric>{percentageFlag ? tickerPerSymbolData.data.changes.percent.week : tickerPerSymbolData.data.changes.price.week}</Td>
                                <Td isNumeric>{percentageFlag ? tickerPerSymbolData.data.changes.percent.month : tickerPerSymbolData.data.changes.price.month}</Td>
                                <Td isNumeric>{percentageFlag ? tickerPerSymbolData.data.changes.percent.year : tickerPerSymbolData.data.changes.price.year}</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                :
                <div>{tickerPerSymbolData.errorMessage.response ? tickerPerSymbolData.errorMessage.response.data : ''}</div>
            }
            </Flex>
        </div>
    )
}

export default PairingView;