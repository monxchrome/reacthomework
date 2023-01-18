import React from 'react';
import {Object} from "./Object";

export const ConstsObject = () => {

    const img_c = 'https://rickandmortyapi.com/api/character/avatar/85.jpeg';
    const img_d = 'https://rickandmortyapi.com/api/character/avatar/90.jpeg';
    const img_l = 'https://rickandmortyapi.com/api/character/avatar/207.jpeg';
    const img_s = 'https://rickandmortyapi.com/api/character/avatar/328.jpeg';
    const img_de = 'https://rickandmortyapi.com/api/character/avatar/566.jpeg';
    const img_dr = 'https://rickandmortyapi.com/api/character/avatar/709.jpeg';

    const name_c = 'Cyclops Morty';
    const name_d = 'Daron Jefferson';
    const name_l = 'Loggins';
    const name_s = 'Slow Rick'
    const name_de = 'Debrah’s Partner';
    const name_dr = 'Dracula';

    const gender_c = 'Male';
    const gender_d = 'Male';
    const gender_l = 'Male';
    const gender_s = 'Male';
    const gender_de = 'Male';
    const gender_dr = 'Male';

    const status_c = 'Alive';
    const status_d = 'Alive';
    const status_l = 'Alive'
    const status_s = 'Alive';
    const status_de = 'Alive';
    const status_dr = 'Alive';

    const species_c = 'Humanoid';
    const species_d = 'Alien';
    const species_l = 'Alien'
    const species_s = 'Human';
    const species_de = 'Mythological Creature';
    const species_dr = 'Mythological Creature';

    const id_c = 85;
    const id_d = 90;
    const id_l = 207;
    const id_s = 328;
    const id_de = 566;
    const id_dr = 709;

    return (
        <div>
            <Object img={img_c} name={name_c} gender={gender_c} status={status_c} species={species_c} id={id_c} />
            <Object img={img_d} name={name_d} gender={gender_d} status={status_d} species={species_d} id={id_d} />
            <Object img={img_l} name={name_l} gender={gender_l} status={status_l} species={species_l} id={id_l} />
            <Object img={img_s} name={name_s} gender={gender_s} status={status_s} species={species_s} id={id_s} />
            <Object img={img_de} name={name_de} gender={gender_de} status={status_de} species={species_de} id={id_de} />
            <Object img={img_dr} name={name_dr} gender={gender_dr} status={status_dr} species={species_dr} id={id_dr} />
        </div>
    );
}