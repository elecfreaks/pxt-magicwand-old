/**
 * Functions to micro:bit Magic wand kit by ELECFREAKS Co.,Ltd.
 */
//% weight=5 color=#FD7E14 icon="\uf0d0" block="MagicWand"

namespace magicWand {
    let ButtonPin = DigitalPin.P0
    let TeamId = 0
    let MagicType = 0
    let SendPin = AnalogPin.P1

    /**
    * Types of bullets fired
    */
    export enum MagicTypeList {
        //% block="🔥Primary" enumval=0
        Primary,
        //% block="⚡Advanced" enumval=1
        Advanced
    }
    export enum JoystickBitPin {
        //% block="P1" 
        P1 = DAL.MICROBIT_ID_IO_P1,
        //% block="P2" 
        P2 = DAL.MICROBIT_ID_IO_P2,
        //% block="P3"
        P3 = DAL.MICROBIT_ID_IO_P3,
        //% block="P5"
        P5 = DAL.MICROBIT_ID_IO_P5,
        //% block="P6"
        P6 = DAL.MICROBIT_ID_IO_P6,
        //% block="P7"
        P7 = DAL.MICROBIT_ID_IO_P7,
        //% block="P8"
        P8 = DAL.MICROBIT_ID_IO_P8,
        //% block="P9"
        P9 = DAL.MICROBIT_ID_IO_P9,
        //% block="P10"
        P10 = DAL.MICROBIT_ID_IO_P10,
        //% block="P11"
        P11 = DAL.MICROBIT_ID_IO_P11,
        //% block="P12"
        P12 = DAL.MICROBIT_ID_IO_P12,
        //% block="P13"
        P13 = DAL.MICROBIT_ID_IO_P13,
        //% block="P14"
        P14 = DAL.MICROBIT_ID_IO_P14,
        //% block="P15"
        P15 = DAL.MICROBIT_ID_IO_P15,
        //% block="P16"
        P16 = DAL.MICROBIT_ID_IO_P16,
        //% block="P19"
        P19 = DAL.MICROBIT_ID_IO_P19,
        //% block="P20"
        P20 = DAL.MICROBIT_ID_IO_P20
    }

    export enum ButtonType {
        //% block="pressed"
        down = PulseValue.High,
        //% block="released"
        up = PulseValue.Low
    }
	/**
     * TODO: Infrared Coding of Blue Team First Seed Bomb Type
     */
    export function blueZero() {
        pins.analogWritePin(SendPin, 512)
        // 头
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(700)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(660)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(660)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        pins.analogSetPeriod(SendPin, 0)
    }
    export function blueTwo() {
        pins.analogWritePin(SendPin, 512)
        // 头
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(660)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 11
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(650)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(200)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        pins.analogSetPeriod(SendPin, 0)
    }

    /**
    * TODO: Infrared Emission Module Connection Port
    * @param pin describe parameter here, eg: AnalogPin.P1
    */
    //% block="Setup IR emission at pin %pin"
    //% weight=99
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=4
    export function setSendPin(pin: AnalogPin): void {
        SendPin = pin
    }
    /**
    * TODO: Setting Bullet Type
    * @param type describe parameter here, eg: MagicType.PistolCartridge
    */
    //% weight=88
    //% block="Setup magic level in %type"
    export function setMagicType(type: MagicTypeList): void {
        MagicType = type
        basic.pause(200)
    }
    //% blockId=octopus_crash weight=70 blockGap=30
    //% block="button is pressed"
    export function crashSensor(crashSensorPin:DigitalPin): boolean {
        let a: number = pins.digitalReadPin(crashSensorPin);
        if (a == 1) {
            return true;
        } else return false;
    }
    /**
    * Registers code to run when a joystick:bit event is detected.
    */
    //% blockId=onButtonEvent block="on %button button is %event" blockExternalInputs=false
    export function onButtonEvent(button: JoystickBitPin, event: ButtonType, handler: Action): void {
        pins.onPulsed(<number>button, <number>event, handler);
    }


    /**
    * TODO: Infrared Coding Based on Team Number and Bullet Type
    */
    //% weight=78
    //% block="Execute once magic"
    export function magic(): void {
        switch (MagicType) {
            case 0:
                blueZero()
                break;
            case 1:
                blueTwo()
                break;
            default:
                break;
        }
        basic.pause(500)
    }

}
