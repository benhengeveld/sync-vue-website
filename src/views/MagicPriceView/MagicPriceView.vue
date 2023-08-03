<template>
  <DefaultPageTemplate>
    <CardItem id="magic-card-item">
      <v-form @submit.prevent="search" id="search-form">
        <v-text-field
          id="search-field"
          autocomplete="off"
          :loading="loading"
          density="compact"
          variant="solo"
          label="Card Code"
          append-inner-icon="mdi-magnify"
          single-line
          @click:append-inner="search"
          v-model="searchField"
        >
        </v-text-field>
      </v-form>

      <div id="card-box">
        <div id="card-image">
          <img :src="cardImage" />
        </div>
        <div id="card-info">
          <h1 v-if="cardSetName">Set: {{ cardSetName }}</h1>
          <h1 v-if="cardNormalPrice">Normal: ${{ cardNormalPrice }}</h1>
          <h1 v-if="cardFoilPrice">Foil: ${{ cardFoilPrice }}</h1>
          <h1 v-if="cardEtchedPrice">Etched: ${{ cardEtchedPrice }}</h1>
        </div>
      </div>

      <SnackbarItem timeout="3000" color="error" ref="snackbar" />
    </CardItem>
  </DefaultPageTemplate>
</template>

<script setup lang="ts">
import DefaultPageTemplate from "@/templates/DefaultPageTemplate.vue";
import CardItem from "@/components/CardItem.vue";
import SnackbarItem from "@/components/SnackbarItem.vue";
import ScryFallService from "@/services/ScryFallService";
import PricingUtil from "@/utils/PricingUtil";
import { ScryfallCardData } from "@/models/ScryfallCardData";
import { ref } from "vue";

const scryFallService = new ScryFallService();
const pricingUtil = new PricingUtil();

const loading = ref(false);
const searchField = ref("");

const snackbar = ref<InstanceType<typeof SnackbarItem> | null>(null);

const cardImage = ref(undefined as string | undefined);
const cardSetName = ref(undefined as string | undefined);
const cardNormalPrice = ref(undefined as string | undefined);
const cardFoilPrice = ref(undefined as string | undefined);
const cardEtchedPrice = ref(undefined as string | undefined);

const search = (): void => {
  let searchStr = searchField.value;
  searchStr = searchStr.replace(" ", "");

  let setCode = searchStr.substring(0, 3);
  let cardNumber = searchStr.substring(3, searchStr.length);

  if (setCode.length !== 3) {
    console.error("Invalid set code");
    snackbar.value?.open("Error: Invalid set code");
    return;
  } else if (!cardNumber || Number.isNaN(Number(cardNumber))) {
    console.error("Invalid card number");
    snackbar.value?.open("Error: Invalid card number");
    return;
  }

  getCard(setCode, cardNumber);
};

const getCard = (setCode: string, cardNumber: string): void => {
  loading.value = true;

  cardImage.value = undefined;
  cardSetName.value = undefined;
  cardNormalPrice.value = undefined;
  cardFoilPrice.value = undefined;
  cardEtchedPrice.value = undefined;

  scryFallService.getCardInfo(setCode, cardNumber).subscribe({
    next: (card: ScryfallCardData) => {
      cardImage.value = getCardsImage(card);
      cardSetName.value = card.set_name;
      cardNormalPrice.value = getCadPrice(card.prices.usd);
      cardFoilPrice.value = getCadPrice(card.prices.usd_foil);
      cardEtchedPrice.value = getCadPrice(card.prices.usd_etched);

      searchField.value = "";
      loading.value = false;
    },
    error: (error) => {
      console.error(error);
      snackbar.value?.open("Error: Failed to get card info");
      loading.value = false;
    },
  });
};

const getCadPrice = (price: string | undefined | null): string => {
  if (price == undefined || price == null) {
    return "";
  }

  let priceNum = Number(price);
  if (!isNaN(priceNum)) {
    let cadPrice = pricingUtil.usdToCad(priceNum);
    return `${cadPrice.toFixed(2)} CAD`;
  } else {
    return "";
  }
};

const getCardsImage = (card: ScryfallCardData | undefined): string => {
  if (card == undefined) {
    return "";
  }

  if (card.image_uris && card.image_uris.png) {
    return card.image_uris.png;
  }

  if (
    card.card_faces &&
    card.card_faces[0].image_uris &&
    card.card_faces[0].image_uris.png
  ) {
    return card.card_faces[0].image_uris.png;
  }
  return "";
};
</script>

<style lang="scss">
#magic-card-item {
  height: 100%;
  display: flex;
  flex-direction: column;
}

#card-box {
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 1em;

  div {
    flex: 1;
  }
}

#card-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-height: 70vh;
    max-width: 100%;
  }
}

@media (orientation: portrait) {
  #card-box {
    flex-direction: column;
  }
}
</style>
