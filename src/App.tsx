import BarChart from "assets/components/BarChart";
import DataTable from "assets/components/DataTable";
import DonutChart from "assets/components/DonutChart";
import Footer from "assets/components/Footer";
import NavBar from "assets/components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="tex-center text-secondary">Taxas de sucesso(%)</h5>
            <BarChart />
          </div>

          <div className="col-sm-6">
            <h2 className="tex-center text-secondary">Todas vendas</h2>
            <DonutChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primay">Todas vendas</h2>
        </div>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
