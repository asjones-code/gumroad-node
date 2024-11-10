import Gumroad from '../dist/index.mjs'
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({apiKey:process.env.CHATGPT_KEY});

const client = new Gumroad({
    clientId: process.env.GUMROAD_CLIENT_ID,
    clientSecret: process.env.GUMROAD_CLIENT_SECRET,
    accessToken: process.env.GUMROAD_ACCESS_TOKEN,
    defaultQuery: {
        access_token: process.env.GUMROAD_DEFAULT_ACCESS_TOKEN,
    }
});

async function main() {
    const product = await client.products.list();
    const content = await product.blob();
    const text = await content.text();  // Convert Blob to text (a string)
    const jsonData = JSON.parse(text);  // Parse the text string as JSON
    const customSummaries = jsonData.products.map(product => product.custom_summary);
    console.log(customSummaries);
    return customSummaries; // Return the custom summaries array
}
async function gpt(customSummaries) {
    try {
        if (customSummaries.length === 0) {
            console.log("No summaries available.");
            return;
        }
        // Pass the custom summaries to GPT
        const completion = await openai.chat.completions.create({
            model: 'gpt-4', // Using gpt-4 instead of gpt-4o
            messages: [
                { role: 'user', content: 'draft an email to get users to purchase each of the products.' },
                ...customSummaries.map(summary => ({ role: 'user', content: summary }))
            ],
        });
        console.log('Assistant:', completion.choices[0].message.content);
    } catch (error) {
        console.error("Error during API call:", error);
    }
}
async function run() {
    // Get custom summaries from main
    const customSummaries = await main();
    // Call GPT with the custom summaries as an argument
    await gpt(customSummaries);
}
run();
