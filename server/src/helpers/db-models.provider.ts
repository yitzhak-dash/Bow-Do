import { WishItem } from '../models/wish-item.model';
import { Place } from '../models/place.model';

export function getDbModels(): any[] {
    return [
        WishItem,
        Place
    ];
}
