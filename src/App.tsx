import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Stats from './components/Stats'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Products />
        <HowItWorks />
      </main>
      <Footer />
    </>
  )
}
