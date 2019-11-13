const uuid62 = require('uuid62');

export class UuidGenerator {
    public static generateId() {
        return uuid62.v4();
    }
}
