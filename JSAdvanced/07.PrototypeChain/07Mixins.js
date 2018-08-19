function result() {

    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = Number(responseTime);
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = Number(width);
            this.height = Number(height);
        }
    }

    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = Number(expectedLife);
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error("This is an abstract class");
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = Number(processorSpeed);
            this.ram = Number(ram);
            this.hardDiskSpace = Number(hardDiskSpace);
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = Number(weight);
            this.color = color;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(value) {
            if (!(value instanceof Battery)) {
                throw new TypeError("Passed argument is not of type Battery")
            }
            this._battery = value;
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            if (!(value instanceof Keyboard)) {
                throw new TypeError("Passed argument is not of type Keyboard.")
            }
            this._keyboard = value;
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if (!(value instanceof Monitor)) {
                throw TypeError("Passed argument is not of type Monitor.")
            }
            this._monitor = value;
        }
    }
    function mixins() {
        function computerQualityMixin(classToExtend) {
            classToExtend.prototype.getQuality = function () {
                return (this.processorSpeed + this.ram + this.hardDiskSpace)/3;
            }
            classToExtend.prototype.isFast = function () {
                if(this.processorSpeed > (this.ram /4)){
                    return true;
                }
                else{
                    return false;
                }
            }
            classToExtend.prototype.isRoomy = function () {
                if(this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed)){
                    return true;
                }
                else{
                    return false;
                }
            }
        }
        function styleMixin(classToExtend) {
            classToExtend.prototype.isFullSet = function () {
                if(this.manufacturer === this.keyboard.manufacturer && this.manufacturer === this.monitor.manufacturer){
                    return true
                }
                else{
                    return false
                }

            }
            classToExtend.prototype.isClassy = function () {
                if(this.battery.expectedLife >= 3 && (this.color === 'Black' || this.color === 'Silver') && this.weight < 3){
                    return true
                }
                else{
                    return false
                }

            }
            
        }
        return {computerQualityMixin, styleMixin}
    }


    return{
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop

    }
}
