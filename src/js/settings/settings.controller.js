class SettingsCtrl {
    constructor(User, $state) {
        'ngInject';

        this._User = User;
        this._$state = $state;

        // Bind the User class logout to SettingsCtrl
        this.logout = User.logOut.bind(User);

        this.formData = {
            email: User.current.email,
            bio: User.current.bio,
            image: User.current.image,
            username: User.current.username
        };
    }

    submitForm() {
        this.isSubmitting = true;
        this._User.update(this.formData).then(
            (user) => {
                console.log("Success!");
                this.isSubmitting = false;
            },
            (err) => {
                this.isSubmitting = false;
                this.errors = err.data.errors;
            }
        );
    }
}

export default SettingsCtrl;