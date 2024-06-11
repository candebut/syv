
const Tab = ({ name, selectedTab, setSelectedTab, id }) => {
    return (
        <div className={selectedTab === id ? 'tab selected-tab' : 'tab'} onClick={() => setSelectedTab(id)}>{name}</div>
    )
}

export default Tab;