"use client";
import LogoSlider from "../../components/logoSlider";

const PrivacyPolicy = () => {

  return (
    <>
      <div
        style={{
          backgroundImage: `url(/image/banner-bg.png)`,
          height: "auto",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="bodybg">
          <div className="container mx-auto">
            <div className="mx-4 md:mx-10 lg:mx-20 py-20">
              <div className=" p-8 bg-white rounded-3xl shadow-2xl">
                <h2 className="title_font_size font-bold pb-10 text-[#d4983d] uppercase">
                  Brotex Limited Privacy Policy
                </h2>
                <p className="text-xl text-gray-700 tracking-wider">
                  1. Commitment to Privacy
                </p>
                <p className="text-sm text-gray-700 tracking-wider pt-2">
                  Brotex Limited is committed to protecting the privacy and
                  security of our customers and site visitors. This policy
                  outlines how we collect, use, and protect your personal
                  information.
                </p>
                <p className="text-xl text-gray-700 tracking-wider pt-5">
                  2. Information We Collect
                </p>
                <p className="text-sm text-gray-700 tracking-wider pt-2">
                  We may collect the following types of personal information
                  from you:
                </p>
                <p className="text-sm text-gray-700 tracking-wider pt-2">
                  Name Contact information, such as your email address, phone
                  number, and mailing address
                  <br />
                  Demographic information, such as your age, gender, and
                  interests
                  <br />
                  Information about your interactions with us, such as your
                  purchase history and customer service inquiries
                </p>
                <p className="text-xl text-gray-700 tracking-wider pt-5">
                  3. How We Use Your Information
                  <br />
                  We use your personal information to:
                </p>
                <p className="text-sm text-gray-700 tracking-wider pt-2">
                  Provide you with the products and services you have requested
                  <br />
                  Process your payments
                  <br />
                  Communicate with you about your orders and other important
                  matters
                  <br />
                  Personalize your shopping experience
                  <br />
                  Improve our products and services
                  <br />
                  Conduct market research
                  <br />
                  Send you marketing and promotional communications (with your
                  consent)
                </p>
                <p className="text-xl text-gray-700 tracking-wider pt-5">
                  4. Sharing Your Information
                </p>
                <p className="text-sm text-gray-700 tracking-wider pt-2">
                  We do not sell or rent your personal information to third
                  parties. We may share your personal information with third
                  parties who provide services to us, such as payment
                  processors, shipping carriers, and marketing agencies. We
                  require these third parties to keep your personal information
                  confidential and to use it only for the purposes for which we
                  have disclosed it to them.
                </p>
                <p className="text-xl text-gray-700 tracking-wider pt-5">
                  5. Security
                </p>
                <p className="text-sm text-gray-700 tracking-wider pt-2">
                  We take steps to protect your personal information from
                  unauthorized access, use, or disclosure. We use physical and
                  electronic security measures to protect our systems and data.
                  We also require our employees and third-party service
                  providers to maintain the confidentiality of your personal
                  information.
                </p>
                <p className="text-xl text-gray-700 tracking-wider pt-5">
                  6. Your Choices
                </p>
                <p className="text-sm text-gray-700 tracking-wider pt-2">
                  You have the right to choose whether or not to receive
                  marketing and promotional communications from us. You can
                  unsubscribe from our mailing list at any time by clicking on
                  the unsubscribe link in any of our emails. You also have the
                  right to access, correct, or delete your personal information.
                  To do so, please contact us at the information below.
                </p>
                <p className="text-xl text-gray-700 tracking-wider pt-5">
                  7. Changes to This Policy
                </p>
                <p className="text-sm text-gray-700 tracking-wider pt-2">
                  We may update this privacy policy from time to time. If we
                  make any significant changes, we will post a notice on our
                  website or contact you directly.
                </p>
                <p className="text-xl text-gray-700 tracking-wider pt-5">
                  8. Contact Us
                </p>
                <p className="text-xl text-gray-700 tracking-wider">
                  If you have any questions about this privacy policy, please
                  contact us at:
                </p>
                <p className="text-xl font-bold text-gray-700 tracking-wider pt-1">
                  Brotex Limited
                </p>
                <p className="text-sm text-gray-700 tracking-wider pt-2">
                  House 25 (Ground ﬂoor) Road 11 Sector 6, Uttara, Dhaka 1230
                  <br />
                  +8801732141313
                  <br />
                  support@brotexbd.com
                  <br />
                  Effective Date: October 6, 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LogoSlider />
    </>
  );
};

export default PrivacyPolicy;
