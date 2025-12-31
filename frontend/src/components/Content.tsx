import type { DataSpec } from '../common';
import Element from './Element';

const Content = ({element, colors}: DataSpec) => {
    return <div className='w-screen h-screen bg-black text-white flex justify-center items-center jbmono'>
        <div className='text-[30pt] flex flex-col text-center items-center'>
            <div>Today's element is...</div>
            <Element element={element} colors={colors} />
        </div>
    </div>;
};

export default Content;
