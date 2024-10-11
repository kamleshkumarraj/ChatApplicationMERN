import { CiSearch } from 'react-icons/ci'
import { FaPlus } from 'react-icons/fa6'
import ContactBox from '../ReUsuableComp/ContactBox'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { apiCalling } from '../../api/apiCalling'
import {
  getAllUsers,
  setAllUsers,
} from '../../store/slice/user/allUserHandler.slice'

function ContactList() {
  const dispatch = useDispatch()

  //now we write code for getting all users from our database.
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'http://localhost:3000/api/v1/admin/all-users',
    }
    const apiCall = async () => {
      const data = await dispatch(apiCalling(options))
      if (data.success) {
        dispatch(setAllUsers(data.users))
      }
    }
    apiCall()
  }, [])
  const allUsers = useSelector(getAllUsers)

  return (
    <div
      id="contact-body"
      className="bg-[#2e2f4000] min-w-[38rem] h-[100vh]  py-[0rem] border-r-[2px] border-[blue] "
    >
      <div
        id="search-box"
        className="flex bg-[#1c1c2970] py-[2.8rem]  justify-center gap-[2rem] rounded-[.2rem] border-b-[.5px] border-[#8080805d]"
      >
        <div
          id="search"
          className="flex gap-[1rem] justify-center items-center w-[24rem] py-[1rem] bg-[#35364C] px-[5rem] border-b-[2px] border-[#08CE95] runded-t-[1rem]"
        >
          <CiSearch size={'2.4rem'} color="white" />
          <input
            className="bg-[#35364C] text-[white]  border-none text-[1.6rem] focus:outline-none w-[10rem] "
            type="text"
            placeholder="Search"
          />
        </div>
        <div
          id="btn"
          className="p-[1rem] bg-[#35364C] rounded-[.5rem] border-[.5px] border-[#08ce9629] cursor-pointer"
        >
          <FaPlus size={'2.4rem'} color="white" />
        </div>
      </div>

      <div
        id="contact-scroll"
        className=" flex flex-col gap-[.75rem] max-h-[86vh] overflow-auto"
      >
        {allUsers.length > 0
          ? allUsers.map((user, idx) => {
              return (
                <ContactBox
                  key={idx}
                  image={user?.avatar?.url}
                  fullName={`${user.firstname} ${user.middlename} ${user.lastname}`}
                  userData={user}
                />
              )
            })
          : 'loading....'}
      </div>
    </div>
  )
}

export default ContactList
