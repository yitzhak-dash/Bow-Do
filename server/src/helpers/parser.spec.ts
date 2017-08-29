import { expect } from 'chai';
//
import { getName, initParserMap, parse } from './parser';
import { AddWishItemRequest } from './request-body.validator';
import { WishItem } from '../models/wish-item.model';

describe('Parser tests', () => {
    it('getName should get name', () => {
        const name = getName(AddWishItemRequest);
        expect(name).to.equals('AddWishItemRequest');
    });

    it('getName should be equal constructor name', () => {
        const name = getName(AddWishItemRequest);
        const typeOfName = (new AddWishItemRequest()).constructor.name;
        expect(name).to.equals(typeOfName);
    });

    it('should parse <AddWishItemRequest> to <WishItem>', () => {
        initParserMap();
        const source = new AddWishItemRequest();
        source.name = 'name';
        source.indexNum = 666;
        const parseRes = parse(source).to<WishItem>();
        expect(parseRes.name).to.equals(source.name);
        expect(parseRes.indexNum).to.equals(source.indexNum);
        expect(parseRes.created).instanceof(Date);
    });
});
