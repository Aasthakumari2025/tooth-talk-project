import { Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';
import Registration from './component/Registration';
import MeetupRegist from './component/MeetupRegist';
import Verify from './component/Verify';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/register" element={<Registration />} />
        <Route path="/Meetup" element={<MeetupRegist />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </Layout>
  );
}

export default App;
