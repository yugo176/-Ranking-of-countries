
import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = ()=> {
    return (
        
        <div className="home">
            <Navigation />
            <Logo />
            <h1>Acceuil</h1>
            <Countries />
        </div>
        
        
    )
}
 
export default Home;