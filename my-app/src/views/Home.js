import Header from '../components/Header'
import { useState } from 'react';
import Inicio from './Inicio'
import Historia from './Historia'
import Presupuesto from './Presupuesto'
import Contacto from './Contacto'
import Productos from './Productos'
import Footer from '../components/Footer'

const tabs = [
    {
        name: 'Inicio',
        id: 'inicio',
    },
    {
        name: 'Historia',
        id: 'historia',
    },
    {
        name: 'Productos',
        id: 'productos',
    },
    {
        name: 'Presupuesto',
        id: 'presupuesto',
    },
    {
        name: 'Contacto',
        id: 'contacto',
    },
]
const Home = () => {

    const [selectedTab, setSelectedTab] = useState('inicio');
    const [item, setItem] = useState(null);

    const selectTab = () => {
        switch (selectedTab) {
            case 'inicio':
                return <Inicio />
            case 'historia':
                return <Historia />
            case 'productos':
                return <Productos item={item} setItem={setItem} />
            case 'presupuesto':
                return <Presupuesto />
            case 'contacto':
                return <Contacto />
            default:
                return <Inicio />
        }
    }

    return (
        <div className='home-wrapper'>
            <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabs={tabs} />
            {selectTab()}
            <Footer />
        </div>
    )
}

export default Home;