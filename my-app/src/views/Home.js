import Header from '../components/Header'
import Title from '../components/Title'
const Home = () => {
    return (
        <div className='home-wrapper'>
            <Header></Header>
            <div className='home-content'>
                <Title title='Lobis' subtitle='Buzos de egresados y más!' />
                <div className='semi-circle'></div>
            </div>
        </div>
    )
}

export default Home;