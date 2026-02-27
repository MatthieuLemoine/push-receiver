export default function defer<T>(): { promise: Promise<T>; resolve: (value?: T | PromiseLike<T>) => void; reject: (reason?: any) => void; isResolved: boolean } {
    let resolve: (value?: T | PromiseLike<T>) => void;
    let reject: (reason?: any) => void;
    let isResolved = false;

    const promise = new Promise<T>((res, rej) => {
        resolve = (value?: T | PromiseLike<T>) => {
            isResolved = true;
            res(value);
        };
        reject = (reason?: any) => {
            isResolved = true;
            rej(reason);
        };
    });

    return { promise, resolve, reject, isResolved };
}
