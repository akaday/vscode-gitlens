export type AnthropicModels =
	| 'claude-instant-1'
	| 'claude-2'
	| 'claude-2.1'
	| 'claude-3-opus-20240229'
	| 'claude-3-opus-latest'
	| 'claude-3-sonnet-20240229'
	| 'claude-3-5-sonnet-20240620'
	| 'claude-3-5-sonnet-20241022'
	| 'claude-3-5-sonnet-latest'
	| 'claude-3-haiku-20240307';

export type GeminiModels = 'gemini-1.0-pro' | 'gemini-1.5-pro-latest' | 'gemini-1.5-flash-latest';

export type HuggingChatModels =
	| 'google/gemma-1.1-2b-it'
	| 'meta-llama/Llama-3.2-3B-Instruct'
	| 'microsoft/Phi-3-mini-4k-instruct'
	| 'HuggingFaceH4/starchat2-15b-v0.1'
	| 'mistralai/Mistral-Nemo-Instruct-2407';

export type OpenAIModels =
	| 'gpt-4o'
	| 'gpt-4o-mini'
	| 'gpt-4-turbo'
	| 'gpt-4-turbo-2024-04-09'
	| 'gpt-4-turbo-preview'
	| 'gpt-4-0125-preview'
	| 'gpt-4-1106-preview'
	| 'gpt-4'
	| 'gpt-4-0613'
	| 'gpt-4-32k'
	| 'gpt-4-32k-0613'
	| 'gpt-3.5-turbo'
	| 'gpt-3.5-turbo-0125'
	| 'gpt-3.5-turbo-1106'
	| 'gpt-3.5-turbo-16k';

export type VSCodeAIModels = `${string}:${string}`;

export type xAIModels = 'grok-beta';

export type AIProviders = 'anthropic' | 'gemini' | 'huggingchat' | 'openai' | 'vscode' | 'xai';
export type AIModels<Provider extends AIProviders = AIProviders> = Provider extends 'openai'
	? OpenAIModels
	: Provider extends 'anthropic'
	  ? AnthropicModels
	  : Provider extends 'gemini'
	    ? GeminiModels
	    : Provider extends 'huggingchat'
	      ? HuggingChatModels
	      : Provider extends 'vscode'
	        ? VSCodeAIModels
	        : Provider extends 'xai'
	          ? xAIModels
	          : AnthropicModels | GeminiModels | OpenAIModels | xAIModels;

export type SupportedAIModels =
	| `anthropic:${AIModels<'anthropic'>}`
	| `google:${AIModels<'gemini'>}`
	| `huggingchat:${AIModels<'huggingchat'>}`
	| `openai:${AIModels<'openai'>}`
	| `xai:${AIModels<'xai'>}`
	| 'vscode';
