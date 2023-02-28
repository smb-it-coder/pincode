
import NavTop from '../components/nav/fixedTop';
import Footer from '../components/nav/footer';
import { Helmet } from "react-helmet";
import NavBar from '../components/nav/Navbar';

const About = () => {
    return (
        <div className="App">
            <NavBar />
            <NavTop />
            <div>
                <Helmet>
                    <title>About - </title>
                </Helmet>
            </div>

            <br />
            <Footer />
        </div>
    );
};


export default About;