import React from "react";

export default function withHoC(WrappedComponent) {
    const {displayName, name} = WrappedComponent;
    const wrappedComponent = displayName || name;
    return class withHoC extends React.Component {
        static displayName = `withHoC(${WrappedComponent})`;
        render() {
            return <WrappedComponent {...this.props}/>
        }
    }
}