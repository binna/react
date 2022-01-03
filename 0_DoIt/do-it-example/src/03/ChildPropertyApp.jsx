import React from "react";
import ChildProperty from "./03/ChildProperty";

class App extends React.Component {
    render() {
        return (
            <ChildProperty>
                <div><span>자식 노드</span></div>
            </ChildProperty>
        )
    }
}

// export default App;