import { BaseProjectPage, NoProject, PaddingContainer } from "../../components";

import image from "../../assets/img/cookiemonster.jpeg";

export const cookieConsentContent = {
  title: "Cookie consent.",
  subTitle: "Fully customisable.",
  image: image,
  link: "/projects/cookieConsent",
  githubSource: "https://github.com/Schlomoh/cookieConsent",
};

const content = cookieConsentContent;

const CookieConsent = () => {
  return (
    <BaseProjectPage>
      <PaddingContainer>
        <NoProject />
      </PaddingContainer>
    </BaseProjectPage>
  );
};

export default CookieConsent;