import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import ActiveResource from "components/ActiveResource";

const Layout = ({children}) => 
  <>
    <Navbar />
    <ActiveResource/>  
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            { children }
          </div>
        </div>
      </div>
    <Footer />
  </>

export default Layout;