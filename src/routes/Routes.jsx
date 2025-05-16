import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AdminLayout from '../pages/LayOut';
//import Dashboard from '../pages/Dashboard';
import WelcomeDashboard from '../pages/WelcomeDashboard';

function StaticRouter() {
  return (
    <Router>
      {/* <AuthProvider> */}
        <Routes>
     
          <Route path="/login" element={<>login</>} />
          <Route path="/401" element={<>401</>} />
          <Route path="*" element={<>not found</>} />
          
         
          <Route path="/" element={<AdminLayout />}>
              <Route index element={ <WelcomeDashboard />}  />
              <Route path="sidebar" element={ <>sidebar 1</>}  />
          </Route>
           
          
       
        
        </Routes>
      {/* </AuthProvider> */}
    </Router>
  );
}

export default StaticRouter;