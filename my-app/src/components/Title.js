const Title = ({ title, subtitle }) => {
    return (
        <div className='title-wrapper'>
            <h1 className='patua'>{title}</h1>
            {subtitle ? <h3 className='lato'>{subtitle}</h3> : null}
        </div>
    )
}

export default Title;