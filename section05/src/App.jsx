import './App.css'
import Button from './components/Button'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const buttonProps = {
    text: '메일',
    color: 'red',
    a: 1,
    b: 2,
    c: 3,
  }
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Button {...buttonProps} />
      <Button text={'카페'}>
        <div>자식요소는 children prop으로 자동 전달됨</div>
      </Button>
      <Button text={'블로그'}>
        <Header />
      </Button>
    </>
  )
}

export default App
