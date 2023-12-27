import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Receive the notification when we get our App and Website out for everyone."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
