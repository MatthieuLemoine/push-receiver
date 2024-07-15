import { EventEmitter } from "node:events"

export type Unsubscribe = CallableFunction

interface EmitterEvents {}

export default class ClassWithEmitter<EventMap extends EmitterEvents> {
    #emitter = new EventEmitter()

    on<K extends keyof EventMap>(eventName: K, listener: EventMap[K]): Unsubscribe {
        const handler = (...args: any[]) => {
            try {
                return (listener as CallableFunction)(...args)
            } catch (err: any) {
                console.error(err)
            }
        }

        this.#emitter.on(eventName as string, handler)
        return () => this.#emitter.off(eventName as string, handler)
    }

    // @ts-expect-error - no reason TODO: Fixme
    emit<K extends keyof EventMap>(eventName: K, ...args: Parameters<EventMap[K]>) {
        console.log('emit', eventName, ...args)
        this.#emitter.emit(eventName as string, ...args)
    }
}