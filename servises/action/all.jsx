
import request from "../../utils/request";

export const passContact = (data) => {
    return request.post(`/contact`, data); 
};

export const passSubscription = (data) => {
    return request.post(`/subscription`, data); 
};

export const sectionOne = () => {
    return request.get(`/setting/section_one`);
};

export const sectionTwo = () => {
    return request.get(`/setting/section_two`);
};

export const sectionThree = () => {
    return request.get(`/setting/section_three`);
};

export const ourCertificate = () => {
    return request.get(`/setting/our_certificate`);
};
export const homepageVideo = () => {
    return request.get(`/setting/homepage_video`);
};

export const about = () => {
    return request.get(`/setting/about`);
};

export const globalNetwork = () => {
    return request.get(`/setting/global_network`);
};

// =====================our promiss=========================

export const ourVision = () => {
    return request.get("/setting/our_vision");
};

export const ourValues = () => {
    return request.get(`/setting/our_values`);
};

export const ethicalMilestones = () => {
    return request.get(`/setting/ethical_milestones`);
};

export const ourProgress = () => {
    return request.get(`/setting/our_progress`);
};

// ======================privaci cokkie========================
export const cookie = () => {
    return request.get(`/setting/cookie`);
};

export const privacy = () => {
    return request.get(`/setting/privacy`);
};

// ======================products-and-services ========================

export const productDevelopment = () => {
    return request.get(`/setting/product_development`);
};

export const productAttribute = () => {
    return request.get(`/setting/product_attribute`);
};

export const convertionRoadmap = () => {
    return request.get(`/setting/convertion_roadmap`);
};

export const getfacebook = () => {
    return request.get(`/setting/facebook`);
};

export const getinstagram = () => {
    return request.get(`/setting/instagram`);
};

export const getyoutube = () => {
    return request.get(`/setting/youtube`);
};

export const gettwitter = () => {
    return request.get(`/setting/twitter`);
};

export const getlinkedin = () => {
    return request.get(`/setting/linkedin`);
};

// ===================== newsfeed ========================

export const newsfeed = () => {
    return request.get(`/newsfeed`);
};

export const singleNews = (slug) => {
    return request.get(`/newsfeed/${slug}`);
};

export const newsfeedLatest = () => {
    return request.get(`/newsfeed/latest`);
};

export const get_ethical_milestones = () => {
    return request.get(`/setting/ethical_milestones`);
};

export const get_our_mission = () => {
    return request.get(`/setting/our_mision`);
};

export const get_our_team = () => {
    return request.get(`/our-team`);
};

export const get_our_founder = () => {
    return request.get(`/founder`);
};

export const get_certificate = () => {
    return request.get(`/certificate`);
};

export const singleTeamGet =(id)=>{
    return request.get(`/our-team/${id}`); 
}

export const singleCertificateGet =(id)=>{
    return request.get(`/certificate/${id}`); 
}
    
