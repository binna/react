import React from "react";

// export default function withLoading(WrappedComponet) {
// export default function withLoading(WrappedComponet, loadingMessage = '로딩 중') {
export default function(loadingMessage = '로딩 중') {
    return function withLoading(WrappedComponet) {
        const {displayName, name: componentName} = WrappedComponet;
        const wrappedComponetName = displayName || componentName;

        // function WithLoading(props) {
        //     if (props.isLoading(props)) return '로딩 중';
        function WithLoading({isLoading, ...props}) {
            // if (isLoading) return '로딩 중';
            if (isLoading) return loadingMessage;
            
            return (
                <WrappedComponet {...props} />
            );
        }
        WithLoading.displayName = `withLoading(${wrappedComponetName})`;
        return WithLoading;
    }
}