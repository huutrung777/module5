import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './App.css'

import HeaderComponent from "./components/HeaderComponent.jsx";
import ListComponent from "./class_component/ListComponent.jsx";

function App() {
    return (
        <>
            <HeaderComponent />
            <ListComponent />
        </>
    )
}

export default App