import { useState } from 'react'
import Banner from '../components/Banner';
import Toggle from '../components/Toggle';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
function Test(props){

    
    return(
        <div>
           <Banner urlImage='/images/banner1.jpg' text='Page de test'/>
            <Paragraph title='titre' text="Text" />
            <Button text='Valider' colorBackgound='#00f' colorText="#fff" radius='5px' />
            <Button text='Annulé' colorBackgound='#F00' colorText="#fff" radius='5px' />
            <Button text='A confirmer' colorBackgound='#0F0' colorText="#000" radius='5px' />

           <Banner urlImage='/images/banner1.jpg' text='Page de test'/>
            

        </div>
    )
}


export default Test;