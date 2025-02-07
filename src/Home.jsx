// function Home(){
//     return(
//         <>
//         <h1 style={{color:"blue"}}>This is Home page Home.jsx </h1>
//         <h2 style={{color:"blue"}}>All the information here</h2>
//         </>
//     )
// }
// export default Home;
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="container text-center mt-5">
      <div className="card p-4 shadow-lg">
        <h1 className="text-primary">Welcome to the Home Page</h1>
        <h2 className="text-secondary">All the information you need is here</h2>
        <p className="text-muted">
          Explore our website to find useful content and resources tailored just for you.
        </p>
        <button className="btn btn-primary mt-3">Learn More</button>
      </div>
    </div>
  );
}

export default Home;
