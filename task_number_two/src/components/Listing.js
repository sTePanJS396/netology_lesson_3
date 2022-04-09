import React from 'react'
import propTypes from 'prop-types'
import ListingItem from './ListingItem';

const Listing = ({ item }) => {
    const [itemObj, setItemObj] = React.useState(item);

    function iterateOverArray() {
        const arrayElements = [];
        let numberOfSkippedElements = 0;
        itemObj.forEach(elem => {
            if (!elem.error_messages) {
                arrayElements.push(<ListingItem key={elem.listing_id} el={elem}/>)
                // Для сокращения и красоты кода вынес карточки с товарами в отдельный эелемент
                // (если это нельзя, то готов вернуть все назад)
            } else {
                numberOfSkippedElements += 1;
            }
        });

        if (numberOfSkippedElements > 0) {
            console.log(`Было пропущено ${numberOfSkippedElements} элементов.`)
        }

        return arrayElements;
    }

    return iterateOverArray();
}

Listing.propTypes = {
    item: propTypes.array
}

export default Listing;