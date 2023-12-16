import React from 'react'

function AddForm(props) {
    const { handleSubmit, title, editId, setTitle } = props

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <input type="text" placeholder="What your's thought?" value={title} onChange={(e) => setTitle(e.target.value)} />
                <button type="submit">{editId ? "Update" : "Add"}</button>
            </div>
        </form>
    )
}

export default AddForm