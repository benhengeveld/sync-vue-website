import { ScryfallCardData } from "@/models/ScryfallCardData";
import { Observable, from, map, switchMap } from "rxjs";

export default class ScryFallService {
  getCardInfo(setCode: string, cardNum: string): Observable<ScryfallCardData> {
    const baseUrl = "https://api.scryfall.com/cards";
    const requestUrl = `${baseUrl}/${setCode.toLowerCase()}/${cardNum.replace(
      /^0+/,
      ""
    )}`;

    return from(fetch(requestUrl)).pipe(
      switchMap((response) => {
        return response.json();
      }),
      map((data) => {
        return JSON.stringify(data);
      }),
      map((data) => {
        const card: ScryfallCardData = JSON.parse(data);
        return card;
      })
    );
  }
}
