import request from "../../utils/request";


export const category = () => {
    return request.get(`/category`);
};

export const productType = () => {
    return request.get(`/product-type`);
};

export const product = () => {
    return request.post(`/product`);
};

// export const product = (paginate) => {
//     return request.post(`/product/${paginate}`);
// };


export const singleProduct = (slug) => {
    return request.get(`/product/${slug}`);
};

export const color = () => {
    return request.get(`/color`);
};

export const productTypeFilter = (slug) => {
    return request.get(`/type/${slug}/product`);
};

export const productCategoryFilter = (slug) => {
    return request.get(`/category/${slug}/product`);
};

export const productSearch = (data) => {
    return request.post(`/search`, data); 
};

export const getCartProduct = (ip) => {
    return request.get(`/wishlist?ip_address=${ip}`); 
};

export const addwishlistProduct = (data) => {
    return request.post(`/wishlist`, data); 
};

export const removeProduct = (id) => {
    return request.post(`/wishlist/${id}`); 
};

export const passProductContact =(data)=>{
    return request.post(`/product-request`, data); 
}

export const get_feature_product = () => {
    return request.get(`/feature-product`);
};

