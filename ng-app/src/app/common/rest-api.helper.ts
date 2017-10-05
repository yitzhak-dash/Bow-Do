import { environment } from '../../environments/environment';
import { RequestOptions } from '@angular/http';


export const getApiUrl: () => string = () => environment.apiUrl;

export const createOptions = () => {
  const opt = new RequestOptions();
  return {
    withHeader: (): RequestOptions => {
      opt.headers.set('Content-Type', 'application/json');
      return opt;
    }
  };
};
