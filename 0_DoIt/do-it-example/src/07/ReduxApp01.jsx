import React, { PureComponent } from "react";
import { createStore } from 'redux';
import { Provider } from "react-redux";

class ReduxApp01 extends PureComponent {
    store = createStore(
        state => state,
        { loading: false, name: '두잇 리액트' },
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

    componentDidMount() {
        this.store.dispatch({
            type: 'SET_LOADING',
            payload: true
        });
        this.store.dispatch({
            type: 'RESET_LOADING',
        });
        this.store.dispatch({
            type: 'SET_USER',
            payload: { name: 'Park', age: 20 },
        });
    }

    render() {
        return(
            <Provider store={this.store}>
                리덕스 예제
            </Provider>
        )
    }
}

export default ReduxApp01;