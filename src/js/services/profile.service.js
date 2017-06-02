export default class Profile{
    constructor(AppConstants, $http) {
        'ngInject';

        this._AppConstants = AppConstants;
        this._$http = $http;

    }

    get(user) {
        return this._$http({
            url: this._AppConstants.api + "/profiles" + user,
            method: 'GET'
        }).then(
            (res) => {
                return res.data.profile;
            }
        );
    }
}