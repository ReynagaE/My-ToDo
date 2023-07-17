import Sidebar from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";

function TasksPage() {
  const { logout } = useAuth();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div className="flex-grow" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <button
          className="max-w-fit text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-black border-2" 
          style={{ width: "100%" }}
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default TasksPage;