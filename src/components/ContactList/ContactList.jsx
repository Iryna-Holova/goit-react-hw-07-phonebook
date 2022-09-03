import { useSelector } from "react-redux";
import { useDeleteContactMutation, useGetContactsQuery } from "redux/contactsApi";
import { ContactListContainer } from "./ContactList.styled";
import { ContactListItem } from "components/ContactListItem/ContactListItem";

export const ContactList = () => {
    const filter = useSelector(state => state.filter.value);
    const { data: contacts = [] } = useGetContactsQuery();
    const [deleteContact] = useDeleteContactMutation();

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    const handleContactDelete = (id) => {
        deleteContact(id);
    }

    return (
        <ContactListContainer>
            {filteredContacts.map(({ id, name, number }) => 
                <ContactListItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onDeleteContact={handleContactDelete}
                />
            )}
        </ContactListContainer>
    )
};