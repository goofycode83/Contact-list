

const ContactRow = ({contact, setSelectedContactId}) => {
  return (
      <>
      <tr onClick={() => {
        console.log(`You clicked ${contact.id}`)
        setSelectedContactId(contact.id);
      }}>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
      </>
  )
}

export default ContactRow;