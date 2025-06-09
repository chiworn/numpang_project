import logocake from '../img/editcake.jpg';
import Footermenu from '../../components/Home/Footermenu.jsx';
import { Link } from 'react-router-dom';
import './Cake.css';
import { useState } from 'react';
import Buttomcade from '../../components/Home/Buttomcade.jsx';
import CakeTabs from '../../components/Home/CakeTabs.jsx';


const cakes = [
  {
    id: 1,
    name: 'Earl Grey Cloud',
    price: '59 $',
    image:
      'https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/6581e6d668e2a79cbb8f4f1f_Earl%20Grey%20Cloud-p-500.png',
    catecary:"cloud cake",
  },
  {
    id: 2,
    name: 'Blueberry Yogurt',
    price: '39 $',
    image:
      'https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/6581e69407c4c2d74c57e7ae_Blueberry(3)-p-500.png',
      catecary:"cloud cake",
  },
  {
    id: 3,
    name: 'Strawberry Lychee',
    price: '35 $',
    image:
      'https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/6581e5aef5c94a91c721ab19_StrawberryLychee-p-500.png',
      catecary:"cloud cake",
  },
  {
    id: 4,
    name: 'Strawberry Gateau',
    price: '45 $',
    image:
      'https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/6581e567f5c3924368a84e44_Strawberry%20Gateau-p-500.png',
      catecary:"cloud cake",
  },
  {
    id: 5,
    name: 'Cloud Cake',
    price: '50 $',
    image:
      'https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deade9_Screenshot%25202023-05-15%2520at%252012.12.18%2520PM-p-500.png',
      catecary:"cloud cake",
  },
  {
    id: 6,
    name: 'Greentea Cloud Cake',
    price: '60 $',
    image:
      'https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deade5_Green%2520Tea%2520Cloud%2520Cake-p-500.webp',
      catecary:"cloud cake",
  },
  {
    id: 7,
    name: 'Heart Chocolate Cake',
    price: '20 $',
    image:
      'https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadee_Screenshot%25202023-05-15%2520at%252012.23.43%2520PM-p-500.png',
      catecary:"BUTTERCREAM CAKE",
  },
  {
    id: 8,
    name: 'Greentea Cloud Cake',
    price: '60 $',
    image:
      'https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deaded_Screenshot%25202023-05-15%2520at%252012.22.11%2520PM-p-500.png',
      catecary:"BUTTERCREAM CAKE",
  },
  {
    id: 9,
    name: 'Greentea Cloud Cake',
    price: '60 $',
    image:
      'https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deaded_Screenshot%25202023-05-15%2520at%252012.22.11%2520PM-p-500.png',
    catecary:"BUTTERCREAM CAKE",
  },
  {
    id: 10,
    name: 'Greentea Cloud Cake',
    price: '60 $',
    image:
      'https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deaded_Screenshot%25202023-05-15%2520at%252012.22.11%2520PM-p-500.png',
      catecary:"BUTTERCREAM CAKE",
  },
  {
    id: 11,
    name: 'Cheesecake',
    price: '60 $',
    image:
      'https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadf0_Screenshot%25202023-05-15%2520at%252012.26.57%2520PM-p-500.png',
      catecary:"MOUSSE CAKE",
  },
  {
    id: 12,
    name: 'Tiramisu',
    price: '60 $',
    image:
      'https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadf1_Screenshot%25202023-05-15%2520at%252012.29.13%2520PM-p-500.png',
      catecary:"MOUSSE CAKE",
  },
  {
    id: 13,
    name: 'Sweet Potato Mousse Cake',
    price: '60 $',
    image:
      'https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadf2_Screenshot%25202023-05-15%2520at%252012.30.52%2520PM-p-500.png',
      catecary:"MOUSSE CAKE",
  },
  {
    id: 14,
    name: 'Triple Chocolate Mousse Cake',
    price: '60 $',
    image:
      'https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadef_Screenshot%25202023-05-15%2520at%252012.25.34%2520PM-p-500.png',
      catecary:"MOUSSE CAKE",
  },
  {
    id: 15,
    name: 'Vanilla Chocolate Heart Mousse Cake',
    price: '60 $',
    image:
      'https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadf3_Screenshot%25202023-05-15%2520at%252012.33.43%2520PM-p-500.png',
      catecary:"MOUSSE CAKE",
  },
  {
    id: 16,
    name: 'Strawberry Tiramisu',
    price: '60 $',
    image:
      'https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/6581e6fd48eaac1b0d837d9d_StrawberryTiramisu-p-500.png',
      catecary:"MOUSSE CAKE",
  },
  {
    id: 17,
    name: 'Piggy Cake',
    price: '60 $',
    image:
      'https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/6581e6fd48eaac1b0d837d9d_StrawberryTiramisu-p-500.png',
      catecary:"kids cake",
  },
 
  {
    id: 19,
    name: 'Party Bear',
    price: '20 $',
    image:
      'https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae03_Screenshot%25202023-05-15%2520at%25202.30.45%2520PM-p-500.png',
      catecary:"kids cake",
  },
  {
    id: 20,
    name: 'Jungle Partyr',
    price: '25 $',
    image:
      'https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae02_Screenshot%25202023-05-15%2520at%25202.28.40%2520PM-p-500.png',
      catecary:"kids cake",
  },
  {
    id: 21,
    name: 'Jungle Partyr',
    price: '25 $',
    image:
      'https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadf4_Copy%2520of%2520Peach%2520Cream%2520Piece-p-500.png',
      catecary:"Piece cake",
  },
  {
    id: 22,
    name: 'Jungle Partyr',
    price: '25 $',
    image:
      'https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadf5_Copy%2520of%2520Orange%2520Cream%2520Piece-p-500.png',
      catecary:"Piece cake",
  },
  {
    id: 23,
    name: 'Jungle Partyr',
    price: '25 $',
    image:
      'https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadf6_Copy%2520of%2520Blueberry%2520Yogurt%2520Piece%2520Cake-p-500.png',
      catecary:"Piece cake",
  },
  {
    id: 24,
    name: 'Jungle Partyr',
    price: '25 $',
    image:
      'https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadf7_Copy%2520of%2520Cloud%2520Cake%2520Piece-p-500.png',
      catecary:"Piece cake",
  },
  {
    id: 25,
    name: 'Jungle Partyr',
    price: '25 $',
    image:
      'https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadf8_Copy%2520of%2520Chocolate%2520Cloud%2520Piece%2520Cake-p-500.png',
      catecary:"Piece cake",
  },
  {
    id: 26,
    name: 'Happy Birthday Baby Sharkr',
    price: '25 $',
    image:
      'https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/6659118b449272db094a19e4_24%20Pinkfong%20Baby%20Shark_Delivery%20(1).jpg',
      catecary:"Pinkfong",
  },
  {
    id: 27,
    name: 'Pinkfongs Strawberry Dream',
    price: '25 $',
    image:
      'https://cdn.prod.website-files.com/649249d29a20bd6bc3deac48/6659121c723f94c4b08903e5_24%20Pinkfong%20Dream%20World%20Cake-p-500.jpg  ',
      catecary:"Pinkfong",
  },
];

const Cake = () => {
  // const [selectedCatecary, setSelectedCategory] = useState("cloud cake");

  // const categories = [
  //   "cloud cake",
  //   "BUTTERCREAM CAKE",
  //   "MOUSSE CAKE",
  //   "kids cake",
  //   "Piece cake",
  //  "Pinkfong",
  // ];
  const [selectedCatecary, setSelectedCatecary] = useState("cloud cake");
  const allcakes = [];
  for (let i = 0; i < cakes.length; i++) {
    if( cakes[i].catecary==selectedCatecary && (cakes[i].catecary=="cloud cake" || cakes[i].catecary=="Pinkfong x TOUS LES JOURS")){
      let data = (
        <Link
          to={`/Cake/${cakes[i].id}`}
          className="col-4  px-3 text-decoration-none transition:0.5s"
        >
          <div className="card p-0 border-0 ">
            <div className="card-img ">
              <img
                style={{ height: '230px' }}
                className="w-100 rounded-2"
                src={cakes[i].image}
                alt=""
              />
            </div>
            <div className="card-footer text-center bg-white fw-bold fs-6 border-0">
              <p style={{ fontFamily: 'sans-serif' }}>{cakes[i].name} </p>
            </div>
          </div>
        </Link>
      );
      
    
      allcakes.push(data);
    } else if(cakes[i].catecary==selectedCatecary && cakes[i].catecary=="Pinkfong" ){
      let data = (
        <Link
          to={`/Cake/${cakes[i].id}`}
          className="col-4  px-3 text-decoration-none"
        >
          <div className="card p-0 border-0 ">
            <div className="card-img ">
              <img
                style={{ height: '230px' }}
                className="w-100 rounded-2"
                src={cakes[i].image}
                alt=""
              />
            </div>
            <div className="card-footer text-center bg-white fw-bold fs-6 border-0">
              <p style={{ fontFamily: 'sans-serif' }}>{cakes[i].name} </p>
            </div>
          </div>
        </Link>
      );

      allcakes.push(data);
    }else if(cakes[i].catecary==selectedCatecary && cakes[i].catecary!="cloud cake" ){
      let data = (
        <Link
          to={`/Cake/${cakes[i].id}`}
          className="col-3  px-3 text-decoration-none"
        >
          <div className="card p-0 border-0 ">
            <div className="card-img ">
              <img
                style={{ height: '230px' }}
                className="w-100 rounded-2"
                src={cakes[i].image}
                alt=""
              />
            </div>
            <div className="card-footer text-center bg-white fw-bold fs-6 border-0">
              <p style={{ fontFamily: 'sans-serif' }}>{cakes[i].name} </p>
            </div>
          </div>
        </Link>
      );

      allcakes.push(data);
    }
   
  }
  const [color, setcolor] = useState("text-dark");
  const chang=()=>{
    if(color !=="text-danger") setcolor("text-danger");  
    else setcolor("text-white text-shadow");
  }

  return (
    <>
      <div className="container-fluid bg-danger mt-4 position-relative p-0">
        <div className="bg-success position-absolute w-100">
          <img
            style={{ height: '390px', width: '100%' }}
            className=" position-absolute "
            src={logocake}
          />
        </div>
        <div className="position-absolute w-100  d-flex flex-column justify-content-center h-100 align-items-center fs-4 mt-5">
          <p
            style={{ fontFamily: 'sans-serif', marginTop: '400px' }}
            className={color} 
          >
            Home &gt; Menu &gt;Cake
          </p>
          <p
            style={{ fontSize: '70px', color: 'rgb(248, 237, 212)' }}
            className=" fw-bold"
          >
            Signature Cakes
          </p>
        </div>
      </div>
      <div style={{ marginTop: '414px' }}>
        <Footermenu />
        <CakeTabs 
  selectedCategory={selectedCatecary}   
  setSelectedCategory={setSelectedCatecary} 
  startchang={()=>{chang()}}
/>
      </div>
      {/* <div className="d-flex justify-content-between col-10 m-auto mt-4 flex-wrap">
      {categories.map((category) => (
        <p
          key={category}
          className={`btn-link fs-5 ptext3 px-2 cake-tab ${
            selectedCatecary === category ? "active-tab" : ""
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </p>
      ))}
    </div> */}
      {/* <div className='d-flex justify-content-between col-10 m-auto mt-5    '>
        <p className={`btn-link  fs-5 ptext3 px-1 cake-tab  ${
            selectedCatecary === "cloud cake" ? "active-tab" : ""
          }`} onClick={() => setSelectedCatecary("cloud cake")} >CLOUD CAKE</p>
        <p className={`btn-link   ptext3 px-1 cake-tab  ${
            selectedCatecary === "BUTTERCREAM CAKE" ? "active-tab" : ""
          }`}onClick={() => setSelectedCatecary("BUTTERCREAM CAKE")} >BUTTERCREAM CAKE </p>
        <p className={`btn-link  fs-5 ptext3 px-1 cake-tab  ${
            selectedCatecary === "MOUSSE CAKE" ? "active-tab" : ""
          }`}onClick={() => setSelectedCatecary("MOUSSE CAKE")} >MOUSSE CAKE</p>
        <p className={`btn-link  fs-5 ptext3 px-1 cake-tab  ${
            selectedCatecary === "kids cake" ? "active-tab" : ""
          }`}onClick={() => setSelectedCatecary("kids cake")} >kIDS CAKE</p>
        <p className={`btn-link  fs-5 ptext3 px-1 cake-tab  ${
            selectedCatecary === "Piece cake" ? "active-tab" : ""
          }`}onClick={() => setSelectedCatecary("Piece cake")} >  PIECE CAKE</p>
        <p className={`btn-link  fs-5 ptext3 px-1 cake-tab  ${
            selectedCatecary === "Pinkfong" ? "active-tab" : ""
          }`}onClick={() => setSelectedCatecary("Pinkfong")} >★PINKFONG X TOUS LES JOURS ★</p>

      </div> */}


      <div className="col-10 m-auto mt-4">
        <div className="row ">{allcakes}</div>
        <div className='col-12 '>
        <button  className='backg btn btn-success m-auto fw-bold px-5 d-flex justify-content-center col-2'>CAKE MENU</button>
        </div >
        
      </div>
      
    </>
  );
};
export default Cake;
