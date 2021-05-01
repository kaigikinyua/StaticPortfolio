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
export { Dev, getRequest, Notif };
