var Dev = true;
function getRequest(url, callback) {
    fetch(url)
        .then(function (res) { return res.json(); })
        .then(function (data) { callback(data); })
        .catch(function (e) {
        Notif.devError("Failed get Request\n url:" + url + " error:" + e);
        Notif.userError("Sorry there was an error while loading the data");
    });
}
var Notif = /** @class */ (function () {
    function Notif() {
    }
    Notif.devError = function (message) { if (Dev) {
        console.log(message);
    } };
    Notif.userError = function (message) {
        Notif.notifComponent('error', message);
    };
    Notif.success = function (message) {
        Notif.notifComponent('success', message);
    };
    Notif.notifComponent = function (componentClass, message) {
        var notif = document.createElement('div');
        notif.id = "notif";
        notif.classList.add(componentClass);
        var cancel = document.createElement('div');
        cancel.classList.add('notif_cancel');
        cancel.innerHTML = '<i class="fa fa-cancel"></i>';
        cancel.addEventListener('click', function (e) { notif.setAttribute('display', 'none'); document.removeChild(notif); });
        notif.innerHTML = "<p>" + message + "</p>" + cancel;
    };
    return Notif;
}());
var Theme = /** @class */ (function () {
    function Theme() {
    }
    Theme.saveTheme = function () {
        try {
            localStorage.setItem('theme', Theme.theme);
        }
        catch (e) {
            Notif.userError("Could not save theme setting");
            Notif.devError("Could not save theme\nerror:" + e);
        }
    };
    Theme.getTheme = function () {
        var theme = '';
        try {
            theme = localStorage.getItem('theme');
        }
        catch (e) {
            theme = Theme.theme;
            Notif.devError("Could not load theme\nError:" + e);
        }
        return theme;
    };
    Theme.changeTheme = function () {
        var themes_location = "./static/css/global/theme/";
        var filenames = { dark: "dark_theme.css", light: "light_theme.css" };
        var t = Theme.getTheme();
        if (t === 'light') {
            themes_location += filenames.dark;
            Theme.theme = 'dark';
        }
        else {
            themes_location += filenames.light;
            Theme.theme = 'light';
        }
        var theme_link = document.getElementById('theme');
        theme_link === null || theme_link === void 0 ? void 0 : theme_link.setAttribute('href', themes_location);
    };
    Theme.theme = 'light';
    return Theme;
}());
export { Dev, getRequest, Notif, Theme };
