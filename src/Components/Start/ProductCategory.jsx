const ProductCategory = () => {
  return (
    <div className="md:px-32 px-3 my-12">
      <div className="grid md:grid-flow-col place-items-stretch grid-flow-row gap-2 md:gap-4 h-fit">
        <a
          href="#"
          className="p-4 w-full bg-[#EBEFF1] rounded-lg md:flex-col flex flex-row-reverse place-items-center justify-between select-none cursor-pointer"
        >
          <img
            className="rounded-lg h-40 object-contain"
            width={180}
            src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0d1895ca499644eda35575020a3027aa_9366/ALL_SZN_Garment_Wash_Pants_Black_IJ6932_21_model.jpg"
            alt=""
          />
          <h4 className="font-semibold underline">Joggers</h4>
        </a>
        <a
          href="#"
          className="p-4 w-full bg-[#EBEFF1] rounded-lg md:flex-col flex flex-row-reverse place-items-center justify-between select-none cursor-pointer"
        >
          <img
            className="rounded-lg h-40 object-contain"
            width={180}
            src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/51b854221de94874b8d13101b07f5807_9366/All_SZN_Fleece_Sweatshirt_Purple_IJ6908_21_model.jpg"
            alt=""
          />
          <h4 className="font-semibold underline">Sweatshirts</h4>
        </a>
        <a
          href="#"
          className="p-4 w-full  bg-[#EBEFF1] rounded-lg md:flex-col flex flex-row-reverse place-items-center justify-between select-none cursor-pointer"
        >
          <img
            className="rounded-lg h-40 object-contain"
            width={180}
            src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c72b6c2e9e4d4714b1ac4717ea0cfcfe_9366/ALL_SZN_Garment-Wash_Hoodie_Turquoise_IB4074_21_model.jpg"
            alt=""
          />
          <h4 className="font-semibold underline">Hoodies</h4>
        </a>
        <a
          href="#"
          className="p-4 w-full  bg-[#EBEFF1] rounded-lg md:flex-col flex flex-row-reverse place-items-center justify-between select-none cursor-pointer"
        >
          <img
            className="rounded-lg h-40 object-contain"
            width={180}
            src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fa17b15a09ef4326a4d783031b54e46f_9366/All_SZN_Fleece_Shorts_Red_IJ6897_21_model.jpg"
          />
          <h4 className="font-semibold underline">Shorts</h4>
        </a>
      </div>
    </div>
  );
};

export default ProductCategory;
