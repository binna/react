import createProvider from '../doit-ui/Modal/create';
import { TRADE_COIN_MODAL } from './constants/modals';
import TradeCoinPage01 from './components/main/TradeCoinPage01';

export default createProvider({
    [TRADE_COIN_MODAL]: TradeCoinPage01
})