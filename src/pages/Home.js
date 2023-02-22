
import NavTop from '../components/nav/fixedTop';
import Footer from '../components/nav/footer';
import BodyForHome from '../components/Home/home';
import TwoDigitPincodeBelongsToState from '../components/util/twoDigitPincodeBelongsToState';
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="App">
      <Helmet>
        <title>Home page title by me.</title>
      </Helmet>
      <NavTop />
      <BodyForHome />

      <div className="container-fluid bg-grey">
      <div className="row"></div>
        <div className="row">
          <div className="col-sm-2">
            <span className="glyphicon glyphicon-globe logo slideanim"></span>
          </div>
          <div className="col-sm-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis quis massa sit amet feugiat. Integer ac nibh id justo laoreet rhoncus. Sed massa elit, pellentesque in hendrerit eu, varius ac lorem. Aliquam sed tincidunt nulla. Quisque nec metus lectus. Fusce magna nibh, dictum et commodo in, sollicitudin non urna. Duis vehicula quam ac velit tempus pharetra.</p>
            <p>Phasellus pharetra maximus hendrerit. Vestibulum purus elit, consectetur id tortor ut, finibus blandit felis. Curabitur eget metus non dui lacinia lacinia. Mauris vel lectus at mi dictum commodo. Nullam placerat sem scelerisque varius sagittis. Proin ut mauris eu nisl posuere commodo eu at erat. Mauris vitae sagittis orci. Mauris laoreet odio sit amet risus ultrices placerat. Morbi lacus mi, porttitor vitae sem eu, varius pharetra turpis.</p>
            <p>Mauris vel congue nisi, ut fringilla purus. Suspendisse faucibus tortor justo, id ornare enim molestie vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce ut mauris efficitur, ultrices mi in, facilisis libero. Aliquam mauris nisl, commodo fringilla leo ut, ultrices sollicitudin nibh. Donec dignissim neque ut tortor posuere rhoncus. Aliquam faucibus lorem orci, vitae tempus felis egestas non.</p>
          </div>
          <div className="col-sm-2">
            <span className="glyphicon glyphicon-globe logo slideanim"></span>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-grey">
        <div className="row">
          <div className="col-sm-2"><span className="glyphicon glyphicon-globe logo slideanim"></span> </div>
          <div className="col-sm-8">
          <h3>First Two Digit of the Postal Codes belongs to:</h3>
            <TwoDigitPincodeBelongsToState /> 
            </div>
          <div className="col-sm-2"> <span className="glyphicon glyphicon-globe logo slideanim"></span> </div>
        </div>
      </div>
      <br/>
      <Footer />
    </div>
  );
};






export default Home;