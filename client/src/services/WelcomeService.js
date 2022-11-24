import Api from '@/services/Api';

export default {
    welcomeMsg(credentials) {
        return Api().post('welcome', credentials);
    }
}
