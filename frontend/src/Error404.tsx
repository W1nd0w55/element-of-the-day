const Error404 = () => {
    return <div className='w-[100vw] h-[100vh] bg-black text-white flex justify-center items-center jbmono'>
        <div className='text-[30pt] flex flex-col text-center items-center'>
            <div>Your element is...</div>
            <div className='flex flex-col w-[120px] h-[120px] border-[2px] border-white border-solid p-[3px] red-glow'>
                <div className='flex flex-row w-[110px] h-[20px] text-[10pt] mb-[auto]'>
                    <div className='mr-[auto]'>404</div>
                    <div>Not Found</div>
                </div>
                <div>Un</div>
                <div className='text-[10pt] mt-[auto]'>Unobtainium</div>
            </div>
        </div>
    </div>;
};

export default Error404;
