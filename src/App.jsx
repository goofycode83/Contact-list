import './index.css'
import './components/ContactList.jsx'
import ContactList from './components/ContactList.jsx'
import { useState } from 'react'
import SelectedContact from './components/SelectedContact.jsx'

/*

Need to know IF a contact was clicked
  - create a state variable to track what was clicked

  if a contact was clicked, then show detail, outherwise show ContactList

*/

const App = () => {

  const [selectedContactId, setSelectedContactId] = useState(null);

  //condition ? true condition : false condition ; 

  return (
    <>{selectedContactId ? 
    <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/> 
    : 
    <ContactList setSelectedContactId={setSelectedContactId} />}</>
  )
}

export default App
