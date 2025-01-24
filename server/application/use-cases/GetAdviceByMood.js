const UseCaseInterface = require("../interfaces/UseCaseInterface");
const Meditation = require("../../domain/entities/Meditation");

class GetAdviceByMood extends UseCaseInterface {
    constructor(quotesRepository) {
        super();
        this.quotesRepository = quotesRepository;
    }

    async execute(mood) {
        const quotesData = await this.quotesRepository.getAdviceByMood(mood);
        return new Meditation({ text: quotesData });
    }
}

module.exports = GetAdviceByMood;