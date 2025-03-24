input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    music.playTone(247, music.beat(BeatFraction.Half))
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    music.playTone(196, music.beat(BeatFraction.Half))
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    music.playTone(294, music.beat(BeatFraction.Half))
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    music.playTone(392, music.beat(BeatFraction.Half))
})
BosonKitV3.setSpeakerPin(BosonSpeakerPins.M0, 100)
