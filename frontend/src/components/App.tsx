import Content from './Content';
import { setColors } from '../common';
import type { ElementSpec, ColorsSpec } from '../common';
import { useState, useEffect } from 'react';

const App = () => {
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
    return <Content element={element} colors={colors} />
};

export default App;
