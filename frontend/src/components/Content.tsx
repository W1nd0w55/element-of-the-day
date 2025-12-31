import type { DataSpec } from '../common';
import Element from './Element';

const Content = ({element, colors, red}: DataSpec) => {
    const today: Date = new Date();
    const newYear: Date[] = [new Date(today.getFullYear(), 11, 31), new Date(today.getFullYear(), 0, 1)]

    return <div className='w-screen h-screen bg-black text-white flex justify-center items-center jbmono'>
        <div className='text-[30pt] flex flex-col text-center items-center'>
            <div>{today.getDate() === newYear[0].getDate() || today.getDate() === newYear[1].getDate() ? 'Happy New Year!' : 'Today\'s element is...'}</div>
            <Element element={element} colors={colors} red={red} />
        </div>
    </div>;
};

export default Content;
