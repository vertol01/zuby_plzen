import * as b from 'bobril';
import * as flux from 'bobflux';
import { mainPage } from './pages/mainPage';
import { aboutPage } from './pages/aboutPage';
import { contactPage } from './pages/contactPage';
import { homePage } from './pages/homePage';
import { servicesPage } from './pages/servicesPage';
import * as state from './appState'; 

flux.bootstrap(state.createDefaultState());

b.routes(
    b.route({ handler: mainPage }, [
        b.route({ url: '/home', name: 'home', handler: homePage }),
        b.route({ url: '/about', name: 'about', handler: aboutPage }),
        b.route({ url: '/contact', name: 'contact', handler: contactPage }),
        b.route({ url: '/services', name: 'services', handler: servicesPage }),
        b.routeDefault({ handler: homePage })
    ])
);