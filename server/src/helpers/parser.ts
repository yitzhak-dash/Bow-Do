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

export interface ParserFn {
    (o: ParseSource): ParseTarget;
}

declare type ParseSource = AddWishItemRequest ;
declare type ParseTarget = WishItem;

export class Parser {
    private readonly dict: { [id: string]: ParserFn } = {};

    constructor() {
        this.initParserMap();
    }

    private initParserMap() {
        this.dict[this.getInstanceName(AddWishItemRequest)] = parseAddWishItemRequest;
    }

    parse = <T extends ParseSource>(obj: T) => ({
        to: <U extends ParseTarget>(): U => {
            const typeName = obj.constructor.name;
            if (this.dict[typeName]) {
                return <U>(this.dict[typeName])(obj);
            } else {
                throw new Error(`There's no parser for type <${typeName}>`);
            }
        }
    });

    parseArr = <T extends ParseSource>(arr: T[]) => {
        return {
            to: <U extends ParseTarget>(): U[] =>
                arr.map(item => this.parse(item).to<U>())
        };
    };

    getInstanceName<T>(c: new() => T): string {
        return c.name;
    }
}