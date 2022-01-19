import React from "react";
import { storiesOf } from '@storybook/react';

import ReduxApp01 from '../07/ReduxApp01';
import ReduxApp02 from '../07/ReduxApp02';
import ReduxApp03 from '../07/ReduxApp03';
import AdvReduxApp01 from '../07/AdvReduxApp01';
import AdvReduxApp02 from '../07/AdvReduxApp02';
import AdvReduxApp03 from '../07/AdvReduxApp03';
import AdvReduxApp04 from '../07/AdvReduxApp04';
import AdvReduxApp05 from '../07/AdvReduxApp05';

storiesOf('ReduxApp', module)
    .addWithJSX('기본 스토어 설정', () => <ReduxApp01 />)
    .addWithJSX('기본 액션 호출', () => <ReduxApp02 />)
    .addWithJSX('기본 리듀서 구현', () => <ReduxApp03 />)
    .addWithJSX('다중 리듀서 설정', () => <AdvReduxApp01 />)
    .addWithJSX('다중 액션 설정', () => <AdvReduxApp02 />)
    .addWithJSX('배열 액션 호출', () => <AdvReduxApp03 />)
    .addWithJSX('그래프DB 변환 작업', () => <AdvReduxApp04 />)
    .addWithJSX('그래프DB 수정 액션 호출', () => <AdvReduxApp05 />)
    ;