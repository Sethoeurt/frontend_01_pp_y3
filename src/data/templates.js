import templateOneImg from "../assets/resume-template-one.jpeg";
import templateTwoImg from "../assets/resume-template-two.png";
import { colors } from "../utils/colors.js"

export const templates = [
  {
    id: 1,
    template_name: "Template One",
    template_img: templateOneImg,
    dynamicStyle: {
      backgroundColor: colors.gray200,
      color: colors.gray900
    }
  },
  {
    id: 2,
    template_name: "Template Two",
    template_img: templateTwoImg,
    dynamicStyle: {
      backgroundColor: colors.pink500,
      color: colors.gray900,
      titleColor: colors.gray950,
      headingColor: colors.pink500,
      dividerColor: colors.pink500
    }
  },
];