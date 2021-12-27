import React, {PureComponent} from 'react';
import PropsTypes from 'prop-types';

class Input extends PureComponent {
    constructor(props) {
        super(props);
        this.setRef = this.setRef.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const {name, onChange} = this.props;
        if (onChange) {
            onChange(name, e.target.value);
        }
    }
    componentDidMount() {
        if (this.props.autoFocus) {
            this.ref.focus();
        }
    }
    componentDidUpdate() {
        if (this.props.autoFocus) {
            this.ref.focus();
        }
    }
    setRef(ref) {
        this.ref = ref;
    }
    render() {
        const {errorMesage, label, name, value, type, onFocus} = this.props;
        return (
            <label>
                {label}
                <input 
                    id={`input_${name}`}
                    ref={this.setRef}
                    onChange={this.handleChange}
                    onFocus={onFocus}
                    value={value}
                    type={type}
                />
                {errorMesage && <span className="error">{errorMesage}</span>}
            </label>
        );
    }
}

Input.PropsTypes = {
    type: PropsTypes.oneOf(['text', 'number', 'price']),
    name: PropsTypes.string.isRequired,
    value: PropsTypes.oneOfType([PropsTypes.number, PropsTypes.string]),
    errorMesage: PropsTypes.string,
    label: PropsTypes.string,
    onChange: PropsTypes.func,
    onFocus: PropsTypes.func,
    autoFocus: PropsTypes.bool
};
Input.defaultProps = {
    onChange: () => {},
    onFocus: () => {},
    autoFocus: false,
    type: 'text'
};

export default Input;