
import { RecoilRoot, useRecoilValue, useSetRecoilState,useRecoilState } from 'recoil'
import './App.css'
import { jobAtom, messagingAtom, networkAtom, notifictionAtom, totalNotificationSelector } from './atoms'

function App() {
return(
  <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
)
}

 function MainApp(){
  const network = useRecoilValue(networkAtom);
  const job = useRecoilValue(jobAtom);
  const notification = useRecoilValue(notifictionAtom);
  const Messaging = useRecoilValue(messagingAtom);
  const totalNotification = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>
      <button>My network({network >=100? "99+":network})</button>
      <button>Job ({job})</button>
      <button>Messaging({Messaging})</button>
      <button>Notification({notification})</button>
      <button>Me({totalNotification})</button>
    </>
  )
 }
 

export default App
