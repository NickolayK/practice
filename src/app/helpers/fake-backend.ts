﻿import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { User } from '../models/user.model';
import { Image } from '../models/image.model';

const users: User[] = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];

const images: Image[] = [
    {
        url:'https://gsr.dev/material2-carousel/assets/demo.png',
        name: 'name'
    },
    {
        url: 'https://gsr.dev/material2-carousel/assets/demo.png',
        name: 'name1'
    },
    {
        url: 'https://gsr.dev/material2-carousel/assets/demo.png',
        name: 'name2'
    },
    {
        url: 'https://gsr.dev/material2-carousel/assets/demo.png',
        name: 'name3'
    },
    {
        url: 'https://gsr.dev/material2-carousel/assets/demo.png',
        name: 'name4'
    },
    {
        url: 'https://gsr.dev/material2-carousel/assets/demo.png',
        name: 'name5'
    },
    {
        url: 'https://gsr.dev/material2-carousel/assets/demo.png',
        name: 'name6'
    },
    {
        url: 'https://gsr.dev/material2-carousel/assets/demo.png',
        name: 'name7'
    }]

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {

            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/images') && method === 'GET':
                    return getImages();
                default:
                    return next.handle(request);
            }
        }

        // route functions

        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user) {
                return error('Username or password is incorrect');
            }
            return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName
            });
        }

        function getImages() {
            if (!isLoggedIn()) {
                return unauthorized();
            }
            return ok(images);
        }

        // helper functions

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function error(message) {
            return throwError({ error: { message } });
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function isLoggedIn() {
            return headers.get('Authorization') === `Basic ${window.btoa('test:test')}`;
        }
    }
}

export let fakeBackendProvider = {

    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
