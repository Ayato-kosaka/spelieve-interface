import { TextInputChangeEventData } from 'react-native';
import * as SpelieveInterface from '../../../Interfaces';
export interface ItineraryCoverControllerInterface {
    pageItinerary: SpelieveInterface.ItineraryOneInterface | undefined;
    updateItinerary: () => void;
    handleOnChange: (column: keyof SpelieveInterface.ItineraryOneInterface) => ({ nativeEvent }: {
        nativeEvent: TextInputChangeEventData;
    }) => void;
    deleteTag: (index: number) => void;
    shouldNavigate: boolean;
    isLoading: boolean;
}