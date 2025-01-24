const { GoogleGenerativeAI } = require("@google/generative-ai");
const QuotesRepository = require("../../application/interfaces/QuotesRepository");

const genAi = new GoogleGenerativeAI("API-KEY");
const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash" });

class GeminiApi extends QuotesRepository {
    async getDailyQuotes() {
        const prompt = `Please provide three inspirational quotes for meditation, one for each part of the day: morning, noon, and evening. 
        Return the response in JSON format with the following structure:
        {
            "morningQuote": "Your morning quote here",
            "noonQuote": "Your noon quote here",
            "eveningQuote": "Your evening quote here"
        } Return the JSON only without using the keyword "json".`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        return text;
    }

    async getAdviceByMood(mood) {
        let prompt;

        switch (mood.toLowerCase()) {
            case 'happy':
                prompt = `I'm glad to hear you're happy! To maintain this mood:
                - Try something new and reward yourself.
                - Spend time with people you love.
                - Go outside and enjoy a nice walk.
                - Do something creative, like drawing or writing.`;
                break;
            case 'calm':
                prompt = `Being in a calm mood is soothing! To deepen this moment:
                - Practice meditation to reinforce your calmness.
                - Read a book in a quiet place or listen to the sounds of nature.
                - Try a light yoga session to relax your body.`;
                break;
            case 'relaxed':
                prompt = `Feeling relaxed is such a great emotion! To keep this feeling:
                - Grab a warm drink and enjoy your favorite corner.
                - Play some soft music and meditate a little.
                - Take deep breaths and let go of all negative energy.`;
                break;
            case 'focused':
                prompt = `Being focused is amazing! To make the most out of this state:
                - Review your to-do list and start with the most important tasks.
                - Take short breaks to keep your energy high.
                - Choose a quiet environment to work in.
                - Avoid distractions that might break your focus.`;
                break;
            default:
                prompt = `For this mood, here are a few suggestions:
                - If you're not feeling great, try taking some deep breaths to relax.
                - Go for a walk or listen to music you enjoy.
                - Exercising can help improve your mood.
                - Try meditating or take a warm shower.
                - Spend time watching your favorite movie or series.
                - Talking to someone you trust might also help.`;
                break;
        }

        prompt += ` So, this mood is: ${mood}.
        Return the response in JSON format, but without using the keyword "json".`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        return text;
    }
}

module.exports = GeminiApi;
