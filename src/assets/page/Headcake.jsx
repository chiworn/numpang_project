
import './Headcake.css';
const Headcake = () => {
  return (
    <>
      <div className="container-fluid ">
        <ul
          id="item-menu"
          className="nav-menu d-flex justify-content-between px-5"
        >
          <li className="item  ">
           <p
            >
              CLOUD CAKE
            </p>
      
            
          </li>
          <li className="item">
            <p className="fs-6 px-5 text-center  ptext">BUTTERCREAM CAKE</p>
          </li>
          <li className="item">
            <p className="fs-6 px-5 text-center ptext">MOUSE CAKE</p>
          </li>
          <li className="item">
            <p className="fs-6 px-5 text-center ptext">KIDS CAKE</p>
          </li>
          <li className="item">
            <p className="fs-6 px-5 text-center ptext">KIDS CAKE</p>
          </li>
          <li className="item">
            <p className="fs-6 px-5 text-center ptext">PIECE CAKE</p>
          </li>
          <li className="item">
            <p className="fs-6 px-5 text-center ptext">
              {' '}
              PINFONG X TOUS LES JOURS
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Headcake;
