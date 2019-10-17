// tests go here; this will not be compiled when this package is used as a library
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
