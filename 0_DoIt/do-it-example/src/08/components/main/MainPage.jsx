import React, { PureComponent } from "react";
import CoinOverview from "./CoinOverview";
// import TransactionList from "./TransactionList";
import TransactionListContainer from "./TransactionListContainer";

class MainPage extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <CoinOverview />
                {/* <TransactionList /> */}
                <TransactionListContainer />
            </React.Fragment>
        )
    }
}

 export default MainPage;