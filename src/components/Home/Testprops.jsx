
const Testprops = (param) =>{
    return(
        <>
        <div>
            <p className="fs-2 mt-2"> Name: {param.name}</p>
            <p className="fs-2 ">Age : {param.age}</p>
            <p className="fs-2 ">Student : {param.student ?"yes" : "No " }</p>
        </div>
        </>
        

    );
}
export default Testprops;