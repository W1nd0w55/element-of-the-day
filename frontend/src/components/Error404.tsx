const Error404 = () => {
    return <div className='w-screen h-screen bg-black text-white flex justify-center items-center jbmono'>
        <div className='text-[30pt] flex flex-col text-center items-center'>
            <div>Your element is...</div>
            <div className='flex flex-col w-30 h-30 border-2 border-white border-solid p-0.75 red-glow'>
                <div className='flex flex-row w-27.5 h-5 text-[10pt] mb-auto'>
                    <div className='mr-auto'>404</div>
                    <div>Not Found</div>
                </div>
                <div>Un</div>
                <div className='text-[10pt] mt-auto'>Unobtainium</div>
            </div>
        </div>
    </div>;
};

export default Error404;
