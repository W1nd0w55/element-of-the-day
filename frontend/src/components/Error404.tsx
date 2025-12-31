import Content from './Content';
import type { ElementSpec, ColorsSpec } from '../common';

const Error404 = () => {
    const element: ElementSpec = {
        num: 404,
        name: 'Unobtainium',
        symbol: 'Un',
        mass: 'Not Found',
        series: 'what',
        state:  'ever'
    };

    const colors: ColorsSpec = {
        color: '#ffffff',
        backgroundColor: '#000000'
    }

    return <Content element={element} colors={colors} red={true} />;
};

export default Error404;
