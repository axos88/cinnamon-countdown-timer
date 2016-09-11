// timer-notifications@markbokil.com configuration config.js

// use 'true' or 'false' to enable/disable alert type
// change any text in between "quotes"

// restart Cinnamon after editing right-click Restart or use keys Alt + F2, then enter r
// if your restart is broken use Settings > Troubleshoot > Restart Cinnamon

 const Options = {
    ConfirmPromptOn : true, //window plastered across screen
    ConfirmMessage: "Time up!",
    SoundPrompOn: true, //play a sound file OGG,etc. using sox
    MessagePromptOn: false, //show an onscreen notification
    MessageStr: "Time up!",
    ShowMenuOn: true, //true pops open timer menu when time expired
    LabelOn: true, //true shows minutes in panel 
    SoundPath: "phone-incoming-call.ogg",
    
    AppIcon: "Alarm_clock_symbolized16.svg", // stopped
    AppIconRunning: "Alarm_clock_symbolized_concentric16.svg", //timer running
    AppIconReversed: "Alarm_clock_symbolized_reversed16.svg" //time expired (alarm)
}


