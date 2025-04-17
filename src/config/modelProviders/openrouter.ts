import { ModelProviderCard } from '@/types/llm';

// ref :https://openrouter.ai/docs#models
const OpenRouter: ModelProviderCard = {
  chatModels: [
    {
      id: 'openai/gpt-4.1',
      displayName: 'OpenAI: GPT-4.1',
      description:
        'GPT-4.1 is a flagship large language model optimized for advanced instruction following, real-world software engineering, and long-context reasoning.',
      enabled: true,
      contextWindowTokens: 1_047_576,
      maxOutput: 32_768,
      pricing: {
        input: 2,
        output: 8,
      },
      functionCall: true,
      releasedAt: '2025-04-14',
    },
    {
      id: 'openai/gpt-4.1-mini',
      displayName: 'OpenAI: GPT-4.1 Mini',
      description:
        'GPT-4.1 Mini is a mid-sized model delivering performance competitive with GPT-4o at substantially lower latency and cost.',
      enabled: true,
      contextWindowTokens: 1_047_576,
      maxOutput: 32_768,
      pricing: {
        input: 0.4,
        output: 1.6,
      },
      functionCall: true,
      releasedAt: '2025-04-14',
    },
    {
      id: 'openai/gpt-4.1-nano',
      displayName: 'OpenAI: GPT-4.1 Nano',
      description:
        'For tasks that demand low latency, GPT‑4.1 nano is the fastest and cheapest model in the GPT-4.1 series.',
      enabled: true,
      contextWindowTokens: 1_047_576,
      maxOutput: 32_768,
      pricing: {
        input: 0.1,
        output: 0.4,
      },
      functionCall: true,
      releasedAt: '2025-04-14',
    },
    {
      id: 'openai/o4-mini',
      displayName: 'OpenAI: o4 Mini',
      description:
        'OpenAI o4-mini is a compact reasoning model in the o-series, optimized for fast, cost-efficient performance while retaining strong multimodal and agentic capabilities.',
      enabled: true,
      contextWindowTokens: 200_000,
      maxOutput: 100_000,
      pricing: {
        input: 1.1,
        output: 4.4,
      },
      vision: true,
      functionCall: false,
      releasedAt: '2025-04-14',
    },
    {
      id: 'google/gemini-2.0-flash-exp:free',
      displayName: 'Google: Gemini 2.0 Flash Experimental',
      description:
        'Gemini Flash 2.0 offers a significantly faster time to first token (TTFT) compared to Gemini Flash 1.5, while maintaining quality on par with larger models like Gemini Pro 1.5.',
      enabled: true,
      contextWindowTokens: 1_048_576,
      maxOutput: 8192,
      pricing: {
        input: 0,
        output: 0,
      },
      vision: false,
      functionCall: true,
      releasedAt: '2024-12-11',
    },
    {
      id: 'google/gemini-2.5-pro-exp-03-25:free',
      displayName: 'Google: Gemini 2.5 Pro Experimental',
      description:
        'Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. ',
      enabled: true,
      contextWindowTokens: 1_000_000,
      maxOutput: 65535,
      pricing: {
        input: 0,
        output: 0,
      },
      vision: false,
      functionCall: true,
      releasedAt: '2024-12-11',
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
