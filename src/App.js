import React from 'react';
import Login from './pages/login/login'
import Register from './pages/register/register'
import FollowVisit from './pages/Scholarship/FollowVisit/followVisit'
//import Agendamento from './pages/school/agendamento'
import ForgetPassword from './pages/login/forgetPassword/forgetPassword'
import Content from './pages/employee/content/content'
import MyScheduling from './pages/school/MySchedulings/MyScheduling';
import School from './pages/school/school'
import VisitNight from './pages/login/visitNight/visitNight';
import Schedule from './pages/components/schedule/Schedule';
import Routes from './routes'

function App() {
  return (
    <div className="App">
        <Routes/>
    </div>
  );
}

export default App;
