import PropTypes from "prop-types";
import { useState } from "react";
import { ImUser, ImPhone, ImBin } from "react-icons/im";
import { useDeleteContactMutation } from "redux/contactsApi";
import { ContactItem, ContactWrapper, DeleteButton } from "./ContactListItem.styled";
import { Loader } from "components/Loader/Loader";

export const ContactListItem = ({ id, name, number }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [deleteContact] = useDeleteContactMutation();

    const handleContactDelete = (id) => {
        setIsLoading(true);
        deleteContact(id)
            .finally(() => setIsLoading(false))
    }

    return (
        <ContactItem>
            <ContactWrapper><ImUser /> {name}</ContactWrapper>
            <ContactWrapper><ImPhone /> {number}</ContactWrapper>
            {isLoading
                ? (<Loader />)
                : (<DeleteButton
                    onClick={() => handleContactDelete(id)}>
                    <ImBin />
                </DeleteButton>)}
        </ContactItem>
    )
};

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};