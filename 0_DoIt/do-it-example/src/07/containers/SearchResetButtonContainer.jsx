import { connect } from 'react-redux';
import { resetFilter } from '../actions/searchFilterActions';
import Button from '../../04/Button';

const mapStateToProps = state => {
    const disabled = Object.values(state.searchFilter).reduce(
        (result, value) => result && !value,
        true
    )

    return {
        disabled
    }
}

const mapDispatchToProps = {
    onPress: resetFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);