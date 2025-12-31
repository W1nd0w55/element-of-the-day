import { setColors } from '../common';
import type { ElementSpec, ColorsSpec } from '../common';
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
            const response: Response = await fetch('/api/info');
            setElement(await response.json());
        })();
    }, []);

    if (element.name === 'Placeholder') {
        return <h1 className='text-[30pt]'>Loading...</h1>
    }

    const colors: ColorsSpec = setColors(element);

    return <div className='text-[30pt] flex flex-col text-center items-center'>
        <div>Today's element is...</div>
        <div style={{backgroundColor: colors.backgroundColor}} className='flex flex-col w-[110px] h-[110px] border-[2px] border-white border-solid p-[3px] glow'>
            <div className='flex flex-row w-[100px] h-[20px] text-[10pt] mb-[auto]'>
                <div className='mr-[auto]'>{element.num}</div>
                <div>{element.mass}</div>
            </div>
            <div style={{color: colors.color}}>{element.symbol}</div>
            <div className='text-[10pt] mt-[auto]'>{element.name}</div>
        </div>
    </div>;
};

export default Content;
