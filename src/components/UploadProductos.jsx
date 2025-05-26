import { useEffect } from "react";
import { collection, setDoc, doc } from "firebase/firestore";
import productos from "../assets/Productos.json";
import { db } from "../components/firebase";

const UploadProductos = () => {
  useEffect(() => {
    productos.forEach(async (producto) => {
      try {
        const ref = doc(db, "items", producto.id.toString());
        await setDoc(ref, producto);
        console.log(`Producto subido: ${producto.title}`);
      } catch (error) {
        console.error("Error al subir producto:", error);
      }
    });

    console.log("✅ Todos los productos fueron cargados");
  }, []);

  return <p className="text-center mt-5">Subiendo productos a Firestore...</p>;
};

export default UploadProductos;
