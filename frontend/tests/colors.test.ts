import { test, expect } from 'vitest';
import { setColors } from '../src/common';
import type { ColorsSpec, ElementSpec } from '../src/common';

const testSeries = (series: string, color: string): void => {
    const element: ElementSpec = {
        num: 0,
        name: 'Placeholder',
        symbol: '',
        mass: 0.0,
        // This is the one we actually need
        series: series,
        state: 'Solid'
    };

    const colors: ColorsSpec = setColors(element);    
    expect(colors.backgroundColor).toBe(color);
};

const testState = (state: string, bgColor: string): void => {
    const element: ElementSpec = {
        num: 0,
        name: 'Placeholder',
        symbol: '',
        mass: 0.0,
        series: 'Nonmetal',
        // This is the one we actually need
        state: state
    };

    const colors: ColorsSpec = setColors(element);    
    expect(colors.color).toBe(bgColor);
};

test('Background color setting', (): void => {
    testSeries('Alkali Metal', '#825b2c');
    testSeries('Alkaline Earthmetal', '#957839');
    testSeries('Lanthanoid', '#5f4f3e');
    testSeries('Lanthanoid/Transition Metal', '#5f4f3e');
    testSeries('Actinoid', '#885068');
    testSeries('Actinoid/Transition Metal', '#885068');
    testSeries('Transition Metal', '#863840');
    testSeries('Post-transition Metal', '#2c577d');
    testSeries('Metalloid', '#2c6c64');
    testSeries('Nonmetal', '#5d7c3f');
    testSeries('Noble Gas', '#5a466c');
    testSeries('Metalloid/Noble Gas', '#5a466c');
});

test('Text color setting', (): void => {
    testState('Solid', '#ffffff');
    testState('Liquid', '#aabbff');
    testState('Gas', '#ff4444')
});
