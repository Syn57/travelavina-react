import ImageBannerStatic from "../../sections/ImageBannerStatic";
import NavigationBar from "../../sections/NavigationBar";
import QuestionAndAnswer from "./section/QuestionAndAnswer";

const FAQ = () => {
    return (
        <div>
            <NavigationBar />
            <ImageBannerStatic title="FAQ" img="/src/assets/images/slider-banner-3.jpg" className=""/>
            <h1 className="font-algreya text-4xl w-full text-center mt-10 font-bold">Frequently Asked Question</h1>
            <QuestionAndAnswer />
        </div>
    );
};

export default FAQ;