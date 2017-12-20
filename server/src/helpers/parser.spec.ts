import 'reflect-metadata';
import { expect } from 'chai';
//
import { WishItemRequest } from './request-body.validator';
import { WishItem } from '../models/wish-item.model';
import { ParserFactory } from './parser';


describe('Parser tests', () => {
    it('getName should get name', () => {
        const parser = new ParserFactory();
        const name = parser.getTypeName(WishItemRequest);
        expect(name).to.equals('WishItemRequest');
    });

    it('getName should be equal constructor name', () => {
        const parser = new ParserFactory();
        const name = parser.getTypeName(WishItemRequest);
        const typeOfName = (new WishItemRequest()).constructor.name;
        expect(name).to.equals(typeOfName);
    });

    it('should parse <AddWishItemRequest> to <WishItem>', () => {
        const parser = new ParserFactory();
        const source = new WishItemRequest();
        source.name = 'name';
        source.indexNum = 666;
        const parseRes: WishItem = parser.getParserFor(WishItemRequest).parse(source).to<WishItem>();
        expect(parseRes.name).to.equals(source.name);
        expect(parseRes.indexNum).to.equals(source.indexNum);
        expect(parseRes.created).to.be.instanceof(Date);
    });

    it('should parse <AddWishItemRequest[]> to <WishItem[]>', () => {
        const parser = new ParserFactory();
        const source = new WishItemRequest();
        source.name = 'name';
        source.indexNum = 666;
        const parseRes: WishItem[] = parser.getParserFor(WishItemRequest).parseArr([source]).to<WishItem>();
        expect(parseRes).has.length(1);
        expect(parseRes[0].name).to.equals(source.name);
        expect(parseRes[0].indexNum).to.equals(source.indexNum);
        expect(parseRes[0].created).to.be.instanceof(Date);
    });


    it('should throw error', () => {
        const parser = new ParserFactory();
        const source = new WishItem();
        source.name = 'name';
        source.indexNum = 666;
        expect(() => parser.getParserFor(WishItem).parse(source).to<WishItem>()).to.throw();
    });
});
