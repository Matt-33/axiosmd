import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des utilisateurs :", error);
        setError("Impossible de charger les utilisateurs. Veuillez réessayer.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Chargement des données...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>{user.email}</p>
            <Link to={`/posts/${user.id}`}>
              Voir les articles de {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
