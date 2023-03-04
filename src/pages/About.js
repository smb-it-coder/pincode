
import NavTop from '../components/nav/fixedTop';
import Aboutbreadcrum from '../components/breadcrum/aboutbreadcrum';
import Footer from '../components/nav/footer';
import { Helmet } from "react-helmet";

const About = () => {
    const URL = window.location.href;
    return (
        <div className="App">
            <NavTop />
            <Aboutbreadcrum />
            <div>
                <Helmet>
                <title>About Us | About | Search My Pincode </title>
                <meta name="description" content={`About us SearchMyPincode.`} />
                <meta name="keywords" content={`About us`}  />
                <link href={`${URL}`} rel="canonical" />
                <meta http-equiv="Content-Language" content="English" />  
                </Helmet>
            </div>


            <div className="container-fluid bg-grey">
                <div className="row">
                    <div className="col-sm-2">
                        <span className="glyphicon glyphicon-globe logo slideanim"></span>
                    </div>
                    <div className="col-sm-8">

                        <div className='row'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>  

                    <div className="col-sm-2">
                        <span className="glyphicon glyphicon-globe logo slideanim"></span>
                    </div>
                </div>
            </div>

            <br />
            <Footer />
        </div>
    );
};


export default About;