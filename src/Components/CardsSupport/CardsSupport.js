import React, { Component } from 'react';
import CardSupport from '../CardSupport/CardSupport.js';
import { listContact } from '../../Constants/listSupport.js';


class contCardsSupport extends Component {

    render() {
        return (
            <>
                <div className="card-deck d-flex justify-content-around p-5">
                    {listContact && listContact.map((listContact, key) =>
                        < CardSupport
                            key={key}
                            imgContact={listContact.imgContact}
                            opContact={listContact.opContact}
                            descContact={listContact.descContact}
                        />
                    )}
                </div>
            </>
        );
    }
}

export default contCardsSupport;