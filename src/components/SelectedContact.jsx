import { useEffect, useState } from "react";


const SelectedContact = ({selectedContactId,setSelectedContactId}) => {

  const [contactDetails, setContactDetails] = useState(null);

  useEffect(() => {
    try {
    const getDetails = async() => {
      const response =  await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
      const data = await response.json();
      console.log(data);
      setContactDetails(data);
    }
    getDetails();
  }catch(error) {
    console.log(error);
  }

  },[])

  return contactDetails ? (
    <>
    <button onClick={() => {
      setSelectedContactId(null);
    }}>Back</button>
  <h2>Contact Details for {contactDetails.name}</h2>
  <h3>Commpany: {contactDetails.company.name}</h3>
  <h3>Commpany CatchPhrase: {contactDetails.company.catchPhrase}</h3>
  </> ) : <h2>Loading</h2>
}

export default SelectedContact;