import Form from "../components/Form/Form";
import ContactList  from "../components/Contact/ContactList";
import Filter from "../components/Filter/Filter";
import { useSelector, useDispatch} from "react-redux";
import { selectLoader, selectError, selectContacts} from "redux/selectors"
import { useEffect } from "react";
import { getContacts } from "redux/operation";


const Contacts = ()=> {
    const dispatch = useDispatch();

    const isLoading =useSelector(selectLoader);
    const error=useSelector(selectError)
    const contacts =useSelector(selectContacts)


useEffect(() => {
    dispatch(getContacts());
}, [dispatch]);

return (
    <>
    <h1>Phonebook</h1>
        <Form />
        <Filter/> 
        {isLoading && <p>Loading ...</p>}
    <h2>Contacts</h2> 
        {error && <p>{error}</p>}
        {contacts.length > 0 &&  <ContactList /> } 

    </>
)
}
export default Contacts;
