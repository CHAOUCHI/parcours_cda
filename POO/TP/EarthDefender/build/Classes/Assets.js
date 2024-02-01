var Assets = /** @class */ (function () {
    function Assets() {
    }
    Assets.getLaser = function () {
        var image = document.querySelector("img#asset_laser");
        if (image == null) {
            throw Error("L'asset n'existe pas.");
        }
        return image;
    };
    Assets.getEarth = function () {
        var image = document.querySelector("img#asset_earth");
        if (image == null) {
            throw Error("L'asset n'existe pas.");
        }
        return image;
    };
    Assets.getDefault = function () {
        var image = document.querySelector("img#asset_player");
        if (image == null) {
            throw Error("L'asset n'existe pas.");
        }
        return image;
    };
    Assets.getPlayer = function () {
        var image = document.querySelector("img#asset_player");
        if (image == null) {
            throw Error("L'asset n'existe pas.");
        }
        return image;
    };
    Assets.getAlien = function () {
        var image = document.querySelector("img#asset_alien");
        if (image == null) {
            throw Error("L'asset n'existe pas.");
        }
        return image;
    };
    Assets.getStar = function () {
        var image = document.querySelector("img#asset_star");
        if (image == null) {
            throw Error("L'asset n'existe pas.");
        }
        return image;
    };
    return Assets;
}());
export { Assets };
