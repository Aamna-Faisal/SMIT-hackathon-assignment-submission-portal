
import Navbar from '../components/Navbar';

import { Link } from 'react-router-dom';


function Home() {
    return (
        <div>
            <Navbar />
            {/* <ClickableContainer/> */}
            <section className="hero-section">
                
            <Link to="/dashboard1">
            <div className='container' >
                    <h2>Web And App Development</h2>
                </div>
                </Link>

                <Link to="/dashboard2">
                <div className='container'>
                    <h2>Graphic Designing</h2>
                </div>
                </Link>
                <Link to="/dashboard3">
                <div className='container'>
                    <h2>Ai & chatbot</h2>
                </div>
                </Link>
            </section>

           
        </div>
    )
}

export default Home
{/* {
    products && products?.map((item, index) => (
        <ul key={index}>
            <span>{item.name} : {item.price}</span>
        </ul>
    ))
} */}
