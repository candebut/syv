import { motion } from "framer-motion";
const Tab = ({ name, selectedTab, setSelectedTab, id }) => {
    return (
        <motion.div whileTap={{ scale: 1.2 }} className={selectedTab === id ? selectedTab === 'contacto' ? 'tab selected-tab-blue' : 'tab selected-tab' : selectedTab === 'contacto' ? 'inverted-tab tab' : 'tab'} onClick={() => setSelectedTab(id)}>{name}</motion.div>
    )
}

export default Tab;