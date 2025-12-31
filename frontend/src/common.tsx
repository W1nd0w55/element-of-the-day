interface ElementSpec {
    num: number;
    name: string;
    symbol: string;
    mass: number;
    series: string;
    state: string;
};

interface ColorsSpec {
    color: string;
    backgroundColor: string;
};

interface DataSpec {
    element: ElementSpec,
    colors: ColorsSpec
};

const setColors = (element: ElementSpec): ColorsSpec => {
    const col: ColorsSpec = {
        color: '#7f7f7f',
        backgroundColor: '#404040'
    };

    switch (element.state) {
    case 'Solid':
        col.color = '#ffffff';
        break;
    case 'Liquid':
        col.color = '#aabbff';
        break;
    case 'Gas':
        col.color = '#ff4444';
        break;
    };

    switch (element.series) {
    case 'Alkali Metal':
        col.backgroundColor = '#825b2c';
        break;
    case 'Alkaline Earthmetal':
        col.backgroundColor = '#957839';
        break;
    case 'Lanthanoid':
    case 'Lanthanoid/Transition Metal':
        col.backgroundColor = '#5f4f3e';
        break;
    case 'Actinoid':
    case 'Actinoid/Transition Metal':
        col.backgroundColor = '#885068';
        break;
    case 'Transition Metal':
        col.backgroundColor = '#863840';
        break;
    case 'Post-transition Metal':
        col.backgroundColor = '#2c577d';
        break;
    case 'Metalloid':
        col.backgroundColor = '#2c6c64';
        break;
    case 'Nonmetal':
        col.backgroundColor = '#5d7c3f';
        break;
    case 'Noble Gas':
    case 'Metalloid/Noble Gas':
        col.backgroundColor = '#5a466c';
        break;
    }

    return col;
};

export type { ElementSpec, ColorsSpec, DataSpec };
export { setColors };
