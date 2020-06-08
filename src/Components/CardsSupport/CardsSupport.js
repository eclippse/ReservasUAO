import React, { Component } from 'react';
import CardSupport from '../CardSupport/CardSupport';
import { listContact } from '../../Constants/listSupport';
import { Grid} from '@material-ui/core';


class contCardsSupport extends Component {

    render() {
        return (
            <>
                <Grid container spacing={7}>
                    {listContact && listContact.map((listContact, key) =>
                        <Grid item md={4}>
                        < CardSupport
                            key={key}
                            imgContact={listContact.imgContact}
                            opContact={listContact.opContact}
                            descContact={listContact.descContact}
                        />
                        </Grid>
                    )}
                </Grid>
            </>
        );
    }
}

export default contCardsSupport;