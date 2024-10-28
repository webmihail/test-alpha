import Layout from "./modules/common/components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaymentMethod from "modules/PaymentMethod";
import "modules/common/globalStyles/global.scss";
import Transactions from "modules/Transactions";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <PaymentMethod />
              <Transactions />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
