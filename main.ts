DFRobotMaqueenPlus.I2CInit()
DFRobotMaqueenPlus.PID(PID.OFF)
basic.forever(function () {
    for (let index = 0; index < 1; index++) {
        if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 60) {
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.GREEN)
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
            basic.pause(100)
        } else if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) < 50 && DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 40) {
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.BLUE)
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
            basic.pause(100)
        } else if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) < 40 && DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 30) {
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.YELLOW)
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
        } else if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) < 20 && DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 10) {
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 50)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
            basic.pause(1000)
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
            basic.pause(1000)
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 50)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
            basic.pause(1000)
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
            if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) < 30) {
                DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 0)
                music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
                DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.WHITH)
            }
        }
    }
})
