import Tab from './Tab'

const Header = ({ selectedTab, setSelectedTab, tabs }) => {
    return (
        <div className='w-100 d-flex justify-center align-center header-container'>
            <div className='header-wrapper'>
                {tabs.map((tab, index) => <Tab key={`tab__${index}`} name={tab.name} selectedTab={selectedTab} setSelectedTab={setSelectedTab} id={tab.id} />)}
            </div>
        </div>
    )
}

export default Header;