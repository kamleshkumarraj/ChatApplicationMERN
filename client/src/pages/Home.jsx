import ContactList from '../components/home/ContactList'
import MessageBody from '../components/home/MessageBody'
import chatImage from '../assets/contactImg.avif'

function Home() {
  return (
    <div
      id="home-page"
      className="flex w-full h-full"
      style={{
        background: `linear-gradient(45deg , rgba(134,189,245 , .4) , rgba(183,214,233,.4) ) ,url(${chatImage})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        borderTopLeftRadius: '.75rem',
        borderTopRightRadius: '.75rem',
      }}
    >
      <ContactList />
      <MessageBody />
    </div>
  )
}

export default Home
