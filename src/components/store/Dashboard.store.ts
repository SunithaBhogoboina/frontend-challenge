import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { axiosClient } from "../../utils/api";

export const useDashboardStore = create(set => ({
    allTickerData: [],
    autoCompleteData: [],
    tickerPerSymbolData: {
        data: {},
        errorMessage: ''
    },
    getAllTickerData: async () => {
        // const options = {
        //     params: {crypto: 'ETH', fiat: 'USD,EUR'}
        //   };
        const response = axiosClient.get(`indices/local/ticker/all`).then((response) => {
            // console.log("getAllTickerData : ", response.data);
            const responseData = response.data;
            let result: any = [];
            let suggestions: any = [];
            for(let item in responseData) {
                // console.log(item);
                result.push({
                    currencyPair: item,
                    data: responseData[item]
                })
                suggestions.push({
                    value: responseData[item].display_symbol,
                    label: item
                })
            }
            set({ allTickerData: result, autoCompleteData: suggestions })
          }).catch((response) => {
            set({ errorMessage: response })
          })
    },
    getTickerPerSymbolData: async (pairedSymbol) => {
        console.log("getPairingData : ", pairedSymbol);
        const response = axiosClient.get(`indices/local/ticker/`+pairedSymbol).then((response) => {
            console.log("getPairingData : ", response.data);
            const responseData = response.data;
            set({ tickerPerSymbolData: { data: response.data } })
        }).catch((response) => {
            set({ tickerPerSymbolData: { errorMessage: response } })
        })
    }
}))