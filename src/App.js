import React from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Operations from "./components/operation/Operations";

const App = () => {
  const items = [
    {
      id: 1,
      type: "debito",
      cuota: 1,
      image: "imagen1.jpg",
      title: "Compra mercaderia",
      price: "100",
      gastos: "egreso",
      link: "/detalle1",
    },
    {
      id: 2,
      type: "credito",
      cuota: 2,
      image: "imagen2.jpg",
      title: "Compra icbc",
      price: "200",
      gastos: "egreso",
      link: "/detalle2",
    },
    {
      id: 3,
      type: "credito",
      cuota: 1,
      image: "imagen3.jpg",
      title: "Venta celular",
      price: "500",
      gastos: "ingreso",
      link: "/detalle3",
    },
  ];

  return (
    <div>
      <Nav />
      <Operations items={items} />
      <Footer />
    </div>
  );
};

export default App;
