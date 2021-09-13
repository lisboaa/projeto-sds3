import BarChart from "assets/components/BarChart";
import DataTable from "assets/components/DataTable";
import Footer from "assets/components/Footer";
import NavBar from "assets/components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <h1 className="text-primary py-3">Olá mundo!</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5>Todas vendas</h5>
            <BarChart/>
          </div>
        </div>
        <DataTable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
