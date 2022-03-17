// // 파일명을 .jsx로 하면 에러 => 반드시 .js로..!
// import React, {Component} from "react";
// // import './materialize.css';
// import './sass/materialize.scss';
// // import './App.css';

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <nav>
//                     <div className="nav-wrapper">
//                         <div>두잇! 리액트 시작하기</div>
//                     </div>
//                 </nav>
//                 <h1>머터리얼 CSS</h1>
//             </div>
//         )
//     }
// }

// export default App;


import React from 'react';
import ReactDOM from 'react-dom';
import App from './08/CoinApp';
import './doit-ui/app.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

export default App;