import React from 'react';
import Footer from '../sections/Footer';
import Map from '../components/Map';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
function contact(props){
    return (
        <>
            <Map />
            <div class="container">
                <div class="row">
                    <ContactForm />
                    <ContactInfo />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default contact;