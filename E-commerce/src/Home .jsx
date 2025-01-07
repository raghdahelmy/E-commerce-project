import Header from './components/Header';
import TopHeader from './components/TopHeader';
import Navs from "./components/Navs";
import Body from './components/Body';
import Fotter from './components/Fotter';
function Home() {
    return (
        <>
            <TopHeader />
            <Navs />
            <Header />
            <Body />
            <Fotter/>

        </>
    )
} export default Home;