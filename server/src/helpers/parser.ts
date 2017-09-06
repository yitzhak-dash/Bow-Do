import { WishItem } from '../models/wish-item.model';
import { WishItemRequest } from './request-body.validator';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { extend } from 'joi';


function parseAddWishItemRequest(obj: WishItemRequest): WishItem {
    return {
        ...new WishItem(),
        completed: obj.completed || false,
        id: obj.id,
        indexNum: obj.indexNum,
        name: obj.name,
    };
}

type ParserFn = (o: ParseSource) => ParseTarget;

declare type ParseSource = WishItemRequest ;
declare type ParseTarget = WishItem;

export interface IParserFactory {

    getParserFor<T>(ctor: new() => T): IParse;

    getTypeName<T>(ctor: new() => T): string;
}

interface IParse {
    parse<T extends ParseSource>(obj: T): ITo;

    parseArr<T extends ParseSource>(obj: T[]): IToArr;
}

interface ITo {
    to<U extends ParseTarget>(): U;
}

interface IToArr {
    to<U extends ParseTarget>(): U[];
}

@injectable()
export class ParserFactory implements IParserFactory {
    private readonly dict: { [id: string]: ParserFn } = {};

    constructor() {
        this.initParserMap();
    }

    private initParserMap() {
        this.dict[this.getTypeName(WishItemRequest)] = parseAddWishItemRequest;
    }


    getParserFor = <T>(ctor: new() => T): IParse => ({
        parseArr: <S extends ParseSource>(arr: S[]): IToArr => ({
            to: <U extends ParseTarget>(): U[] =>
                arr.map((item: S) => {
                    return this.getParserFor(ctor).parse<S>(item).to<U>();
                })
        }),
        parse: <S extends ParseSource>(obj: S): ITo => ({
            to: <U extends ParseTarget>(): U => {
                const typeName = this.getTypeName(ctor);
                if (this.dict[typeName]) {
                    return <U>(this.dict[typeName])(obj);
                } else {
                    throw new Error(`There's no parser for type <${typeName}>`);
                }
            }
        })
    });

    getTypeName = <T>(ctor: new() => T): string => ctor.name;
}
