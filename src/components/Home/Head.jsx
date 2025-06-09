import logo from '../../assets/img/logo.png';
import './Head.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Head() {
  return (
    <>
      <div className="container-fluid  d-flex justify-content-between mt-3 ">
        <img src={logo} />
        <ul className="d-flex justify-content-between align-items-center nav-menu ms-5 mt-2">
          <li className="nav-item mx-3">
            <a className=" text-decoration-none" href="">
              MENU
              <FontAwesomeIcon className="ms-1" icon={faChevronDown} />
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link to="/Break" className="text-center text-decoration-none">
                  Break
                </Link>
              </li>
              <li>
                <Link to="/Cake" className="text-center text-decoration-none">
                  Cake
                </Link>
              </li>

              <li>NEW JERSEY</li>
              <li>TEXAS</li>
              <li>ILLINOIS</li>
              <li>VIRGINIA</li>
              <li>STORE LOCATOR</li>
            </ul>
          </li>
          <li className="nav-item mx-3">
            <a className="  text-decoration-none" href="">
              FRABCHISE
            </a>
          </li>
          <li className="nav-item mx-3">
            <a className="text-decoration-none" href="">
              PRESS
            </a>
          </li>
          <li className="nav-item mx-3">
            <a className="  text-decoration-none" href="">
              LOCATION <FontAwesomeIcon className="ms-1" icon={faChevronDown} />
            </a>
            <ul className="dropdown-menu">
              <li>CALIFORNIA</li>
              <li>NEW YORK</li>
              <li>NEW JERSEY</li>
              <li>TEXAS</li>
              <li>ILLINOIS</li>
              <li>VIRGINIA</li>
              <li>STORE LOCATOR</li>
            </ul>
          </li>
        </ul>
        <ul className="  nav-menu d-flex justify-content-between align-items-center">
          <li className="nav-item mx-3">
            <a className="text-decoration-none  " href="">
              ORDER ONLINE
            </a>
          </li>
          <li className="nav-item mx-3">
            <a className="text-decoration-none " href="">
              <FontAwesomeIcon
                className="me-1 fs-4 mt-1 "
                icon={faLocationDot}
              />{' '}
              FIND A STORE
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Head;
