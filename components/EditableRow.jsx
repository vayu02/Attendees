const EditableRow = ({ editedAttendeesData, handleEditFormChange }) => {
  return (
    <tr>
      <td>
        <input
          type='time'
          name='time'
          required
          value={editedAttendeesData.time}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type='text'
          name='fullName'
          required
          placeholder='Enter a name..'
          value={editedAttendeesData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type='date'
          name='date'
          required
          value={editedAttendeesData.date}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type='submit'>Save</button>
      </td>
    </tr>
  )
}

export default EditableRow
