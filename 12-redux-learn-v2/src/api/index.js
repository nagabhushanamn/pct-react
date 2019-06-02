
import axios from 'axios';

const apiUrl = "http://localhost:8181/api/items";

export default {
    loadItems() {
        return axios.get(apiUrl);
    },
    loadReviews(itemId) {
        return axios.get(apiUrl + `/${itemId}/reviews`);
    },
    addNewReview(itemId, review) {
        return axios.post(apiUrl + `/${itemId}/reviews`, review);

    }
}