import Link from "next/link";
import {
  BasePage,
  GridContainer,
  GridElement,
  PaddingContainer,
  TextWrapper,
} from "../components";

const PrivacyPolicyContent = () => (
  <PaddingContainer>
    <GridContainer>
      <GridElement>
        <TextWrapper>
          <p>
            This Privacy Policy outlines the policies of Moritz Becker, email:
            mail@moritzbecker.de, regarding the collection, use, and disclosure
            of your information when you access or use our website (
            moritzbecker.de ). (the “Service”). By using the Service, you
            consent to the collection, use, and disclosure of your information
            in accordance with this Privacy Policy. If you do not agree, please
            refrain from accessing or using the Service.
          </p>
          <p>
            We may modify this Privacy Policy at any time without prior notice.
            Any changes will be posted on the Service, and the revised Policy
            will take effect 180 days after posting. We recommend that you
            periodically review this page for updates.
          </p>
          <h2>INFORMATION WE COLLECT.</h2>
          <p>
            We may collect and process the following personal information about
            you:
          </p>
          <ul>
            <li>
              <p>Name</p>
            </li>
            <li>
              <p>E-mail</p>
            </li>
          </ul>
          <h2>HOW WE USE YOUR INFORMATION.</h2>
          <p>
            We will use the information that we collect about you for the
            following purposes:
          </p>
          <ul>
            <li>
              <p>Testimonials</p>
            </li>
            <li>
              <p>Customer feedback collection</p>
            </li>
            <li>
              <p>Support</p>
            </li>
            <li>
              <p>Administration info</p>
            </li>
          </ul>
          <p>
            If we want to use your information for any other purpose, we will
            ask you for consent and will use your information only with your
            consent, unless we are required to do otherwise by law.
          </p>
          <h2>HOW WE SHARE YOUR INFORMATION.</h2>
          <p>
            We will not transfer your personal information to any third party
            without seeking your consent, except in limited circumstances as
            described below:
          </p>
          <ul>
            <li>
              <p>Analytics</p>
            </li>
            <li>
              <p>Data collection & process</p>
            </li>
          </ul>
          <p>
            We require such third parties to use the personal information we
            transfer to them only for the purpose for which it was transferred
            and not to retain it for longer than is required for fulfilling the
            said purpose.
          </p>
          <p>
            We may also disclose your personal information for the following:
            (1) to comply with applicable law, regulation, court order, or other
            legal process; (2) to enforce your agreements with us, including
            this Privacy Policy; or (3) to respond to claims that your use of
            the Service violates any third-party rights. If the Service or our
            company is merged or acquired with another company, your information
            will be one of the assets that is transferred to the new owner.
          </p>
          <h2>RETENTION OF YOUR INFORMATION.</h2>
          <p>
            We will retain your personal information for 90 days to 2 years
            after you terminate your account or for as long as we need it to
            fulfill the purposes for which it was collected as detailed in this
            Privacy Policy. We may need to retain certain information for longer
            periods for record-keeping, reporting in accordance with applicable
            law, or for other legitimate reasons like enforcement of legal
            rights, fraud prevention, etc. Residual anonymous information and
            aggregate information, neither of which identifies you (directly or
            indirectly), may be stored indefinitely.
          </p>
          <h2>YOUR RIGHTS.</h2>
          <p>
            Depending on the law that applies, you may have a right to access
            and rectify or erase your personal data, receive a copy of your
            personal data, restrict or object to the active processing of your
            data, ask us to share (port) your personal information to another
            entity, withdraw any consent you provided to us to process your
            data, a right to lodge a complaint with a statutory authority, and
            such other rights as may be relevant under applicable laws. To
            exercise these rights, you can write to us at mail@moritzbecker.de.
            We will respond to your request in accordance with applicable law.
          </p>
          <p>
            Please note that if you do not allow us to collect or process the
            required personal information or withdraw the consent to process the
            same for the required purposes, you may not be able to access or use
            the services for which your information was sought.
          </p>
          <h2>COOKIES AND EMBEDDED TWEETS.</h2>
          <p>
            To learn more about how we use cookies and your choices in relation
            to these tracking technologies, please refer to our{" "}
            <Link href="/cookiePolicy">Cookie Policy.</Link> This website also
            includes embedded Twitter tweets, which may collect certain
            information from your device. You can review Twitter's Privacy
            Policy for more information on how they handle your data.
          </p>
          <h2>SECURITY.</h2>
          <p>
            The security of your information is important to us, and we will use
            reasonable security measures to prevent the loss, misuse, or
            unauthorized alteration of your information under our control.
            However, given the inherent risks, we cannot guarantee absolute
            security and consequently, we cannot ensure or warrant the security
            of any information you transmit to us, and you do so at your own
            risk.
          </p>
          <h2>THIRD-PARTY LINKS & USE OF YOUR INFORMATION.</h2>
          <p>
            Our Service may contain links to other websites that are not
            operated by us. This Privacy Policy does not address the privacy
            policy and other practices of any third parties, including any third
            party operating any website or service that may be accessible via a
            link on the Service. We strongly advise you to review the privacy
            policy of every site you visit. We have no control over and assume
            no responsibility for the content, privacy policies, or practices of
            any third-party sites or services.
          </p>
          <h2>GRIEVANCE / DATA PROTECTION OFFICER.</h2>
          <p>
            If you have any queries or concerns about the processing of your
            information that is available with us, you may email Moritz Becker
            at Moritz Becker | Web development, Nagelsweg 16, 20097 Hamburg,
            Germany, email: mail@moritzbecker.de. We will address your concerns
            in accordance with applicable law.
          </p>
        </TextWrapper>
      </GridElement>
    </GridContainer>
  </PaddingContainer>
);

const PrivacyPolicy = () => {
  return (
    <BasePage>
      <PrivacyPolicyContent />
    </BasePage>
  );
};

export default PrivacyPolicy;
