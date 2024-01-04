import { publicRouting } from "~/router/Routing.js";
import { Routes, Route } from 'react-router-dom';
import './App.module.scss';
import DefaultLayout from '~/layout/DefaultLayout';
import { Fragment } from "react";
import './App.module.scss';
function App() {
    return (
        <div className="App">
            <Routes>
                {
                    publicRouting.map((page, index) => {
                        let Layout = (page.layout === undefined ? DefaultLayout : page.layout) || Fragment;
                        let Page = page.component;
                        return <Route key={index} path={page.path || '/'} element={<Layout><Page /></Layout>} />
                    })
                }
            </Routes>
        </div>
    );
}

export default App;
