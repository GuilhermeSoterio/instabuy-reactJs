import { useEffect, useState } from "react";
import LayoutHome from "../services/homeService";
import { CollectionItem, Banner, promo } from "../@types/types";

const useFetchData = () => {
  const [data, setData] = useState<CollectionItem[]>([]);
  const [bannerData, setBannerData] = useState<Banner[]>([]);
  const [promoData, setPromoData] = useState<promo[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const carrouselDataResponse = await LayoutHome.getProductsListWithCategories();
        const bannerDataResponse = await LayoutHome.getBanner();
        const promoDataResponse = await LayoutHome.getPromo();

        setData(carrouselDataResponse);
        setBannerData(bannerDataResponse);
        setPromoData(promoDataResponse);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const titles = data.map((item) => item.title);
  const ItensCarousel = data.map((item) => item.items);
  const banners = bannerData.map((item => item.image));

  return { titles, ItensCarousel, banners, promoData };
};

export default useFetchData;
