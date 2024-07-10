// import './App.css'
import Header from './components/Header/Header'
import Title from './components/Title/Title'

function App() {

  const titleContent = 'Bienvenid@s a la clase 23'

  return (
    <div style={{backgroundColor: 'black'}}>
      <Title title={titleContent}/>
      <Header/>
    </div>
  )
}

export default App
