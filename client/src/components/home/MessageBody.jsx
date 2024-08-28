import { GoDeviceCameraVideo } from 'react-icons/go'
import { TbPhoneCall } from 'react-icons/tb'
import SendingMessage from '../ReUsuableComp/SendingMessage'
import ReceiveImage from '../ReUsuableComp/ReceiveImage'

function MessageBody() {
  return (
    <div className="w-[70rem] pt-[3rem] bg-[#1c1c29]" id="chat-body">
      <div
        id="chat-header"
        className="py-[3rem] flex justify-between items-center"
      >
        <div id="left" className="flex flex-col gap-[.5rem]">
          <div
            id="name"
            className="font-[600] items-center gap-[10rem] flex justify-between px-[4rem] text-[2.2rem] text-[#C6C6CB]"
          >
            <p id="name">Kamlesh Kumar</p>
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
        className="flex flex-col gap-[2rem] w-full mt-[3rem] max-h-[75vh] overflow-auto"
      >
        <SendingMessage message={`Hey, How are you ?`} />
        <ReceiveImage message={`I am fine. What about you ?`} />
        <ReceiveImage message={`What are you doing ?`} />
        <SendingMessage message={`I am doing coding. What about you ?`} />
        <SendingMessage
          message={`What are doing ? please tell me in details.`}
        />
        <ReceiveImage
          message={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae distinctio? Aperiam neque ut delectus quisquam nulla fugit natus cupiditate maxime quas molestiae eveniet commodi officiis expedita eum unde accusamus laborum magnam, pariatur hic ab reiciendis.`}
        />
        <SendingMessage
          message={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae distinctio? Aperiam neque ut delectus quisquam nulla fugit natus cupiditate maxime quas molestiae eveniet commodi officiis expedita eum unde accusamus laborum magnam, pariatur hic ab reiciendis.`}
        />
      </div>
    </div>
  )
}

export default MessageBody
