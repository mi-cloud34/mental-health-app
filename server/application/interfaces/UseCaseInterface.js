class UseCaseInterface {
    async execute() {
        throw new Error("Method 'execute()' must be implemented.");
    }
}

module.exports = UseCaseInterface;
