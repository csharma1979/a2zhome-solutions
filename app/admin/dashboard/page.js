
import ProtectedRoute from "../../../src/ProtectedRoute";
import Layout from "../../../src/components/AdminPannel/Navigation/Layout";

const Dashboard = () => {
  return (
        <ProtectedRoute>
    <Layout>
        <div>
          <h5 className="text-center p-4">Welcome to the Admin Dashboard</h5>
        </div>
      </Layout>
    </ProtectedRoute>
  );
};

export default Dashboard;
