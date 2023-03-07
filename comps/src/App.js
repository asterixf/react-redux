import Accordion from "./components/Accordion"

function App() {

  const items = [
    {
      id:'kovfeiovm',
      label: 'Can I use React in a project',
      content:' Yes you can use React in any project.Yes you can use React in any project.'
    },
    {
      id:'kovlkdf',
      label: 'Can I use React in a project',
      content:' Yes you can use React in any project.Yes you can use React in any project.'
    },
    {
      id:'dkocmdkms',
      label: 'Can I use React in a project',
      content:' Yes you can use React in any project.Yes you can use React in any project.'
    }
  ]

  return (
    <Accordion items={items}/>
)}

export default App;
