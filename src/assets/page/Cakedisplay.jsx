import { useParams } from 'react-router-dom';
import './Cakedisplay.css';
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
    id: 18,
    name: 'Piggy Cake',
    price: '50 $',
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


const Cakedisplay = () => {
  const { id } = useParams();

  //   console.log(numid);
  const datacake = [];
  for (let i = 0; i < cakes.length; i++) {
    let newdata = (
      <div to={`/Cake/${cakes[i].id}`} className="d-flex">
        <div className="col-4 px-2 ms-4 ">
          <div className="card-img ">
            <div className="card-img">
              <img
                className="w-100 rounded-3"
                style={{ height: '480px', objectFit: 'cover' }}
                src={cakes[i].image}
                alt=""
              />
            </div>
            <div className="card-footer border border-end-0 border-start-0 border-bottom-1 border-top-0 border-success-subtle pb-0 ">
              <h4 className=" mt-2 text-success pt-3">{cakes[i].name}</h4>
            </div>
          </div>
        </div>
        <div className="col-5 ps-5  ms-5">
          <h2 style={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>
            {cakes[i].name}
          </h2>
          <p className="fs-5">Price : {cakes[i].price} </p>
          <table class="table table-bordered-start-0 table-bordered-end-1 table-hover text-success mt-5 bg-danger">
            <thead>
              <tr>
                <th
                  colspan="2"
                  className="border-1 border-top-0 border-start-0 border-end-0 border-success "
                >
                  Nutritional Information | Per Serving
                </th>
              </tr>
            </thead>
            <tbody className="w-75">
              <tr className=" ">
                <td className="">Calories</td>
                <td className="w-25 right-table "></td>
              </tr>
              <tr>
                <td>Total Fat (g)</td>
                <td className="right-table"></td>
              </tr>
              <tr>
                <td>Saturated Fat (g)</td>
                <td className="right-table"></td>
              </tr>
              <tr>
                <td>Trans Fat (g)</td>
                <td className="right-table"></td>
              </tr>
              <tr>
                <td>Total Carbohydrate (g)</td>
                <td className="right-table"></td>
              </tr>
              <tr>
                <td>Total Sugar (g)</td>
                <td className="right-table"></td>
              </tr>
              <tr>
                <td>Protein (g)</td>
                <td className="right-table"></td>
              </tr>
            </tbody>
          </table>
          <h5 className="mt-5 pt-5">ALLERGENS</h5>
          <p
            style={{ backgroundColor: 'rgb(215, 220, 225)' }}
            className="border border-1 py-2 text-dark border-start-0 border-bottom-0 border-end-0 border-success"
          >
            No items found
          </p>
          <p className="pb-5">
            <span>
              2,000 Calories a day is used for general nutrition advice, but
              calorie needs may vary. Additional nutritional information
              available upon request. Customization of your order may impact the
              accuracy and/or completeness of the
            </span>
            <span className="btn btn-link text-success">
              {' '}
              Allergen and Nutrition Information
            </span>
          </p>
        </div>
      </div>
    );
    
    if (cakes[i].id == id) {
      datacake.push(newdata);
    }
  }

  return (
    <>
      <div className='col-10  m-0 ms-4 mt-5 pt-5 kk'>Cakes  &gt; Earl Grey Cloud</div>
      <div className="col-12 m-auto  pt-5 ms-5 ps-5  ">
        
        <div className="row m-auto">{datacake}</div>
      </div>
    </>
  );
};
export default Cakedisplay;
