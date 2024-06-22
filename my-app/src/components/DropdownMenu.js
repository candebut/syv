import { IoMenu, IoClose } from "react-icons/io5";
import { useState, useEffect, useRef } from 'react';
import Tab from './Tab';
import { motion, AnimatePresence } from 'framer-motion';

const DropdownMenu = ({ tabs, selectedTab, setSelectedTab }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <div className='menu-wrapper' ref={menuRef}>
            <button className='menu-button' onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <IoClose /> : <IoMenu />}
            </button>
            <AnimatePresence>
                {menuOpen && (
                    <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        {tabs.map((tab, index) => (
                            <motion.li key={`tab__${index}`}>
                                <Tab name={tab.name} selectedTab={selectedTab} setSelectedTab={setSelectedTab} id={tab.id} />
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DropdownMenu;
