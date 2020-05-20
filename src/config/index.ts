import React from 'react';

const config = { name: 'ecode' };

const ConfigProvider = React.createContext(config);

export {
    config,
    ConfigProvider
};