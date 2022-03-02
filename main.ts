radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        motorOn = 1
    } else if (receivedNumber == 2) {
        motorOn = 0
    } else if (receivedNumber == 3) {
        maqueen.motorStop(maqueen.Motors.M1)
        basic.pause(100)
        if (motorOn == 1) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        } else {
            maqueen.motorStop(maqueen.Motors.All)
        }
    } else {
        maqueen.motorStop(maqueen.Motors.M2)
        basic.pause(100)
        if (motorOn == 1) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        } else {
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
})
let motorOn = 0
radio.setGroup(100)
basic.forever(function () {
    if (motorOn == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
