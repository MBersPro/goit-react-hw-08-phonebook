import React, { useEffect } from "react";
import Section from "../../components/section/Section";
import ContactForm from "../../components/contactForm/ContactForm";
import Filter from "../../components/filter/Filter";
import ContactList from "../../components/contactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import {
  errorSelector,
  loadingSelector,
} from "../../redux/contacts/phoneBookSelectors";
import { getContactsOperation } from "../../redux/Api";
import { tokenSelector } from "../../redux/auth/authSelectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loader = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const token = useSelector(tokenSelector);
  useEffect(() => {
    dispatch(getContactsOperation(token));
  }, [dispatch]);

  return (
    <>
      {!loader && !error && (
        <>
          <Section title={"Phonebook"}>
            <ContactForm />
          </Section>
          <Section title={"Contacts"}>
            <Filter />
            <ContactList />
          </Section>
        </>
      )}
      {loader && <p>...Loading</p>}
      {error && <p>Something is wrong</p>}
    </>
  );
};

export default ContactsPage;
