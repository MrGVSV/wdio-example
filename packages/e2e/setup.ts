let env: any;
try {
    // eslint-disable-next-line import/extensions
    env = require('../env.ts');
} catch (error) {
    env = {};
}

export const ENV = env;