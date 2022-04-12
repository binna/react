// import React, { PureComponent } from "react";
// import AppLayout from "./components/AppLayout";
// import CoinOverview from "./components/main/CoinOverview";

// class CoinApp extends PureComponent {
//     render() {
//         return (
//             // <AppLayout>본문</AppLayout>
//             <AppLayout>
//                 <CoinOverview />
//             </AppLayout>
//         )
//     }
// }

// export default CoinApp;

// ====================================================

// import React, { PureComponent } from "react";
// import AppLayout from './components/AppLayout';
// import MainPage from "./components/main/MainPage";

// class CoinApp extends PureComponent {
//     render() {
//         return (
//             <AppLayout>
//                 <MainPage />
//             </AppLayout>
//         )
//     }
// }

// export default CoinApp;

// ====================================================

import React, { PureComponent } from "react";
import { Provider } from 'react-redux';

import AppLayout from './components/AppLayout';
import CoinOverview from './components/main/CoinOverview';
import TransactionList from './components/main/TransactionList';
import configureStore from './store/configureStore';

class CoinApp extends PureComponent {
    store = configureStore();

    render() {
        return (
            <Provider store={this.store}>
                <AppLayout>
                    <CoinOverview />
                    <TransactionList />
                </AppLayout>
            </Provider>
        )
    }
}

export default CoinApp;