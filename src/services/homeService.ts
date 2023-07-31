import api from "./api";
import { CollectionItem, Banner, promo } from "../@types/types";

interface LayoutData {
  data: { banners: any; collection_items: any; promo: any;};
  banners: Banner[];
  collection_items: CollectionItem[];
  promo: promo[];
}

class LayoutHome {
  private banners: Banner[] | null = null;
  private collectionItems: CollectionItem[] | null = null;
  private promo: promo[] | null = null;

  private async fetchData(): Promise<void> {
    try {
      const response = await api.get<LayoutData>("layout?subdomain=supermercado");
      const { banners, collection_items, promo } = response.data.data;
      this.banners = banners;
      this.collectionItems = collection_items;
      this.promo = promo;
    } catch (error) {
      throw new Error("Erro ao buscar dados do layout.");
    }
  }

  async getBanner(): Promise<Banner[]> {
    if (!this.banners) {
      await this.fetchData();
    }
    return this.banners!;
  }

  async getProductsListWithCategories(): Promise<CollectionItem[]> {
    if (!this.collectionItems) {
      await this.fetchData();
    }
    return this.collectionItems!;
  }

  async getPromo(): Promise<promo[]> {
    if (!this.collectionItems) {
      await this.fetchData();
    }
    return this.promo!;
  }
}

export default new LayoutHome();