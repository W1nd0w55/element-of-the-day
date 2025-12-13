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

    if (element.name === 'Placeholder') {
        return <h1 className='text-[30pt]'>Loading...</h1>
    }

    return <div className='text-[30pt] flex flex-col text-center items-center'>
        <div>Today's element is...</div>
        <div className='flex flex-col w-[110px] h-[110px] border-[2px] border-white border-solid p-[3px]'>
            <div className='flex flex-row w-[100px] h-[20px] text-[10pt] mb-[auto]'>
                <div className='mr-[auto]'>{element.num}</div>
                <div>{element.mass}</div>
            </div>
            <div>{element.symbol}</div>
            <div className='text-[10pt] mt-[auto]'>{element.name}</div>
        </div>
    </div>;
};

export default Content;
