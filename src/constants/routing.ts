// a list of tokens by chain
import { NativeCurrency, Token } from '@yumyumswap/sdk-core'

import { SupportedChainId } from './chains'
import {
  AMPL,
  CEUR_CELO,
  CMC02_CELO,
  CUSD_CELO,
  DAI,
  DAI_ARBITRUM_ONE,
  DAI_OPTIMISM,
  DAI_POLYGON,
  DAI_PULSE,
  ETH2X_FLI,
  FEI,
  FRAX,
  FXS,
  nativeOnChain,
  PORTAL_ETH_CELO,
  PORTAL_USDC_CELO,
  renBTC,
  rETH2,
  sETH2,
  SWISE,
  TRIBE,
  USDC_BASE_CHAIN,
  USDC_BASE_GOERLI_CHAIN,
  USDC_BNB_CHAIN,
  USDC_MAINNET,
  USDC_POLYGON,
  USDC_PULSE,
  USDT,
  USDT_ARBITRUM_ONE,
  USDT_BASE_CHAIN,
  USDT_BASE_GOERLI_CHAIN,
  USDT_BNB_CHAIN,
  USDT_OPTIMISM,
  USDT_POLYGON,
  USDT_PULSE,
  WBTC,
  WBTC_ARBITRUM_ONE,
  WBTC_OPTIMISM,
  WBTC_PULSE,
  WETH_POLYGON,
  WETH_PULSE,
  WRAPPED_NATIVE_CURRENCY,
} from './tokens'

type ChainTokenList = {
  readonly [chainId: number]: Array<Token | NativeCurrency>
}

const WRAPPED_NATIVE_CURRENCIES_ONLY: ChainTokenList = Object.fromEntries(
  Object.entries(WRAPPED_NATIVE_CURRENCY)
    .map(([key, value]) => [key, [value]])
    .filter(Boolean)
)

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WRAPPED_NATIVE_CURRENCIES_ONLY,
  [SupportedChainId.MAINNET]: [
    nativeOnChain(SupportedChainId.MAINNET),
    DAI,
    USDC_MAINNET,
    USDT,
    WBTC,
    ...WRAPPED_NATIVE_CURRENCIES_ONLY[SupportedChainId.MAINNET],
  ],
  [SupportedChainId.OPTIMISM]: [
    ...WRAPPED_NATIVE_CURRENCIES_ONLY[SupportedChainId.OPTIMISM],
    DAI_OPTIMISM,
    USDT_OPTIMISM,
    WBTC_OPTIMISM,
  ],
  [SupportedChainId.ARBITRUM_ONE]: [
    ...WRAPPED_NATIVE_CURRENCIES_ONLY[SupportedChainId.ARBITRUM_ONE],
    DAI_ARBITRUM_ONE,
    USDT_ARBITRUM_ONE,
    WBTC_ARBITRUM_ONE,
  ],
  [SupportedChainId.POLYGON]: [
    ...WRAPPED_NATIVE_CURRENCIES_ONLY[SupportedChainId.POLYGON],
    DAI_POLYGON,
    USDC_POLYGON,
    USDT_POLYGON,
    WETH_POLYGON,
  ],
  [SupportedChainId.CELO]: [
    ...WRAPPED_NATIVE_CURRENCIES_ONLY[SupportedChainId.CELO],
    CUSD_CELO,
    CEUR_CELO,
    CMC02_CELO,
    PORTAL_USDC_CELO,
    PORTAL_ETH_CELO,
  ],
  [SupportedChainId.BNB]: [
    nativeOnChain(SupportedChainId.BNB),
    USDC_BNB_CHAIN,
    USDT_BNB_CHAIN,
    ...WRAPPED_NATIVE_CURRENCIES_ONLY[SupportedChainId.BNB],
  ],
  [SupportedChainId.BASE_GOERLI]: [
    ...WRAPPED_NATIVE_CURRENCIES_ONLY[SupportedChainId.BASE_GOERLI],
    USDC_BASE_GOERLI_CHAIN,
    USDT_BASE_GOERLI_CHAIN,
  ],
  [SupportedChainId.BASE]: [...WRAPPED_NATIVE_CURRENCIES_ONLY[SupportedChainId.BASE], USDC_BASE_CHAIN, USDT_BASE_CHAIN],
  [SupportedChainId.PULSE]: [
    ...WRAPPED_NATIVE_CURRENCIES_ONLY[SupportedChainId.PULSE],
    USDC_PULSE,
    USDT_PULSE,
    DAI_PULSE,
    WBTC_PULSE,
    WETH_PULSE, 
  ],
}
export const ADDITIONAL_BASES: { [chainId: number]: { [tokenAddress: string]: Token[] } } = {
  [SupportedChainId.MAINNET]: {
    '0xF16E4d813f4DcfDe4c5b44f305c908742De84eF0': [ETH2X_FLI],
    [rETH2.address]: [sETH2],
    [SWISE.address]: [sETH2],
    [FEI.address]: [TRIBE],
    [TRIBE.address]: [FEI],
    [FRAX.address]: [FXS],
    [FXS.address]: [FRAX],
    [WBTC.address]: [renBTC],
    [renBTC.address]: [WBTC],
  },
}
/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId: number]: { [tokenAddress: string]: Token[] } } = {
  [SupportedChainId.MAINNET]: {
    [AMPL.address]: [DAI, WRAPPED_NATIVE_CURRENCY[SupportedChainId.MAINNET] as Token],
  },
}
