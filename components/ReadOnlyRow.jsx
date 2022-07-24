import { MdOutlineModeEdit } from 'react-icons/md'
const ReadOnlyRow = ({ attendee, handleEditClick }) => {
  return (
    <tr className=''>
      <td className=' '>{attendee.time}</td>
      <td>{attendee.fullName}</td>
      <td>{attendee.date}</td>
      <td className='  '>
        <button
          type='button'
          onClick={(e) => handleEditClick(e, attendee)}
          className=''
        >
          <MdOutlineModeEdit color='lightgreen' />
        </button>
      </td>
    </tr>
  )
}

export default ReadOnlyRow
