import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import { css } from './withStyles';
import { unit } from './Theme';

export const propTypes = {
    top: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    botton: PropTypes.number,
    vertical: PropTypes.number,
    horizontal: PropTypes.number
};

class Spacing extends PureComponent {
    render() {
        const {
            children,
            top,
            left,
            right,
            botton,
            vertical,
            horizontal
        } = this.props;

        const computedTop = top ? top : vertical;
        const computedBotton = botton ? botton : vertical;
        const computedLeft = left ? left : horizontal;
        const computedRight = right ? right : horizontal;

        const computedStyles = {
            flex: 1,    // 크기를 일정한 비율로 늘리는데 도움을 줍니다.
            ...(computedTop && {marginTop: computedTop * unit}),
            ...(computedBotton && {marginBotton: computedBotton * unit}),
            ...(computedLeft && {marginLeif: computedLeft * unit}),
            ...(computedLeft && {marginRight: computedRight * unit})
        };

        return <div {...css(computedStyles)}>{children}</div>;
    }
}

Spacing.propTypes = propTypes;

export default Spacing;