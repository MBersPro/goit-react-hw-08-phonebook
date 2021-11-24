import React from "react";
import Section from "../../components/section/Section";
import ContactForm from "../../components/contactForm/ContactForm";
//import Filter from "../../components/filter/Filter";
//import ContactList from "../../contactList/ContactList";

const ContactsPage = () => {
  return (
    <>
      <Section title={"Phonebook"}>
        <ContactForm />
      </Section>
      <Section title={"Contacts"}>
        {/* <Filter />
        <ContactList /> */}
      </Section>
    </>
  );
};

export default ContactsPage;
