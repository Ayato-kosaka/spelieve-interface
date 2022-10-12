import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore-types';
import React, { ReactNode } from 'react';
import { GooglePlaceData } from 'react-native-google-places-autocomplete';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of PMC01102PlaceListController object.
 */
export interface PMC01102PlaceListControllerInterface {
    onFilterSelected: () => void;
} 
