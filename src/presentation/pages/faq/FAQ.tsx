import ImageBannerStatic from "../../sections/ImageBannerStatic";
import NavigationBar from "../../sections/NavigationBar";
import QuestionAndAnswer from "./section/QuestionAndAnswer";
import QuestionAndAnswer2 from "./section/QuestionAndAnswer2";

const FAQ = () => {
    return (
        <div>
            <NavigationBar />
            <ImageBannerStatic title="FAQ" img="/src/assets/images/slider-banner-3.jpg" className=""/>
            <QuestionAndAnswer2 />
        </div>
    );
};

export default FAQ;