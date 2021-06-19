import Lottie from "react-lottie";
import animationData from '../../assets/animation/19318-loading-circle.json';
import { FormContent } from "./styles";

const Loading: React.FC = () => {

    const animationContent = {
        loop: true,
        autoplay: true,
        isStopped: false,
        animationData: animationData
      }

    return (
        <FormContent>
            <div className="loading" >
                <Lottie
                options={animationContent}
                width={200}
                height={200}
                />
            </div>
        </FormContent>
    )
}

export default Loading;