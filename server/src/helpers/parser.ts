import { WishItem } from '../models/wish-item.model';
import { AddWishItemRequest } from './request-body.validator';


function parseAddWishItemRequest(obj: AddWishItemRequest): WishItem {
    return {
        ...new WishItem(),
        indexNum: obj.indexNum,
        name: obj.name,
        created: new Date()
    };
}

export interface Parser {
    (o: ParseSource): ParseTarget;
}

export const dict: { [id: string]: Parser } = {};

declare type ParseSource = AddWishItemRequest ;
declare type ParseTarget = WishItem;

export function initParserMap() {
    dict[getName(AddWishItemRequest)] = parseAddWishItemRequest;
}


export function parse<T extends ParseSource>(obj: T) {
    return {
        to: function <U extends ParseTarget>(): U {
            const typeName = obj.constructor.name;
            if (dict[typeName]) {
                return <U>(dict[typeName])(obj);
            } else {
                throw new Error(`There's no parser for type <${typeName}>`);
            }
        }
    };
}

export function parseArr<T extends ParseSource>(obj: T[]) {
    return {
        to: function <U extends ParseTarget>(): U[] {
            return obj.map(item => parse(item).to<U>());
        }
    };
}

export function getName<T>(c: new() => T): string {
    return c.name;
}
