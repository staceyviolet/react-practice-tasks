import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Menu} from "./Menu";
import {HomePage} from "./HomePage";
import {DriftPage} from "./DriftPage";
import {TimeAttackPage} from "./TimeAttackPage";
import {ForzaPage} from "./ForzaPage";

import './menuHomepage.css'

export default function MenuHomework() {
    return (
        <BrowserRouter>
            <div className={'menu-body'}>
                <Menu/>
                <div className="page">
                    <Routes>
                        <Route path="/" index element={<HomePage/>}/>
                        <Route path="/drift" element={<DriftPage/>}/>
                        <Route path="/timeattack" element={<TimeAttackPage/>}/>
                        <Route path="/forza" element={<ForzaPage/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
