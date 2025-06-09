import { useEffect } from "react";
import { useState } from "react";

const Usefect = () => {
    const [listbread,plistbead] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((data)=> {
            console.log(data)
            const tmp = data.map((item,i)=>(
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
                    <p style={{ fontFamily: "sans-serif" }}>{item.name}</p>
                  </div>
                </div>
              </div>

            ));
            plistbead(tmp);
        })

    },[])
return(
<>
<div className="col-10 m-auto mt-4">
        <div className="row">{listbread}</div>
      </div>
</>
);
}
export default Usefect;