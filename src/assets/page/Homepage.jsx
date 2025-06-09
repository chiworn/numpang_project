import white from '../img/logowhite.png';
function Homepage() {
  return (
    <>
      <div
        style={{ height: '100px' }}
        className="container-fluid  mt-3 p-0 position-relative w-100 h-100"
      >
        <video
          controls
          autoPlay
          loob
          muted
          className="w-100  position-absolute"
          src="https://cdn.prod.website-files.com/649249d29a20bd6bc3deac45/649249d29a20bd6bc3deaeb9_tlj-home-video-2-transcode.mp4"
        ></video>
        <div
          className="position-absolute w-100  "
          style={{ marginTop: '280px', paddingLeft: '320px' }}
        >
          <img className=" w-75 " src={white} />
          <div style={{ marginLeft: '275px' }}>
            <p
              className="ms-5 ps-3 fw-bold fs-5 mb-3"
            style={{ color:"rgb(234, 237, 211)"}}
            >
              Freshly Baked, Everyday
            </p>
            <button className="btn btn-success px-5 ms-5  fs-5 fw-bold positon-absolute "
              style={{ color:"rgb(242, 242, 241)"}}>
              FINK LOCATION
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Homepage;
