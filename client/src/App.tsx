import "./App.css";
import NavigationBar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Impressum from "./Components/Impressum";
import Homepage from "./Components/Homepage";
import DataPrivacy from "./Components/dataPrivacy";
import Photogallery from "./Components/Photogallery";
import Login from "./Components/Login";
import { useState, FunctionComponent as FC, SetStateAction } from "react";
import { AppState as State } from "./model/types";

function App() {
    let [login, setLogin] = useState<State>({
        login: false,
    });
    // prettier-ignore
    //@ts-ignore
    return ( login === true ? 
        <BrowserRouter>
            <div id="App" className="App">
                <div className="App">
                    <NavigationBar
                        Nav1="Home"
                        Nav2="Die Band"
                        Nav3="Referenzen"
                        Nav4="Kontaktiere uns"
                        Nav5="Fotogalerie"
                    />
                    <h1 className="App-CB">"Clear: both"</h1>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/impressum" element={<Impressum />} />
                        <Route path="/dataPrivacy" element={<DataPrivacy />} />
                        <Route
                            path="/photogallery"
                            element={<Photogallery />}
                        />
                        <Route
                            path="*"
                            element={
                                <main style={{ padding: "1rem" }}>
                                    <p>
                                        Dieser Link ist Ungültig. Bitte
                                        Überprüfe deine URL
                                    </p>
                                </main>
                            }
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
     : 
        <Login userLogin={(login: SetStateAction<State>)=> setLogin(login) }/>
    );
}

export default App;
