import poto from '../img/pagebreak.webp';
import Footermenu from '../../components/Home/Footermenu';
import './Break.css';
//import image breaks
import break1 from '../img/Break1.jpg';
import break2 from '../img/break2.jpg';
import break3 from '../img/break3.png';
import break4 from '../img/break4.webp';
import break5 from '../img/break6.png';
import break6 from '../img/break6.webp';
import break7 from '../img/break7.png';
import break8 from '../img/break7.webp';
import break9 from '../img/break9.png';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const breads = [
  {
    id: 1,
    name: 'Earl Grey Cloud',
    price: '59 $',
    image: break1,
  },
  {
    id: 2,
    name: 'Blueberry Yogurt',
    price: '39 $',
    image: break2,
  },
  {
    id: 3,
    name: 'Strawberry Lychee',
    price: '35 $',
    image: break3,
  },
  {
    id: 4,
    name: 'Strawberry Gateau',
    price: '45 $',
    image: break4,
  },
  {
    id: 5,
    name: 'Cloud Cake',
    price: '50 $',
    image: break5,
  },
  {
    id: 6,
    name: 'Greentea Cloud Cake',
    price: '60 $',
    image: break6,
  },
  {
    id: 7,
    name: 'Greentea Cloud Cake',
    price: '60 $',
    image: break7,
  },
  {
    id: 8,
    name: 'Greentea Cloud Cake',
    price: '60 $',
    image: break8,
  },
  {
    id: 9,
    name: 'Greentea Cloud Cake',
    price: '60 $',
    image: break9,
  },
];
const allbreak = [];

for (let i = 0; i < breads.length; i++) {
  let datas = (
    <Link
      to={`/Break/${breads[i].id}`}
      className="col-4 my-1  text-decoration-none "
    >
      <div className="container2 p-0 ">
        <div className="card border-0">
          <img
            src={breads[i].image}
            style={{
              height: '230px',
              borderRadius: '10px',
              objectFit: 'cover',
            }}
            alt=""
          />
          <p className="text-center pt-2 mb-2 fs-5 fw-bold ">
            {breads[i].name}
          </p>
        </div>
      </div>
    </Link>
  );
  allbreak.push(datas);
}
function Break() {
  return (
    <div>
      <div className="container-fluid  p-0 m-0">
        <div className="row">
          <div className="col-12  p-0 mt-2">
            <div className="container-fluid position-relative bg-danger">
              <img
                style={{ height: '390px', width: '98.4%', objectFit: 'cover' }}
                className=" position-absolute mt-2 m-auto"
                src={poto}
              />
              <div className="position-absolute w-100  d-flex flex-column justify-content-center h-100 align-items-center fs-4 mt-5">
                <p
                  style={{ fontFamily: 'sans-serif', marginTop: '400px' }}
                  className="text-white"
                >
                  Home &gt; Menu &gt;Bread
                </p>
                <p
                  style={{ fontSize: '70px', color: 'rgb(248, 237, 212)' }}
                  className=" fw-bold"
                >
                  Signature Breaks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '398px' }}>
        <Footermenu />

      </div>
      <div className="col-10 m-auto mt-5  ">
        <div className="row g-4">{allbreak}</div>
      </div>
    </div>
  );
}
export default Break;
