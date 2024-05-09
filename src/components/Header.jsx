import Menu from './Menu';
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="site-header">
      <div className="top-header">
				<div className="container">
                    <ul className="top-link">
                        <li className="account" id="my_account">
                            <Link to='javascript:void(0)' onClick={() => window.location = `mailto:${process.env.REACT_APP_EMAIL}`}  title="my account"> 
                                <span className="fa fa-envelope"></span>
                                {process.env.REACT_APP_EMAIL}
                            </Link>
                        </li>
                        <li className="account" id="my_account">
                            <Link to='javascript:void(0)' onClick={() => window.location = `tel:${process.env.REACT_APP_PHONE}`}  title="my account"> 
                                <span className="fa fa-envelope"></span>
                                {process.env.REACT_APP_PHONE}
                            </Link>
                        </li> 
                    </ul>
                </div>
            </div>
            <div className="bottom-header">
				<div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="logo">
                                <Link to='/'>
                                    <img src={Logo} alt="logo"/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <Menu />
                        </div>
                    </div>
                </div>
            </div>
    </header>
  );
};

export default Header;