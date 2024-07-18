import { useEffect } from "react";
import { useState } from "react";
import useFetch from "./Hook";
import axios from "axios";

export default function UsoFetch() {
  const [datos, setDatos] = useState([]);
  const [datosAxios, setDatosAxios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  useEffect(() => {
    fetchData();
    dataAxios();
  }, []);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setDatos(data))
      .catch((error) => console.log(error))
      .finally(() => setCargando(false));
  };

  const dataAxios = () => {
    axios
      .get("https://swapi.dev/api/people")
      .then((response) => setDatosAxios(response.data.results))
      .catch((error) => console.log(error))
      .finally(() => setCargando(false));
  };

  if (cargando) {
    return <p>Cargando...</p>;
  }

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h4 style={{ color: "#FF99AA" }}>Datos con Fetch</h4>
      {datos?.slice(0, 5).map((dato) => (
        <div key={dato.id}>
          <p>{dato.title}</p>
          <p>{dato.body}</p>
        </div>
      ))}
      <h4 style={{ color: "#FF99AA" }}>Datos con Custom Hook Fetch</h4>
      {data?.slice(0, 5).map((dato) => (
        <div key={dato.id}>
          <p>{dato.name}</p>
          <p>{dato.email}</p>
        </div>
      ))}
      <h4 style={{ color: "#FF99AA" }}>Datos con Custom Hook Fetch</h4>
      {datosAxios?.map((dato) => (
        <div key={dato.name}>
          <p>Nombre: {dato.name}</p>
          <p>altura: {dato.height}</p>
        </div>
      ))}
    </div>
  );
}
