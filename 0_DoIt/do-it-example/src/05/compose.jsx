
import compose from 'recompose/compose';
import withLoading from './withLoading';
import withState from 'recompose/withState';
const withLoadData = withState('isLoading', 'setIsLoading', true);

function Component() {
  return '완료(컴포넌트 출력)';
}
const ComponentWithLoading = withLoading('로딩중')(Component);
const ComponentWithLoadData = withLoadData(Component);

const withLoadingAndLoadData = compose(withLoadData, withLoading('로딩중'));
export const ComponentWithBoth = withLoadingAndLoadData(Component);