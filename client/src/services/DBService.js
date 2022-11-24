import Api from '@/services/Api';

export default {
    fetch(credentials) {
        return Api().post('fetch', credentials);
    }
}
