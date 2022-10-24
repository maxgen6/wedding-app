import { Route, Routes, Navigate } from "react-router-dom";

import {Container} from "./components";
import {AcceptedPage, Invited, CeremonyPage, LoginPage} from './views';
import {PublicRoute, PrivateRoute} from "./route";

function App() {

  return (
    <div style={{padding: '20px', position:' relative', zIndex: '20'}}>
      <Container>
        <Routes>
          <Route path="/login"  element={<PublicRoute component={<LoginPage data={'1'} />} />} />
          <Route path="/invited"  element={<PrivateRoute component={<Invited />} />} />
          <Route path="/accept" element={<PrivateRoute component={<AcceptedPage />} />}/>
          <Route path="/ceremony" element={<PrivateRoute component={<CeremonyPage />} />}/>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
