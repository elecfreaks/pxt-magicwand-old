# micro:bit magic wand kit

This is the toy type educational product produced by ELECFREAKS. It can interact with toys purchased in the market and truly complete learning in play.

This library is designed to drive micro:bit magic wand kit , You can get this here.

[https://www.elecfreaks.com](https://www.elecfreaks.com/estore)

## Code Example
```JavaScript
input.onButtonPressed(Button.A, function () {
    magicWand.setMagicType(magicWand.MagicTypeList.Primary)
})
magicWand.onButtonEvent(magicWand.JoystickBitPin.P2, magicWand.ButtonType.down, function () {
    magicWand.magic()
})
magicWand.setSendPin(AnalogPin.P1)
magicWand.setButtonPin(DigitalPin.P2)
basic.forever(function () {
    if (magicWand.getButton()) {
        magicWand.setMagicType(magicWand.MagicTypeList.Advanced)
    }
})



```
## Supported targets
for PXT/microbit

## License
MIT
