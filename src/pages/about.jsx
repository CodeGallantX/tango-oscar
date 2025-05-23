import Banner from "../components/shared/Banner";
import LetterImage from "../components/about/LetterImage";
import Footer from "../components/shared/Footer";

const About = () => {
    return (
        <div>
            <Banner page="about"/>
            {/* <LetterImage src="/hero1.jpg" alt="Description" letter="T" size="300px" /> */}
            <LetterImage imageUrl="/hero1.jpg"/>
            <Footer />
        </div>
    )
}

export default About;