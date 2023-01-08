import { BaseProjectPage, NoProject, PaddingContainer } from "../../components";

import image from "../../assets/img/cookiemonster.jpeg";

export const cookieConsentContent = {
  title: "Cookie consent.",
  subTitle: "Fully customisable.",
  image: image,
  link: "/projects/cookieConsent",
  githubSource: "https://github.com/Schlomoh/cookieConsent",
};

const CookieConsent = () => {
  return (
    <BaseProjectPage>
      <NoProject />
    </BaseProjectPage>
  );
};

export default CookieConsent;
