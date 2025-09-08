import FirstScreen from "./components/first-screen/FirstScreen";
import { motion } from "framer-motion";
import { GLOBAL_ANIMATION_DELAY, GLOBAL_ANIMATION_DURATION } from "./const";
import Header from "./components/header/Header";
import ProductSection from "./components/product-section/ProductSection";
import WorkSection from "./components/work-section/WorkSection";
import ContactsSection from "./components/contacts-section/ContactsSection";
import Footer from "./components/footer/Footer";
import { useCallback, useState } from "react";
import CartModal from "./components/cart/CartModal";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}

const App = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [modal, setModal] = useState(false);

  const addProduct = useCallback(
    (product: IProduct) =>
      setProducts((prev) => [
        ...prev.filter((value) => value.id !== product.id),
        product,
      ]),
    [setProducts]
  );
  const deleteProduct = useCallback(
    (id: number) =>
      setProducts((prev) => prev.filter((value) => value.id !== id)),
    [setProducts]
  );

  const openModal = useCallback(() => {
    setModal(true);
  }, [setModal]);
  const closeModal = useCallback(() => {
    setModal(false);
  }, [setModal]);

  return (
    <motion.div
      key={"root"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: GLOBAL_ANIMATION_DURATION,
        delay: GLOBAL_ANIMATION_DELAY,
      }}
    >
      <Header onOpenModal={openModal} />
      <FirstScreen />
      <ProductSection onAddProduct={addProduct} />
      <WorkSection />
      <ContactsSection />
      <Footer />
      <CartModal
        open={modal}
        products={products}
        onClose={closeModal}
        onDelete={deleteProduct}
      />
    </motion.div>
  );
};

export default App;
