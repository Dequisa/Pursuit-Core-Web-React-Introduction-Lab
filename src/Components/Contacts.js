import React from 'react';
import ContactUserCard from './ContactUserCard';
import './Contacts.css'

function Contacts() {
    return(
        <div className='Contacts'>
            <strong>Contacts</strong>
            <ContactUserCard />
        </div>

    );
}

export default Contacts;