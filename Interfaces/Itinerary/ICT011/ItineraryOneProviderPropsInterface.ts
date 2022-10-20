import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore-types';
import React, { ReactNode } from 'react';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interfaces';

/**
 * Export interface of ItineraryOneProviderProps object.
 */
export interface ItineraryOneProviderPropsInterface {
    parentDocRef?: DocumentReference;
    children: ReactNode;
    id: string;
} 
