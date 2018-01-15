import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

export const env = { api_url: 'http://localhost:3000' };

export const methodNames = [
  'get',
  'post',
  'put',
  'patch',
  'delete'
]

@Injectable()
export class DataService {
  
  private headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': ''
  });

  constructor(private http: Http, private auth: AuthService) {
  }

  callHandler(method: string, endpoint: string, options?: any): Promise<any> {
    return new Promise(async (resolve, reject) => {

      let params: any = {};

      if (typeof method !== 'string') {
        return Promise.reject('Wrong param1 data type');
      }

      method = method.toLowerCase()

      if (methodNames.indexOf(method) === -1) {
        return Promise.reject('Wrong method name');
      }

      if (method === 'post' || method === 'patch' || method === 'put') {
        if (!options || !options.data) {
          return Promise
          .reject('You need to provide data if you want to make '+method.toUpperCase()+' request');
        }

        params.data = options.data;
      }


      let url = `${env.api_url}/${endpoint}`;

      if (options && options.query) {
        url += this.getQuery(options.query);
      }

      params.url = url;

      this.headers.set('Authorization', this.auth.getAuthHeader());

      try { 
        resolve(await this[method](params));
      } catch(err) {
        reject(err);
      }

    });
  }

  private get({ url }): Promise<any> {
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(response => {
        return response.json();
      }).catch(err => {
        return this.handleError(err);
      });
  }

  private post({ url, data }): Promise<any> {
    return this.http
      .post(url, JSON.stringify(data), { headers: this.headers })
      .toPromise()
      .then(response => {
         try {
           return response.json()
         } catch(err) {
           return response;
         }
      }).catch(err => {
        return this.handleError(err);
      });
  }

  private delete({ url }): Promise<any> {
    return this.http
      .delete(url, { headers: this.headers })
      .toPromise()
      .then(() => {
        return null;
      }).catch(err => {
        return this.handleError(err);
      });
  }

  private put({ url, data }): Promise<any> {
    return this.http
      .put(url, JSON.stringify(data), { headers: this.headers })
      .toPromise()
      .then(response => {
        return response.json();
      }).catch(err => {
        return this.handleError(err);
      });
  }

  private handleError(error: any): Promise<any> {
    // TODO: Better system;
    console.error(error);
    return Promise.reject(error);
  }

  private getQuery(query) {
    let q = '?';
    for(let key in query) {
      if(query.hasOwnProperty(key)) {
        q += key + '=' + query[key] + '&';
      }
    }

    q = q.substr(0, q.length - 1);

    return q;
  }

}
