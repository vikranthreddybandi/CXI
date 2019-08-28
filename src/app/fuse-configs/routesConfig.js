import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse/index';
import {ExampleConfig} from 'app/main/example/ExampleConfig';
import {QRConsumerConfig} from 'app/main/QRconsumer/QRConsumerConfig';
import {MainNavigationConfig} from 'app/main/MainNavigationConfig';

const routeConfigs = [
    ExampleConfig,
    QRConsumerConfig,
    MainNavigationConfig,
    
];

 const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/QRconsumer"/>
    }
];

 export default routes;
