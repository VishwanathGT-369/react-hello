import React from 'react';

const Hello = () => {
    return React.createElement('div',
                                {className : 'testClass',
                                 id: 'testId'},
                                React.createElement('h1', null, 'Hello JSX'));
} ;

export default Hello;