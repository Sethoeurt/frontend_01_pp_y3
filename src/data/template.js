import templateOneImg from "../assets/resume-template-one.jpeg";
import templateTwoImg from "../assets/resume-template-two.jpeg";
import Template1 from "../templates/Template1";
import Template2 from "../templates/Template2";

export const templates = [
  {
    id: 1,
    template_name: "Template One",
    template_img: templateOneImg,
    template: <Template1 />,
  },
  {
    id: 2,
    template_name: "Template Two",
    template_img: templateTwoImg,
    template: <Template2 />,
  },
];