import Tab from './Tab'

const Header = ({ selectedTab, setSelectedTab, tabs }) => {
    return (
        <div className='header-wrapper'>
            {tabs.map((tab, index) => <Tab key={`tab__${index}`} name={tab.name} selectedTab={selectedTab} setSelectedTab={setSelectedTab} id={tab.id} />)}
        </div>
    )
}

export default Header;