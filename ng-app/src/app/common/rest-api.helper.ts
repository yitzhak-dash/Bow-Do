import { environment } from '../../environments/environment';
import { RequestOptions, Headers } from '@angular/http';


export const getApiUrl: () => string = () => environment.apiUrl;

export const createOptions = () => {
  const opt = new RequestOptions();
  return {
    withHeader: (): RequestOptions => {
      opt.headers = new Headers();
      opt.headers.append('Content-Type', 'application/json');
      return opt;
    }
  };
};
