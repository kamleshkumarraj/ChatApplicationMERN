import ContactList from "../components/home/ContactList"
import MessageBody from "../components/home/MessageBody"

function Home() {
  return (
    <div id="home-page" className="flex w-full h-full">
      <ContactList />
      <MessageBody />
    </div>
  )
}

export default Home
