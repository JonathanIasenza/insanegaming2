import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Función para obtener productos desde Firestore
export const fetchProducts = async () => {
  try {
    const productsCollection = collection(db, "products"); // Cambia "products" por el nombre de tu colección en Firestore
    const productsSnapshot = await getDocs(productsCollection);
    const products = productsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  } catch (error) {
    console.error("Error fetching products: ", error);
    return [];
  }
};
