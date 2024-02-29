import { AiFillAppstore } from "react-icons/ai";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Content Creator"
            des="Unleashing the code wizardry in every pixel. 
            🚀✨ Explore the art of Java development through my lens. #CodeCrafting #JavaMagic"
            icon={null}
          />
          <Card
            title="Web-App Development"
            des="Get customized web applications designed to meet your unique requirements. We 
            skilled team uses advanced technologies to deliver apps that adapt to all devices and
            provide an intuitive experience for your users."
            icon={<AiFillAppstore />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
