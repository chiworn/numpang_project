import { useEffect, useState } from "react";

const Fakeapi = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const tmp = data.map((item, i) => (
          <div key={i} className="col-3 px-3 text-decoration-none">
            <div className="card p-0 border-0">
              <div className="card-img">
                <img
                  style={{ height: "230px" }}
                  className="w-100 rounded-2"
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="card-footer text-center bg-white fw-bold fs-5 border-0">
                <p style={{ fontFamily: "sans-serif" }}>{item.title}</p>
              </div>
            </div>
          </div>
        ));
        setProductList(tmp);
      });
  }, []);

  return (
    <>
      <div className="col-10 m-auto mt-4">
        <div className="row">{productList}</div>
      </div>
    </>
  );
};

export default Fakeapi;
