import { expect } from 'chai';
//
import { AddWishItemRequest } from './request-body.validator';
import { WishItem } from '../models/wish-item.model';
import { Parser } from './parser';


describe('Parser tests', () => {
    it('getName should get name', () => {
        const parser = new Parser();
        const name = parser.getInstanceName(AddWishItemRequest);
        expect(name).to.equals('AddWishItemRequest');
    });

    it('getName should be equal constructor name', () => {
        const parser = new Parser();
        const name = parser.getInstanceName(AddWishItemRequest);
        const typeOfName = (new AddWishItemRequest()).constructor.name;
        expect(name).to.equals(typeOfName);
    });

    it('should parse <AddWishItemRequest> to <WishItem>', () => {
        const parser = new Parser();
        const source = new AddWishItemRequest();
        source.name = 'name';
        source.indexNum = 666;
        const parseRes = parser.parse(source).to<WishItem>();
        expect(parseRes.name).to.equals(source.name);
        expect(parseRes.indexNum).to.equals(source.indexNum);
        expect(parseRes.created).instanceof(Date);
    });

    it('should throw error', () => {
        const parser = new Parser();
        const source = new WishItem();
        source.name = 'name';
        source.indexNum = 666;
        expect(() => parser.parse(source).to<WishItem>()).to.throw();
    });
});
