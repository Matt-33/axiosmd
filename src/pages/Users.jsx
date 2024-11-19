import { useState, useEffect } from "react";
import axios from "axios";

export function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des utilisateurs :", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Chargement des données...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}
