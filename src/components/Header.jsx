import Menu from './Menu';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";


const Header = () => {

    const info = {
        display: `flex`,
        flexDirection: `row`,
        flexWrap: `wrap`,
    }

    const infoDetail = {
        padding: '5px 20px',
        display:'flex',
        flexDirection:'row',
        alignItems: `center`
    }

    const infoDetailData = {
        padding: '0px 5px'
    }

    const siteLink = {
        textDecoration: 'none', 
        color: '#fff'
    }

  return (
    <header className='site-header'>
        <div className='top-header' >
            <Container>
                <div style={info}>
                    <div style={infoDetail}>
                        <IoMdMail size={20} />
                        <a style={siteLink} href={`mailto:${process.env.REACT_APP_EMAIL}`} title="site email"> 
                            <div style={infoDetailData}>
                                {process.env.REACT_APP_EMAIL}
                            </div>
                        </a>
                    </div>
                    <div style={infoDetail}>
                        <FaPhoneAlt size={15} />
                        <a style={siteLink} href={`tel:${process.env.REACT_APP_PHONE}`} title="site number">
                            <div style={infoDetailData}>
                                {process.env.REACT_APP_PHONE}
                            </div>
                        </a>
                    </div>
                </div>
            </Container>
        </div>
        <div className='bottom-header' >
            <Menu/>
        </div>
    </header>
  );
};


export default Header;