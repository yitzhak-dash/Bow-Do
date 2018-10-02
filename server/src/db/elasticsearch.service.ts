import * as elasticsearch from 'elasticsearch';
import * as config from 'config';
import { injectable } from 'inversify';

import { SearchResponse } from 'elasticsearch';

export interface IElasticsearchService {
    runQuery<T>(query: any): Promise<SearchResponse<T>>;
}

@injectable()
export class ElasticsearchService implements IElasticsearchService {
    private esConfig = config.get<any>('elastic');

    private createClient() {
        return new elasticsearch.Client({
            host: this.esConfig.host,
            log: ['error', /*'trace'*/]
        });
    }

    public runQuery<T>(query: any): Promise<SearchResponse<T>> {
        const client = this.createClient();
        return client.search<T>({
            index: this.esConfig.index,
            body: query
        }).then(res => {
            client.close();
            return res;
        });
    }

    ping(): Promise<any> {
        return this.createClient().ping({requestTimeout: 3000});
    }

}
