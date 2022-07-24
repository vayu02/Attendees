import { nanoid } from 'nanoid'
import { Fragment, useState } from 'react'
import EditableRow from '../components/EditableRow'
import ReadOnlyRow from '../components/ReadOnlyRow'
import data from '../mock-data.json'

console.log(data)

const HomePage = () => {
  const [attendees, setAttendees] = useState(data)
  const [formData, setFormData] = useState({ name: '', time: '', date: '' })
  const [editedAttendeesID, setEditedAttendeesID] = useState(null)
  const [editedAttendeesData, setEditedAttendeesData] = useState({
    name: '',
    time: '',
    date: '',
  })

  const handleFormChange = (e) => {
    e.preventDefault()
    const feildName = e.target.getAttribute('name')
    //getting name of the input user has changes see the name attribute in form
    const feildValue = e.target.value
    //getting value user has given
    const newAttendeesData = { ...attendees }
    // creating copy of existing form data so we can change it without mutating it
    newAttendeesData[feildName] = feildValue
    // we are getting a feild name from newAttendeesData and assign whatever user typed
    setFormData(newAttendeesData)
  }

  const handleEditFormChange = (e) => {
    e.preventDefault()
    const feildName = e.target.getAttribute('name')
    const feildValue = e.target.value
    const newAttendeeData = { ...editedAttendeesData }
    newAttendeeData[feildName] = feildValue
    setEditedAttendeesData(newAttendeeData)
  }
  const handleFormSubmit = (e) => {
    e.preventDefault()
    const newAttendee = {
      id: nanoid(),
      time: attendees.time,
      fullName: attendees.fullName,
      date: attendees.date,
    }
    const newAttendees = [...attendees, newAttendee]
    setAttendees(newAttendees)
  }

  const handleEditFormSubmit = (e) => {
    e.preventDefault()
    const editedAttendee = {
      id: editedAttendeesID,
      time: editedAttendeesData.time,
      fullName: editedAttendeesData.fullName,
      date: editedAttendeesData.date,
    }
    const newAttendees = [...attendees]
    const index = attendees.findIndex(
      (attendee) => attendee.id === editedAttendeesID
    )
    newAttendees[index] = editedAttendee
    setAttendees(newAttendees)
    setEditedAttendeesID(null)
  }

  const handleEditClick = (e, attendee) => {
    e.preventDefault()
    setEditedAttendeesID(attendee.id)
    const formValues = {
      time: attendee.time,
      fullName: attendee.fullName,
      date: attendee.date,
    }
    setEditedAttendeesData(formValues)
  }

  return (
    <>
      <nav className=' m-0 p-4 border h-max text-center text-2xl font-medium font-mono uppercase tracking-widest shadow-sm  '>
        Attendees
      </nav>

      <div>
        <form
          onSubmit={handleEditFormSubmit}
          className='table-container border-collapse  flex justify-center mt-6 '
        >
          <table className='w-[95%] '>
            <thead>
              <tr className=' text-white font-sans tracking-wider text-left '>
                <th className=' '>Time</th>
                <th>Name</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {attendees.map((attendee) => (
                <Fragment>
                  {editedAttendeesID === attendee.id ? (
                    <EditableRow
                      editedAttendeesData={editedAttendeesData}
                      handleEditFormChange={handleEditFormChange}
                    />
                  ) : (
                    <ReadOnlyRow
                      attendee={attendee}
                      handleEditClick={handleEditClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
      </div>
      {/* form */}
      <div className='font-sans mt-5  w-full flex justify-center   '>
        <form
          action=''
          className='w-[95%] border p-3'
          onSubmit={handleFormSubmit}
        >
          <div className=''>
            <label className='mb-1 tracking-wider '>Name *</label>
            <input
              type='text'
              name='fullName'
              placeholder='Enter Full Name'
              className=' pl-3 p-0.5 outline-none border-[1.5px] border-gray-700 rounded-md '
              // value={tableData}
              onChange={handleFormChange}
            />
          </div>
          <div className=' mt-4 '>
            <label className='mb-1 tracking-wider '>Time </label>
            <input
              type='time'
              name='time'
              className=' pl-3 p-0.5 outline-none border-[1.5px] border-gray-700 rounded-md '
              // value={tableData}
              onChange={handleFormChange}
            />
          </div>
          <div className=' mt-4 '>
            <label className='mb-1 tracking-wider '>Date </label>
            <input
              type='date'
              name='date'
              className=' pl-3 p-0.5 outline-none border-[1.5px] border-gray-700 rounded-md '
              // value={tableData}
              onChange={handleFormChange}
            />
          </div>
          <div className=''>
            <button
              type='submit'
              className='px-6 py-1 border-[1.5px] border-gray-700 rounded-md outline-none focus:outline-none '
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default HomePage
