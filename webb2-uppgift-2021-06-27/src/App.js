import { UserProvider } from './utils/global/provider/UserProvider';
import Navbar from './components/Navbar';
import { Main } from './components/Main';
import Footer from './components/Footer';

import './utils/global/css/global.css';


function App() {
    return (
        <UserProvider>
            <Navbar/>
            <hr className='horizontal__line'/>
            <Main/>
            <hr className='horizontal__line'/>
            <Footer/>
        </UserProvider>
    );
}

export default App;
