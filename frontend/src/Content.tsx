import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
};

const Content = (props: Props) => {
    return <div className='text-[30pt]'>
        {props.children}
    </div>;
};

export default Content;
