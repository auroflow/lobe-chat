import { ModelProviderCard } from '@/types/llm';

// ref :https://openrouter.ai/docs#models
const OpenRouter: ModelProviderCard = {
  chatModels: [
    {
      contextWindowTokens: 1_047_576,
      description:
        'GPT-4.1 is a flagship large language model optimized for advanced instruction following, real-world software engineering, and long-context reasoning.',
      displayName: 'OpenAI: GPT-4.1',
      enabled: true,
      functionCall: true,
      id: 'openai/gpt-4.1',
      maxOutput: 32_768,
      pricing: {
        input: 2,
        output: 8,
      },
      releasedAt: '2025-04-14',
    },
    {
      contextWindowTokens: 1_047_576,
      description:
        'GPT-4.1 Mini is a mid-sized model delivering performance competitive with GPT-4o at substantially lower latency and cost.',
      displayName: 'OpenAI: GPT-4.1 Mini',
      enabled: true,
      functionCall: true,
      id: 'openai/gpt-4.1-mini',
      maxOutput: 32_768,
      pricing: {
        input: 0.4,
        output: 1.6,
      },
      releasedAt: '2025-04-14',
    },
    {
      contextWindowTokens: 1_047_576,
      description:
        'For tasks that demand low latency, GPT‑4.1 nano is the fastest and cheapest model in the GPT-4.1 series.',
      displayName: 'OpenAI: GPT-4.1 Nano',
      enabled: true,
      functionCall: true,
      id: 'openai/gpt-4.1-nano',
      maxOutput: 32_768,
      pricing: {
        input: 0.1,
        output: 0.4,
      },
      releasedAt: '2025-04-14',
    },
    {
      contextWindowTokens: 200_000,
      description:
        'OpenAI o4-mini is a compact reasoning model in the o-series, optimized for fast, cost-efficient performance while retaining strong multimodal and agentic capabilities.',
      displayName: 'OpenAI: o4 Mini',
      enabled: true,
      functionCall: false,
      id: 'openai/o4-mini',
      maxOutput: 100_000,
      pricing: {
        input: 1.1,
        output: 4.4,
      },
      releasedAt: '2025-04-14',
      vision: true,
    },
    {
      contextWindowTokens: 1_048_576,
      description:
        'Gemini Flash 2.0 offers a significantly faster time to first token (TTFT) compared to Gemini Flash 1.5, while maintaining quality on par with larger models like Gemini Pro 1.5.',
      displayName: 'Google: Gemini 2.0 Flash Experimental',
      enabled: true,
      functionCall: true,
      id: 'google/gemini-2.0-flash-exp:free',
      maxOutput: 8_192,
      pricing: {
        input: 0,
        output: 0,
      },
      releasedAt: '2024-12-11',
      vision: false,
    },
    {
      contextWindowTokens: 1_000_000,
      description:
        'Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. ',
      displayName: 'Google: Gemini 2.5 Pro Experimental',
      enabled: true,
      functionCall: true,
      id: 'google/gemini-2.5-pro-exp-03-25:free',
      maxOutput: 65_535,
      pricing: {
        input: 0,
        output: 0,
      },
      releasedAt: '2024-12-11',
      vision: false,
    },
  ],
  checkModel: 'google/gemini-2.0-flash-exp:free',
  description:
    'OpenRouter 是一个提供多种前沿大模型接口的服务平台，支持 OpenAI、Anthropic、LLaMA 及更多，适合多样化的开发和应用需求。用户可根据自身需求灵活选择最优的模型和价格，助力AI体验的提升。',
  id: 'openrouter',
  modelList: { showModelFetcher: true },
  modelsUrl: 'https://openrouter.ai/models',
  name: 'OpenRouter',
  proxyUrl: {
    placeholder: 'https://openrouter.ai/api/v1',
  },
  settings: {
    // OpenRouter don't support browser request
    // https://github.com/lobehub/lobe-chat/issues/5900
    disableBrowserRequest: true,

    proxyUrl: {
      placeholder: 'https://openrouter.ai/api/v1',
    },
    sdkType: 'openai',
    searchMode: 'params',
    showModelFetcher: true,
  },
  url: 'https://openrouter.ai',
};

export default OpenRouter;
