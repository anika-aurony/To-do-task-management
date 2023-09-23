
import './App.css'
import CreateList from './components/CreateList/CreateList'
import Header from './components/Header/Header'
import List from './components/List/List'

function App() {


  return (
    <div className="h-screen bg-blue-300">
      <Header></Header>
      <CreateList></CreateList>
      <List></List>
    </div>
  )
}

export default App
