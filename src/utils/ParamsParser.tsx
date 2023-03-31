export function parseParams(params: object):string {
    let result = '';
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            const value = params[key];
            result += `${key}=${value}&`;
        }
    }
    return result.length > 0 ? '?' + result : '';
}