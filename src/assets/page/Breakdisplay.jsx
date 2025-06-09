import { useParams } from 'react-router-dom';

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

const breads = [
  {
    id: 1,
    name: 'Earl Grey Cloud',
    price: '5 $',
    image: break1,
  },
  {
    id: 2,
    name: 'Blueberry Yogurt',
    price: '1.35 $',
    image: break2,
  },
  {
    id: 3,
    name: 'Strawberry Lychee',
    price: '4.3 $',
    image: break3,
  },
  {
    id: 4,
    name: 'Strawberry Gateau',
    price: '2.4 $',
    image: break4,
  },
  {
    id: 5,
    name: 'Cloud Cake',
    price: '2.0 $',
    image: break5,
  },
  {
    id: 6,
    name: 'Greentea Cloud Cake',
    price: '4.9 $',
    image: break6,
  },
  {
    id: 7,
    name: 'Greentea Cloud Cake',
    price: '3.2 $',
    image: break7,
  },
  {
    id: 8,
    name: 'Greentea Cloud Cake',
    price: '3.2 $',
    image: break8,
  },
  {
    id: 9,
    name: 'Greentea Cloud Cake',
    price: '1.2 $',
    image: break9,
  },
];
const Breakdisplay = () => {
  const { id } = useParams();
  const allbreaks = [];
  for (let i = 0; i < breads.length; i++) {
    let datas = (
      <div to={`/Break/${breads[i].id}`} className="d-flex">
        <div className="col-4 px-2 ms-4 ">
          <div className="card-img ">
            <div className="card-img">
              <img
                className="w-100 rounded-3"
                style={{ height: '480px', objectFit: 'cover' }}
                src={breads[i].image}
                alt=""
              />
            </div>
            <div className="card-footer border border-end-0 border-start-0 border-bottom-1 border-top-0 border-success-subtle pb-0 ">
              <h4 className=" mt-2 text-success pt-3">{breads[i].name}</h4>
            </div>
          </div>
        </div>
        <div className="col-5 ps-5  ms-5">
          <h2 style={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>
            {breads[i].name}
          </h2>
          <p className="fs-5">Price : {breads[i].price} </p>
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
    if (breads[i].id == id) {
      allbreaks.push(datas);
    }
  }

  return (

      <>
        <div className="col-12 m-auto mt-5 pt-5 ms-5 ">
          <div className="row m-auto">{allbreaks}</div>
        </div>
      </>

  );
};
export default Breakdisplay;
