import PropTypes from "prop-types";
import { ImUser, ImPhone, ImBin } from "react-icons/im";
import { useDeleteContactMutation } from "redux/contactsApi";
import { ContactItem, ContactWrapper, DeleteButton } from "./ContactListItem.styled";
import { Loader } from "components/Loader/Loader";

export const ContactListItem = ({ id, name, number }) => {
    const [deleteContact, {isLoading}] = useDeleteContactMutation();

    return (
        <ContactItem>
            <ContactWrapper><ImUser /> {name}</ContactWrapper>
            <ContactWrapper><ImPhone /> {number}</ContactWrapper>
            {!isLoading
                ? (<DeleteButton
                    onClick={() => deleteContact(id)}>
                    <ImBin />
                </DeleteButton>)
                : (<Loader />)
            }
        </ContactItem>
    )
};

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};