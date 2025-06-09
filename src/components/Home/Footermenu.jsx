import bread from '../../assets/img/bread.svg';
import cake from '../../assets/img/cake.svg';
import bger from '../../assets/img/bger.png';
import logono from '../../assets/img/kk.svg';
import sdeak from '../../assets/img/sdeak.png';
import cofe from '../../assets/img/tea.png';
import ice from '../../assets/img/ice.png';
import './Footermenu.css';

let items = [
  { img: bread, itemName: 'BREAD' },
  { img: cake, itemName: 'CAKE' },
  { img: bger, itemName: 'SANDWICHS' },
  { img: logono, itemName: 'BLENDED' },
  { img: sdeak, itemName: 'DRINK' },
  { img: cofe, itemName: 'COFFE' },
  { img: ice, itemName: 'ICE CREM' },
];
function Footermenu() {
  return (
    <>
      <nav className="border border-1 border-success nav-menu1">
        <div className="px-5">
          <ul className="nav navbar p-0  ">
            {items.map((item, index) => (
              <li
                key={index}
                className="d-flex flex-column   justify-content-center align-items-center p-3 li-banner"
              >
                <img src={item.img} className={`index-${index} binner-img `} />
                <p className="ptext">{item.itemName}</p>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Footermenu;
