# Mondu Frontend challenge

In this challenge you'll be given a simple react app that you will have to extend. This app will use the `https://bitcoinaverage-global-ethereum-index-v1.p.rapidapi.com`
endpoint and get the data for all coins that are supported in this endpoint. Documentation for this endpoint can be found here [https://rapidapi.com/blockchain-data-ltd-blockchain-data-ltd-default/api/global-ethereum-price-index-gex/](https://rapidapi.com/blockchain-data-ltd-blockchain-data-ltd-default/api/global-ethereum-price-index-gex/). We want you to implement two pages.
The first page will be the homepage (/Dashboard) and will retrieve the data of the pairings and display the data in a table. The columns of the table should be sortable. The data to be displaid is the pairing (ex. ETH/EUR), ask price, hourly, daily, weekly and monthly change. This page will also contain an input field where the user can type in the specific coin they want to check and after submitting the form should be redirected to the `/{pairing}` page. This input field should also show suggested pairings while the user is typing. Clicking on a suggestion should lead the user to the page for this specific pairing. Furthermore the page will have a button that will toggle the Fiat currency of the pairing, for example EUR to USD and vice versa.

The second page will be reachable from the `/{pairing}` and will display the `display_symbol`, `display_time`, `averages` and `changes`. Feel free to select whatever timeframes you want for the averages and changes. For the changes implement a button that let's the viewer see the changes in percent or price. On both pages indicate in some way that the change is positive or negative.

Regarding the styling, feel free to get creative, you can use any CSS framework that you have experience with to create a simple and nice to look at design for these pages. At the company we use [https://chakra-ui.com/](https://chakra-ui.com/), if you are comfortable with it you can try doing the challenge with the components provided by Chakra (but this is not a must). Of course you can also use a state handling framework too. Please implement tests that you think would be needed for this project. Create this project as if you would present it to a customer while also keeping scalability in mind (performance and code complexity).

For any question feel free to reach out.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
