import { GeoPoint, Timestamp, DocumentReference } from '@firebase/firestore-types';
import React, { ReactNode } from 'react';
import * as SpelieveInterface from '../../../Interface';

/**
 * Export interface of PCO001SearchPlaceProps object.
 */
export interface PCO001SearchPlacePropsInterface {
    onAutoCompleteClicked: () => void;
    hideDistinct?: boolean;
} 
