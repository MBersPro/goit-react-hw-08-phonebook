import React from "react";
import PropTypes from "prop-types";
import { ul, p } from "./ContactList.module.css";
import { deleteContactOperation} from "../../redux/contacts/phoneBookOperations";
import { getSomeContactsSelector,  } from "../../redux/contacts/phoneBookSelectors";
import { useSelector, useDispatch } from "react-redux";

const ContactList = () => {
  const filteredContacts = useSelector(getSomeContactsSelector);
  const dispatch = useDispatch()
  const removeContact = (id) => {
    dispatch(deleteContactOperation(id))
  }

  return (
    <ul className={ul}>
      {filteredContacts.map((item) => (
        <li key={item.id}>
          <p className={p}>
            {item.name}: {item.number}
          </p>
          <button
            type="button"
            id={item.id}
            onClick={() => removeContact(item.id)}
          >
            Delete Contact
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
// const mapStateToProps = (state) => {
//   if (state.contacts.filterName)
//     return {contacts: state.contacts.contactsList.filter(({ name }) => name.toLowerCase().includes(state.contacts.filterName)) };
//   return {contacts: state.contacts.contactsList}
// }

// const mapDispatchToProps = {
//   deleteContact,
// };

export default ContactList;
// export default connect(getSomeContactsSelector, mapDispatchToProps)(ContactList);
// getContactsOperation: () => dispatch(getContacts()),
