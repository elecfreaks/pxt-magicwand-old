# micro:bit toy gun kit

This is the toy type educational product produced by ELECFREAKS. It can interact with toys purchased in the market and truly complete learning in play.

This library is designed to drive micro:bit magic wand kit , You can get this here.

[https://www.elecfreaks.com](https://www.elecfreaks.com/estore)

## Code Example
```JavaScript
magicWand.onButtonEvent(magicWand.ButtonBitPin.P2, magicWand.ButtonType.down, function () {
    magicWand.magic()
})
magicWand.setSendPin(AnalogPin.P1)
magicWand.setMagicType(magicWand.MagicTypeList.Primary)
basic.forever(function () {
    if (magicWand.getButton(magicWand.ButtonBitPin.P3)) {
        magicWand.setMagicType(magicWand.MagicTypeList.Advanced)
    }
})


```
## Supported targets
for PXT/microbit

## License
MIT
