import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
import { SideBar } from "./components/Layout/SideBar";
import { Booking } from "./pages/Booking";
import { Dashboard } from "./pages/Dashboard";
import { Profile } from "./pages/Profile";
import { ResourceDetail} from "./pages/ResourceDetail"
import { ErrorBoundary } from "./components/ErrorBoundary";

export default function App() {
    return (
        <ErrorBoundary>
            <UserProvider>
                <Router>
                    <div>
                        <SideBar />
                        <main>
                            <Routes>
                                <Route path="/" element={ <Dashboard /> } />
                                <Route path="/booking" element={ <Booking /> } />
                                <Route path="/resource/:id" element={ <ResourceDetail /> } />
                                <Route path="/profile" element={ <Profile /> } />
                            </Routes>
                        </main>
                    </div>
                </Router>
            </UserProvider>
        </ErrorBoundary>
    );
};