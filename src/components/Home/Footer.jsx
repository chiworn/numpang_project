import bread from '../../assets/img/bread.svg';
import cake from '../../assets/img/cake.svg';
import bger from '../../assets/img/bger.png';
import logono from '../../assets/img/kk.svg';
import sdeak from '../../assets/img/sdeak.png';
import cofe from '../../assets/img/tea.png';
import ice from '../../assets/img/ice.png';
import '../Home/Footer.css';
function Footer() {
  return (
    <>
      <div id="tt" style={{ width: '100%' }} className="col-12 p-0 ">
        <div className="col-10  m-auto">
          <ul className="nav-item d-flex justify-content-between py-2 ">
            <li className="item pt-3 d-flex flex-column justify-content-center  ">
              <img className="" src={bread} alt="" />
              <p className="ptext">BREAD</p>
            </li>
            <li className="item pt-3 d-flex flex-column justify-content-center ">
              <img className="" src={cake} alt="" />
              <p className="ptext">CAKES</p>
            </li>
            <li className="item pt-3 d-flex flex-column justify-content-center mb-0 align-items-center">
              <img
                className="pb-0 mb-0 "
                style={{ width: '50px' }}
                src={bger}
                alt=""
              />
              <p className="ptext text-center ">SANDWICHES</p>
            </li>
            <li className="item pt-3  d-flex flex-column justify-content-center ">
              <img className="" src={logono} alt="" />
              <p className="ptext ">BREAD</p>
            </li>
            <li className="item pt-3  d-flex flex-column justify-content-center align-items-center">
              <img
                style={{ width: '40px', height: '50px' }}
                src={sdeak}
                alt=""
              />
              <p className="ptext ">COFFEE</p>
            </li>
            <li className="item pt-3 d-flex flex-column justify-content-center align-items-center">
              <img
                className=""
                style={{ width: '40px', height: '50px' }}
                src={cofe}
                alt=""
              />
              <p className="ptext ">TEA</p>
            </li>
            <li className="item pt-3  d-flex flex-column  justify-content-center align-items-center">
              <img style={{ width: '35px', height: '53px' }} src={ice} alt="" />
              <p className="ptext ">BLEANDED</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Footer;
