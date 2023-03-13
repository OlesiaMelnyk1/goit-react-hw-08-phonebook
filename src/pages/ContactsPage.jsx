import { ContactForm } from 'components/ContactForm/ContactForm';
import { PhonebookTitle } from 'components/GlobalStyles';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Box } from 'components/Box';

function Contacts() {
  return (
    <Box
      as="section"
      mx="auto"
      my="150px"
      mt="40px"
      width="400px"
      p={5}
      bg="#6a863b"
      // border="normal"
      borderRadius="normal"
      borderColor="black"
      boxShadow="regular"
    >
      <Box as="div" mb={5}>
        <PhonebookTitle>CONTACTS</PhonebookTitle>
        <ContactForm />
      </Box>
      <Box as="div">
        <Filter />
        <ContactList />
      </Box>
    </Box>
  );
}

export default Contacts;
