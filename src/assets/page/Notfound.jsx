import not from '../img/rr.jpg';
const Notfound = () => {
  return (
    <>
      <div className="container-fluid  d-flex flex-column justify-content-center">
        <p className="text-center fs-1 fw-bold">404 Not found </p>
        <img style={{ width: '400px' }} className="m-auto" src={not} alt="" />
      </div>
    </>
  );
};
export default Notfound;
