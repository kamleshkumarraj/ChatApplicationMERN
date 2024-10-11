import { GoDeviceCameraVideo } from 'react-icons/go'
import { TbPhoneCall } from 'react-icons/tb'
import SendingMessage from '../ReUsuableComp/SendingMessage'
import { MdSend } from 'react-icons/md'
import { IoMdAttach } from 'react-icons/io'
import ReceivingMessage from '../ReUsuableComp/ReceivingMessage'
import { useContext } from 'react'
import { AppDataProviderContext } from '../../context/AppDataWrapper'
function MessageBody() {
  const { contactPersonData } = useContext(AppDataProviderContext)
  const fullname =
    contactPersonData?.firstname +
    ' ' +
    contactPersonData?.middlename +
    ' ' +
    contactPersonData?.lastname

  return (
    <div className="relative w-full " id="chat-body">
      <div
        id="chat-header"
        className="py-[1rem] pb-[3rem] flex justify-between items-center bg-[#1c1c2970]"
        style={{
          backdropFilter: `blur(5px)`,
        }}
      >
        <div id="left" className="flex flex-col gap-[.5rem]">
          <div
            id="name"
            className="font-[600] items-center gap-[10rem] flex justify-between px-[4rem] text-[2.2rem] text-[#C6C6CB]"
          >
            <p id="name">{contactPersonData ? fullname : '.....'}</p>
            <p className="font-[500] text-[1.6rem] text-green-500" id="status">
              Typing...
            </p>
          </div>
          <div id="title" className="text-[1.6rem]  text-[#A6A7AE] px-[4rem]">
            <p
              className="px-[1rem]"
              id="title"
            >{`Don't Disturb me only call me.`}</p>
          </div>
        </div>
        <div id="right">
          <div id="icons" className="flex gap-[4rem] px-[4rem]">
            <GoDeviceCameraVideo size={'3rem'} color="white" />
            <TbPhoneCall size={'3rem'} color="white" />
          </div>
        </div>
      </div>

      <div
        id="message-body-scroll"
        className="flex flex-col gap-[2rem] w-full  max-h-[78.8vh] overflow-auto p-[1.5rem]"
      >
        <SendingMessage message={`Hey, How are you ?`} />
        <ReceivingMessage message={`I am fine. What about you ?`} />
        <ReceivingMessage message={`What are you doing ?`} />
        <SendingMessage message={`I am doing coding. What about you ?`} />
        <SendingMessage
          message={`What are doing ? please tell me in details.`}
        />
        <ReceivingMessage
          message={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae distinctio? Aperiam neque ut delectus quisquam nulla fugit natus cupiditate maxime quas molestiae eveniet commodi officiis expedita eum unde accusamus laborum magnam, pariatur hic ab reiciendis.`}
        />
        <SendingMessage
          message={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae distinctio? Aperiam neque ut delectus quisquam nulla fugit natus cupiditate maxime quas molestiae eveniet commodi officiis expedita eum unde accusamus laborum magnam, pariatur hic ab reiciendis.`}
        />
      </div>
      <div
        id="sending-box"
        className="absolute bottom-0 flex w-full border-b-[5px] border-[#04e4c6] bg-[#7cabb496]"
        style={{
          backdropFilter: `blur(2px)`,
        }}
      >
        <div
          id="file-sending"
          className="bg-[#2e2f4000] py-[1.3rem] pl-[1rem]"
          style={{ borderTopLeftRadius: '.75rem' }}
        >
          <label htmlFor="file" className="cursor-pointer">
            <IoMdAttach size={'2.4rem'} color="white" />
          </label>
          <input id="file" type="file" className="hidden" />
        </div>
        <input
          type="text"
          className="w-[85%] font-[600] placeholder:text-gray-600 py-[1.3rem] text-gray-900 px-[2rem] text-[1.6rem]  focus:outline-none rounded-t-[.5rem] bg-[#2e2f4000] "
          placeholder="Sending..."
        />
        <div
          style={{ borderTopRightRadius: '.75rem' }}
          id="button-send"
          className="bg-[#319ff35e] hover:cursor-pointer px-[2rem] py-[1.3rem] text-[white] text-[1.6rem] flex gap-[1rem] items-center font-[600]cursor-pointer "
        >
          <p id="button">Send</p>
          <MdSend color="white" size={'2rem'} className="" />
        </div>
      </div>
    </div>
  )
}

export default MessageBody
