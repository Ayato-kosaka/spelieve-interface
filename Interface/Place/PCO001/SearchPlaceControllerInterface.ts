import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore-types';
import React, { ReactNode } from 'react';
import { GooglePlaceData } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of PCO001SearchPlaceController object.
 */
export interface PCO001SearchPlaceControllerInterface {
    searchText: string;
    autoCompletes: Array<string>;
    onSearchTextChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
} 
