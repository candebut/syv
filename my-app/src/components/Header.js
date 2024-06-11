import { useState } from 'react';
import Tab from './Tab'

const headerTabs = [
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

const Header = () => {
    const [selectedTab, setSelectedTab] = useState('inicio')
    return (
        <div className='header-wrapper'>
            {headerTabs.map((tab, index) => <Tab key={`tab__${index}`} name={tab.name} selectedTab={selectedTab} setSelectedTab={setSelectedTab} id={tab.id} />)}
        </div>
    )
}

export default Header;