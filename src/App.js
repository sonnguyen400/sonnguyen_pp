import './App.css';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/default/DefaultLayout';
import { publicRouting } from './router/RouterNavigating';
import { adminRouter } from './router/RouterNavigating';
import { Fragment } from 'react';
function App() {
    return (
        <Routes>
            {adminRouter.map((page, index) => {
                let Layout = (page.layout === undefined ? DefaultLayout : page.layout) || Fragment;
                let Page = page.component;
                return (
                    <Route
                        key={index}
                        path={page.path || '/'}
                        element={
                            <Layout>
                                <Page />
                            </Layout>
                        }
                    />
                );
            })}
        </Routes>
    );
}

export default App;
