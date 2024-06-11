import { motion } from "framer-motion";
const Tab = ({ name, selectedTab, setSelectedTab, id }) => {
    return (
        <motion.div whileTap={{ scale: 1.2 }} className={selectedTab === id ? 'tab selected-tab' : 'tab'} onClick={() => setSelectedTab(id)}>{name}</motion.div>
    )
}

export default Tab;