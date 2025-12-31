import type { DataSpec } from '../common';

const Element = ({element, colors}: DataSpec) => {
    return <div style={{backgroundColor: colors.backgroundColor}} className='flex flex-col w-27.5 h-27.5 border-2 border-white border-solid p-0.75 glow'>
        <div className='flex flex-row w-25 h-5 text-[10pt] mb-auto'>
            <div className='mr-auto'>{element.num}</div>
            <div>{element.mass}</div>
        </div>
        <div style={{color: colors.color}}>{element.symbol}</div>
        <div className='text-[10pt] mt-auto'>{element.name}</div>
    </div>
};

export default Element;
