import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

  const [services, setServices] = useState([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROUTE}/service`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let menuServices = []
        if(data){
          data.map((val, key) => {
            menuServices.push({
              label: val.service_name,
              url: val.taskNow_unique_id
            })
          })
        }
        setServices(menuServices)
      });
  }, [])

  // Pages and Service
  const menuItems = [
    { label: 'Home', url: '/' },
    { label: 'About Us', url: '/about' },
    { label: 'Services', url: '/services' },
    { label: 'Became a technician', url: '/become-technician' },
    { label: 'Contact Us', url: '/contact' },
    { label: 'Book Now', url: '/book-now', className: 'btn' }
  ];

  return (
    <nav className="nav-menu">
      <ul>
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <Link to={menuItem.url} className={menuItem.className}>{menuItem.label}</Link>
            {menuItem.label === 'Services' && services.length != 0 && (
              <>
                <span className="subarrow fa fa-caret-down"></span>
                <ul className="sub-menu">
                  {services.map((subMenuItem, subIndex) => (
                    <li key={subIndex}>
                      <Link to={subMenuItem.url}>{subMenuItem.label}</Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
