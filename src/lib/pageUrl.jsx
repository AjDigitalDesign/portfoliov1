import fetch from "isomorphic-unfetch";

export function serverUrl(ctx) {
    const prefix = process.env.NODE_ENV !== 'production' ? 'http://' : '//';
    const host =
        typeof window !== 'undefined' ? '' : `${prefix}${ctx.req.headers.host}`;
    return `${host}`;
}