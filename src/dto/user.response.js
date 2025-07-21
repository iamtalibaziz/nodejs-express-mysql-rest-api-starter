class UserResponse {
    constructor(doc) {
        this.id = doc.id;
        this.name = doc.name;
        this.email = doc.email;
    }
    static from(doc) {
        return new UserResponse(doc);
    }

    static fromList(docs) {
        return docs.map(doc => new UserResponse(doc));
    }
}

module.exports = UserResponse;
