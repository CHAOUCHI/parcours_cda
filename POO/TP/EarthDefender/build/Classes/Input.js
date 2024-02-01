var Input = /** @class */ (function () {
    function Input() {
    }
    Input.getIsShooting = function () {
        return Input.isShooting;
    };
    Input.getAxisX = function () {
        return Input.axisX;
    };
    Input.listenPlayerInput = function () {
        // Key Down
        document.addEventListener("keydown", function (event) {
            switch (event.key) {
                // Go right
                case "d":
                    Input.axisX = 1;
                    break;
                // Go left
                case "q":
                    Input.axisX = -1;
                    break;
                // Shoot
                case " ":
                    Input.isShooting = true;
                    break;
                default:
                    break;
            }
        });
        // Key Realeased
        document.addEventListener("keyup", function (event) {
            switch (event.key) {
                // Player Stops
                case "d":
                case "q":
                    Input.axisX = 0;
                    break;
                case " ":
                    Input.isShooting = false;
                    break;
                default:
                    break;
            }
        });
    };
    Input.axisX = 0;
    Input.isShooting = false;
    return Input;
}());
export { Input };
