import React from "react";
import {storiesOf} from '@storybook/react';

import Button from "../04/Button";
import Text from "../04/Text";
import withLoading from "../05/withLoading";

const TextWithHoC = withLoading('로딩 중')(Text);
const ButtonWithHoC = withLoading(<Button disabled>로딩 중...</Button>)(Button);

storiesOf('WithLoading', module)
    .addWithJSX('기본설정', () => (
        <div>
            <ButtonWithHoC>안녕하세요</ButtonWithHoC>
            <TextWithHoC>안녕하세요</TextWithHoC>
        </div>
    ))
    .addWithJSX('isLoading 예제', () => (
        <div>
            <ButtonWithHoC isLoading>안녕하세요</ButtonWithHoC>
            <TextWithHoC isLoading>안녕하세요</TextWithHoC>
        </div>
    ))
    ;