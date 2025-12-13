import fetchElement from './fetch';
import type { ElementSpec } from './common';
import { useState, useEffect } from 'react';

const Content = () => {
    const [element, setElement] = useState<ElementSpec>({
        num: 0,
        name: 'Placeholder',
        symbol: '',
        mass: 0.0,
        series: '',
        state: ''
    });

    useEffect(() => {
        (async () => {
            const element: ElementSpec = await fetchElement();
            setElement(element);
        })();
    });

    return <div className='text-[30pt]'>
        {element.name}
    </div>;
};

export default Content;
