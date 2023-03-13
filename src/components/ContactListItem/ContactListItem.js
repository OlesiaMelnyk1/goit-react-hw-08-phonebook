import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { DeleteButton } from 'components/ContactList/ContactList.styled';
import { Item } from './ContactListItem.styled';

export const ContactListItem = ({ contactInfo }) => {
  const { id, name, number } = contactInfo;
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Item>
      <p>
        {name}: {'_____'}
        {number}
      </p>
      <DeleteButton onClick={() => handleDelete(id)}>Delete</DeleteButton>
    </Item>
  );
};
