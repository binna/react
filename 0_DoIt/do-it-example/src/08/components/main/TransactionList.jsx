import React, { PureComponent } from "react";

import Heading from "../../../doit-ui/Heading";
import Card from "../../../doit-ui/Card";

// import TransactionSearchFilter from "./TransactionSearchFilter";
import TransactionSearchFilterContainer from "../../containers/main/TransactionSearchFilterContainer";
import TransactionTable from "./TransactionTable";

// import axios from 'axios';
import Api from '../../Api';

class TransactionList extends PureComponent {
    // state = {
    //     transactions: [
    //         // {
    //         //     id: 'btx_01',
    //         //     name: '비트코인(BTX)',
    //         //     totalPrice: '123,123,000,000원',
    //         //     currentPrice: '4,200,000원',
    //         //     datetime: '2022/3/17 08:00:00'
    //         // }
    //     ]
    // }

    componentDidMount() {
        // axios.get('http://localhost:4000/transactions', { params: { code: 'BTX' } })
        //     .then(response => this.setState({ transactions: response.data }));
        Api.get('/transactions')
            .then(({ data }) => this.props.setTransactionList(data));
    }

    render() {
        // const { transactions } = this.state;
        const { transactions } = this.props;
        return (
            <div>
                <Heading level={3}>거래 현황</Heading>
                <Card vertical={4} horizontal={4}>
                    {/* <TransactionSearchFilter /> */}
                    <TransactionSearchFilterContainer />
                </Card>
                <Card>
                    <TransactionTable transactions={transactions} />
                </Card>
            </div>
        )
    }
}

TransactionList.defaultProps = {
    transactions: [],
    setTransactionList: () => {}
};

export default TransactionList;