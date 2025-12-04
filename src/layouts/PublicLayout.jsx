import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div>
      <Navbar />
      <main style={{ marginTop: "80px" }}>
        <Outlet />
      </main>
    </div>
  );
}
