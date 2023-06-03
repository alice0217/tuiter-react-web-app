// this file is the entry point of the React.js application

// Note the missing .js optional file extension in the HelloWorld import statement
// Also note the new <HelloWorld/> tag matching the name of the import, file name, and function
// name
import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    {/*Default landing screen*/}
                    <Route path="/"
                           element={
                               <Navigate to="/labs/a3"/>}/>
                    <Route path="/labs/*"
                           element={<Labs/>}/>
                    <Route path="/hello"
                           element={<HelloWorld/>}/>
                    <Route path="/tuiter/*"
                           element={<Tuiter/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;