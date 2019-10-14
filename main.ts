/**
 * Functions to micro:bit Magic wand kit by ELECFREAKS Co.,Ltd.
 */
//% weight=5 color=#FD7E14 icon="\uf0d0" block="MagicWand"

namespace magicWand {
    let ButtonPin = DigitalPin.P8
    let TeamId = 0
    let MagicType = 0
    let SendPin = AnalogPin.P1
    /**
    * Types of bullets fired
    */
    export enum MagicTypeList {
        //% block="🔥Primary" enumval=0
        Primary,
        //% block="🌀Intermediate" enumval=1
        Intermediate,
        //% block="⚡Advanced" enumval=2
        Advanced
    }
    /**
    * Team Number
    */
    export enum TeamIdList {
        //% block="💙Blue" enumval=0
        Blue,
        //% block="❤️Red" enumval=1
        Red,
        //% block="💚Green" enumval=2
        Green
    }
    export enum ButtonType {
        //% block="pressed"
        down = PulseValue.High,
        //% block="released"
        up = PulseValue.Low
    }

    export enum ButtonBitPin {
        //% block="P0"
        P0 = DAL.MICROBIT_ID_IO_P0,
        //% block="P1"
        P1 = DAL.MICROBIT_ID_IO_P1,
        //% block="P2"
        P2 = DAL.MICROBIT_ID_IO_P2,
        //% block="P3"
        P3 = DAL.MICROBIT_ID_IO_P3
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
    /**
     * TODO: Infrared Coding of Blue Team Second Seed Bomb Type
     */
    export function blueOne() {
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
        control.waitMicros(200)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(660)
        // 11
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(560)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(650)
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
    export function redZero() {
        pins.analogWritePin(SendPin, 512)
        // 头
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(580)
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
        // 01
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(700)
        // 11
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(680)
        pins.analogSetPeriod(SendPin, 0)
    }
    export function redOne() {
        pins.analogWritePin(SendPin, 512)
        // 头
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(580)
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
        control.waitMicros(580)
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
        control.waitMicros(580)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        pins.analogSetPeriod(SendPin, 0)
    }
    export function redTwo() {
        pins.analogWritePin(SendPin, 512)
        // 头
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(580)
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
        // 11
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(680)

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
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(660)
        pins.analogSetPeriod(SendPin, 0)
    }
    export function greenZero() {
        pins.analogWritePin(SendPin, 512)
        // 头
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 11
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(680)

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
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        pins.analogSetPeriod(SendPin, 0)
    }
    export function greenOne() {
        pins.analogWritePin(SendPin, 512)
        // 头
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 11
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(680)

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
        control.waitMicros(500)
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
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(660)
        pins.analogSetPeriod(SendPin, 0)
    }
    export function greenTwo() {
        pins.analogWritePin(SendPin, 512)
        // 头
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 11
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(680)

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
        control.waitMicros(520)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(680)

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
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 11
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(680)
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
    /**
    * TODO: Setting Team ID
    * @param id describe parameter here, eg: TeamId.Blue
    */
    //% weight=88
    //% block="Setup team ID in %id"
    export function setTeamId(id: TeamIdList): void {
        TeamId = id
        basic.pause(200)
    }
    /**
    * get Button
    */
    //% blockId=getButton block="on %button button is pressed"
    export function getButton(button: ButtonBitPin): boolean {
        if (button == 0) {
            pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
        }
        else if (button == 1) {
            pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
        }
        else if (button == 2) {
            pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
        }
        else if (button == 3) {
            pins.setPull(DigitalPin.P3, PinPullMode.PullUp)
        }
        return (pins.digitalReadPin(<number>button) == 0 ? true : false)
    }

    /**
    * Registers code to run when a joystick:bit event is detected.
    */
    //% blockId=onButtonEvent block="on %button button is %event" blockExternalInputs=false
    export function onButtonEvent(button: ButtonBitPin, event: ButtonType, handler: Action): void {
        if (button == 0) {
            pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
        }
        else if (button == 1) {
            pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
        }
        else if (button == 2) {
            pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
        }
        else if (button == 3) {
            pins.setPull(DigitalPin.P3, PinPullMode.PullUp)
        }
        pins.onPulsed(<number>button, <number>event, handler);
    }
    /**
    * TODO: Infrared Coding Based on Team Number and Bullet Type
    */
    //% weight=78
    //% block="Execute once magic"
    export function magic(): void {
        switch (TeamId) {
            case 0:
                if (MagicType == 0) {
                    blueZero()
                }
                else if (MagicType == 1) {
                    blueOne()
                }
                else if (MagicType == 2) {
                    blueTwo()
                }
                break;
            case 1:
                if (MagicType == 0) {
                    redZero()
                }
                else if (MagicType == 1) {
                    redOne()
                }
                else if (MagicType == 2) {
                    redTwo()
                }
                break;
            case 2:
                if (MagicType == 0) {
                    greenZero()
                }
                else if (MagicType == 1) {
                    greenOne()
                }
                else if (MagicType == 2) {
                    greenTwo()
                }
                break;
            default:
                break;
        }
        basic.pause(500)
    }

}
