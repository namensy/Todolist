import React from "react";
import "./item.css";
import { FaTrash, FaEdit } from "react-icons/fa";

function Item(props) {
  const { item, handleDelete, handleEdit } = props;

  return (
    <div className="item-container">
      <div className="title">
        <input type="checkbox" />
        <h2>{item.title}</h2>
      </div>
      <div>
        <FaEdit className="btn" onClick={() => handleEdit(item.id)} />
        <FaTrash className="btn" onClick={() => handleDelete(item.id)} />
      </div>
    </div>
  );
}

export default Item;
