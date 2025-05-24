import Banner from "../components/shared/Banner";
import Mission from "../components/about/Mission";
import Assurance from "../components/about/Assurance";
import Global from "../components/about/Global";
import Footer from "../components/shared/Footer";

const About = () => {
    return (
        <div>
            <Banner page="about"/>
            {/* <LetterImage src="/hero1.jpg" alt="Description" letter="T" size="300px" /> */}
            <Mission />
            <Assurance />
            <Global />
            <Footer />
        </div>
    )
}

export default About;