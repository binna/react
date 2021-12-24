import React from "react";
import ChildComponent from "./03/ChildComponent";

class App extends React.Component {
    render() {
        const array = [1, 2, 3];
        const obj = {
            name: '제목',
            age: 30
        }
        const node = <h1>노드</h1>;
        const func = () => {
            console.log('메시지');
        }
        return (
            <ChildComponent 
                boolValue={true}
                numValue={1}
                // arrayValue={[1, 2, 3]}
                // objValue={{name: '제목', age: 30}}
                // nodeValue={<h1>노드</h1>}
                // funcValue={() => { console.log('메시지'); }}
                arrayValue={array}
                objValue={obj}
                nodeValue={node}
                funcValue={func}
            />
        )
    }
}

// export default App;