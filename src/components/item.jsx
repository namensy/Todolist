import React from 'react'
import './item.css'
import { FaTrash, FaEdit } from "react-icons/fa";




function Item(props) {
  const { item, handleDelete, handleEdit } = props

  return (
    <div className='item-container'>
      <h2>{item.title}</h2>
      <div>
        <FaTrash className='btn' onClick={() => handleDelete(item.id)}/>
        <FaEdit className='btn' onClick={() => handleEdit(item.id)} />
      </div>
    </div>
  )
}

export default Item