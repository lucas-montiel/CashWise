import React from "react";
import styles from "./Operations.module.css";
import { useNavigate } from 'react-router-dom';



/**
 * Nav component that renders a list of items.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.items - The array of items to display.
 * @param {string} props.items[].id - The unique identifier for the item.
 * @param {string} props.items[].image - The URL of the item's image.
 * @param {string} props.items[].title - The title of the item.
 * @param {string} props.items[].price - The price of the item.
 * @param {string} props.items[].link - The URL link to the item's detail page.
 * @returns {JSX.Element} The rendered component.
 */
const Nav = ({ items }) => {

  const handleClick = () => {
    // ... alguna lógica (por ejemplo, validación) ...
    navigate('./OperationForm'); // Navega a la ruta
  };

  return (
    <div className={styles.bodyItems}>
      <button
        className={styles.addButton}
        onClick={handleClick}>
        + Agregar operacion
      </button>
      <ul className={styles.itemList}>
        {items.map((item) => (
          <li
            key={item.id}
            className={
              item.gastos === "ingreso" ? styles.itemIngreso : styles.itemEgreso
            }>
            {/*<img
                        src={item.image}
                        alt={item.title}
                        className={styles.itemImage}
                    />*/}
            <div className={styles.itemDetails}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              {item.gastos === "ingreso" ? (
                <p className={styles.itemPrice}>+ ${item.price}</p>
              ) : (
                <p className={styles.itemPrice}>- ${item.price}</p>
              )}

              <a href={item.link} className={styles.itemLink}>
                Ver detalle
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
