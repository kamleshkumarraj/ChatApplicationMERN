import { CiSearch } from 'react-icons/ci'
import { FaPlus } from 'react-icons/fa6'
import profilePhoto from '../../assets/profilePhoto.jpg'
import ContactBox from '../ReUsuableComp/ContactBox'

function ContactList() {
  return (
    <div
      id="contact-body"
      className="bg-[#2E2F40] w-[38rem] h-[100vh]  py-[3rem]"
    >
      <div
        id="search-box"
        className="flex py-[3rem] justify-center gap-[2rem] rounded-[.2rem] border-b-[.5px] border-[#8080805d]"
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
        className="mt-[3rem] flex flex-col gap-[.5rem] max-h-[77vh] overflow-auto"
      >
        <ContactBox profilePhoto={profilePhoto} />
        <ContactBox profilePhoto={profilePhoto} />
        <ContactBox profilePhoto={profilePhoto} />
        <ContactBox profilePhoto={profilePhoto} />
        <ContactBox profilePhoto={profilePhoto} />
        <ContactBox profilePhoto={profilePhoto} />
        <ContactBox profilePhoto={profilePhoto} />
        <ContactBox profilePhoto={profilePhoto} />
        <ContactBox profilePhoto={profilePhoto} />
      </div>
    </div>
  )
}

export default ContactList
