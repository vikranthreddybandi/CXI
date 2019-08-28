const navigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'main-component',
                'title': 'Main',
                'type' : 'item',
                'icon' : 'whatshot',
                'url'  : '/main'
            },
            {
                'id'   : 'search',
                'title': 'Search',
                'type' : 'item',
                'icon' : 'account_box',
                'url'  : '/search'
            },
            {
                'id'   : 'ConsumerSurvey',
                'title': 'ConsumerSurvey',
                'type' : 'item',
                'icon' : 'account_box',
                'url'  : '/ConsumerSurvey'
            },
            {
                'id'   : 'ThankYou',
                'title': 'ThankYou',
                'type' : 'item',
                'icon' : 'account_box',
                'url'  : '/ThankYou'
            },
            
        ]
    }
];

export default navigationConfig;
