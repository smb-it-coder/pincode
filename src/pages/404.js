
import NavTop from '../components/nav/fixedTop';
import Notfoundbreadcrum from '../components/breadcrum/notfoundbreadcrum';
import Footer from '../components/nav/footer';
import { Helmet } from "react-helmet";

const Notfound = () => {
    const URL = window.location.href;
    return (
        <div className="App">
            <NavTop />
            <Notfoundbreadcrum />
            <div>
                <Helmet>
                <title>404| Search My Pincode </title>
                <meta name="description" content={`404 not found SearchMyPincode.`} />
                <meta name="keywords" content={`404 Not Found`}  />
                <link href={`404`} rel="canonical" />
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
                            <p>404 Not Found!</p>
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


export default Notfound;