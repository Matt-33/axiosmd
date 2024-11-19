import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#f8f9fa" }}>
      <ul style={{ display: "flex", listStyleType: "none", gap: "15px" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
}
