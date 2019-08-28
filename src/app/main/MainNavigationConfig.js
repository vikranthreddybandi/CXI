
import QRconsumer from '../main/QRconsumer/ConsumerSurveyLanding';
import ThankYou from './QRconsumer/ThankYou';
import SignUp from './QRconsumer/SignUp';
import EMailTemplate from './QRconsumer/EMailTemplate';
import BarcodeLanding from './QRconsumer/BarcodeLanding';
import SignIn from './QRconsumer/SignIn';


export const MainNavigationConfig = {
    settings: {
        layout: {
            config: {
                navbar        : {
                    display: false
                },
                toolbar       : {
                    display: false
                },
                footer        : {
                    display: false
                },
                leftSidePanel : {
                    display: false
                },
                rightSidePanel: {
                    display: false
                }
            }
        }
    },
    routes  : [
        
        {
            path     : '/ConsumerSurveyLanding',
            component: QRconsumer
        },
        {
            path     : '/ThankYou',
            component: ThankYou
        },
        {
            path     : '/SignUp',
            component: SignUp
        },
        {
            path     : '/EMailTemplate',
            component: EMailTemplate
        },
        {
            path     : '/BarcodeLanding',
            component: BarcodeLanding
        },
        {
            path     : '/SignIn',
            component: SignIn
        },

    ]
};

/**
 * Lazy load Example
 */
/*
import FuseLoadable from '@fuse/components/FuseLoadable/FuseLoadable';

export const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: FuseLoadable({
                loader: () => import('./Example')
            })
        }
    ]
};
*/
