import session from 'express-session'

export class ExpressSession {

    private static memory:any

    public static memoryStore() {
        if (this.memory) {
            return this.memory
        } else {
            this.memory = new session.MemoryStore()
            return this.memory       
        }
    }
}