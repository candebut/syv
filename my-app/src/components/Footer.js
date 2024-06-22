const Footer = ({ fixed = true }) => {
    return (
        <footer className={`${fixed ? '' : 'force-position'}`}>
            <img src='./logo.png' alt='logo' />
            No es solo ropa, es identidad
        </footer>
    )
}

export default Footer;