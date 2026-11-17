export declare class EventManager {
    constructor();
    private events;
    get eventNames(): string[];
    offByPrefix(prefix: string): void;
    on(eventName: string, func: Function, ctx?: unknown): void;
    off(eventName: string, func?: Function): void;
    emit(eventName: string, ...args: unknown[]): void;
    clear(): void;
}
