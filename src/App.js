import './App.css';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/default/DefaultLayout';
import { publicRouting } from './router/RouterNavigating';
function App() {
    return (
        <Routes>
            {publicRouting.map((page, index) => {
                let Layout = (page.layout === undefined ? DefaultLayout : page.layout) || <></>;
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
