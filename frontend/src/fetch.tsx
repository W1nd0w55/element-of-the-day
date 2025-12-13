import type { ElementSpec } from './common';

const fetchElement = async (): Promise<ElementSpec> => {
    const response: Response = await fetch('/api/info');
    const content: ElementSpec = await response.json();
    return content;
};

export default fetchElement;
