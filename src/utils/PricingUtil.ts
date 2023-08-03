export default class PricingUtil {
  usdToCadConversion = 1.31;

  usdToCad(usdPrice: number): number {
    return this.roundNumberToPrice(usdPrice * this.usdToCadConversion);
  }

  cadToUsd(cadPrice: number): number {
    return this.roundNumberToPrice(cadPrice / this.usdToCadConversion);
  }

  roundNumberToPrice(num: number): number {
    return Math.round(num * 100) / 100;
  }
}
