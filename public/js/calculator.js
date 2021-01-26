//onerror=handleErr
var txt = ""

function handleErr(msg, url, l) {
    txt = "There was an error on this page.\n\n"
    txt += "Error: " + msg + "\n"
    txt += "URL: " + url + "\n"
    txt += "Line: " + l + "\n\n"
    txt += "Click OK to continue.\n\n"
    alert(txt)
    return true
}

function calc(classreset, sareset, setbonus, setjewelry, setbuff, lvlreset) {
    if (sareset) {
        document.getElementById("WEAPONSA").selectedIndex = 0
    }
//placeholders
    var AddASPD = 0
    var AddCAST = 0
    var AddCP = 0
    var AddCRIT = 0
    var AddCRIT60 = 0
    var AddCRIT30 = 0
    var AddSPEED = 0
    var AddSPEED60 = 0
    var AddSPEED30 = 0
    var AddHP = 0
    var AddMP = 0
    var AddMATK = 0
    var AddPATK = 0
    var AddPATK60 = 0
    var AddPATK30 = 0
    var AddMDEF = 0
    var AddMDEF60 = 0
    var AddMDEF30 = 0
    var AddPDEF = 0
    var AddPDEF60 = 0
    var AddPDEF30 = 0
    var AddSPEED = 0
    var ALType = 0
    var AType = 0
    var AUType = 0
    var BaseCON = 0
    var BaseSTR = 0
    var BaseDEX = 0
    var BaseINT = 0
    var BaseMEN = 0
    var BaseWIT = 0
    var BaseCP = 0
    var BaseHP = 0
    var BaseMP = 0
    var BaseRun = 0
    var Boot = 0
    var BuffACC = 0
    var BuffACC60 = 0
    var BuffACC30 = 0
    var BuffASPD = 1
    var BuffASPD60 = 1
    var BuffASPD30 = 1
    var BuffCAST = 1
    var BuffCP = 1
    var BuffEVA = 0
    var BuffEVA60 = 0
    var BuffEVA30 = 0
    var BuffHP = 1
    var BuffMATK = 1
    var BuffMDEF = 1
    var BuffMDEF60 = 1
    var BuffMDEF30 = 1
    var BuffMP = 1
    var BuffPATK = 1
    var BuffPATK60 = 1
    var BuffPATK30 = 1
    var BuffPDEF = 1
    var BuffPDEF60 = 1
    var BuffPDEF30 = 1
    var BuffSPEED = 1
    var BuffSPEED60 = 1
    var BuffSPEED30 = 1
    var ClassType = 0
    var Cloak = 0
    var CON = 0
    var CONMOD = 0
    var DEX = 0
    var DEXMOD = 0
    var Glove = 0
    var Earring1 = 0
    var Earring2 = 0
    var fullbody = 0
    var Helmet = 0
    var INT = 0
    var INTMOD = 0
    var Lower = 0
    var MasteryMATK = 0
    var MasteryPATK = 1
    var MEN = 0
    var MENMOD = 0
    var Necklace = 0
    var NECKLACEHP = 0
    var NECKLACEMATK = 1
    var NECKLACEPATK = 1
    var overMATK = 0
    var overPATK = 0
    var race = 0
    var Ring1 = 0
    var Ring2 = 0
    var RINGOFBAIUMACC = 0
    var RINGOFCOREACC = 0
    var RINGOFQUEENACC = 0
    var RINGOFBAIUMASPD = 1
    var RINGOFBAIUMCAST = 1
    var Shield = 0
    var ShieldEvasion = 0
    var STR = 0
    var STRMOD = 0
    var subcritical = 0
    var underMATK = 0
    var underMDEF = 0
    var underPATK = 0
    var helmetoverPDEF = 0
    var upperoverPDEF = 0
    var loweroverPDEF = 0
    var bootoverPDEF = 0
    var gloveoverPDEF = 0
    var necklaceoverPDEF = 0
    var earring1overPDEF = 0
    var earring2overPDEF = 0
    var ring1overPDEF = 0
    var ring2overPDEF = 0
    var helmetunderPDEF = 0
    var upperunderPDEF = 0
    var lowerunderPDEF = 0
    var bootunderPDEF = 0
    var gloveunderPDEF = 0
    var necklaceunderPDEF = 0
    var earring1underPDEF = 0
    var earring2underPDEF = 0
    var ring1underPDEF = 0
    var ring2underPDEF = 0
    var shield = 0
    var Upper = 0
    var WIT = 0
    var WITMOD = 0
    var WpnAcc = 0
    var WpnMATK = 0
    var WpnType = "unequipped"

//toggle display for fieldsets
    if (document.getElementById("ITEMSCHECK").checked == false) {
        document.getElementById("ITEMS").style.display = 'none'
    } else if (document.getElementById("ITEMSCHECK").checked == true) {
        document.getElementById("ITEMS").style.display = 'block'
    }
    if (document.getElementById("PASSIVESCHECK").checked == false) {
        document.getElementById("PASSIVES").style.display = 'none'
    } else if (document.getElementById("PASSIVESCHECK").checked == true) {
        document.getElementById("PASSIVES").style.display = 'block'
    }
    if (document.getElementById("BUFFSCHECK").checked == false) {
        document.getElementById("BUFFS").style.display = 'none'
    } else if (document.getElementById("BUFFSCHECK").checked == true) {
        document.getElementById("BUFFS").style.display = 'block'
    }
    if (document.getElementById("TOGGLESCHECK").checked == false) {
        document.getElementById("TOGGLES").style.display = 'none'
    } else if (document.getElementById("TOGGLESCHECK").checked == true) {
        document.getElementById("TOGGLES").style.display = 'block'
    }
    if (document.getElementById("DEBUFFSCHECK").checked == false) {
        document.getElementById("DEBUFFS").style.display = 'none'
    } else if (document.getElementById("DEBUFFSCHECK").checked == true) {
        document.getElementById("DEBUFFS").style.display = 'block'
    }

//Level Modifier
    var LVL = +document.getElementById("LV").value
    var LVLMOD = (LVL + 89) / 100

//Racial Stats
    var JOB = document.getElementById("class").value
    if (JOB == "DA" || JOB == "GL" || JOB == "HE" || JOB == "HF" || JOB == "HK" || JOB == "PA" || JOB == "RO" || JOB == "TH" || JOB == "WD" || JOB == "WA") {
        race = "HF"
    } else if (JOB == "BI" || JOB == "CL" || JOB == "HM" || JOB == "NE" || JOB == "PP" || JOB == "SOR" || JOB == "WL" || JOB == "WI") {
        race = "HM"
    } else if (JOB == "EF" || JOB == "EK" || JOB == "EFS" || JOB == "PW" || JOB == "SW" || JOB == "TK" || JOB == "SR") {
        race = "EF"
    } else if (JOB == "ELS" || JOB == "EE" || JOB == "EM" || JOB == "EO" || JOB == "EW" || JOB == "SPS") {
        race = "EM"
    } else if (JOB == "AW" || JOB == "AS" || JOB == "BD" || JOB == "DF" || JOB == "PK" || JOB == "PR" || JOB == "SK") {
        race = "DF"
    } else if (JOB == "DM" || JOB == "DW" | JOB == "PS" || JOB == "SHE" | JOB == "SO" || JOB == "SPH") {
        race = "DM"
    } else if (JOB == "DE" || JOB == "MO" || JOB == "OF" || JOB == "OR" | JOB == "TY") {
        race = "OF"
    } else if (JOB == "OM" || JOB == "OS" || JOB == "OL" || JOB == "WC") {
        race = "OM"
    } else if (JOB == "AR" || JOB == "BH" || JOB == "DO" || JOB == "SC" || JOB == "WS") {
        race = "DW"
    }

    if (race == "HF") {
        BaseSTR = 40;
        BaseCON = 43;
        BaseDEX = 30;
        BaseINT = 21;
        BaseWIT = 11;
        BaseMEN = 25;
        BaseRun = 115;
        BaseWalk = 80;
    } else if (race == "HM") {
        BaseSTR = 22;
        BaseCON = 27;
        BaseDEX = 21;
        BaseINT = 41;
        BaseWIT = 20;
        BaseMEN = 39;
        BaseRun = 120;
        BaseWalk = 78;
    } else if (race == "EF") {
        BaseSTR = 36;
        BaseCON = 36;
        BaseDEX = 35;
        BaseINT = 23;
        BaseWIT = 14;
        BaseMEN = 26;
        BaseRun = 125;
        BaseWalk = 90;
    } else if (race == "EM") {
        BaseSTR = 21;
        BaseCON = 25;
        BaseDEX = 24;
        BaseINT = 37;
        BaseWIT = 23;
        BaseMEN = 40;
        BaseRun = 122;
        BaseWalk = 85;
    } else if (race == "DF") {
        BaseSTR = 41;
        BaseCON = 32;
        BaseDEX = 34;
        BaseINT = 25;
        BaseWIT = 12;
        BaseMEN = 26;
        BaseRun = 122;
        BaseWalk = 85;
    } else if (race == "DM") {
        BaseSTR = 23;
        BaseCON = 24;
        BaseDEX = 23;
        BaseINT = 44;
        BaseWIT = 19;
        BaseMEN = 37;
        BaseRun = 122;
        BaseWalk = 85;
    } else if (race == "OF") {
        BaseSTR = 40;
        BaseCON = 47;
        BaseDEX = 26;
        BaseINT = 18;
        BaseWIT = 12;
        BaseMEN = 27;
        BaseRun = 117;
        BaseWalk = 70;
    } else if (race == "OM") {
        BaseSTR = 27;
        BaseCON = 31;
        BaseDEX = 24;
        BaseINT = 31;
        BaseWIT = 15;
        BaseMEN = 42;
        BaseRun = 121;
        BaseWalk = 70;
    } else if (race == "DW") {
        BaseSTR = 39;
        BaseCON = 45;
        BaseDEX = 29;
        BaseINT = 20;
        BaseWIT = 10;
        BaseMEN = 27;
        BaseRun = 115;
        BaseWalk = 80;
    }

//default selections when class is changed
    if (classreset) {
        document.getElementById("tattooslot1fighter").selectedIndex = 0
        document.getElementById("tattooslot2fighter").selectedIndex = 0
        document.getElementById("tattooslot3fighter").selectedIndex = 0
        document.getElementById("tattooslot1nuker").selectedIndex = 0
        document.getElementById("tattooslot2nuker").selectedIndex = 0
        document.getElementById("tattooslot3nuker").selectedIndex = 0
        document.getElementById("tattooslot1healer").selectedIndex = 0
        document.getElementById("tattooslot2healer").selectedIndex = 0
        document.getElementById("tattooslot3healer").selectedIndex = 0
    }

//Tattoo Restrictions by class
    if (JOB == "AW" || JOB == "AR" || JOB == "AS" || JOB == "BD" || JOB == "BH" || JOB == "DA" || JOB == "DE" || JOB == "EK" || JOB == "EFS" || JOB == "GL" || JOB == "HE" || JOB == "HK" || JOB == "MO" || JOB == "OR" || JOB == "PA" || JOB == "PK" || JOB == "PR" || JOB == "PW" || JOB == "RO" || JOB == "SC" || JOB == "SK" || JOB == "SR" || JOB == "SW" || JOB == "TK" || JOB == "TH" || JOB == "TY" || JOB == "WD" || JOB == "WA" || JOB == "WS" || JOB == "EF" || JOB == "DF" || JOB == "OR" || JOB == "DO" || JOB == "HF" || JOB == "OF") {
        document.getElementById("tattooslot1fighter").style.display = 'block'
        document.getElementById("tattooslot2fighter").style.display = 'block'
        document.getElementById("tattooslot3fighter").style.display = 'block'
        document.getElementById("tattooslot1healer").style.display = 'none'
        document.getElementById("tattooslot2healer").style.display = 'none'
        document.getElementById("tattooslot3healer").style.display = 'none'
        document.getElementById("tattooslot1nuker").style.display = 'none'
        document.getElementById("tattooslot2nuker").style.display = 'none'
        document.getElementById("tattooslot3nuker").style.display = 'none'
        var TAT1 = document.getElementById("tattooslot1fighter").value
        var TAT2 = document.getElementById("tattooslot2fighter").value
        var TAT3 = document.getElementById("tattooslot3fighter").value
    } else if (JOB == "EO" || JOB == "CL" || JOB == "PP" || JOB == "BI" || JOB == "EE" || JOB == "SO" || JOB == "SHE" || JOB == "OS" || JOB == "WC" || JOB == "OL" || JOB == "OM") {
        document.getElementById("tattooslot1fighter").style.display = 'none'
        document.getElementById("tattooslot2fighter").style.display = 'none'
        document.getElementById("tattooslot3fighter").style.display = 'none'
        document.getElementById("tattooslot1healer").style.display = 'block'
        document.getElementById("tattooslot2healer").style.display = 'block'
        document.getElementById("tattooslot3healer").style.display = 'block'
        document.getElementById("tattooslot1nuker").style.display = 'none'
        document.getElementById("tattooslot2nuker").style.display = 'none'
        document.getElementById("tattooslot3nuker").style.display = 'none'
        var TAT1 = document.getElementById("tattooslot1healer").value
        var TAT2 = document.getElementById("tattooslot2healer").value
        var TAT3 = document.getElementById("tattooslot3healer").value
    } else if (JOB == "WI" || JOB == "SOR" || JOB == "NE" || JOB == "WL" || JOB == "EW" || JOB == "SPS" || JOB == "ELS" || JOB == "DW" || JOB == "PS" || JOB == "SPH" || JOB == "DM" || JOB == "EM" || JOB == "HM") {
        document.getElementById("tattooslot1fighter").style.display = 'none'
        document.getElementById("tattooslot2fighter").style.display = 'none'
        document.getElementById("tattooslot3fighter").style.display = 'none'
        document.getElementById("tattooslot1healer").style.display = 'none'
        document.getElementById("tattooslot2healer").style.display = 'none'
        document.getElementById("tattooslot3healer").style.display = 'none'
        document.getElementById("tattooslot1nuker").style.display = 'block'
        document.getElementById("tattooslot2nuker").style.display = 'block'
        document.getElementById("tattooslot3nuker").style.display = 'block'
        var TAT1 = document.getElementById("tattooslot1nuker").value
        var TAT2 = document.getElementById("tattooslot2nuker").value
        var TAT3 = document.getElementById("tattooslot3nuker").value
    }

    if (JOB == "EF" || JOB == "DF" || JOB == "OR" || JOB == "DO" || JOB == "HF" || JOB == "HM" || JOB == "EM" || JOB == "DM" || JOB == "OM") {
        document.getElementById("tattooslot2fighter").disabled = true
        document.getElementById("tattooslot3fighter").disabled = true
        document.getElementById("tattooslot2healer").disabled = true
        document.getElementById("tattooslot3healer").disabled = true
        document.getElementById("tattooslot2nuker").disabled = true
        document.getElementById("tattooslot3nuker").disabled = true
        var TAT2 = 0
        var TAT3 = 0
    } else if (JOB == "RO" || JOB == "WA" || JOB == "HK" || JOB == "WI" || JOB == "CL" || JOB == "EK" || JOB == "EFS" || JOB == "EO" || JOB == "EW" || JOB == "PK" || JOB == "AS" || JOB == "DW" || JOB == "SO" || JOB == "MO" || JOB == "OR" || JOB == "OS" || JOB == "SC" || JOB == "AR") {
        document.getElementById("tattooslot2fighter").disabled = false
        document.getElementById("tattooslot3fighter").disabled = true
        document.getElementById("tattooslot2healer").disabled = false
        document.getElementById("tattooslot3healer").disabled = true
        document.getElementById("tattooslot2nuker").disabled = false
        document.getElementById("tattooslot3nuker").disabled = true
        var TAT3 = 0
    } else {
        document.getElementById("tattooslot2fighter").disabled = false
        document.getElementById("tattooslot3fighter").disabled = false
        document.getElementById("tattooslot2healer").disabled = false
        document.getElementById("tattooslot3healer").disabled = false
        document.getElementById("tattooslot2nuker").disabled = false
        document.getElementById("tattooslot3nuker").disabled = false
    }

///////N
//Tattoos
    var TATSTR = STRTAT[TAT1] + STRTAT[TAT2] + STRTAT[TAT3]
    if (TATSTR > 5) {
        TATSTR = 5
    }
    var TATDEX = DEXTAT[TAT1] + DEXTAT[TAT2] + DEXTAT[TAT3]
    if (TATDEX > 5) {
        TATDEX = 5
    }
    var TATCON = CONTAT[TAT1] + CONTAT[TAT2] + CONTAT[TAT3]
    if (TATCON > 5) {
        TATCON = 5
    }
    var TATINT = INTTAT[TAT1] + INTTAT[TAT2] + INTTAT[TAT3]
    if (TATINT > 5) {
        TATINT = 5
    }
    var TATWIT = WITTAT[TAT1] + WITTAT[TAT2] + WITTAT[TAT3]
    if (TATWIT > 5) {
        TATWIT = 5
    }
    var TATMEN = MENTAT[TAT1] + MENTAT[TAT2] + MENTAT[TAT3]
    if (TATMEN > 5) {
        TATMEN = 5
    }

    var STR = TATSTR + BaseSTR
    var DEX = TATDEX + BaseDEX
    var CON = TATCON + BaseCON
    var INT = TATINT + BaseINT
    var WIT = TATWIT + BaseWIT
    var MEN = TATMEN + BaseMEN

//Base HP/CP Calculation
    if (JOB == "HF") {
        BaseHP = 68.3 + 11.635 * LVL + 0.065 * (LVL * LVL)
        BaseCP = BaseHP * 0.4
        ClassType = "F1"
    } else if (JOB == "WA" && LVL <= 20) {
        BaseHP = 68.3 + 11.635 * LVL + 0.065 * (LVL * LVL)
        BaseCP = BaseHP * 0.8
        ClassType = "F1"
    } else if (JOB == "WA" && LVL > 20) {
        BaseHP = -270 + 26.85 * LVL + 0.15 * (LVL * LVL)
        BaseCP = BaseHP * 0.8
        ClassType = "F2"
    } else if (JOB == "GL" && LVL <= 20) {
        BaseHP = 68.3 + 11.635 * LVL + 0.065 * (LVL * LVL)
        BaseCP = BaseHP * 0.9
        ClassType = "F1"
    } else if (JOB == "GL" && LVL > 20 && LVL <= 40) {
        BaseHP = -270 + 26.85 * LVL + 0.15 * (LVL * LVL)
        BaseCP = BaseHP * 0.9
        ClassType = "F2"
    } else if (JOB == "GL" && LVL > 40) {
        BaseHP = -620.4 + 34.01 * LVL + 0.19 * (LVL * LVL)
        BaseCP = BaseHP * 0.9
        ClassType = "F3"
    } else if (JOB == "WD" && LVL <= 20) {
        BaseHP = 68.3 + 11.635 * LVL + 0.065 * (LVL * LVL)
        BaseCP = BaseHP * 0.8
        ClassType = "F1"
    } else if (JOB == "WD" && LVL > 20 && LVL <= 40) {
        BaseHP = -270 + 26.85 * LVL + 0.15 * (LVL * LVL)
        BaseCP = BaseHP * 0.8
        ClassType = "F2"
    } else if (JOB == "WD" && LVL > 40) {
        BaseHP = -795.6 + 37.59 * LVL + 0.21 * (LVL * LVL)
        BaseCP = BaseHP * 0.8
        ClassType = "F3"
    } else if (JOB == "HK" && LVL <= 20) {
        BaseHP = 68.3 + 11.635 * LVL + 0.065 * (LVL * LVL)
        BaseCP = BaseHP * 0.6
        ClassType = "F1"
    } else if (JOB == "HK" && LVL > 20) {
        BaseHP = -210.3 + 24.165 * LVL + 0.135 * (LVL * LVL)
        BaseCP = BaseHP * 0.6
        ClassType = "F2"
    } else if ((JOB == "DA" || JOB == "PA") && LVL <= 20) {
        BaseHP = 68.3 + 11.635 * LVL + 0.065 * (LVL * LVL)
        BaseCP = BaseHP * 0.6
        ClassType = "F1"
    } else if ((JOB == "DA" || JOB == "PA") && LVL > 20 && LVL <= 40) {
        BaseHP = -210.3 + 24.165 * LVL + 0.135 * (LVL * LVL)
        BaseCP = BaseHP * 0.6
        ClassType = "F2"
    } else if ((JOB == "DA" || JOB == "PA") && LVL > 40) {
        BaseHP = -604.5 + 32.22 * LVL + 0.18 * (LVL * LVL)
        BaseCP = BaseHP * 0.6
        ClassType = "F3"
    } else if (JOB == "RO" && LVL <= 20) {
        BaseHP = 68.3 + 11.635 * LVL + 0.065 * (LVL * LVL)
        BaseCP = BaseHP * 0.4
        ClassType = "F1"
    } else if (JOB == "RO" && LVL > 20) {
        BaseHP = -170.5 + 22.375 * LVL + 0.125 * (LVL * LVL)
        BaseCP = BaseHP * 0.4
        ClassType = "F2"
    } else if (JOB == "TH" && LVL <= 20) {
        BaseHP = 68.3 + 11.635 * LVL + 0.065 * (LVL * LVL)
        BaseCP = BaseHP * 0.4
        ClassType = "F1"
    } else if (JOB == "TH" && LVL > 20 && LVL <= 40) {
        BaseHP = -170.5 + 22.375 * LVL + 0.125 * (LVL * LVL)
        BaseCP = BaseHP * 0.4
        ClassType = "F2"
    } else if (JOB == "TH" && LVL > 40) {
        BaseHP = -477.1 + 28.64 * LVL + 0.16 * (LVL * LVL)
        BaseCP = BaseHP * 0.4
        ClassType = "F3"
    } else if (JOB == "HE" && LVL <= 20) {
        BaseHP = 68.3 + 11.635 * LVL + 0.065 * (LVL * LVL)
        BaseCP = BaseHP * 0.7
        ClassType = "F1"
    } else if (JOB == "HE" && LVL > 20 && LVL <= 40) {
        BaseHP = -170.5 + 22.375 * LVL + 0.125 * (LVL * LVL)
        BaseCP = BaseHP * 0.7
        ClassType = "F2"
    } else if (JOB == "HE" && LVL > 40) {
        BaseHP = -564.7 + 30.43 * LVL + 0.17 * (LVL * LVL)
        BaseCP = BaseHP * 0.7
        ClassType = "F3"
    } else if (JOB == "HM") {
        BaseHP = 85.7 + 15.215 * LVL + 0.085 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M1"
    } else if (JOB == "WI" && LVL <= 20) {
        BaseHP = 85.7 + 15.215 * LVL + 0.085 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M1"
    } else if (JOB == "WI" && LVL > 20) {
        BaseHP = -73.5 + 22.375 * LVL + 0.125 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M2"
    } else if ((JOB == "SOR" || JOB == "NE") && LVL <= 20) {
        BaseHP = 85.7 + 15.215 * LVL + 0.085 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M1"
    } else if ((JOB == "SOR" || JOB == "NE") && LVL > 20 && LVL <= 40) {
        BaseHP = -73.5 + 22.375 * LVL + 0.125 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M2"
    } else if ((JOB == "SOR" || JOB == "NE") && LVL > 40) {
        BaseHP = -511.5 + 31.325 * LVL + 0.175 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M3"
    } else if (JOB == "WL" && LVL <= 20) {
        BaseHP = 85.7 + 15.215 * LVL + 0.085 * (LVL * LVL)
        BaseCP = BaseHP * 0.6
        ClassType = "M1"
    } else if (JOB == "WL" && LVL > 20 && LVL <= 40) {
        BaseHP = -73.5 + 22.375 * LVL + 0.125 * (LVL * LVL)
        BaseCP = BaseHP * 0.6
        ClassType = "M2"
    } else if (JOB == "WL" && LVL > 40) {
        BaseHP = -642.9 + 34.01 * LVL + 0.19 * (LVL * LVL)
        BaseCP = BaseHP * 0.6
        ClassType = "M3"
    } else if (JOB == "CL" && LVL <= 20) {
        BaseHP = 85.7 + 15.215 * LVL + 0.085 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M1"
    } else if (JOB == "CL" && LVL > 20) {
        BaseHP = -192.9 + 27.745 * LVL + 0.155 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M2"
    } else if (JOB == "BI" && LVL <= 20) {
        BaseHP = 85.7 + 15.215 * LVL + 0.085 * (LVL * LVL)
        BaseCP = BaseHP * 0.7
        ClassType = "M1"
    } else if (JOB == "BI" && LVL > 20 && LVL <= 40) {
        BaseHP = -192.9 + 27.745 * LVL + 0.155 * (LVL * LVL)
        BaseCP = BaseHP * 0.7
        ClassType = "M2"
    } else if (JOB == "BI" && LVL > 40) {
        BaseHP = -499.5 + 34.01 * LVL + 0.19 * (LVL * LVL)
        BaseCP = BaseHP * 0.7
        ClassType = "M3"
    } else if (JOB == "PP" && LVL <= 20) {
        BaseHP = 85.7 + 15.215 * LVL + 0.085 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M1"
    } else if (JOB == "PP" && LVL > 20 && LVL <= 40) {
        BaseHP = -192.9 + 27.745 * LVL + 0.155 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M2"
    } else if (JOB == "PP" && LVL > 40) {
        BaseHP = -630.9 + 36.695 * LVL + 0.205 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M3"
    } else if (JOB == "EF") {
        BaseHP = 76.4 + 12.53 * LVL + 0.07 * (LVL * LVL)
        BaseCP = BaseHP * 0.4
        ClassType = "F1"
    } else if (JOB == "EK" && LVL <= 20) {
        BaseHP = 76.4 + 12.53 * LVL + 0.07 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "F1"
    } else if (JOB == "EK" && LVL > 20) {
        BaseHP = -242 + 26.85 * LVL + 0.15 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "F2"
    } else if (JOB == "TK" && LVL <= 20) {
        BaseHP = 76.4 + 12.53 * LVL + 0.07 * (LVL * LVL)
        BaseCP = BaseHP * 0.6
        ClassType = "F1"
    } else if (JOB == "TK" && LVL > 20 && LVL <= 40) {
        BaseHP = -242 + 26.85 * LVL + 0.15 * (LVL * LVL)
        BaseCP = BaseHP * 0.6
        ClassType = "F2"
    } else if (JOB == "TK" && LVL > 40) {
        BaseHP = -680 + 35.8 * LVL + 0.2 * (LVL * LVL)
        BaseCP = BaseHP * 0.6
        ClassType = "F3"
    } else if (JOB == "SW" && LVL <= 20) {
        BaseHP = 76.4 + 12.53 * LVL + 0.07 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "F1"
    } else if (JOB == "SW" && LVL > 20 && LVL <= 40) {
        BaseHP = -242 + 26.85 * LVL + 0.15 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "F2"
    } else if (JOB == "SW" && LVL > 40) {
        BaseHP = -767.6 + 37.59 * LVL + 0.21 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "F3"
    } else if (JOB == "EFS" && LVL <= 20) {
        BaseHP = 76.4 + 12.53 * LVL + 0.07 * (LVL * LVL)
        BaseCP = BaseHP * 0.4
        ClassType = "F1"
    } else if (JOB == "EFS" && LVL > 20) {
        BaseHP = -202.2 + 25.06 * LVL + 0.14 * (LVL * LVL)
        BaseCP = BaseHP * 0.4
        ClassType = "F2"
    } else if (JOB == "PW" && LVL <= 20) {
        BaseHP = 76.4 + 12.53 * LVL + 0.07 * (LVL * LVL)
        BaseCP = BaseHP * 0.4
        ClassType = "F1"
    } else if (JOB == "PW" && LVL > 20 && LVL <= 40) {
        BaseHP = -202.2 + 25.06 * LVL + 0.14 * (LVL * LVL)
        BaseCP = BaseHP * 0.4
        ClassType = "F2"
    } else if (JOB == "PW" && LVL > 40) {
        BaseHP = -552.6 + 32.22 * LVL + 0.18 * (LVL * LVL)
        BaseCP = BaseHP * 0.4
        ClassType = "F3"
    } else if (JOB == "SR" && LVL <= 20) {
        BaseHP = 76.4 + 12.53 * LVL + 0.07 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "F1"
    } else if (JOB == "SR" && LVL > 20 && LVL <= 40) {
        BaseHP = -202.2 + 25.06 * LVL + 0.14 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "F2"
    } else if (JOB == "SR" && LVL > 40) {
        BaseHP = -640.2 + 34.01 * LVL + 0.19 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "F3"
    } else if (JOB == "EM") {
        BaseHP = 88.7 + 15.215 * LVL + 0.085 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M1"
    } else if (JOB == "EW" && LVL <= 20) {
        BaseHP = 88.7 + 15.215 * LVL + 0.085 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M1"
    } else if (JOB == "EW" && LVL > 20) {
        BaseHP = -90.4 + 23.27 * LVL + 0.13 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M2"
    } else if (JOB == "SPS" && LVL <= 20) {
        BaseHP = 88.7 + 15.215 * LVL + 0.085 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M1"
    } else if (JOB == "SPS" && LVL > 20 && LVL <= 40) {
        BaseHP = -90.4 + 23.27 * LVL + 0.13 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M2"
    } else if (JOB == "SPS" && LVL > 40) {
        BaseHP = -572.2 + 33.115 * LVL + 0.185 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M3"
    } else if (JOB == "ELS" && LVL <= 20) {
        BaseHP = 88.7 + 15.215 * LVL + 0.085 * (LVL * LVL)
        BaseCP = BaseHP * 0.6
        ClassType = "M1"
    } else if (JOB == "ELS" && LVL > 20 && LVL <= 40) {
        BaseHP = -90.4 + 23.27 * LVL + 0.13 * (LVL * LVL)
        BaseCP = BaseHP * 0.6
        ClassType = "M2"
    } else if (JOB == "ELS" && LVL > 40) {
        BaseHP = -659.8 + 34.905 * LVL + 0.195 * (LVL * LVL)
        BaseCP = BaseHP * 0.6
        ClassType = "M3"
    } else if (JOB == "EO" && LVL <= 20) {
        BaseHP = 88.7 + 15.215 * LVL + 0.085 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M1"
    } else if (JOB == "EO" && LVL > 20) {
        BaseHP = -209.8 + 28.64 * LVL + 0.16 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M2"
    } else if (JOB == "EE" && LVL <= 20) {
        BaseHP = 88.7 + 15.215 * LVL + 0.085 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M1"
    } else if (JOB == "EE" && LVL > 20 && LVL <= 40) {
        BaseHP = -209.8 + 28.64 * LVL + 0.16 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M2"
    } else if (JOB == "EE" && LVL > 40) {
        BaseHP = -647.8 + 37.59 * LVL + 0.21 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M3"
    } else if (JOB == "DF") {
        BaseHP = 80.5 + 13.425 * LVL + 0.075 * (LVL * LVL)
        BaseCP = BaseHP * 0.4
        ClassType = "F1"
    } else if (JOB == "PK" && LVL <= 20) {
        BaseHP = 80.5 + 13.425 * LVL + 0.075 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "F1"
    } else if (JOB == "PK" && LVL > 20) {
        BaseHP = -257.8 + 28.64 * LVL + 0.16 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "F2"
    } else if (JOB == "SK" && LVL <= 20) {
        BaseHP = 80.5 + 13.425 * LVL + 0.075 * (LVL * LVL)
        BaseCP = BaseHP * 0.6
        ClassType = "F1"
    } else if (JOB == "SK" && LVL > 20 && LVL <= 40) {
        BaseHP = -257.8 + 28.64 * LVL + 0.16 * (LVL * LVL)
        BaseCP = BaseHP * 0.6
        ClassType = "F2"
    } else if (JOB == "SK" && LVL > 40) {
        BaseHP = -695.8 + 37.59 * LVL + 0.21 * (LVL * LVL)
        BaseCP = BaseHP * 0.6
        ClassType = "F3"
    } else if (JOB == "BD" && LVL <= 20) {
        BaseHP = 80.5 + 13.425 * LVL + 0.075 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "F1"
    } else if (JOB == "BD" && LVL > 20 && LVL <= 40) {
        BaseHP = -257.8 + 28.64 * LVL + 0.16 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "F2"
    } else if (JOB == "BD" && LVL > 40) {
        BaseHP = -827.2 + 40.275 * LVL + 0.225 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "F3"
    } else if (JOB == "AS" && LVL <= 20) {
        BaseHP = 80.5 + 13.425 * LVL + 0.075 * (LVL * LVL)
        BaseCP = BaseHP * 0.4
        ClassType = "F1"
    } else if (JOB == "AS" && LVL > 20) {
        BaseHP = -218 + 26.85 * LVL + 0.15 * (LVL * LVL)
        BaseCP = BaseHP * 0.4
        ClassType = "F2"
    } else if (JOB == "AW" && LVL <= 20) {
        BaseHP = 80.5 + 13.425 * LVL + 0.075 * (LVL * LVL)
        BaseCP = BaseHP * 0.4
        ClassType = "F1"
    } else if (JOB == "AW" && LVL > 20 && LVL <= 40) {
        BaseHP = -218 + 26.85 * LVL + 0.15 * (LVL * LVL)
        BaseCP = BaseHP * 0.4
        ClassType = "F2"
    } else if (JOB == "AW" && LVL > 40) {
        BaseHP = -568.4 + 34.01 * LVL + 0.19 * (LVL * LVL)
        BaseCP = BaseHP * 0.4
        ClassType = "F3"
    } else if (JOB == "PR" && LVL <= 20) {
        BaseHP = 80.5 + 13.425 * LVL + 0.075 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "F1"
    } else if (JOB == "PR" && LVL > 20 && LVL <= 40) {
        BaseHP = -218 + 26.85 * LVL + 0.15 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "F2"
    } else if (JOB == "PR" && LVL > 40) {
        BaseHP = -656 + 35.8 * LVL + 0.2 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "F3"
    } else if (JOB == "DM") {
        BaseHP = 90.7 + 15.215 * LVL + 0.085 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M1"
    } else if (JOB == "DW" && LVL <= 20) {
        BaseHP = 90.7 + 15.215 * LVL + 0.085 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M1"
    } else if (JOB == "DW" && LVL > 20) {
        BaseHP = -108.3 + 24.165 * LVL + 0.135 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M2"
    } else if (JOB == "SPH" && LVL <= 20) {
        BaseHP = 90.7 + 15.215 * LVL + 0.085 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M1"
    } else if (JOB == "SPH" && LVL > 20 && LVL <= 40) {
        BaseHP = -108.3 + 24.165 * LVL + 0.135 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M2"
    } else if (JOB == "SPH" && LVL > 40) {
        BaseHP = -546.3 + 33.115 * LVL + 0.185 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M3"
    } else if (JOB == "PS" && LVL <= 20) {
        BaseHP = 90.7 + 15.215 * LVL + 0.085 * (LVL * LVL)
        BaseCP = BaseHP * 0.6
        ClassType = "M1"
    } else if (JOB == "PS" && LVL > 20 && LVL <= 40) {
        BaseHP = -108.3 + 24.165 * LVL + 0.135 * (LVL * LVL)
        BaseCP = BaseHP * 0.6
        ClassType = "M2"
    } else if (JOB == "PS" && LVL > 40) {
        BaseHP = -656 + 35.8 * LVL + 0.2 * (LVL * LVL)
        BaseCP = BaseHP * 0.6
        ClassType = "M3"
    } else if (JOB == "SO" && LVL <= 20) {
        BaseHP = 90.7 + 15.215 * LVL + 0.085 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M1"
    } else if (JOB == "SO" && LVL > 20) {
        BaseHP = -227.7 + 29.535 * LVL + 0.165 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M2"
    } else if (JOB == "SHE" && LVL <= 20) {
        BaseHP = 90.7 + 15.215 * LVL + 0.085 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M1"
    } else if (JOB == "SHE" && LVL > 20 && LVL <= 40) {
        BaseHP = -227.7 + 29.535 * LVL + 0.165 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M2"
    } else if (JOB == "SHE" && LVL > 40) {
        BaseHP = -621.9 + 37.59 * LVL + 0.21 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M3"
    } else if (JOB == "OF") {
        BaseHP = 67.4 + 12.53 * LVL + 0.07 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "F1"
    } else if (JOB == "MO" && LVL <= 20) {
        BaseHP = 67.4 + 12.53 * LVL + 0.07 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "F1"
    } else if (JOB == "MO" && LVL > 20) {
        BaseHP = -251 + 26.85 * LVL + 0.15 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "F2"
    } else if (JOB == "TY" && LVL <= 20) {
        BaseHP = 67.4 + 12.53 * LVL + 0.07 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "F1"
    } else if (JOB == "TY" && LVL > 20 && LVL <= 40) {
        BaseHP = -251 + 26.85 * LVL + 0.15 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "F2"
    } else if (JOB == "TY" && LVL > 40) {
        BaseHP = -776.6 + 37.59 * LVL + 0.21 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "F3"
    } else if (JOB == "OR" && LVL <= 20) {
        BaseHP = 67.4 + 12.53 * LVL + 0.07 * (LVL * LVL)
        BaseCP = BaseHP * 0.7
        ClassType = "F1"
    } else if (JOB == "OR" && LVL > 20) {
        BaseHP = -290.8 + 28.64 * LVL + 0.16 * (LVL * LVL)
        BaseCP = BaseHP * 0.7
        ClassType = "F2"
    } else if (JOB == "DE" && LVL <= 20) {
        BaseHP = 67.4 + 12.53 * LVL + 0.07 * (LVL * LVL)
        BaseCP = BaseHP * 0.7
        ClassType = "F1"
    } else if (JOB == "DE" && LVL > 20 && LVL <= 40) {
        BaseHP = -290.8 + 28.64 * LVL + 0.16 * (LVL * LVL)
        BaseCP = BaseHP * 0.7
        ClassType = "F2"
    } else if (JOB == "DE" && LVL > 40) {
        BaseHP = -816.4 + 39.38 * LVL + 0.22 * (LVL * LVL)
        BaseCP = BaseHP * 0.7
        ClassType = "F3"
    } else if (JOB == "OM") {
        BaseHP = 79.7 + 15.215 * LVL + 0.085 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M1"
    } else if (JOB == "OS" && LVL <= 20) {
        BaseHP = 79.7 + 15.215 * LVL + 0.085 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M1"
    } else if (JOB == "OS" && LVL > 20) {
        BaseHP = -218.8 + 28.64 * LVL + 0.16 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M2"
    } else if (JOB == "WC" && LVL <= 20) {
        BaseHP = 79.7 + 15.215 * LVL + 0.085 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M1"
    } else if (JOB == "WC" && LVL > 20 && LVL <= 40) {
        BaseHP = -218.8 + 28.64 * LVL + 0.16 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M2"
    } else if (JOB == "WC" && LVL > 40) {
        BaseHP = -613 + 36.695 * LVL + 0.205 * (LVL * LVL)
        BaseCP = BaseHP * 0.5
        ClassType = "M3"
    } else if (JOB == "OL" && LVL <= 20) {
        BaseHP = 79.7 + 15.215 * LVL + 0.085 * (LVL * LVL)
        BaseCP = BaseHP * 0.8
        ClassType = "M1"
    } else if (JOB == "OL" && LVL > 20 && LVL <= 40) {
        BaseHP = -218.8 + 28.64 * LVL + 0.16 * (LVL * LVL)
        BaseCP = BaseHP * 0.8
        ClassType = "M2"
    } else if (JOB == "OL" && LVL > 40) {
        BaseHP = -613 + 36.695 * LVL + 0.205 * (LVL * LVL)
        BaseCP = BaseHP * 0.8
        ClassType = "M3"
    } else if (JOB == "DO") {
        BaseHP = 67.4 + 12.53 * LVL + 0.07 * (LVL * LVL)
        BaseCP = BaseHP * 0.7
        ClassType = "F1"
    } else if (JOB == "AR" && LVL <= 20) {
        BaseHP = 67.4 + 12.53 * LVL + 0.07 * (LVL * LVL)
        BaseCP = BaseHP * 0.8
        ClassType = "F1"
    } else if (JOB == "AR" && LVL > 20) {
        BaseHP = -251 + 26.85 * LVL + 0.15 * (LVL * LVL)
        BaseCP = BaseHP * 0.8
        ClassType = "F2"
    } else if (JOB == "WS" && LVL <= 20) {
        BaseHP = 67.4 + 12.53 * LVL + 0.07 * (LVL * LVL)
        BaseCP = BaseHP * 0.8
        ClassType = "F1"
    } else if (JOB == "WS" && LVL > 20 && LVL <= 40) {
        BaseHP = -251 + 26.85 * LVL + 0.15 * (LVL * LVL)
        BaseCP = BaseHP * 0.8
        ClassType = "F2"
    } else if (JOB == "WS" && LVL > 40) {
        BaseHP = -776.6 + 37.59 * LVL + 0.21 * (LVL * LVL)
        BaseCP = BaseHP * 0.8
        ClassType = "F3"
    } else if (JOB == "SC" && LVL <= 20) {
        BaseHP = 67.4 + 12.53 * LVL + 0.07 * (LVL * LVL)
        BaseCP = BaseHP * 0.7
        ClassType = "F1"
    } else if (JOB == "SC" && LVL > 20) {
        BaseHP = -290.8 + 28.64 * LVL + 0.16 * (LVL * LVL)
        BaseCP = BaseHP * 0.7
        ClassType = "F2"
    } else if (JOB == "BH" && LVL <= 20) {
        BaseHP = 67.4 + 12.53 * LVL + 0.07 * (LVL * LVL)
        BaseCP = BaseHP * 0.7
        ClassType = "F1"
    } else if (JOB == "BH" && LVL > 20 && LVL <= 40) {
        BaseHP = -290.8 + 28.64 * LVL + 0.16 * (LVL * LVL)
        BaseCP = BaseHP * 0.7
        ClassType = "F2"
    } else if (JOB == "BH" && LVL > 40) {
        BaseHP = -816.4 + 39.38 * LVL + 0.22 * (LVL * LVL)
        BaseCP = BaseHP * 0.7
        ClassType = "F3"
    }

//Base MP
    if (ClassType == "F1") {
        BaseMP = FIGHTER1MP[LVL]
    } else if (ClassType == "F2") {
        BaseMP = FIGHTER2MP[LVL]
    } else if (ClassType == "F3") {
        BaseMP = FIGHTER3MP[LVL]
    } else if (ClassType == "M1") {
        BaseMP = MYSTIC1MP[LVL]
    } else if (ClassType == "M2") {
        BaseMP = MYSTIC2MP[LVL]
    } else if (ClassType == "M3") {
        BaseMP = MYSTIC3MP[LVL]
    }


//Set Bonus Auto-Select
    var fullset = document.getElementById("FULLSET").value;

    if (setbonus) {
        document.getElementById("SHIELDGRADE").selectedIndex = 0
        document.getElementById("HELMETGRADE").selectedIndex = 0
        document.getElementById("UPPERGRADE").selectedIndex = 0
        document.getElementById("LOWERGRADE").selectedIndex = 0
        document.getElementById("GLOVEGRADE").selectedIndex = 0
        document.getElementById("BOOTGRADE").selectedIndex = 0
        document.getElementById("SHIELDS").selectedIndex = 0
        document.getElementById("HELMETS").selectedIndex = 0
        document.getElementById("UPPERS").selectedIndex = 0
        document.getElementById("LOWERS").selectedIndex = 0
        document.getElementById("BOOTS").selectedIndex = 0
        document.getElementById("GLOVES").selectedIndex = 0
    }

    if (setbonus && fullset == "Draconic") {
        document.getElementById("HELMETGRADE").selectedIndex = 0
        document.getElementById("UPPERGRADE").selectedIndex = 0
        document.getElementById("GLOVEGRADE").selectedIndex = 0
        document.getElementById("BOOTGRADE").selectedIndex = 0
        document.getElementById("HELMETS").selectedIndex = 1
        document.getElementById("UPPERS").selectedIndex = 1
        document.getElementById("BOOTS").selectedIndex = 1
        document.getElementById("GLOVES").selectedIndex = 1
    } else if (setbonus && fullset == "Imperial_Crusader") {
        document.getElementById("SHIELDGRADE").selectedIndex = 0
        document.getElementById("HELMETGRADE").selectedIndex = 0
        document.getElementById("UPPERGRADE").selectedIndex = 0
        document.getElementById("LOWERGRADE").selectedIndex = 0
        document.getElementById("GLOVEGRADE").selectedIndex = 0
        document.getElementById("BOOTGRADE").selectedIndex = 0
        document.getElementById("SHIELDS").selectedIndex = 1
        document.getElementById("HELMETS").selectedIndex = 2
        document.getElementById("UPPERS").selectedIndex = 2
        document.getElementById("LOWERS").selectedIndex = 1
        document.getElementById("BOOTS").selectedIndex = 2
        document.getElementById("GLOVES").selectedIndex = 2
    } else if (setbonus && fullset == "Major_Arcana") {
        document.getElementById("HELMETGRADE").selectedIndex = 0
        document.getElementById("UPPERGRADE").selectedIndex = 0
        document.getElementById("GLOVEGRADE").selectedIndex = 0
        document.getElementById("BOOTGRADE").selectedIndex = 0
        document.getElementById("HELMETS").selectedIndex = 3
        document.getElementById("UPPERS").selectedIndex = 3
        document.getElementById("BOOTS").selectedIndex = 3
        document.getElementById("GLOVES").selectedIndex = 3
    } else if (setbonus && fullset == "Apella_Heavy") {
        document.getElementById("HELMETGRADE").selectedIndex = 1
        document.getElementById("UPPERGRADE").selectedIndex = 1
        document.getElementById("GLOVEGRADE").selectedIndex = 1
        document.getElementById("BOOTGRADE").selectedIndex = 1
        document.getElementById("HELMETA").selectedIndex = 2
        document.getElementById("UPPERA").selectedIndex = 3
        document.getElementById("BOOTA").selectedIndex = 3
        document.getElementById("GLOVEA").selectedIndex = 1
    } else if (setbonus && fullset == "Apella_Light") {
        document.getElementById("HELMETGRADE").selectedIndex = 1
        document.getElementById("UPPERGRADE").selectedIndex = 1
        document.getElementById("GLOVEGRADE").selectedIndex = 1
        document.getElementById("BOOTGRADE").selectedIndex = 1
        document.getElementById("HELMETA").selectedIndex = 3
        document.getElementById("UPPERA").selectedIndex = 1
        document.getElementById("BOOTA").selectedIndex = 1
        document.getElementById("GLOVEA").selectedIndex = 2
    } else if (setbonus && fullset == "Apella_Robe") {
        document.getElementById("HELMETGRADE").selectedIndex = 1
        document.getElementById("UPPERGRADE").selectedIndex = 1
        document.getElementById("GLOVEGRADE").selectedIndex = 1
        document.getElementById("BOOTGRADE").selectedIndex = 1
        document.getElementById("HELMETA").selectedIndex = 1
        document.getElementById("UPPERA").selectedIndex = 2
        document.getElementById("BOOTA").selectedIndex = 2
        document.getElementById("GLOVEA").selectedIndex = 3
    } else if (setbonus && fullset == "Dark_Crystal_Heavy") {
        document.getElementById("SHIELDGRADE").selectedIndex = 1
        document.getElementById("HELMETGRADE").selectedIndex = 1
        document.getElementById("UPPERGRADE").selectedIndex = 1
        document.getElementById("LOWERGRADE").selectedIndex = 1
        document.getElementById("GLOVEGRADE").selectedIndex = 1
        document.getElementById("BOOTGRADE").selectedIndex = 1
        document.getElementById("SHIELDA").selectedIndex = 1
        document.getElementById("HELMETA").selectedIndex = 4
        document.getElementById("UPPERA").selectedIndex = 6
        document.getElementById("LOWERA").selectedIndex = 1
        document.getElementById("BOOTA").selectedIndex = 5
        document.getElementById("GLOVEA").selectedIndex = 4
    } else if (setbonus && fullset == "Dark_Crystal_Light") {
        document.getElementById("HELMETGRADE").selectedIndex = 1
        document.getElementById("UPPERGRADE").selectedIndex = 1
        document.getElementById("LOWERGRADE").selectedIndex = 1
        document.getElementById("GLOVEGRADE").selectedIndex = 1
        document.getElementById("BOOTGRADE").selectedIndex = 1
        document.getElementById("HELMETA").selectedIndex = 4
        document.getElementById("UPPERA").selectedIndex = 5
        document.getElementById("LOWERA").selectedIndex = 2
        document.getElementById("BOOTA").selectedIndex = 5
        document.getElementById("GLOVEA").selectedIndex = 4
    } else if (setbonus && fullset == "Dark_Crystal_Robe") {
        document.getElementById("HELMETGRADE").selectedIndex = 1
        document.getElementById("UPPERGRADE").selectedIndex = 1
        document.getElementById("GLOVEGRADE").selectedIndex = 1
        document.getElementById("BOOTGRADE").selectedIndex = 1
        document.getElementById("HELMETA").selectedIndex = 4
        document.getElementById("UPPERA").selectedIndex = 7
        document.getElementById("BOOTA").selectedIndex = 5
        document.getElementById("GLOVEA").selectedIndex = 4
    } else if (setbonus && fullset == "Majestic_Heavy") {
        document.getElementById("HELMETGRADE").selectedIndex = 1
        document.getElementById("UPPERGRADE").selectedIndex = 1
        document.getElementById("GLOVEGRADE").selectedIndex = 1
        document.getElementById("BOOTGRADE").selectedIndex = 1
        document.getElementById("HELMETA").selectedIndex = 6
        document.getElementById("UPPERA").selectedIndex = 9
        document.getElementById("BOOTA").selectedIndex = 6
        document.getElementById("GLOVEA").selectedIndex = 6
    } else if (setbonus && fullset == "Majestic_Light") {
        document.getElementById("HELMETGRADE").selectedIndex = 1
        document.getElementById("UPPERGRADE").selectedIndex = 1
        document.getElementById("GLOVEGRADE").selectedIndex = 1
        document.getElementById("BOOTGRADE").selectedIndex = 1
        document.getElementById("HELMETA").selectedIndex = 6
        document.getElementById("UPPERA").selectedIndex = 8
        document.getElementById("BOOTA").selectedIndex = 6
        document.getElementById("GLOVEA").selectedIndex = 6
    } else if (setbonus && fullset == "Majestic_Robe") {
        document.getElementById("HELMETGRADE").selectedIndex = 1
        document.getElementById("UPPERGRADE").selectedIndex = 1
        document.getElementById("GLOVEGRADE").selectedIndex = 1
        document.getElementById("BOOTGRADE").selectedIndex = 1
        document.getElementById("HELMETA").selectedIndex = 6
        document.getElementById("UPPERA").selectedIndex = 10
        document.getElementById("BOOTA").selectedIndex = 6
        document.getElementById("GLOVEA").selectedIndex = 6
    } else if (setbonus && fullset == "Nightmare_Heavy") {
        document.getElementById("SHIELDGRADE").selectedIndex = 1
        document.getElementById("HELMETGRADE").selectedIndex = 1
        document.getElementById("UPPERGRADE").selectedIndex = 1
        document.getElementById("GLOVEGRADE").selectedIndex = 1
        document.getElementById("BOOTGRADE").selectedIndex = 1
        document.getElementById("SHIELDA").selectedIndex = 2
        document.getElementById("HELMETA").selectedIndex = 5
        document.getElementById("UPPERA").selectedIndex = 4
        document.getElementById("BOOTA").selectedIndex = 4
        document.getElementById("GLOVEA").selectedIndex = 5
    } else if (setbonus && fullset == "Nightmare_Light") {
        document.getElementById("SHIELDGRADE").selectedIndex = 1
        document.getElementById("HELMETGRADE").selectedIndex = 1
        document.getElementById("UPPERGRADE").selectedIndex = 1
        document.getElementById("GLOVEGRADE").selectedIndex = 1
        document.getElementById("BOOTGRADE").selectedIndex = 1
        document.getElementById("SHIELDA").selectedIndex = 2
        document.getElementById("HELMETA").selectedIndex = 5
        document.getElementById("UPPERA").selectedIndex = 11
        document.getElementById("BOOTA").selectedIndex = 4
        document.getElementById("GLOVEA").selectedIndex = 5
    } else if (setbonus && fullset == "Nightmare_Robe") {
        document.getElementById("SHIELDGRADE").selectedIndex = 1
        document.getElementById("HELMETGRADE").selectedIndex = 1
        document.getElementById("UPPERGRADE").selectedIndex = 1
        document.getElementById("GLOVEGRADE").selectedIndex = 1
        document.getElementById("BOOTGRADE").selectedIndex = 1
        document.getElementById("SHIELDA").selectedIndex = 2
        document.getElementById("HELMETA").selectedIndex = 5
        document.getElementById("UPPERA").selectedIndex = 12
        document.getElementById("BOOTA").selectedIndex = 4
        document.getElementById("GLOVEA").selectedIndex = 5
    } else if (setbonus && fullset == "Tallum_Heavy") {
        document.getElementById("HELMETGRADE").selectedIndex = 1
        document.getElementById("UPPERGRADE").selectedIndex = 1
        document.getElementById("GLOVEGRADE").selectedIndex = 1
        document.getElementById("BOOTGRADE").selectedIndex = 1
        document.getElementById("HELMETA").selectedIndex = 7
        document.getElementById("UPPERA").selectedIndex = 14
        document.getElementById("BOOTA").selectedIndex = 7
        document.getElementById("GLOVEA").selectedIndex = 7
    } else if (setbonus && fullset == "Tallum_Light") {
        document.getElementById("HELMETGRADE").selectedIndex = 1
        document.getElementById("UPPERGRADE").selectedIndex = 1
        document.getElementById("GLOVEGRADE").selectedIndex = 1
        document.getElementById("BOOTGRADE").selectedIndex = 1
        document.getElementById("HELMETA").selectedIndex = 7
        document.getElementById("UPPERA").selectedIndex = 13
        document.getElementById("BOOTA").selectedIndex = 7
        document.getElementById("GLOVEA").selectedIndex = 7
    } else if (setbonus && fullset == "Tallum_Robe") {
        document.getElementById("HELMETGRADE").selectedIndex = 1
        document.getElementById("UPPERGRADE").selectedIndex = 1
        document.getElementById("LOWERGRADE").selectedIndex = 1
        document.getElementById("GLOVEGRADE").selectedIndex = 1
        document.getElementById("BOOTGRADE").selectedIndex = 1
        document.getElementById("HELMETA").selectedIndex = 7
        document.getElementById("UPPERA").selectedIndex = 15
        document.getElementById("LOWERA").selectedIndex = 3
        document.getElementById("BOOTA").selectedIndex = 7
        document.getElementById("GLOVEA").selectedIndex = 7
    } else if (setbonus && fullset == "Avadon_Heavy") {
        document.getElementById("SHIELDGRADE").selectedIndex = 2
        document.getElementById("HELMETGRADE").selectedIndex = 2
        document.getElementById("UPPERGRADE").selectedIndex = 2
        document.getElementById("LOWERGRADE").selectedIndex = 2
        document.getElementById("GLOVEGRADE").selectedIndex = 2
        document.getElementById("BOOTGRADE").selectedIndex = 2
        document.getElementById("SHIELDB").selectedIndex = 1
        document.getElementById("HELMETB").selectedIndex = 1
        document.getElementById("UPPERB").selectedIndex = 1
        document.getElementById("LOWERB").selectedIndex = 1
        document.getElementById("BOOTB").selectedIndex = 1
        document.getElementById("GLOVEB").selectedIndex = 1
    } else if (setbonus && fullset == "Avadon_Light") {
        document.getElementById("HELMETGRADE").selectedIndex = 2
        document.getElementById("UPPERGRADE").selectedIndex = 2
        document.getElementById("GLOVEGRADE").selectedIndex = 2
        document.getElementById("BOOTGRADE").selectedIndex = 2
        document.getElementById("HELMETB").selectedIndex = 1
        document.getElementById("UPPERB").selectedIndex = 2
        document.getElementById("BOOTB").selectedIndex = 1
        document.getElementById("GLOVEB").selectedIndex = 1
    } else if (setbonus && fullset == "Avadon_Robe") {
        document.getElementById("HELMETGRADE").selectedIndex = 2
        document.getElementById("UPPERGRADE").selectedIndex = 2
        document.getElementById("GLOVEGRADE").selectedIndex = 2
        document.getElementById("BOOTGRADE").selectedIndex = 2
        document.getElementById("HELMETB").selectedIndex = 1
        document.getElementById("UPPERB").selectedIndex = 3
        document.getElementById("BOOTB").selectedIndex = 1
        document.getElementById("GLOVEB").selectedIndex = 1
    } else if (setbonus && fullset == "Blue_Wolf_Heavy") {
        document.getElementById("HELMETGRADE").selectedIndex = 2
        document.getElementById("UPPERGRADE").selectedIndex = 2
        document.getElementById("LOWERGRADE").selectedIndex = 2
        document.getElementById("GLOVEGRADE").selectedIndex = 2
        document.getElementById("BOOTGRADE").selectedIndex = 2
        document.getElementById("HELMETB").selectedIndex = 2
        document.getElementById("UPPERB").selectedIndex = 4
        document.getElementById("LOWERB").selectedIndex = 2
        document.getElementById("BOOTB").selectedIndex = 2
        document.getElementById("GLOVEB").selectedIndex = 2
    } else if (setbonus && fullset == "Blue_Wolf_Light") {
        document.getElementById("HELMETGRADE").selectedIndex = 2
        document.getElementById("UPPERGRADE").selectedIndex = 2
        document.getElementById("GLOVEGRADE").selectedIndex = 2
        document.getElementById("BOOTGRADE").selectedIndex = 2
        document.getElementById("HELMETB").selectedIndex = 2
        document.getElementById("UPPERB").selectedIndex = 5
        document.getElementById("BOOTB").selectedIndex = 2
        document.getElementById("GLOVEB").selectedIndex = 2
    } else if (setbonus && fullset == "Blue_Wolf_Robe") {
        document.getElementById("HELMETGRADE").selectedIndex = 2
        document.getElementById("UPPERGRADE").selectedIndex = 2
        document.getElementById("LOWERGRADE").selectedIndex = 2
        document.getElementById("GLOVEGRADE").selectedIndex = 2
        document.getElementById("BOOTGRADE").selectedIndex = 2
        document.getElementById("HELMETB").selectedIndex = 2
        document.getElementById("UPPERB").selectedIndex = 6
        document.getElementById("LOWERB").selectedIndex = 3
        document.getElementById("BOOTB").selectedIndex = 2
        document.getElementById("GLOVEB").selectedIndex = 2
    } else if (setbonus && fullset == "Doom_Heavy") {
        document.getElementById("SHIELDGRADE").selectedIndex = 2
        document.getElementById("HELMETGRADE").selectedIndex = 2
        document.getElementById("UPPERGRADE").selectedIndex = 2
        document.getElementById("GLOVEGRADE").selectedIndex = 2
        document.getElementById("BOOTGRADE").selectedIndex = 2
        document.getElementById("SHIELDB").selectedIndex = 2
        document.getElementById("HELMETB").selectedIndex = 3
        document.getElementById("UPPERB").selectedIndex = 7
        document.getElementById("BOOTB").selectedIndex = 3
        document.getElementById("GLOVEB").selectedIndex = 3
    } else if (setbonus && fullset == "Doom_Light") {
        document.getElementById("HELMETGRADE").selectedIndex = 2
        document.getElementById("UPPERGRADE").selectedIndex = 2
        document.getElementById("GLOVEGRADE").selectedIndex = 2
        document.getElementById("BOOTGRADE").selectedIndex = 2
        document.getElementById("HELMETB").selectedIndex = 3
        document.getElementById("UPPERB").selectedIndex = 8
        document.getElementById("BOOTB").selectedIndex = 3
        document.getElementById("GLOVEB").selectedIndex = 3
    } else if (setbonus && fullset == "Doom_Robe") {
        document.getElementById("HELMETGRADE").selectedIndex = 2
        document.getElementById("UPPERGRADE").selectedIndex = 2
        document.getElementById("LOWERGRADE").selectedIndex = 2
        document.getElementById("GLOVEGRADE").selectedIndex = 2
        document.getElementById("BOOTGRADE").selectedIndex = 2
        document.getElementById("HELMETB").selectedIndex = 3
        document.getElementById("UPPERB").selectedIndex = 9
        document.getElementById("LOWERB").selectedIndex = 4
        document.getElementById("BOOTB").selectedIndex = 3
        document.getElementById("GLOVEB").selectedIndex = 3
    } else if (setbonus && fullset == "Zubei_Heavy") {
        document.getElementById("SHIELDGRADE").selectedIndex = 2
        document.getElementById("HELMETGRADE").selectedIndex = 2
        document.getElementById("UPPERGRADE").selectedIndex = 2
        document.getElementById("LOWERGRADE").selectedIndex = 2
        document.getElementById("GLOVEGRADE").selectedIndex = 2
        document.getElementById("BOOTGRADE").selectedIndex = 2
        document.getElementById("SHIELDB").selectedIndex = 3
        document.getElementById("HELMETB").selectedIndex = 4
        document.getElementById("UPPERB").selectedIndex = 11
        document.getElementById("LOWERB").selectedIndex = 6
        document.getElementById("BOOTB").selectedIndex = 4
        document.getElementById("GLOVEB").selectedIndex = 4
    } else if (setbonus && fullset == "Zubei_Light") {
        document.getElementById("HELMETGRADE").selectedIndex = 2
        document.getElementById("UPPERGRADE").selectedIndex = 2
        document.getElementById("LOWERGRADE").selectedIndex = 2
        document.getElementById("GLOVEGRADE").selectedIndex = 2
        document.getElementById("BOOTGRADE").selectedIndex = 2
        document.getElementById("HELMETB").selectedIndex = 4
        document.getElementById("UPPERB").selectedIndex = 12
        document.getElementById("LOWERB").selectedIndex = 7
        document.getElementById("BOOTB").selectedIndex = 4
        document.getElementById("GLOVEB").selectedIndex = 4
    } else if (setbonus && fullset == "Zubei_Robe") {
        document.getElementById("HELMETGRADE").selectedIndex = 2
        document.getElementById("UPPERGRADE").selectedIndex = 2
        document.getElementById("LOWERGRADE").selectedIndex = 2
        document.getElementById("GLOVEGRADE").selectedIndex = 2
        document.getElementById("BOOTGRADE").selectedIndex = 2
        document.getElementById("HELMETB").selectedIndex = 4
        document.getElementById("UPPERB").selectedIndex = 10
        document.getElementById("LOWERB").selectedIndex = 5
        document.getElementById("BOOTB").selectedIndex = 4
        document.getElementById("GLOVEB").selectedIndex = 4
    } else if (setbonus && fullset == "Chain_Mail") {
        document.getElementById("SHIELDGRADE").selectedIndex = 3
        document.getElementById("HELMETGRADE").selectedIndex = 3
        document.getElementById("UPPERGRADE").selectedIndex = 3
        document.getElementById("LOWERGRADE").selectedIndex = 3
        document.getElementById("SHIELDC").selectedIndex = 1
        document.getElementById("HELMETC").selectedIndex = 1
        document.getElementById("UPPERC").selectedIndex = 1
        document.getElementById("LOWERC").selectedIndex = 1
    } else if (setbonus && fullset == "Composite") {
        document.getElementById("SHIELDGRADE").selectedIndex = 3
        document.getElementById("HELMETGRADE").selectedIndex = 3
        document.getElementById("UPPERGRADE").selectedIndex = 3
        document.getElementById("SHIELDC").selectedIndex = 2
        document.getElementById("HELMETC").selectedIndex = 2
        document.getElementById("UPPERC").selectedIndex = 2
    } else if (setbonus && fullset == "Full_Plate") {
        document.getElementById("SHIELDGRADE").selectedIndex = 3
        document.getElementById("HELMETGRADE").selectedIndex = 3
        document.getElementById("UPPERGRADE").selectedIndex = 3
        document.getElementById("SHIELDC").selectedIndex = 5
        document.getElementById("HELMETC").selectedIndex = 3
        document.getElementById("UPPERC").selectedIndex = 7
    } else if (setbonus && fullset == "Mithril_Light") {
        document.getElementById("UPPERGRADE").selectedIndex = 3
        document.getElementById("LOWERGRADE").selectedIndex = 3
        document.getElementById("BOOTGRADE").selectedIndex = 3
        document.getElementById("UPPERC").selectedIndex = 9
        document.getElementById("LOWERC").selectedIndex = 8
        document.getElementById("BOOTC").selectedIndex = 11
    } else if (setbonus && fullset == "Plated_Leather") {
        document.getElementById("UPPERGRADE").selectedIndex = 3
        document.getElementById("LOWERGRADE").selectedIndex = 3
        document.getElementById("BOOTGRADE").selectedIndex = 3
        document.getElementById("UPPERC").selectedIndex = 10
        document.getElementById("LOWERC").selectedIndex = 6
        document.getElementById("BOOTC").selectedIndex = 12
    } else if (setbonus && fullset == "Theca") {
        document.getElementById("UPPERGRADE").selectedIndex = 3
        document.getElementById("LOWERGRADE").selectedIndex = 3
        document.getElementById("BOOTGRADE").selectedIndex = 3
        document.getElementById("UPPERC").selectedIndex = 13
        document.getElementById("LOWERC").selectedIndex = 9
        document.getElementById("BOOTC").selectedIndex = 14
    } else if (setbonus && fullset == "Drake") {
        document.getElementById("UPPERGRADE").selectedIndex = 3
        document.getElementById("BOOTGRADE").selectedIndex = 3
        document.getElementById("UPPERC").selectedIndex = 5
        document.getElementById("BOOTC").selectedIndex = 7
    } else if (setbonus && fullset == "Karmian") {
        document.getElementById("UPPERGRADE").selectedIndex = 3
        document.getElementById("LOWERGRADE").selectedIndex = 3
        document.getElementById("GLOVEGRADE").selectedIndex = 3
        document.getElementById("UPPERC").selectedIndex = 8
        document.getElementById("LOWERC").selectedIndex = 5
        document.getElementById("GLOVEC").selectedIndex = 8
    } else if (setbonus && fullset == "Demon") {
        document.getElementById("UPPERGRADE").selectedIndex = 3
        document.getElementById("LOWERGRADE").selectedIndex = 3
        document.getElementById("GLOVEGRADE").selectedIndex = 3
        document.getElementById("UPPERC").selectedIndex = 3
        document.getElementById("LOWERC").selectedIndex = 2
        document.getElementById("GLOVEC").selectedIndex = 2
    } else if (setbonus && fullset == "Divine") {
        document.getElementById("UPPERGRADE").selectedIndex = 3
        document.getElementById("LOWERGRADE").selectedIndex = 3
        document.getElementById("GLOVEGRADE").selectedIndex = 3
        document.getElementById("UPPERC").selectedIndex = 4
        document.getElementById("LOWERC").selectedIndex = 3
        document.getElementById("GLOVEC").selectedIndex = 3
    } else if (setbonus && fullset == "Clan_Oath_Heavy") {
        document.getElementById("HELMETGRADE").selectedIndex = 4
        document.getElementById("UPPERGRADE").selectedIndex = 4
        document.getElementById("BOOTGRADE").selectedIndex = 4
        document.getElementById("GLOVEGRADE").selectedIndex = 4
        document.getElementById("HELMETD").selectedIndex = 5
        document.getElementById("UPPERD").selectedIndex = 5
        document.getElementById("BOOTD").selectedIndex = 7
        document.getElementById("GLOVED").selectedIndex = 2
    } else if (setbonus && fullset == "Clan_Oath_Light") {
        document.getElementById("HELMETGRADE").selectedIndex = 4
        document.getElementById("UPPERGRADE").selectedIndex = 4
        document.getElementById("BOOTGRADE").selectedIndex = 4
        document.getElementById("GLOVEGRADE").selectedIndex = 4
        document.getElementById("HELMETD").selectedIndex = 6
        document.getElementById("UPPERD").selectedIndex = 4
        document.getElementById("BOOTD").selectedIndex = 6
        document.getElementById("GLOVED").selectedIndex = 3
    } else if (setbonus && fullset == "Clan_Oath_Robe") {
        document.getElementById("HELMETGRADE").selectedIndex = 4
        document.getElementById("UPPERGRADE").selectedIndex = 4
        document.getElementById("BOOTGRADE").selectedIndex = 4
        document.getElementById("GLOVEGRADE").selectedIndex = 4
        document.getElementById("HELMETD").selectedIndex = 4
        document.getElementById("UPPERD").selectedIndex = 3
        document.getElementById("BOOTD").selectedIndex = 8
        document.getElementById("GLOVED").selectedIndex = 4
    } else if (setbonus && fullset == "Mithril_Heavy") {
        document.getElementById("SHIELDGRADE").selectedIndex = 4
        document.getElementById("HELMETGRADE").selectedIndex = 4
        document.getElementById("UPPERGRADE").selectedIndex = 4
        document.getElementById("LOWERGRADE").selectedIndex = 4
        document.getElementById("SHIELDD").selectedIndex = 4
        document.getElementById("HELMETD").selectedIndex = 7
        document.getElementById("UPPERD").selectedIndex = 14
        document.getElementById("LOWERD").selectedIndex = 11
    } else if (setbonus && fullset == "Brigandine") {
        document.getElementById("SHIELDGRADE").selectedIndex = 4
        document.getElementById("HELMETGRADE").selectedIndex = 4
        document.getElementById("UPPERGRADE").selectedIndex = 4
        document.getElementById("LOWERGRADE").selectedIndex = 4
        document.getElementById("SHIELDD").selectedIndex = 2
        document.getElementById("HELMETD").selectedIndex = 2
        document.getElementById("UPPERD").selectedIndex = 2
        document.getElementById("LOWERD").selectedIndex = 1
    } else if (setbonus && fullset == "Reinforced_Leather") {
        document.getElementById("UPPERGRADE").selectedIndex = 4
        document.getElementById("LOWERGRADE").selectedIndex = 4
        document.getElementById("BOOTGRADE").selectedIndex = 4
        document.getElementById("UPPERD").selectedIndex = 18
        document.getElementById("LOWERD").selectedIndex = 17
        document.getElementById("BOOTD").selectedIndex = 14
    } else if (setbonus && fullset == "Manticore") {
        document.getElementById("UPPERGRADE").selectedIndex = 4
        document.getElementById("LOWERGRADE").selectedIndex = 4
        document.getElementById("BOOTGRADE").selectedIndex = 4
        document.getElementById("UPPERD").selectedIndex = 12
        document.getElementById("LOWERD").selectedIndex = 9
        document.getElementById("BOOTD").selectedIndex = 12
    } else if (setbonus && fullset == "Knowledge") {
        document.getElementById("UPPERGRADE").selectedIndex = 4
        document.getElementById("LOWERGRADE").selectedIndex = 4
        document.getElementById("GLOVEGRADE").selectedIndex = 4
        document.getElementById("UPPERD").selectedIndex = 23
        document.getElementById("LOWERD").selectedIndex = 19
        document.getElementById("GLOVED").selectedIndex = 8
    } else if (setbonus && fullset == "Elven_Mithril") {
        document.getElementById("UPPERGRADE").selectedIndex = 4
        document.getElementById("LOWERGRADE").selectedIndex = 4
        document.getElementById("GLOVEGRADE").selectedIndex = 4
        document.getElementById("UPPERD").selectedIndex = 15
        document.getElementById("LOWERD").selectedIndex = 13
        document.getElementById("GLOVED").selectedIndex = 5
    } else if (setbonus && fullset == "Devotion") {
        document.getElementById("HELMETGRADE").selectedIndex = 5
        document.getElementById("UPPERGRADE").selectedIndex = 5
        document.getElementById("LOWERGRADE").selectedIndex = 5
        document.getElementById("HELMETN").selectedIndex = 4
        document.getElementById("UPPERN").selectedIndex = 14
        document.getElementById("LOWERN").selectedIndex = 14
    } else if (setbonus && fullset == "Wooden") {
        document.getElementById("HELMETGRADE").selectedIndex = 5
        document.getElementById("UPPERGRADE").selectedIndex = 5
        document.getElementById("LOWERGRADE").selectedIndex = 5
        document.getElementById("HELMETN").selectedIndex = 5
        document.getElementById("UPPERN").selectedIndex = 16
        document.getElementById("LOWERN").selectedIndex = 16
    }
    var fullmdef = document.getElementById("FULLMDEF").value
    if (setjewelry && fullmdef == "Unsealed_Tateossian") {
        document.getElementById("NECKLACEGRADE").selectedIndex = 0
        document.getElementById("EARRING1GRADE").selectedIndex = 0
        document.getElementById("EARRING2GRADE").selectedIndex = 0
        document.getElementById("RING1GRADE").selectedIndex = 0
        document.getElementById("RING2GRADE").selectedIndex = 0
        document.getElementById("NECKLACES").selectedIndex = 3
        document.getElementById("EARRING1S").selectedIndex = 3
        document.getElementById("EARRING2S").selectedIndex = 3
        document.getElementById("RING1S").selectedIndex = 3
        document.getElementById("RING2S").selectedIndex = 3
    } else if (setjewelry && fullmdef == "Sealed_Tateossian") {
        document.getElementById("NECKLACEGRADE").selectedIndex = 0
        document.getElementById("EARRING1GRADE").selectedIndex = 0
        document.getElementById("EARRING2GRADE").selectedIndex = 0
        document.getElementById("RING1GRADE").selectedIndex = 0
        document.getElementById("RING2GRADE").selectedIndex = 0
        document.getElementById("NECKLACES").selectedIndex = 2
        document.getElementById("EARRING1S").selectedIndex = 2
        document.getElementById("EARRING2S").selectedIndex = 2
        document.getElementById("RING1S").selectedIndex = 2
        document.getElementById("RING2S").selectedIndex = 2
    } else if (setjewelry && fullmdef == "Unsealed_Majestic") {
        document.getElementById("NECKLACEGRADE").selectedIndex = 1
        document.getElementById("EARRING1GRADE").selectedIndex = 1
        document.getElementById("EARRING2GRADE").selectedIndex = 1
        document.getElementById("RING1GRADE").selectedIndex = 1
        document.getElementById("RING2GRADE").selectedIndex = 1
        document.getElementById("NECKLACEA").selectedIndex = 1
        document.getElementById("EARRING1A").selectedIndex = 2
        document.getElementById("EARRING2A").selectedIndex = 2
        document.getElementById("RING1A").selectedIndex = 1
        document.getElementById("RING2A").selectedIndex = 1
    } else if (setjewelry && fullmdef == "Sealed_Majestic") {
        document.getElementById("NECKLACEGRADE").selectedIndex = 1
        document.getElementById("EARRING1GRADE").selectedIndex = 1
        document.getElementById("EARRING2GRADE").selectedIndex = 1
        document.getElementById("RING1GRADE").selectedIndex = 1
        document.getElementById("RING2GRADE").selectedIndex = 1
        document.getElementById("NECKLACEA").selectedIndex = 3
        document.getElementById("EARRING1A").selectedIndex = 4
        document.getElementById("EARRING2A").selectedIndex = 4
        document.getElementById("RING1A").selectedIndex = 4
        document.getElementById("RING2A").selectedIndex = 4
    } else if (setjewelry && fullmdef == "Black_Ore") {
        document.getElementById("NECKLACEGRADE").selectedIndex = 2
        document.getElementById("EARRING1GRADE").selectedIndex = 2
        document.getElementById("EARRING2GRADE").selectedIndex = 2
        document.getElementById("RING1GRADE").selectedIndex = 2
        document.getElementById("RING2GRADE").selectedIndex = 2
        document.getElementById("NECKLACEB").selectedIndex = 2
        document.getElementById("EARRING1B").selectedIndex = 2
        document.getElementById("EARRING2B").selectedIndex = 2
        document.getElementById("RING1B").selectedIndex = 2
        document.getElementById("RING2B").selectedIndex = 2
    } else if (setjewelry && fullmdef == "Top_C") {
        document.getElementById("NECKLACEGRADE").selectedIndex = 3
        document.getElementById("EARRING1GRADE").selectedIndex = 3
        document.getElementById("EARRING2GRADE").selectedIndex = 3
        document.getElementById("RING1GRADE").selectedIndex = 3
        document.getElementById("RING2GRADE").selectedIndex = 3
        document.getElementById("NECKLACEC").selectedIndex = 2
        document.getElementById("EARRING1C").selectedIndex = 4
        document.getElementById("EARRING2C").selectedIndex = 4
        document.getElementById("RING1C").selectedIndex = 3
        document.getElementById("RING2C").selectedIndex = 3
    } else if (setjewelry && fullmdef == "Top_Lux") {
        document.getElementById("NECKLACEGRADE").selectedIndex = 3
        document.getElementById("EARRING1GRADE").selectedIndex = 3
        document.getElementById("EARRING2GRADE").selectedIndex = 3
        document.getElementById("RING1GRADE").selectedIndex = 3
        document.getElementById("RING2GRADE").selectedIndex = 3
        document.getElementById("NECKLACEC").selectedIndex = 3
        document.getElementById("EARRING1C").selectedIndex = 1
        document.getElementById("EARRING2C").selectedIndex = 1
        document.getElementById("RING1C").selectedIndex = 2
        document.getElementById("RING2C").selectedIndex = 2
    } else if (setjewelry && fullmdef == "Top_D") {
        document.getElementById("NECKLACEGRADE").selectedIndex = 4
        document.getElementById("EARRING1GRADE").selectedIndex = 4
        document.getElementById("EARRING2GRADE").selectedIndex = 4
        document.getElementById("RING1GRADE").selectedIndex = 4
        document.getElementById("RING2GRADE").selectedIndex = 4
        document.getElementById("NECKLACED").selectedIndex = 4
        document.getElementById("EARRING1D").selectedIndex = 3
        document.getElementById("EARRING2D").selectedIndex = 3
        document.getElementById("RING1D").selectedIndex = 4
        document.getElementById("RING2D").selectedIndex = 4
    } else if (setjewelry && fullmdef == "Elven") {
        document.getElementById("NECKLACEGRADE").selectedIndex = 4
        document.getElementById("EARRING1GRADE").selectedIndex = 4
        document.getElementById("EARRING2GRADE").selectedIndex = 4
        document.getElementById("RING1GRADE").selectedIndex = 4
        document.getElementById("RING2GRADE").selectedIndex = 4
        document.getElementById("NECKLACED").selectedIndex = 1
        document.getElementById("EARRING1D").selectedIndex = 1
        document.getElementById("EARRING2D").selectedIndex = 1
        document.getElementById("RING1D").selectedIndex = 2
        document.getElementById("RING2D").selectedIndex = 2
    } else if (setjewelry && fullmdef == "Top_Non") {
        document.getElementById("NECKLACEGRADE").selectedIndex = 5
        document.getElementById("EARRING1GRADE").selectedIndex = 5
        document.getElementById("EARRING2GRADE").selectedIndex = 5
        document.getElementById("RING1GRADE").selectedIndex = 5
        document.getElementById("RING2GRADE").selectedIndex = 5
        document.getElementById("NECKLACEN").selectedIndex = 1
        document.getElementById("EARRING1N").selectedIndex = 3
        document.getElementById("EARRING2N").selectedIndex = 3
        document.getElementById("RING1N").selectedIndex = 1
        document.getElementById("RING2N").selectedIndex = 1
    }

//Shield hide/unhide stuff
    var shieldgrade = document.getElementById("SHIELDGRADE").value
    if (shieldgrade == "S") {
        document.getElementById("SHIELDS").style.display = 'block'
        document.getElementById("SHIELDA").style.display = 'none'
        document.getElementById("SHIELDB").style.display = 'none'
        document.getElementById("SHIELDC").style.display = 'none'
        document.getElementById("SHIELDD").style.display = 'none'
        document.getElementById("SHIELDN").style.display = 'none'
        shield = document.getElementById("SHIELDS").value;
    } else if (shieldgrade == "A") {
        document.getElementById("SHIELDS").style.display = 'none'
        document.getElementById("SHIELDA").style.display = 'block'
        document.getElementById("SHIELDB").style.display = 'none'
        document.getElementById("SHIELDC").style.display = 'none'
        document.getElementById("SHIELDD").style.display = 'none'
        document.getElementById("SHIELDN").style.display = 'none'
        shield = document.getElementById("SHIELDA").value;
    } else if (shieldgrade == "B") {
        document.getElementById("SHIELDS").style.display = 'none'
        document.getElementById("SHIELDA").style.display = 'none'
        document.getElementById("SHIELDB").style.display = 'block'
        document.getElementById("SHIELDC").style.display = 'none'
        document.getElementById("SHIELDD").style.display = 'none'
        document.getElementById("SHIELDN").style.display = 'none'
        shield = document.getElementById("SHIELDB").value;
    } else if (shieldgrade == "C") {
        document.getElementById("SHIELDS").style.display = 'none'
        document.getElementById("SHIELDA").style.display = 'none'
        document.getElementById("SHIELDB").style.display = 'none'
        document.getElementById("SHIELDC").style.display = 'block'
        document.getElementById("SHIELDD").style.display = 'none'
        document.getElementById("SHIELDN").style.display = 'none'
        shield = document.getElementById("SHIELDC").value;
    } else if (shieldgrade == "D") {
        document.getElementById("SHIELDS").style.display = 'none'
        document.getElementById("SHIELDA").style.display = 'none'
        document.getElementById("SHIELDB").style.display = 'none'
        document.getElementById("SHIELDC").style.display = 'none'
        document.getElementById("SHIELDD").style.display = 'block'
        document.getElementById("SHIELDN").style.display = 'none'
        shield = document.getElementById("SHIELDD").value;
    } else if (shieldgrade == "N") {
        document.getElementById("SHIELDS").style.display = 'none'
        document.getElementById("SHIELDA").style.display = 'none'
        document.getElementById("SHIELDB").style.display = 'none'
        document.getElementById("SHIELDC").style.display = 'none'
        document.getElementById("SHIELDD").style.display = 'none'
        document.getElementById("SHIELDN").style.display = 'block'
        shield = document.getElementById("SHIELDN").value;
    }

//Shields
    Shield = SHIELDPDEF[shield]
    if (shield == "0") {
        ShieldEvasion = 0
    } else if (shield > 0) {
        ShieldEvasion = -8
    }

//Shield Enchant
    var shieldenchant = document.getElementById("SHIELDENCHANT").value
    if (shieldenchant <= 3) {
        shieldunderenchant = shieldenchant;
        shieldoverenchant = 0;
    } else {
        shieldunderenchant = 3;
        shieldoverenchant = shieldenchant - 3;
    }
    if (shieldgrade == "N" || shield == "0") {
        document.getElementById("SHIELDENCHANT").disabled = true
        shieldunderPDEF = 0
        shieldoverPDEF = 0
        Shield = Shield
    } else {
        document.getElementById("SHIELDENCHANT").disabled = false
        shieldunderPDEF = 1
        shieldoverPDEF = 3
        Shield = Shield + (shieldunderenchant * shieldunderPDEF) + (shieldoverenchant * shieldoverPDEF)
    }

//Weapon hide/unhide stuff
    var weapongrade = document.getElementById("WEAPONGRADE").value
    if (weapongrade == "S") {
        document.getElementById("WPNS").style.display = 'block'
        document.getElementById("WPNA").style.display = 'none'
        document.getElementById("WPNB").style.display = 'none'
        document.getElementById("WPNC").style.display = 'none'
        document.getElementById("WPNH").style.display = 'none'
        document.getElementById("WPND").style.display = 'none'
        document.getElementById("WPNN").style.display = 'none'
        var weapon = document.getElementById("WPNS").value
    } else if (weapongrade == "A") {
        document.getElementById("WPNS").style.display = 'none'
        document.getElementById("WPNA").style.display = 'block'
        document.getElementById("WPNB").style.display = 'none'
        document.getElementById("WPNC").style.display = 'none'
        document.getElementById("WPNH").style.display = 'none'
        document.getElementById("WPND").style.display = 'none'
        document.getElementById("WPNN").style.display = 'none'
        var weapon = document.getElementById("WPNA").value
    } else if (weapongrade == "B") {
        document.getElementById("WPNS").style.display = 'none'
        document.getElementById("WPNA").style.display = 'none'
        document.getElementById("WPNB").style.display = 'block'
        document.getElementById("WPNC").style.display = 'none'
        document.getElementById("WPNH").style.display = 'none'
        document.getElementById("WPND").style.display = 'none'
        document.getElementById("WPNN").style.display = 'none'
        var weapon = document.getElementById("WPNB").value
    } else if (weapongrade == "C") {
        document.getElementById("WPNS").style.display = 'none'
        document.getElementById("WPNA").style.display = 'none'
        document.getElementById("WPNB").style.display = 'none'
        document.getElementById("WPNC").style.display = 'block'
        document.getElementById("WPND").style.display = 'none'
        document.getElementById("WPNH").style.display = 'none'
        document.getElementById("WPNN").style.display = 'none'
        var weapon = document.getElementById("WPNC").value
    } else if (weapongrade == "D") {
        document.getElementById("WPNS").style.display = 'none'
        document.getElementById("WPNA").style.display = 'none'
        document.getElementById("WPNB").style.display = 'none'
        document.getElementById("WPNC").style.display = 'none'
        document.getElementById("WPND").style.display = 'block'
        document.getElementById("WPNN").style.display = 'none'
        document.getElementById("WPNH").style.display = 'none'
        var weapon = document.getElementById("WPND").value
    } else if (weapongrade == "N") {
        document.getElementById("WPNS").style.display = 'none'
        document.getElementById("WPNA").style.display = 'none'
        document.getElementById("WPNB").style.display = 'none'
        document.getElementById("WPNC").style.display = 'none'
        document.getElementById("WPND").style.display = 'none'
        document.getElementById("WPNN").style.display = 'block'
        document.getElementById("WPNH").style.display = 'none'
        var weapon = document.getElementById("WPNN").value
    } else if (weapongrade == "H") {
        document.getElementById("WPNS").style.display = 'none'
        document.getElementById("WPNA").style.display = 'none'
        document.getElementById("WPNB").style.display = 'none'
        document.getElementById("WPNC").style.display = 'none'
        document.getElementById("WPND").style.display = 'none'
        document.getElementById("WPNN").style.display = 'none'
        document.getElementById("WPNH").style.display = 'block'
        var weapon = document.getElementById("WPNH").value
    }

//Weapon SAs
    var weaponsa = document.forms['EQUIPMENT'].WEAPONSA;
    weaponsa.options[1] = new Option(WEAPON[weapon][3], WEAPON[weapon][3], false, weaponsa.options[1].selected);
    weaponsa.options[2] = new Option(WEAPON[weapon][5], WEAPON[weapon][5], false, weaponsa.options[2].selected);
    weaponsa.options[3] = new Option(WEAPON[weapon][7], WEAPON[weapon][7], false, weaponsa.options[3].selected);
    weaponsa.options[4] = new Option(WEAPON[weapon][9], WEAPON[weapon][9], false, weaponsa.options[4].selected);

    if (weapon == "43" || weapon == "124" || weapon == "127" || weapon == "129") {
        weaponsa.options[4].selected
        weaponsa.options[4].style.display = 'block'
    } else {
        weaponsa.options[4].selected = false
        weaponsa.options[4].style.display = 'none'
    }

    if ((weapon >= 1 && weapon <= 10) || (weapon >= 12 && weapon <= 15) || (weapon >= 17 && weapon <= 27) || (weapon >= 30 && weapon <= 60) || (weapon >= 112 && weapon <= 136) || (weapon >= 138 && weapon <= 142) || (weapon >= 144 && weapon <= 180)) {
        document.getElementById("WEAPONSA").style.display = 'block'
    } else {
        document.getElementById("WEAPONSA").style.display = 'none'
    }

//Weapon Enchant
    var weaponenchant = document.getElementById("WEAPONENCHANT").value
    if (weaponenchant <= 3) {
        weaponunderenchant = weaponenchant;
        weaponoverenchant = 0;
    } else {
        weaponunderenchant = 3;
        weaponoverenchant = weaponenchant - 3;
    }
    if (weapongrade == "N" || weapon == "0") {
        document.getElementById("WEAPONENCHANT").disabled = true
        underMATK = 0
        overMATK = 0
    } else if (weapongrade == "H") {
        document.getElementById("WEAPONENCHANT").disabled = true
        underMATK = 0
        overMATK = 0
    } else {
        document.getElementById("WEAPONENCHANT").disabled = false
        underMATK = 3
        overMATK = 6
    }

//Get SA choice....thing
    var weapon_sa = document.getElementById("WEAPONSA").value
    var sasubvalue = document.getElementById("WEAPONSA").selectedIndex
    var samultiplier = sasubvalue * 2 + 2
    var duals_sa = WEAPON[weapon][11]
    var duals_v = WEAPON[weapon][12]

///////Y
//Weapons
    WpnPATK = WEAPON[weapon][0]
    WpnMATK = WEAPON[weapon][1]
    WpnType = WEAPON[weapon][2]
    if ((race == "HM" || race == "EM" || race == "DM" || race == "OM") && weapon == 0) {
        WpnPATK = 3
    }
    if (weapon_sa == "Haste") {
        BuffASPD = BuffASPD * WEAPON[weapon][samultiplier]
    } else if (weapon_sa == "Acumen") {
        BuffCAST = BuffCAST * 1.15
    } else if (weapon_sa == "Mana Up") {
        BuffMP = BuffMP * 1.3
    } else if (weapon_sa == "Health") {
        BuffHP = BuffHP * 1.25
    } else if (weapon_sa == "Focus") {
        AddCRIT = AddCRIT + WEAPON[weapon][samultiplier]
    } else if (weapon_sa == "Empower") {
        AddMATK = AddMATK + WEAPON[weapon][samultiplier]
    } else if (weapon_sa == "Guidance") {
        BuffACC = BuffACC + WEAPON[weapon][samultiplier]
    } else if (weapon_sa == "Anger") {
        BuffHP = BuffHP * 0.85;
        AddPATK = AddPATK + WEAPON[weapon][samultiplier]
    } else if (weapon_sa == "Conversion") {
        BuffMP = BuffMP * 1.6;
        BuffHP = BuffHP * 0.6
    } else if (weapon_sa == "Rsk. Focus") {
        AddCRIT60 = AddCRIT60 + WEAPON[weapon][samultiplier]
    } else if (weapon_sa == "Rsk. Haste") {
        BuffASPD60 = BuffASPD60 * WEAPON[weapon][samultiplier]
    } else if (weapon_sa == "Rsk. Evasion") {
        BuffEVA60 = BuffEVA60 + WEAPON[weapon][samultiplier]
    } else if (weapon_sa == "Magic Power") {
        AddMATK = AddMATK + WEAPON[weapon][samultiplier]
    } else if (weapon_sa == "Critical Anger") {
        BuffHP = BuffHP * 0.85
    } else if (duals_sa == "S Duals" && weaponenchant >= 4) {
        BuffHP = BuffHP * 1.15;
        BuffMP = BuffMP * 1.2;
        BuffCP = BuffCP * 1.3
    } else if (duals_sa == "Guidance" && weaponenchant >= 4) {
        BuffACC = BuffACC + duals_v
    } else if (duals_sa == "Health" && weaponenchant >= 4) {
        BuffHP = BuffHP * 1.25
    } else if (duals_sa == "Haste" && weaponenchant >= 4) {
        BuffASPD = BuffASPD * duals_v
    } else if (duals_sa == "Focus" && weaponenchant >= 4) {
        AddCRIT = AddCRIT + duals_v
    } else if (weapon == "330") {
        BuffHP = BuffHP * 1.25;
        BuffMP = BuffMP * 1.3
    } else if (weapon == "331") {
        BuffHP = BuffHP * 1.25;
        BuffMP = BuffMP * 1.3;
        BuffCP = BuffCP * 1.5
    } else if (weapon == "332") {
        BuffMP = BuffMP * 1.3;
        BuffCP = BuffCP * 1.5
    } else if (weapon == "333") {
        BuffHP = BuffHP * 1.25;
        BuffCP = BuffCP * 1.5;
        AddCRIT = AddCRIT + 78.7
    } else if (weapon == "334") {
        BuffHP = BuffHP * 1.25;
        BuffCP = BuffCP * 1.5;
        BuffASPD = BuffASPD * 1.07
    } else if (weapon == "335") {
        BuffHP = BuffHP * 1.25;
        BuffMP = BuffMP * 1.3;
        BuffCP = BuffCP * 1.5;
        BuffEVA = BuffEVA + 3.15
    } else if (weapon == "336") {
        BuffMP = BuffMP * 1.3;
        BuffCP = BuffCP * 1.5;
        BuffCAST = BuffCAST * 1.15
    } else if (weapon == "337") {
        BuffMP = BuffMP * 1.3;
        BuffCP = BuffCP * 1.5;
        AddMATK = AddMATK + 29.67
    } else if (weapon == "338") {
        BuffASPD = BuffASPD * 1.07;
        BuffACC = BuffACC + 4.89
    } else if (weapon == "339") {
        BuffMP = BuffMP * 1.3;
        BuffCP = BuffCP * 1.5;
        BuffASPD * BuffASPD * 1.03
    } else if (weapon == "340") {
        BuffHP = BuffHP * 1.25;
        BuffMP = BuffMP * 1.3;
        BuffCP = BuffCP * 1.5;
        AddCRIT = AddCRIT + 78.7
    }

//Weapon Types
    if (WpnType == "unequipped") {
        WpnSpd = 300;
        WpnAcc = 0;
        WpnCrt = 40;
        document.getElementById("SHIELDS").disabled = false;
        document.getElementById("SHIELDA").disabled = false;
        document.getElementById("SHIELDB").disabled = false;
        WpnMAS = "Fist";
    } else if (WpnType == "2hs") {
        WpnSpd = 325;
        WpnAcc = 0;
        WpnCrt = 80;
        document.getElementById("SHIELDS").disabled = true;
        document.getElementById("SHIELDA").disabled = true;
        document.getElementById("SHIELDB").disabled = true;
        shield = "unequipped";
        Shield = 0;
        WpnMAS = "Sword";
        ShieldEvasion = 0
    } else if (WpnType == "2hb") {
        WpnSpd = 325;
        WpnAcc = 4.75;
        WpnCrt = 40;
        document.getElementById("SHIELDS").disabled = true;
        document.getElementById("SHIELDA").disabled = true;
        document.getElementById("SHIELDB").disabled = true;
        shield = "unequipped";
        Shield = 0;
        WpnMAS = "Blunt";
        ShieldEvasion = 0
    } else if (WpnType == "Sword") {
        WpnSpd = 379;
        WpnAcc = 0;
        WpnCrt = 80;
        document.getElementById("SHIELDS").disabled = false;
        document.getElementById("SHIELDA").disabled = false;
        document.getElementById("SHIELDB").disabled = false;
        WpnMAS = "Sword"
    } else if (WpnType == "Duals") {
        WpnSpd = 325;
        WpnAcc = 0;
        WpnCrt = 80;
        document.getElementById("SHIELDS").disabled = true;
        document.getElementById("SHIELDA").disabled = true;
        document.getElementById("SHIELDB").disabled = true;
        shield = "unequipped";
        Shield = 0;
        WpnMAS = "Duals";
        ShieldEvasion = 0
    } else if (WpnType == "Blunt") {
        WpnSpd = 379;
        WpnAcc = 4.75;
        WpnCrt = 40;
        document.getElementById("SHIELDS").disabled = false;
        document.getElementById("SHIELDA").disabled = false;
        document.getElementById("SHIELDB").disabled = false;
        WpnMAS = "Blunt"
    } else if (WpnType == "Bow") {
        WpnSpd = 293;
        WpnAcc = (-3.75);
        WpnCrt = 120;
        document.getElementById("SHIELDS").disabled = true;
        document.getElementById("SHIELDA").disabled = true;
        document.getElementById("SHIELDB").disabled = true;
        shield = "unequipped";
        Shield = 0;
        WpnMAS = "Bow";
        ShieldEvasion = 0
    } else if (WpnType == "YumiBow") {
        WpnSpd = 227;
        WpnAcc = (-3.75);
        WpnCrt = 120;
        document.getElementById("SHIELDS").disabled = true;
        document.getElementById("SHIELDA").disabled = true;
        document.getElementById("SHIELDB").disabled = true;
        shield = "unequipped";
        Shield = 0;
        WpnMAS = "Bow";
        ShieldEvasion = 0
    } else if (WpnType == "Dagger") {
        WpnSpd = 433;
        WpnAcc = (-3.75);
        WpnCrt = 120;
        document.getElementById("SHIELDS").disabled = false;
        document.getElementById("SHIELDA").disabled = false;
        document.getElementById("SHIELDB").disabled = false;
        WpnMAS = "Dagger"
    } else if (WpnType == "Polearm") {
        WpnSpd = 325;
        WpnAcc = (-3.75);
        WpnCrt = 80;
        document.getElementById("SHIELDS").disabled = true;
        document.getElementById("SHIELDA").disabled = true;
        document.getElementById("SHIELDB").disabled = true;
        shield = "unequipped";
        Shield = 0;
        WpnMAS = "Polearm";
        ShieldEvasion = 0
    } else if (WpnType == "Fist") {
        WpnSpd = 325;
        WpnAcc = 4.75;
        WpnCrt = 40;
        document.getElementById("SHIELDS").disabled = true;
        document.getElementById("SHIELDA").disabled = true;
        document.getElementById("SHIELDB").disabled = true;
        shield = "unequipped";
        Shield = 0;
        WpnMAS = "Fist";
        ShieldEvasion = 0
    } else if (WpnType == "Etc") {
        WpnSpd = 379;
        WpnAcc = 4.75;
        WpnCrt = 40;
        document.getElementById("SHIELDS").disabled = false;
        document.getElementById("SHIELDA").disabled = false;
        document.getElementById("SHIELDB").disabled = false;
        WpnMAS = "Blunt"
    }

    if (WpnMAS == "Bow" && weapongrade == "S") {
        underPATK = 10
        overPATK = 20
    } else if (WpnMAS == "Bow" && weapongrade == "A") {
        underPATK = 8
        overPATK = 16
    } else if (WpnMAS == "Bow" && (weapongrade == "B" || weapongrade == "C")) {
        underPATK = 6
        overPATK = 12
    } else if (WpnMAS == "Bow" && weapongrade == "D") {
        underPATK = 4
        overPATK = 8
    } else if (WpnType == "Dagger" && weapongrade == "S") {
        underPATK = 5
        overPATK = 10
    } else if (WpnType == "Dagger" && weapongrade == "A") {
        underPATK = 4
        overPATK = 8
    } else if (WpnType == "Dagger" && (weapongrade == "B" || weapongrade == "C")) {
        underPATK = 3
        overPATK = 6
    } else if (WpnType == "Dagger" && weapongrade == "D") {
        underPATK = 2
        overPATK = 4
    } else if ((WpnType == "2hs" || WpnType == "2hb") && weapongrade == "S") {
        underPATK = 6
        overPATK = 12
    } else if ((WpnType == "2hs" || WpnType == "2hb") && weapongrade == "A") {
        underPATK = 5
        overPATK = 10
    } else if ((WpnType == "2hs" || WpnType == "2hb") && (weapongrade == "B" || weapongrade == "C")) {
        underPATK = 4
        overPATK = 8
    } else if ((WpnType == "2hs" || WpnType == "2hb") && weapongrade == "D") {
        underPATK = 2
        overPATK = 4
    } else if ((WpnType == "Duals" || WpnType == "Fist") && weapongrade == "S") {
        underPATK = 6
        overPATK = 12
    } else if ((WpnType == "Duals" || WpnType == "Fist") && weapongrade == "A") {
        underPATK = 5
        overPATK = 10
    } else if ((WpnType == "Duals" || WpnType == "Fist") && (weapongrade == "B" || weapongrade == "C")) {
        underPATK = 4
        overPATK = 8
    } else if ((WpnType == "Duals" || WpnType == "Fist") && weapongrade == "D") {
        underPATK = 4
        overPATK = 8
    } else if ((WpnType == "Sword" || WpnType == "Blunt") && weapongrade == "S") {
        underPATK = 5
        overPATK = 10
    } else if ((WpnType == "Sword" || WpnType == "Blunt") && weapongrade == "A") {
        underPATK = 4
        overPATK = 8
    } else if ((WpnType == "Sword" || WpnType == "Blunt") && (weapongrade == "B" || weapongrade == "C")) {
        underPATK = 3
        overPATK = 6
    } else if ((WpnType == "Sword" || WpnType == "Blunt") && weapongrade == "D") {
        underPATK = 2
        overPATK = 4
    } else if (WpnType == "Polearm" && weapongrade == "S") {
        underPATK = 5
        overPATK = 10
    } else if (WpnType == "Polearm" && weapongrade == "A") {
        underPATK = 4
        overPATK = 8
    } else if (WpnType == "Polearm" && (weapongrade == "B" || weapongrade == "C")) {
        underPATK = 3
        overPATK = 6
    } else if (WpnType == "Polearm" && weapongrade == "D") {
        underPATK = 2
        overPATK = 4
    }

///////O
//Helmet hide/unhide stuff
    var helmetgrade = document.getElementById("HELMETGRADE").value
    if (helmetgrade == "S") {
        document.getElementById("HELMETS").style.display = 'block'
        document.getElementById("HELMETA").style.display = 'none'
        document.getElementById("HELMETB").style.display = 'none'
        document.getElementById("HELMETC").style.display = 'none'
        document.getElementById("HELMETD").style.display = 'none'
        document.getElementById("HELMETN").style.display = 'none'
        helmet = document.getElementById("HELMETS").value
    } else if (helmetgrade == "A") {
        document.getElementById("HELMETS").style.display = 'none'
        document.getElementById("HELMETA").style.display = 'block'
        document.getElementById("HELMETB").style.display = 'none'
        document.getElementById("HELMETC").style.display = 'none'
        document.getElementById("HELMETD").style.display = 'none'
        document.getElementById("HELMETN").style.display = 'none'
        helmet = document.getElementById("HELMETA").value
    } else if (helmetgrade == "B") {
        document.getElementById("HELMETS").style.display = 'none'
        document.getElementById("HELMETA").style.display = 'none'
        document.getElementById("HELMETB").style.display = 'block'
        document.getElementById("HELMETC").style.display = 'none'
        document.getElementById("HELMETD").style.display = 'none'
        document.getElementById("HELMETN").style.display = 'none'
        helmet = document.getElementById("HELMETB").value
    } else if (helmetgrade == "C") {
        document.getElementById("HELMETS").style.display = 'none'
        document.getElementById("HELMETA").style.display = 'none'
        document.getElementById("HELMETB").style.display = 'none'
        document.getElementById("HELMETC").style.display = 'block'
        document.getElementById("HELMETD").style.display = 'none'
        document.getElementById("HELMETN").style.display = 'none'
        helmet = document.getElementById("HELMETC").value
    } else if (helmetgrade == "D") {
        document.getElementById("HELMETS").style.display = 'none'
        document.getElementById("HELMETA").style.display = 'none'
        document.getElementById("HELMETB").style.display = 'none'
        document.getElementById("HELMETC").style.display = 'none'
        document.getElementById("HELMETD").style.display = 'block'
        document.getElementById("HELMETN").style.display = 'none'
        helmet = document.getElementById("HELMETD").value
    } else if (helmetgrade == "N") {
        document.getElementById("HELMETS").style.display = 'none'
        document.getElementById("HELMETA").style.display = 'none'
        document.getElementById("HELMETB").style.display = 'none'
        document.getElementById("HELMETC").style.display = 'none'
        document.getElementById("HELMETD").style.display = 'none'
        document.getElementById("HELMETN").style.display = 'block'
        helmet = document.getElementById("HELMETN").value
    }

//Helmets
    Helmet = HELMETPDEF[helmet]

//Helmet Enchant
    var helmetenchant = document.getElementById("HELMETENCHANT").value
    if (helmetenchant <= 3) {
        helmetunderenchant = helmetenchant;
        helmetoverenchant = 0;
    } else {
        helmetunderenchant = 3;
        helmetoverenchant = helmetenchant - 3;
    }
    if (helmetgrade == "N" || helmet == "0") {
        document.getElementById("HELMETENCHANT").disabled = true
        helmetunderPDEF = 0
        helmetoverPDEF = 0
        Helmet = Helmet
    } else {
        document.getElementById("HELMETENCHANT").disabled = false
        helmetunderPDEF = 1
        helmetoverPDEF = 3
        Helmet = Helmet + (helmetunderenchant * helmetunderPDEF) + (helmetoverenchant * helmetoverPDEF)
    }

//Body (Lower) hide/unhide stuff
    var lowergrade = document.getElementById("LOWERGRADE").value
    if (lowergrade == "S") {
        document.getElementById("LOWERS").style.display = 'block'
        document.getElementById("LOWERA").style.display = 'none'
        document.getElementById("LOWERB").style.display = 'none'
        document.getElementById("LOWERC").style.display = 'none'
        document.getElementById("LOWERD").style.display = 'none'
        document.getElementById("LOWERN").style.display = 'none'
        lower = document.getElementById("LOWERS").value
    } else if (lowergrade == "A") {
        document.getElementById("LOWERS").style.display = 'none'
        document.getElementById("LOWERA").style.display = 'block'
        document.getElementById("LOWERB").style.display = 'none'
        document.getElementById("LOWERC").style.display = 'none'
        document.getElementById("LOWERD").style.display = 'none'
        document.getElementById("LOWERN").style.display = 'none'
        lower = document.getElementById("LOWERA").value
    } else if (lowergrade == "B") {
        document.getElementById("LOWERS").style.display = 'none'
        document.getElementById("LOWERA").style.display = 'none'
        document.getElementById("LOWERB").style.display = 'block'
        document.getElementById("LOWERC").style.display = 'none'
        document.getElementById("LOWERD").style.display = 'none'
        document.getElementById("LOWERN").style.display = 'none'
        lower = document.getElementById("LOWERB").value
    } else if (lowergrade == "C") {
        document.getElementById("LOWERS").style.display = 'none'
        document.getElementById("LOWERA").style.display = 'none'
        document.getElementById("LOWERB").style.display = 'none'
        document.getElementById("LOWERC").style.display = 'block'
        document.getElementById("LOWERD").style.display = 'none'
        document.getElementById("LOWERN").style.display = 'none'
        lower = document.getElementById("LOWERC").value
    } else if (lowergrade == "D") {
        document.getElementById("LOWERS").style.display = 'none'
        document.getElementById("LOWERA").style.display = 'none'
        document.getElementById("LOWERB").style.display = 'none'
        document.getElementById("LOWERC").style.display = 'none'
        document.getElementById("LOWERD").style.display = 'block'
        document.getElementById("LOWERN").style.display = 'none'
        lower = document.getElementById("LOWERD").value
    } else if (lowergrade == "N") {
        document.getElementById("LOWERS").style.display = 'none'
        document.getElementById("LOWERA").style.display = 'none'
        document.getElementById("LOWERB").style.display = 'none'
        document.getElementById("LOWERC").style.display = 'none'
        document.getElementById("LOWERD").style.display = 'none'
        document.getElementById("LOWERN").style.display = 'block'
        lower = document.getElementById("LOWERN").value
    }

//Body (Lower)
    Lower = LOWERPDEF[lower]
    AddMP = AddMP + LOWERMP[lower]
    ALType = LOWERTYPE[lower]
    if ((race == "HM" || race == "EM" || race == "DM" || race == "OM") && lower == 0) {
        Lower = 8
    }

//Body (Lower) Enchant
    var lowerenchant = document.getElementById("LOWERENCHANT").value
    if (lowerenchant <= 3) {
        lowerunderenchant = lowerenchant;
        loweroverenchant = 0;
    } else {
        lowerunderenchant = 3;
        loweroverenchant = lowerenchant - 3;
    }
    if (lowergrade == "N" || lower == "0") {
        document.getElementById("LOWERENCHANT").disabled = true
        lowerunderPDEF = 0
        loweroverPDEF = 0
        Lower = Lower
    } else {
        document.getElementById("LOWERENCHANT").disabled = false
        lowerunderPDEF = 1
        loweroverPDEF = 3
        Lower = Lower + (lowerunderenchant * lowerunderPDEF) + (loweroverenchant * loweroverPDEF)
    }

//Body (Upper) hide/unhide stuff
    var uppergrade = document.getElementById("UPPERGRADE").value
    if (uppergrade == "S") {
        document.getElementById("UPPERS").style.display = 'block'
        document.getElementById("UPPERA").style.display = 'none'
        document.getElementById("UPPERB").style.display = 'none'
        document.getElementById("UPPERC").style.display = 'none'
        document.getElementById("UPPERD").style.display = 'none'
        document.getElementById("UPPERN").style.display = 'none'
        upper = document.getElementById("UPPERS").value
    } else if (uppergrade == "A") {
        document.getElementById("UPPERS").style.display = 'none'
        document.getElementById("UPPERA").style.display = 'block'
        document.getElementById("UPPERB").style.display = 'none'
        document.getElementById("UPPERC").style.display = 'none'
        document.getElementById("UPPERD").style.display = 'none'
        document.getElementById("UPPERN").style.display = 'none'
        upper = document.getElementById("UPPERA").value
    } else if (uppergrade == "B") {
        document.getElementById("UPPERS").style.display = 'none'
        document.getElementById("UPPERA").style.display = 'none'
        document.getElementById("UPPERB").style.display = 'block'
        document.getElementById("UPPERC").style.display = 'none'
        document.getElementById("UPPERD").style.display = 'none'
        document.getElementById("UPPERN").style.display = 'none'
        upper = document.getElementById("UPPERB").value
    } else if (uppergrade == "C") {
        document.getElementById("UPPERS").style.display = 'none'
        document.getElementById("UPPERA").style.display = 'none'
        document.getElementById("UPPERB").style.display = 'none'
        document.getElementById("UPPERC").style.display = 'block'
        document.getElementById("UPPERD").style.display = 'none'
        document.getElementById("UPPERN").style.display = 'none'
        upper = document.getElementById("UPPERC").value
    } else if (uppergrade == "D") {
        document.getElementById("UPPERS").style.display = 'none'
        document.getElementById("UPPERA").style.display = 'none'
        document.getElementById("UPPERB").style.display = 'none'
        document.getElementById("UPPERC").style.display = 'none'
        document.getElementById("UPPERD").style.display = 'block'
        document.getElementById("UPPERN").style.display = 'none'
        upper = document.getElementById("UPPERD").value
    } else if (uppergrade == "N") {
        document.getElementById("UPPERS").style.display = 'none'
        document.getElementById("UPPERA").style.display = 'none'
        document.getElementById("UPPERB").style.display = 'none'
        document.getElementById("UPPERC").style.display = 'none'
        document.getElementById("UPPERD").style.display = 'none'
        document.getElementById("UPPERN").style.display = 'block'
        upper = document.getElementById("UPPERN").value
    }

//Upper
    Upper = UPPERPDEF[upper]
    AddMP = AddMP + UPPERMP[upper]
    AUType = UPPERTYPE[upper]
    fullbody = FULLBODY[upper]
    if ((race == "HM" || race == "EM" || race == "DM" || race == "OM") && upper == 0) {
        Upper = 15
    }

//Body (Upper) Enchant
    var upperenchant = document.getElementById("UPPERENCHANT").value
    if (upperenchant <= 3) {
        upperunderenchant = upperenchant;
        upperoverenchant = 0;
    } else {
        upperunderenchant = 3;
        upperoverenchant = upperenchant - 3;
    }
    if (uppergrade == "N" || upper == "0") {
        document.getElementById("UPPERENCHANT").disabled = true
        upperunderPDEF = 0
        upperoverPDEF = 0
        Upper = Upper
    } else {
        document.getElementById("UPPERENCHANT").disabled = false
        upperunderPDEF = 1
        upperoverPDEF = 3
        Upper = Upper + (upperunderenchant * upperunderPDEF) + (upperoverenchant * upperoverPDEF)
    }

//Disable Lower when Upper is a full body armor
    if (fullbody == 1) {
        document.getElementById("LOWERS").disabled = true
        document.getElementById("LOWERA").disabled = true
        document.getElementById("LOWERB").disabled = true
        document.getElementById("LOWERC").disabled = true
        document.getElementById("LOWERD").disabled = true
        document.getElementById("LOWERN").disabled = true
        document.getElementById("LOWERENCHANT").disabled = true
        lower = "unequipped"
        Lower = 0
    } else if (fullbody == 0) {
        document.getElementById("LOWERS").disabled = false
        document.getElementById("LOWERA").disabled = false
        document.getElementById("LOWERB").disabled = false
        document.getElementById("LOWERC").disabled = false
        document.getElementById("LOWERD").disabled = false
        document.getElementById("LOWERN").disabled = false
    }

//Armor Types (Heavy/Light/Robe)
    if (AUType == "H" && (ALType == "H" || fullbody == 1)) {
        AType = "H"
    } else if (AUType == "L" && (ALType == "L" || fullbody == 1)) {
        AType = "L"
    } else if (AUType == "R" && (ALType == "R" || fullbody == 1)) {
        AType = "R"
    }

//Glove hide/unhide stuff
    var glovegrade = document.getElementById("GLOVEGRADE").value
    if (glovegrade == "S") {
        document.getElementById("GLOVES").style.display = 'block'
        document.getElementById("GLOVEA").style.display = 'none'
        document.getElementById("GLOVEB").style.display = 'none'
        document.getElementById("GLOVEC").style.display = 'none'
        document.getElementById("GLOVED").style.display = 'none'
        document.getElementById("GLOVEN").style.display = 'none'
        glove = document.getElementById("GLOVES").value
    } else if (glovegrade == "A") {
        document.getElementById("GLOVES").style.display = 'none'
        document.getElementById("GLOVEA").style.display = 'block'
        document.getElementById("GLOVEB").style.display = 'none'
        document.getElementById("GLOVEC").style.display = 'none'
        document.getElementById("GLOVED").style.display = 'none'
        document.getElementById("GLOVEN").style.display = 'none'
        glove = document.getElementById("GLOVEA").value
    } else if (glovegrade == "B") {
        document.getElementById("GLOVES").style.display = 'none'
        document.getElementById("GLOVEA").style.display = 'none'
        document.getElementById("GLOVEB").style.display = 'block'
        document.getElementById("GLOVEC").style.display = 'none'
        document.getElementById("GLOVED").style.display = 'none'
        document.getElementById("GLOVEN").style.display = 'none'
        glove = document.getElementById("GLOVEB").value
    } else if (glovegrade == "C") {
        document.getElementById("GLOVES").style.display = 'none'
        document.getElementById("GLOVEA").style.display = 'none'
        document.getElementById("GLOVEB").style.display = 'none'
        document.getElementById("GLOVEC").style.display = 'block'
        document.getElementById("GLOVED").style.display = 'none'
        document.getElementById("GLOVEN").style.display = 'none'
        glove = document.getElementById("GLOVEC").value
    } else if (glovegrade == "D") {
        document.getElementById("GLOVES").style.display = 'none'
        document.getElementById("GLOVEA").style.display = 'none'
        document.getElementById("GLOVEB").style.display = 'none'
        document.getElementById("GLOVEC").style.display = 'none'
        document.getElementById("GLOVED").style.display = 'block'
        document.getElementById("GLOVEN").style.display = 'none'
        glove = document.getElementById("GLOVED").value
    } else {
        document.getElementById("GLOVES").style.display = 'none'
        document.getElementById("GLOVEA").style.display = 'none'
        document.getElementById("GLOVEB").style.display = 'none'
        document.getElementById("GLOVEC").style.display = 'none'
        document.getElementById("GLOVED").style.display = 'none'
        document.getElementById("GLOVEN").style.display = 'block'
        glove = document.getElementById("GLOVEN").value
    }

//Glove
    Glove = GLOVEPDEF[glove]

//Glove Enchant
    var gloveenchant = document.getElementById("GLOVEENCHANT").value
    if (gloveenchant <= 3) {
        gloveunderenchant = gloveenchant;
        gloveoverenchant = 0;
    } else {
        gloveunderenchant = 3;
        gloveoverenchant = gloveenchant - 3;
    }
    if (glovegrade == "N" || glove == "0") {
        document.getElementById("GLOVEENCHANT").disabled = true
        gloveunderPDEF = 0
        gloveoverPDEF = 0
        Glove = Glove
    } else {
        document.getElementById("GLOVEENCHANT").disabled = false
        gloveunderPDEF = 1
        gloveoverPDEF = 3
        Glove = Glove + (gloveunderenchant * gloveunderPDEF) + (gloveoverenchant * gloveoverPDEF)
    }

//Boot hide/unhide stuff
    var bootgrade = document.getElementById("BOOTGRADE").value
    if (bootgrade == "S") {
        document.getElementById("BOOTS").style.display = 'block'
        document.getElementById("BOOTA").style.display = 'none'
        document.getElementById("BOOTB").style.display = 'none'
        document.getElementById("BOOTC").style.display = 'none'
        document.getElementById("BOOTD").style.display = 'none'
        document.getElementById("BOOTN").style.display = 'none'
        boot = document.getElementById("BOOTS").value
    } else if (bootgrade == "A") {
        document.getElementById("BOOTS").style.display = 'none'
        document.getElementById("BOOTA").style.display = 'block'
        document.getElementById("BOOTB").style.display = 'none'
        document.getElementById("BOOTC").style.display = 'none'
        document.getElementById("BOOTD").style.display = 'none'
        document.getElementById("BOOTN").style.display = 'none'
        boot = document.getElementById("BOOTA").value
    } else if (bootgrade == "B") {
        document.getElementById("BOOTS").style.display = 'none'
        document.getElementById("BOOTA").style.display = 'none'
        document.getElementById("BOOTB").style.display = 'block'
        document.getElementById("BOOTC").style.display = 'none'
        document.getElementById("BOOTD").style.display = 'none'
        document.getElementById("BOOTN").style.display = 'none'
        boot = document.getElementById("BOOTB").value
    } else if (bootgrade == "C") {
        document.getElementById("BOOTS").style.display = 'none'
        document.getElementById("BOOTA").style.display = 'none'
        document.getElementById("BOOTB").style.display = 'none'
        document.getElementById("BOOTC").style.display = 'block'
        document.getElementById("BOOTD").style.display = 'none'
        document.getElementById("BOOTN").style.display = 'none'
        boot = document.getElementById("BOOTC").value
    } else if (bootgrade == "D") {
        document.getElementById("BOOTS").style.display = 'none'
        document.getElementById("BOOTA").style.display = 'none'
        document.getElementById("BOOTB").style.display = 'none'
        document.getElementById("BOOTC").style.display = 'none'
        document.getElementById("BOOTD").style.display = 'block'
        document.getElementById("BOOTN").style.display = 'none'
        boot = document.getElementById("BOOTD").value
    } else if (bootgrade == "N") {
        document.getElementById("BOOTS").style.display = 'none'
        document.getElementById("BOOTA").style.display = 'none'
        document.getElementById("BOOTB").style.display = 'none'
        document.getElementById("BOOTC").style.display = 'none'
        document.getElementById("BOOTD").style.display = 'none'
        document.getElementById("BOOTN").style.display = 'block'
        boot = document.getElementById("BOOTN").value
    }

//Boot
    Boot = BOOTPDEF[boot]

//Boot Enchant
    var bootenchant = document.getElementById("BOOTENCHANT").value
    if (bootenchant <= 3) {
        bootunderenchant = bootenchant;
        bootoverenchant = 0;
    } else {
        bootunderenchant = 3;
        bootoverenchant = bootenchant - 3;
    }
    if (bootgrade == "N" || boot == "0") {
        document.getElementById("BOOTENCHANT").disabled = true
        bootunderPDEF = 0
        bootoverPDEF = 0
        Boot = Boot
    } else {
        document.getElementById("BOOTENCHANT").disabled = false
        bootunderPDEF = 1
        bootoverPDEF = 3
        Boot = Boot + (bootunderenchant * bootunderPDEF) + (bootoverenchant * bootoverPDEF)
    }

//Necklace hide/unhide stuff
    var necklacegrade = document.getElementById("NECKLACEGRADE").value
    if (necklacegrade == "S") {
        document.getElementById("NECKLACES").style.display = 'block'
        document.getElementById("NECKLACEA").style.display = 'none'
        document.getElementById("NECKLACEB").style.display = 'none'
        document.getElementById("NECKLACEC").style.display = 'none'
        document.getElementById("NECKLACED").style.display = 'none'
        document.getElementById("NECKLACEN").style.display = 'none'
        necklace = document.getElementById("NECKLACES").value
    } else if (necklacegrade == "A") {
        document.getElementById("NECKLACES").style.display = 'none'
        document.getElementById("NECKLACEA").style.display = 'block'
        document.getElementById("NECKLACEB").style.display = 'none'
        document.getElementById("NECKLACEC").style.display = 'none'
        document.getElementById("NECKLACED").style.display = 'none'
        document.getElementById("NECKLACEN").style.display = 'none'
        necklace = document.getElementById("NECKLACEA").value
    } else if (necklacegrade == "B") {
        document.getElementById("NECKLACES").style.display = 'none'
        document.getElementById("NECKLACEA").style.display = 'none'
        document.getElementById("NECKLACEB").style.display = 'block'
        document.getElementById("NECKLACEC").style.display = 'none'
        document.getElementById("NECKLACED").style.display = 'none'
        document.getElementById("NECKLACEN").style.display = 'none'
        necklace = document.getElementById("NECKLACEB").value
    } else if (necklacegrade == "C") {
        document.getElementById("NECKLACES").style.display = 'none'
        document.getElementById("NECKLACEA").style.display = 'none'
        document.getElementById("NECKLACEB").style.display = 'none'
        document.getElementById("NECKLACEC").style.display = 'block'
        document.getElementById("NECKLACED").style.display = 'none'
        document.getElementById("NECKLACEN").style.display = 'none'
        necklace = document.getElementById("NECKLACEC").value
    } else if (necklacegrade == "D") {
        document.getElementById("NECKLACES").style.display = 'none'
        document.getElementById("NECKLACEA").style.display = 'none'
        document.getElementById("NECKLACEB").style.display = 'none'
        document.getElementById("NECKLACEC").style.display = 'none'
        document.getElementById("NECKLACED").style.display = 'block'
        document.getElementById("NECKLACEN").style.display = 'none'
        necklace = document.getElementById("NECKLACED").value
    } else if (necklacegrade == "N") {
        document.getElementById("NECKLACES").style.display = 'none'
        document.getElementById("NECKLACEA").style.display = 'none'
        document.getElementById("NECKLACEB").style.display = 'none'
        document.getElementById("NECKLACEC").style.display = 'none'
        document.getElementById("NECKLACED").style.display = 'none'
        document.getElementById("NECKLACEN").style.display = 'block'
        necklace = document.getElementById("NECKLACEN").value
    }

//Necklace
    Necklace = NECKLACEMDEF[necklace]
    if (necklace == "6") {
        AddMP = AddMP + 33
    } else if (necklace == "20") {
        NECKLACEHP = 445;
        AddMP = AddMP + 42;
        NECKLACEPATK = 1.04;
        NECKLACEMATK = 1.08
    } else if (necklace == "23") {
        AddMP = AddMP + 26
    } else if (necklace == "27") {
        AddMP = AddMP + 42
    }

//Necklace Enchant
    var necklaceenchant = document.getElementById("NECKLACEENCHANT").value
    if (necklaceenchant <= 3) {
        necklaceunderenchant = necklaceenchant;
        necklaceoverenchant = 0;
    } else {
        necklaceunderenchant = 3;
        necklaceoverenchant = necklaceenchant - 3;
    }
    if (necklacegrade == "N" || necklace == "0") {
        document.getElementById("NECKLACEENCHANT").disabled = true
        necklaceunderPDEF = 0
        necklaceoverPDEF = 0
        Necklace = Necklace
    } else {
        document.getElementById("NECKLACEENCHANT").disabled = false
        necklaceunderPDEF = 1
        necklaceoverPDEF = 3
        Necklace = Necklace + (necklaceunderenchant * necklaceunderPDEF) + (necklaceoverenchant * necklaceoverPDEF)
    }

//Earring1 hide/unhide stuff
    var earring1grade = document.getElementById("EARRING1GRADE").value
    if (earring1grade == "S") {
        document.getElementById("EARRING1S").style.display = 'block'
        document.getElementById("EARRING1A").style.display = 'none'
        document.getElementById("EARRING1B").style.display = 'none'
        document.getElementById("EARRING1C").style.display = 'none'
        document.getElementById("EARRING1D").style.display = 'none'
        document.getElementById("EARRING1N").style.display = 'none'
        earring1 = document.getElementById("EARRING1S").value
    } else if (earring1grade == "A") {
        document.getElementById("EARRING1S").style.display = 'none'
        document.getElementById("EARRING1A").style.display = 'block'
        document.getElementById("EARRING1B").style.display = 'none'
        document.getElementById("EARRING1C").style.display = 'none'
        document.getElementById("EARRING1D").style.display = 'none'
        document.getElementById("EARRING1N").style.display = 'none'
        earring1 = document.getElementById("EARRING1A").value
    } else if (earring1grade == "B") {
        document.getElementById("EARRING1S").style.display = 'none'
        document.getElementById("EARRING1A").style.display = 'none'
        document.getElementById("EARRING1B").style.display = 'block'
        document.getElementById("EARRING1C").style.display = 'none'
        document.getElementById("EARRING1D").style.display = 'none'
        document.getElementById("EARRING1N").style.display = 'none'
        earring1 = document.getElementById("EARRING1B").value
    } else if (earring1grade == "C") {
        document.getElementById("EARRING1S").style.display = 'none'
        document.getElementById("EARRING1A").style.display = 'none'
        document.getElementById("EARRING1B").style.display = 'none'
        document.getElementById("EARRING1C").style.display = 'block'
        document.getElementById("EARRING1D").style.display = 'none'
        document.getElementById("EARRING1N").style.display = 'none'
        earring1 = document.getElementById("EARRING1C").value
    } else if (earring1grade == "D") {
        document.getElementById("EARRING1S").style.display = 'none'
        document.getElementById("EARRING1A").style.display = 'none'
        document.getElementById("EARRING1B").style.display = 'none'
        document.getElementById("EARRING1C").style.display = 'none'
        document.getElementById("EARRING1D").style.display = 'block'
        document.getElementById("EARRING1N").style.display = 'none'
        earring1 = document.getElementById("EARRING1D").value
    } else if (earring1grade == "N") {
        document.getElementById("EARRING1S").style.display = 'none'
        document.getElementById("EARRING1A").style.display = 'none'
        document.getElementById("EARRING1B").style.display = 'none'
        document.getElementById("EARRING1C").style.display = 'none'
        document.getElementById("EARRING1D").style.display = 'none'
        document.getElementById("EARRING1N").style.display = 'block'
        earring1 = document.getElementById("EARRING1N").value
    }

//Earring1
    Earring1 = EARRINGMDEF[earring1]
    if (earring1 == "5") {
        AddMP = AddMP + 31
    } else if (earring1 == "9") {
        AddMP = AddMP + 31
    } else if (earring1 == "15") {
        AddMP = AddMP + 25
    } else if (earring1 == "21") {
        AddMP = AddMP + 20
    } else if (earring1 == "25") {
        AddMP = AddMP + 31
    } else if (earring1 == "27") {
        AddMP = AddMP + 31
    }

//Earring1 Enchant
    var earring1enchant = document.getElementById("EARRING1ENCHANT").value
    if (earring1enchant <= 3) {
        earring1underenchant = earring1enchant;
        earring1overenchant = 0;
    } else {
        earring1underenchant = 3;
        earring1overenchant = earring1enchant - 3;
    }
    if (earring1grade == "N" || earring1 == "0") {
        document.getElementById("EARRING1ENCHANT").disabled = true
        earring1underPDEF = 0
        earring1overPDEF = 0
        Earring1 = Earring1
    } else {
        document.getElementById("EARRING1ENCHANT").disabled = false
        earring1underPDEF = 1
        earring1overPDEF = 3
        Earring1 = Earring1 + (earring1underenchant * earring1underPDEF) + (earring1overenchant * earring1overPDEF)
    }

//Earring2 hide/unhide stuff
    var earring2grade = document.getElementById("EARRING2GRADE").value
    if (earring2grade == "S") {
        document.getElementById("EARRING2S").style.display = 'block'
        document.getElementById("EARRING2A").style.display = 'none'
        document.getElementById("EARRING2B").style.display = 'none'
        document.getElementById("EARRING2C").style.display = 'none'
        document.getElementById("EARRING2D").style.display = 'none'
        document.getElementById("EARRING2N").style.display = 'none'
        earring2 = document.getElementById("EARRING2S").value
    } else if (earring2grade == "A") {
        document.getElementById("EARRING2S").style.display = 'none'
        document.getElementById("EARRING2A").style.display = 'block'
        document.getElementById("EARRING2B").style.display = 'none'
        document.getElementById("EARRING2C").style.display = 'none'
        document.getElementById("EARRING2D").style.display = 'none'
        document.getElementById("EARRING2N").style.display = 'none'
        earring2 = document.getElementById("EARRING2A").value
    } else if (earring2grade == "B") {
        document.getElementById("EARRING2S").style.display = 'none'
        document.getElementById("EARRING2A").style.display = 'none'
        document.getElementById("EARRING2B").style.display = 'block'
        document.getElementById("EARRING2C").style.display = 'none'
        document.getElementById("EARRING2D").style.display = 'none'
        document.getElementById("EARRING2N").style.display = 'none'
        earring2 = document.getElementById("EARRING2B").value
    } else if (earring2grade == "C") {
        document.getElementById("EARRING2S").style.display = 'none'
        document.getElementById("EARRING2A").style.display = 'none'
        document.getElementById("EARRING2B").style.display = 'none'
        document.getElementById("EARRING2C").style.display = 'block'
        document.getElementById("EARRING2D").style.display = 'none'
        document.getElementById("EARRING2N").style.display = 'none'
        earring2 = document.getElementById("EARRING2C").value
    } else if (earring2grade == "D") {
        document.getElementById("EARRING2S").style.display = 'none'
        document.getElementById("EARRING2A").style.display = 'none'
        document.getElementById("EARRING2B").style.display = 'none'
        document.getElementById("EARRING2C").style.display = 'none'
        document.getElementById("EARRING2D").style.display = 'block'
        document.getElementById("EARRING2N").style.display = 'none'
        earring2 = document.getElementById("EARRING2D").value
    } else if (earring2grade == "N") {
        document.getElementById("EARRING2S").style.display = 'none'
        document.getElementById("EARRING2A").style.display = 'none'
        document.getElementById("EARRING2B").style.display = 'none'
        document.getElementById("EARRING2C").style.display = 'none'
        document.getElementById("EARRING2D").style.display = 'none'
        document.getElementById("EARRING2N").style.display = 'block'
        earring2 = document.getElementById("EARRING2N").value
    }

//Earring2
    Earring2 = EARRINGMDEF[earring2]
    if (earring2 == "5") {
        AddMP = AddMP + 31
    } else if (earring2 == "9") {
        AddMP = AddMP + 31
    } else if (earring2 == "15") {
        AddMP = AddMP + 25
    } else if (earring2 == "21") {
        AddMP = AddMP + 20
    } else if (earring2 == "25") {
        AddMP = AddMP + 31
    } else if (earring2 == "27") {
        AddMP = AddMP + 31
    }

//Earring2 Enchant
    var earring2enchant = document.getElementById("EARRING2ENCHANT").value
    if (earring2enchant <= 3) {
        earring2underenchant = earring2enchant;
        earring2overenchant = 0;
    } else {
        earring2underenchant = 3;
        earring2overenchant = earring2enchant - 3;
    }
    if (earring2grade == "N" || earring2 == "0") {
        document.getElementById("EARRING2ENCHANT").disabled = true
        earring2underPDEF = 0
        earring2overPDEF = 0
        Earring2 = Earring2
    } else {
        document.getElementById("EARRING2ENCHANT").disabled = false
        earring2underPDEF = 1
        earring2overPDEF = 3
        Earring2 = Earring2 + (earring2underenchant * earring2underPDEF) + (earring2overenchant * earring2overPDEF)
    }

//Ring1 hide/unhide stuff
    var ring1grade = document.getElementById("RING1GRADE").value
    if (ring1grade == "S") {
        document.getElementById("RING1S").style.display = 'block'
        document.getElementById("RING1A").style.display = 'none'
        document.getElementById("RING1B").style.display = 'none'
        document.getElementById("RING1C").style.display = 'none'
        document.getElementById("RING1D").style.display = 'none'
        document.getElementById("RING1N").style.display = 'none'
        ring1 = document.getElementById("RING1S").value
    } else if (ring1grade == "A") {
        document.getElementById("RING1S").style.display = 'none'
        document.getElementById("RING1A").style.display = 'block'
        document.getElementById("RING1B").style.display = 'none'
        document.getElementById("RING1C").style.display = 'none'
        document.getElementById("RING1D").style.display = 'none'
        document.getElementById("RING1N").style.display = 'none'
        ring1 = document.getElementById("RING1A").value
    } else if (ring1grade == "B") {
        document.getElementById("RING1S").style.display = 'none'
        document.getElementById("RING1A").style.display = 'none'
        document.getElementById("RING1B").style.display = 'block'
        document.getElementById("RING1C").style.display = 'none'
        document.getElementById("RING1D").style.display = 'none'
        document.getElementById("RING1N").style.display = 'none'
        ring1 = document.getElementById("RING1B").value
    } else if (ring1grade == "C") {
        document.getElementById("RING1S").style.display = 'none'
        document.getElementById("RING1A").style.display = 'none'
        document.getElementById("RING1B").style.display = 'none'
        document.getElementById("RING1C").style.display = 'block'
        document.getElementById("RING1D").style.display = 'none'
        document.getElementById("RING1N").style.display = 'none'
        ring1 = document.getElementById("RING1C").value
    } else if (ring1grade == "D") {
        document.getElementById("RING1S").style.display = 'none'
        document.getElementById("RING1A").style.display = 'none'
        document.getElementById("RING1B").style.display = 'none'
        document.getElementById("RING1C").style.display = 'none'
        document.getElementById("RING1D").style.display = 'block'
        document.getElementById("RING1N").style.display = 'none'
        ring1 = document.getElementById("RING1D").value
    } else if (ring1grade == "N") {
        document.getElementById("RING1S").style.display = 'none'
        document.getElementById("RING1A").style.display = 'none'
        document.getElementById("RING1B").style.display = 'none'
        document.getElementById("RING1C").style.display = 'none'
        document.getElementById("RING1D").style.display = 'none'
        document.getElementById("RING1N").style.display = 'block'
        ring1 = document.getElementById("RING1N").value
    }

//Ring1
    Ring1 = RINGMDEF[ring1]
    if (ring1 == "8") {
        AddMP = AddMP + 17
    } else if (ring1 == "10") {
        AddMP = AddMP + 13
    } else if (ring1 == "13") {
        AddMP = AddMP + 21;
        RINGOFBAIUMACC = 2;
        RINGOFBAIUMASPD = 1.04;
        RINGOFBAIUMCAST = 1.04
    } else if (ring1 == "17") {
        AddMP = AddMP + 21;
        RINGOFCOREACC = 1
    } else if (ring1 == "22") {
        AddMP = AddMP + 21;
        RINGOFQUEENACC = 2
    } else if (ring1 == "28") {
        AddMP = AddMP + 21;
    }

//Ring1 Enchant
    var ring1enchant = document.getElementById("RING1ENCHANT").value
    if (ring1enchant <= 3) {
        ring1underenchant = ring1enchant;
        ring1overenchant = 0;
    } else {
        ring1underenchant = 3;
        ring1overenchant = ring1enchant - 3;
    }
    if (ring1grade == "N" || ring1 == "0") {
        document.getElementById("RING1ENCHANT").disabled = true
        ring1underPDEF = 0
        ring1overPDEF = 0
        Ring1 = Ring1
    } else {
        document.getElementById("RING1ENCHANT").disabled = false
        ring1underPDEF = 1
        ring1overPDEF = 3
        Ring1 = Ring1 + (ring1underenchant * ring1underPDEF) + (ring1overenchant * ring1overPDEF)
    }

//Ring2 hide/unhide stuff
    var ring2grade = document.getElementById("RING2GRADE").value
    if (ring2grade == "S") {
        document.getElementById("RING2S").style.display = 'block'
        document.getElementById("RING2A").style.display = 'none'
        document.getElementById("RING2B").style.display = 'none'
        document.getElementById("RING2C").style.display = 'none'
        document.getElementById("RING2D").style.display = 'none'
        document.getElementById("RING2N").style.display = 'none'
        ring2 = document.getElementById("RING2S").value
    } else if (ring2grade == "A") {
        document.getElementById("RING2S").style.display = 'none'
        document.getElementById("RING2A").style.display = 'block'
        document.getElementById("RING2B").style.display = 'none'
        document.getElementById("RING2C").style.display = 'none'
        document.getElementById("RING2D").style.display = 'none'
        document.getElementById("RING2N").style.display = 'none'
        ring2 = document.getElementById("RING2A").value
    } else if (ring2grade == "B") {
        document.getElementById("RING2S").style.display = 'none'
        document.getElementById("RING2A").style.display = 'none'
        document.getElementById("RING2B").style.display = 'block'
        document.getElementById("RING2C").style.display = 'none'
        document.getElementById("RING2D").style.display = 'none'
        document.getElementById("RING2N").style.display = 'none'
        ring2 = document.getElementById("RING2B").value
    } else if (ring2grade == "C") {
        document.getElementById("RING2S").style.display = 'none'
        document.getElementById("RING2A").style.display = 'none'
        document.getElementById("RING2B").style.display = 'none'
        document.getElementById("RING2C").style.display = 'block'
        document.getElementById("RING2D").style.display = 'none'
        document.getElementById("RING2N").style.display = 'none'
        ring2 = document.getElementById("RING2C").value
    } else if (ring2grade == "D") {
        document.getElementById("RING2S").style.display = 'none'
        document.getElementById("RING2A").style.display = 'none'
        document.getElementById("RING2B").style.display = 'none'
        document.getElementById("RING2C").style.display = 'none'
        document.getElementById("RING2D").style.display = 'block'
        document.getElementById("RING2N").style.display = 'none'
        ring2 = document.getElementById("RING2D").value
    } else if (ring2grade == "N") {
        document.getElementById("RING2S").style.display = 'none'
        document.getElementById("RING2A").style.display = 'none'
        document.getElementById("RING2B").style.display = 'none'
        document.getElementById("RING2C").style.display = 'none'
        document.getElementById("RING2D").style.display = 'none'
        document.getElementById("RING2N").style.display = 'block'
        ring2 = document.getElementById("RING2N").value
    }

//Ring2
    Ring2 = RINGMDEF[ring2]
    if (ring2 == "8") {
        AddMP = AddMP + 17
    } else if (ring2 == "10") {
        AddMP = AddMP + 13
    } else if (ring2 == "13") {
        AddMP = AddMP + 21;
        RINGOFBAIUMACC = 2;
        RINGOFBAIUMASPD = 1.04;
        RINGOFBAIUMCAST = 1.04
    } else if (ring2 == "17") {
        AddMP = AddMP + 21;
        RINGOFCOREACC = 1
    } else if (ring2 == "22") {
        AddMP = AddMP + 21;
        RINGOFQUEENACC = 2
    } else if (ring2 == "28") {
        AddMP = AddMP + 21;
    }

//Ring2 Enchant
    var ring2enchant = document.getElementById("RING2ENCHANT").value
    if (ring2enchant <= 3) {
        ring2underenchant = ring2enchant;
        ring2overenchant = 0;
    } else {
        ring2underenchant = 3;
        ring2overenchant = ring2enchant - 3;
    }
    if (ring2grade == "N" || ring2 == "0") {
        document.getElementById("RING2ENCHANT").disabled = true
        ring2underPDEF = 0
        ring2overPDEF = 0
        Ring2 = Ring2
    } else {
        document.getElementById("RING2ENCHANT").disabled = false
        ring2underPDEF = 1
        ring2overPDEF = 3
        Ring2 = Ring2 + (ring2underenchant * ring2underPDEF) + (ring2overenchant * ring2overPDEF)
    }

//Set Bonuses
//Apella Heavy
    if (helmet == "5" && upper == "3" && glove == "1" && boot == "3") {
        AddCP = AddCP + 232
    }
//Apella Light
    if (helmet == "6" && upper == "1" && glove == "2" && boot == "1") {
        AddCP = AddCP + 195
    }
//Apella Robe
    if (helmet == "4" && upper == "2" && glove == "3" && boot == "2") {
        AddCP = AddCP + 177
    }
//Avadon Heavy
    if (helmet == "11" && upper == "6" && lower == "2" && glove == "4" && boot == "6") {
        AddHP = AddHP + 294.49
    }
//Avadon Light
    if (helmet == "11" && upper == "7" && glove == "4" && boot == "6") {
        BuffMDEF = BuffMDEF * 1.0525
    }
//Avadon Robes
    if (helmet == "11" && upper == "8" && glove == "4" && boot == "6") {
        BuffPDEF = BuffPDEF * 1.0526;
        BuffCAST = BuffCAST * 1.15
    }
//Blue Wolf Heavy
    if (helmet == "12" && upper == "10" && lower == "3" && glove == "5" && boot == "8") {
        STR = STR + 3;
        CON = CON - 1;
        DEX = DEX - 2;
        AddSPEED = AddSPEED + 7
    }
//Blue Wolf Light
    if (helmet == "12" && upper == "11" && glove == "5" && boot == "8") {
        INT = INT - 2;
        MEN = MEN + 3;
        WIT = WIT - 1;
        BuffPDEF = BuffPDEF * 1.0526;
        BuffCAST = BuffCAST * 1.15
    }
//Blue Wolf Robes
    if (helmet == "12" && upper == "12" && lower == "4" && glove == "5" && boot == "8") {
        INT = INT - 2;
        MEN = MEN - 1;
        WIT = WIT + 3;
        AddMP = AddMP + 206
    }
//Brigandine
    if (upper == "14" && lower == "6" && helmet == "21") {
        BuffPDEF = BuffPDEF * 1.05;
        AddHP = AddHP + 153
    }
    if (upper == "14" && lower == "6" && helmet == "21" && shield == "4") {
        AddHP = AddHP + 20
    }
//Chain Mail
    if (upper == "16" && lower == "8" && helmet == "15") {
    }
    if (upper == "16" && lower == "8" && helmet == "15" && shield == "7") {
        AddHP = AddHP + 198.21
    }
//Clan Oath Heavy
    if (helmet == "24" && upper == "19" && glove == "9" && boot == "17") {
        BuffPDEF = BuffPDEF * 1.05;
        AddHP = AddHP + 85
    }
//Clan Oath Light
    if (helmet == "25" && upper == "18" && glove == "10" && boot == "16") {
        BuffPDEF = BuffPDEF * 1.05;
        BuffEVA = BuffEVA + 3
    }
//Clan Oath Robes
    if (helmet == "23" && upper == "17" && glove == "11" && boot == "18") {
        BuffPDEF = BuffPDEF * 1.05;
        BuffCAST = BuffCAST * 1.05
    }
//Composite
    if (upper == "20" && helmet == "16") {
    }
    if (upper == "20" && helmet == "16" && shield == "28") {
        BuffMDEF = BuffMDEF * 1.0526
    }
//Dark Crystal Heavy
    if (helmet == "7" && upper == "26" && lower == "13" && glove == "12" && boot == "24") {
        STR = STR - 2;
        CON = CON + 2
    }
//Dark Crystal Light
    if (helmet == "7" && upper == "25" && lower == "14" && glove == "12" && boot == "24") {
        STR = STR + 1;
        CON = CON - 1;
        BuffASPD = BuffASPD * 1.04;
        BuffPATK = BuffPATK * 1.04
    }
//Dark Crystal Robe
    if (helmet == "7" && upper == "27" && glove == "12" && boot == "24") {
        WIT = WIT + 2;
        MEN = MEN - 2;
        BuffPDEF = BuffPDEF * 1.08;
        BuffCAST = BuffCAST * 1.15;
        AddSPEED = AddSPEED + 7
    }
//Demon
    if (upper == "28" && lower == "16" && glove == "13") {
        INT = INT + 4;
        WIT = WIT - 1;
        AddHP = AddHP - 269.65
    }
//Wooden
    if (upper == "75" && lower == "44" && helmet == "31") {
        BuffCAST = BuffCAST * 1.15
    }
//Divine
    if (upper == "29" && lower == "17" && glove == "14") {
        INT = INT - 1;
        WIT = WIT + 1;
        BuffPDEF = BuffPDEF * 1.0526;
        AddMP = AddMP + 170.62
    }
//Doom Heavy
    if (helmet == "13" && upper == "30" && glove == "15" && boot == "27") {
        STR = STR - 3;
        CON = CON + 3;
        AddHP = AddHP + 320
    }
//Doom Light
    if (helmet == "13" && upper == "42" && glove == "15" && boot == "27") {
        STR = STR - 1;
        CON = CON - 2;
        DEX = DEX + 3;
        BuffPATK = BuffPATK * 1.027
    }
//Doom Robes
    if (helmet == "13" && upper == "76" && lower == "51" && glove == "15" && boot == "27") {
        INT = INT + 2;
        MEN = MEN + 1;
        WIT = WIT - 3;
        AddSPEED = AddSPEED + 7
    }
//Draconic
    if (helmet == "1" && upper == "31" && glove == "16" && boot == "28") {
        BuffASPD = BuffASPD * 1.04;
        BuffPATK = BuffPATK * 1.04;
        AddMP = AddMP + 289;
        STR = STR + 1;
        DEX = DEX + 1;
        CON = CON - 2
    }
//Drake
    if (upper == "32" && boot == "29") {
        BuffMDEF = BuffMDEF * 1.0524
    }
//Elven Mithril
    if (upper == "54" && lower == "34" && glove == "19") {
        AddSPEED = AddSPEED + 7;
        WIT = WIT + 1;
        INT = INT - 1
    }
//Full Plate
    if (upper == "37" && helmet == "17") {
        AddHP = AddHP + 269.65
    }
    if (upper == "37" && helmet == "17" && shield == "12") {
    }
//Imperial Crusader
    if (helmet == "2" && upper == "40" && lower == "24" && glove == "27" && boot == "33") {
        AddHP = AddHP + 445;
        BuffPDEF = BuffPDEF * 1.08;
        DEX = DEX - 2;
        STR = STR + 2
    }
//Karmian
    if (upper == "41" && lower == "26" && glove == "28") {
        BuffCAST = BuffCAST * 1.15;
        BuffPDEF = BuffPDEF * 1.0526
    }
//Knowledge
    if (upper == "77" && lower == "52" && glove == "24") {
        BuffMATK = BuffMATK * 1.1025
    }
//Majestic Heavy
    if (helmet == "9" && upper == "47" && glove == "31" && boot == "40") {
        STR = STR + 2;
        CON = CON - 2;
        BuffPATK = BuffPATK * 1.04;
        BuffACC = BuffACC + 3
    }
//Majestic Light
    if (helmet == "9" && upper == "46" && glove == "31" && boot == "40" && WpnMAS != "Bow") {
        DEX = DEX + 1;
        CON = CON - 1;
        AddMP = AddMP + 240
    } else if (helmet == "9" && upper == "46" && glove == "31" && boot == "40" && WpnMAS == "Bow") {
        DEX = DEX + 1;
        CON = CON - 1;
        AddMP = AddMP + 240;
        BuffPATK = BuffPATK * 1.08
    }
//Majestic Robe
    if (helmet == "9" && upper == "48" && glove == "31" && boot == "40") {
        MEN = MEN + 1;
        INT = INT - 1;
        AddMP = AddMP + 240;
        BuffCAST = BuffCAST * 1.15
    }
//Major Arcana
    if (helmet == "3" && upper == "49" && boot == "41" && glove == "32") {
        BuffMATK = BuffMATK * 1.17;
        AddSPEED = AddSPEED + 7;
        WIT = WIT + 1;
        INT = INT + 1;
        MEN = MEN - 2
    }
//Manticore
    if (upper == "50" && lower == "30" && boot == "42") {
        AddMP = AddMP + 91.81
    }
//Mithril Heavy
    if (upper == "52" && lower == "32" && helmet == "26") {
    }
    if (upper == "52" && lower == "32" && helmet == "26" && shield == "13") {
        AddHP = AddHP + 126.13
    }
//Mithril Light
    if (upper == "53" && lower == "47" && boot == "43") {
        BuffEVA = BuffEVA + 4
    }
//Nightmare Heavy
    if (helmet == "8" && upper == "5" && glove == "25" && boot == "11") {
        CON = CON + 2;
        DEX = DEX - 2;
        BuffPATK = BuffPATK * 1.04
    }
//Nightmare Light
    if (helmet == "8" && upper == "56" && glove == "25" && boot == "11") {
        DEX = DEX + 1;
        CON = CON - 1;
        BuffMDEF = BuffMDEF * 1.04
    }
//Nightmare Robe
    if (helmet == "8" && upper == "63" && glove == "25" && boot == "11") {
        INT = INT + 2;
        WIT = WIT - 2;
        BuffMATK = BuffMATK * 1.08
    }
//Plated Leather
    if (upper == "58" && lower == "39" && boot == "45") {
        STR = STR + 4;
        CON = CON - 1
    }
//Reinforced Leather
    if (upper == "60" && lower == "41" && boot == "46") {
        AddMP = AddMP + 80
    }
//Tallum Heavy
    if (helmet == "10" && upper == "71" && glove == "45" && boot == "50") {
        STR = STR + 2;
        CON = CON - 2;
        BuffASPD = BuffASPD * 1.08
    }
//Tallum Light
    if (helmet == "10" && upper == "70" && glove == "45" && boot == "50") {
        MEN = MEN + 2;
        WIT = WIT - 2;
        AddMP = AddMP + 222
    }
//Tallum Robe
    if (helmet == "10" && upper == "72" && lower == "46" && glove == "45" && boot == "50") {
        INT = INT - 2;
        WIT = WIT + 2;
        BuffCAST = BuffCAST * 1.15;
        BuffMDEF = BuffMDEF * 1.08
    }
//Theca
    if (upper == "73" && lower == "48" && boot == "51") {
        BuffPDEF = BuffPDEF * 1.0526
    }
//Wooden
    if (upper == "81" && lower == "54" && helmet == "32") {
        BuffPDEF = BuffPDEF * 1.02;
        AddHP = AddHP + 41
    }
//Zubei Heavy
    if (helmet == "14" && upper == "82" && lower == "55" && glove == "47" && boot == "52") {
        BuffPDEF = BuffPDEF * 1.0526;
        AddHP = AddHP + 294.49
    }
//Zubei Light
    if (helmet == "14" && upper == "83" && lower == "56" && glove == "47" && boot == "52") {
        BuffEVA = BuffEVA + 4
    }
//Zubei Robes
    if (helmet == "14" && upper == "79" && lower == "53" && glove == "47" && boot == "52") {
        BuffMATK = BuffMATK * 1.1025
    }

//Stat Modifiers
    STRMOD = STRMODIFIER[STR]
    DEXMOD = DEXMODIFIER[DEX]
    CONMOD = CONMODIFIER[CON]
    INTMOD = INTMODIFIER[INT]
    WITMOD = WITMODIFIER[WIT]
    MENMOD = MENMODIFIER[MEN]

//Calculations that must take place before buffs
    var basecritical = WpnCrt * DEXMOD

//Buffs Auto-Select
    var setbuffs = document.getElementById("SETBUFFS").value
    if (setbuff && setbuffs == "clear") {
        document.getElementById("BTB1CHECK").checked = false
        document.getElementById("BTB2CHECK").checked = false
        document.getElementById("BTB3CHECK").checked = false
        document.getElementById("VITCHECK").checked = false
        document.getElementById("BTSCHECK").checked = false
        document.getElementById("SAGCHECK").checked = false
        document.getElementById("MIGHT1CHECK").checked = false
        document.getElementById("MIGHT2CHECK").checked = false
        document.getElementById("DOWACHECK").checked = false
        document.getElementById("GREATERMIGHTCHECK").checked = false
        document.getElementById("FRENZY1CHECK").checked = false
        document.getElementById("FRENZY2CHECK").checked = false
        document.getElementById("WARCRY1CHECK").checked = false
        document.getElementById("WARCRY2CHECK").checked = false
        document.getElementById("RAGE1CHECK").checked = false
        document.getElementById("RAGE2CHECK").checked = false
        document.getElementById("EMPCHECK").checked = false
        document.getElementById("DOMYCHECK").checked = false
        document.getElementById("SHIELD1CHECK").checked = false
        document.getElementById("SHIELD2CHECK").checked = false
        document.getElementById("SOECHECK").checked = false
        document.getElementById("GREATERSHIELDCHECK").checked = false
        document.getElementById("GUTS1CHECK").checked = false
        document.getElementById("GUTS2CHECK").checked = false
        document.getElementById("MAJ1CHECK").checked = false
        document.getElementById("MAJ2CHECK").checked = false
        document.getElementById("MB1CHECK").checked = false
        document.getElementById("MB2CHECK").checked = false
        document.getElementById("MB3CHECK").checked = false
        document.getElementById("WARDCHECK").checked = false
        document.getElementById("GUIDCHECK").checked = false
        document.getElementById("DOICHECK").checked = false
        document.getElementById("HECHECK").checked = false
        document.getElementById("AGICHECK").checked = false
        document.getElementById("SWATCHECK").checked = false
        document.getElementById("UECHECK").checked = false
        document.getElementById("EVSHTCHECK").checked = false
        document.getElementById("FCSCHECK").checked = false
        document.getElementById("SOHCHECK").checked = false
        document.getElementById("WWCHECK").checked = false
        document.getElementById("SWINDCHECK").checked = false
        document.getElementById("DSHCHECK").checked = false
        document.getElementById("DASH1CHECK").checked = false
        document.getElementById("DASH2CHECK").checked = false
        document.getElementById("BLINDINGCHECK").checked = false
        document.getElementById("HASTECHECK").checked = false
        document.getElementById("DFURYCHECK").checked = false
        document.getElementById("RAPID1CHECK").checked = false
        document.getElementById("RAPID2CHECK").checked = false
        document.getElementById("DUELCHECK").checked = false
        document.getElementById("TFCHECK").checked = false
        document.getElementById("ACUCHECK").checked = false
        document.getElementById("DCONCHECK").checked = false
        document.getElementById("ZERKCHECK").checked = false
        document.getElementById("QUEENCHECK").checked = false
        document.getElementById("PROPHCHECK").checked = false
        document.getElementById("UD1CHECK").checked = false
        document.getElementById("UD2CHECK").checked = false
        document.getElementById("TOTEM1CHECK").checked = false
        document.getElementById("TOTEM2CHECK").checked = false
        document.getElementById("SNIPECHECK").checked = false
        document.getElementById("STEALTHCHECK").checked = false
        document.getElementById("FACHECK").checked = false
        document.getElementById("ZEALOTCHECK").checked = false
        document.getElementById("ANGELICICONCHECK").checked = false
        document.getElementById("RAPIDFIRECHECK").checked = false
        document.getElementById("DEADEYECHECK").checked = false
        document.getElementById("HEROICCHECK").checked = false
    }
    if (setbuff && setbuffs == "78_PP") {
        document.getElementById("BTB1CHECK").checked = true
        document.getElementById("BTB2CHECK").checked = true
        document.getElementById("BTB3CHECK").checked = true
        document.getElementById("BTB1").selectedIndex = 5
        document.getElementById("BTB2").selectedIndex = 5
        document.getElementById("BTB3").selectedIndex = 5
        document.getElementById("BTSCHECK").checked = true
        document.getElementById("BTS").selectedIndex = 5
        document.getElementById("GREATERMIGHTCHECK").checked = true
        document.getElementById("GREATERMIGHT").selectedIndex = 2
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 2
        document.getElementById("PROPHCHECK").checked = true
        document.getElementById("PROPH").selectedIndex = 1
        document.getElementById("FCSCHECK").checked = true
        document.getElementById("FCS").selectedIndex = 2
        document.getElementById("HASTECHECK").checked = true
        document.getElementById("HASTE").selectedIndex = 1
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 1
        document.getElementById("MB2").selectedIndex = 1
        document.getElementById("MB3").selectedIndex = 1
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 2
        document.getElementById("SHIELD2").selectedIndex = 2
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 2
        document.getElementById("MIGHT2").selectedIndex = 2
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 2
        document.getElementById("WWCHECK").checked = true
        document.getElementById("WW").selectedIndex = 1
    } else if (setbuff && setbuffs == "74_PP") {
        document.getElementById("BTB1CHECK").checked = true
        document.getElementById("BTB2CHECK").checked = true
        document.getElementById("BTB3CHECK").checked = true
        document.getElementById("BTB1").selectedIndex = 5
        document.getElementById("BTB2").selectedIndex = 5
        document.getElementById("BTB3").selectedIndex = 5
        document.getElementById("BTSCHECK").checked = true
        document.getElementById("BTS").selectedIndex = 5
        document.getElementById("GREATERMIGHTCHECK").checked = true
        document.getElementById("GREATERMIGHT").selectedIndex = 2
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 2
        document.getElementById("FCSCHECK").checked = true
        document.getElementById("FCS").selectedIndex = 2
        document.getElementById("HASTECHECK").checked = true
        document.getElementById("HASTE").selectedIndex = 1
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 1
        document.getElementById("MB2").selectedIndex = 1
        document.getElementById("MB3").selectedIndex = 1
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 2
        document.getElementById("SHIELD2").selectedIndex = 2
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 2
        document.getElementById("MIGHT2").selectedIndex = 2
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 2
        document.getElementById("WWCHECK").checked = true
        document.getElementById("WW").selectedIndex = 1
    } else if (setbuff && setbuffs == "72_PP") {
        document.getElementById("BTB1CHECK").checked = true
        document.getElementById("BTB2CHECK").checked = true
        document.getElementById("BTB3CHECK").checked = true
        document.getElementById("BTB1").selectedIndex = 5
        document.getElementById("BTB2").selectedIndex = 5
        document.getElementById("BTB3").selectedIndex = 5
        document.getElementById("BTSCHECK").checked = true
        document.getElementById("BTS").selectedIndex = 5
        document.getElementById("GREATERMIGHTCHECK").checked = true
        document.getElementById("GREATERMIGHT").selectedIndex = 1
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 2
        document.getElementById("FCSCHECK").checked = true
        document.getElementById("FCS").selectedIndex = 2
        document.getElementById("HASTECHECK").checked = true
        document.getElementById("HASTE").selectedIndex = 1
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 1
        document.getElementById("MB2").selectedIndex = 1
        document.getElementById("MB3").selectedIndex = 1
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 2
        document.getElementById("SHIELD2").selectedIndex = 2
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 2
        document.getElementById("MIGHT2").selectedIndex = 2
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 2
        document.getElementById("WWCHECK").checked = true
        document.getElementById("WW").selectedIndex = 1
    } else if (setbuff && setbuffs == "66_PP") {
        document.getElementById("BTB1CHECK").checked = true
        document.getElementById("BTB2CHECK").checked = true
        document.getElementById("BTB3CHECK").checked = true
        document.getElementById("BTB1").selectedIndex = 4
        document.getElementById("BTB2").selectedIndex = 4
        document.getElementById("BTB3").selectedIndex = 4
        document.getElementById("BTSCHECK").checked = true
        document.getElementById("BTS").selectedIndex = 4
        document.getElementById("GREATERMIGHTCHECK").checked = true
        document.getElementById("GREATERMIGHT").selectedIndex = 1
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 2
        document.getElementById("FCSCHECK").checked = true
        document.getElementById("FCS").selectedIndex = 2
        document.getElementById("HASTECHECK").checked = true
        document.getElementById("HASTE").selectedIndex = 1
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 1
        document.getElementById("MB2").selectedIndex = 1
        document.getElementById("MB3").selectedIndex = 1
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 2
        document.getElementById("SHIELD2").selectedIndex = 2
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 2
        document.getElementById("MIGHT2").selectedIndex = 2
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 2
        document.getElementById("WWCHECK").checked = true
        document.getElementById("WW").selectedIndex = 1
    } else if (setbuff && setbuffs == "58_PP") {
        document.getElementById("BTB1CHECK").checked = true
        document.getElementById("BTB2CHECK").checked = true
        document.getElementById("BTB3CHECK").checked = true
        document.getElementById("BTB1").selectedIndex = 4
        document.getElementById("BTB2").selectedIndex = 4
        document.getElementById("BTB3").selectedIndex = 4
        document.getElementById("BTSCHECK").checked = true
        document.getElementById("BTS").selectedIndex = 3
        document.getElementById("GREATERMIGHTCHECK").checked = true
        document.getElementById("GREATERMIGHT").selectedIndex = 0
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 2
        document.getElementById("FCSCHECK").checked = true
        document.getElementById("FCS").selectedIndex = 2
        document.getElementById("HASTECHECK").checked = true
        document.getElementById("HASTE").selectedIndex = 1
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 1
        document.getElementById("MB2").selectedIndex = 1
        document.getElementById("MB3").selectedIndex = 1
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 2
        document.getElementById("SHIELD2").selectedIndex = 2
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 2
        document.getElementById("MIGHT2").selectedIndex = 2
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 2
        document.getElementById("WWCHECK").checked = true
        document.getElementById("WW").selectedIndex = 1
    } else if (setbuff && setbuffs == "56_PP") {
        document.getElementById("BTB1CHECK").checked = true
        document.getElementById("BTB2CHECK").checked = true
        document.getElementById("BTB3CHECK").checked = true
        document.getElementById("BTB1").selectedIndex = 3
        document.getElementById("BTB2").selectedIndex = 3
        document.getElementById("BTB3").selectedIndex = 3
        document.getElementById("BTSCHECK").checked = true
        document.getElementById("BTS").selectedIndex = 3
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 2
        document.getElementById("FCSCHECK").checked = true
        document.getElementById("FCS").selectedIndex = 2
        document.getElementById("HASTECHECK").checked = true
        document.getElementById("HASTE").selectedIndex = 1
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 1
        document.getElementById("MB2").selectedIndex = 1
        document.getElementById("MB3").selectedIndex = 1
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 2
        document.getElementById("SHIELD2").selectedIndex = 2
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 2
        document.getElementById("MIGHT2").selectedIndex = 2
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 2
        document.getElementById("WWCHECK").checked = true
        document.getElementById("WW").selectedIndex = 1
    } else if (setbuff && setbuffs == "52_PP") {
        document.getElementById("BTB1CHECK").checked = true
        document.getElementById("BTB2CHECK").checked = true
        document.getElementById("BTB3CHECK").checked = true
        document.getElementById("BTB1").selectedIndex = 2
        document.getElementById("BTB2").selectedIndex = 2
        document.getElementById("BTB3").selectedIndex = 2
        document.getElementById("BTSCHECK").checked = true
        document.getElementById("BTS").selectedIndex = 2
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 1
        document.getElementById("FCSCHECK").checked = true
        document.getElementById("FCS").selectedIndex = 2
        document.getElementById("HASTECHECK").checked = true
        document.getElementById("HASTE").selectedIndex = 1
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 1
        document.getElementById("MB2").selectedIndex = 1
        document.getElementById("MB3").selectedIndex = 1
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 2
        document.getElementById("SHIELD2").selectedIndex = 2
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 2
        document.getElementById("MIGHT2").selectedIndex = 2
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 2
        document.getElementById("WWCHECK").checked = true
        document.getElementById("WW").selectedIndex = 1
    } else if (setbuff && setbuffs == "48_PP") {
        document.getElementById("BTB1CHECK").checked = true
        document.getElementById("BTB2CHECK").checked = true
        document.getElementById("BTB3CHECK").checked = true
        document.getElementById("BTB1").selectedIndex = 1
        document.getElementById("BTB2").selectedIndex = 1
        document.getElementById("BTB3").selectedIndex = 1
        document.getElementById("BTSCHECK").checked = true
        document.getElementById("BTS").selectedIndex = 1
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 1
        document.getElementById("FCSCHECK").checked = true
        document.getElementById("FCS").selectedIndex = 1
        document.getElementById("HASTECHECK").checked = true
        document.getElementById("HASTE").selectedIndex = 0
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 0
        document.getElementById("MB2").selectedIndex = 0
        document.getElementById("MB3").selectedIndex = 0
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 2
        document.getElementById("SHIELD2").selectedIndex = 2
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 2
        document.getElementById("MIGHT2").selectedIndex = 2
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 2
        document.getElementById("WWCHECK").checked = true
        document.getElementById("WW").selectedIndex = 1
    } else if (setbuff && setbuffs == "44_PP") {
        document.getElementById("BTB1CHECK").checked = true
        document.getElementById("BTB2CHECK").checked = true
        document.getElementById("BTB3CHECK").checked = true
        document.getElementById("BTB1").selectedIndex = 0
        document.getElementById("BTB2").selectedIndex = 0
        document.getElementById("BTB3").selectedIndex = 0
        document.getElementById("BTSCHECK").checked = true
        document.getElementById("BTS").selectedIndex = 0
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 0
        document.getElementById("FCSCHECK").checked = true
        document.getElementById("FCS").selectedIndex = 1
        document.getElementById("HASTECHECK").checked = true
        document.getElementById("HASTE").selectedIndex = 0
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 0
        document.getElementById("MB2").selectedIndex = 0
        document.getElementById("MB3").selectedIndex = 0
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 2
        document.getElementById("SHIELD2").selectedIndex = 2
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 2
        document.getElementById("MIGHT2").selectedIndex = 2
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 1
        document.getElementById("WWCHECK").checked = true
        document.getElementById("WW").selectedIndex = 1
    } else if (setbuff && setbuffs == "40_PP") {
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 0
        document.getElementById("FCSCHECK").checked = true
        document.getElementById("FCS").selectedIndex = 0
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 2
        document.getElementById("SHIELD2").selectedIndex = 2
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 2
        document.getElementById("MIGHT2").selectedIndex = 2
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 1
        document.getElementById("WWCHECK").checked = true
        document.getElementById("WW").selectedIndex = 1
    } else if (setbuff && setbuffs == "56_SE") {
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 2
        document.getElementById("FCSCHECK").checked = true
        document.getElementById("FCS").selectedIndex = 2
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 2
        document.getElementById("SHIELD2").selectedIndex = 2
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 2
        document.getElementById("MIGHT2").selectedIndex = 2
        document.getElementById("WWCHECK").checked = true
        document.getElementById("WW").selectedIndex = 1
        document.getElementById("EMPCHECK").checked = true
        document.getElementById("EMP").selectedIndex = 2
    } else if (setbuff && setbuffs == "52_SE") {
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 1
        document.getElementById("FCSCHECK").checked = true
        document.getElementById("FCS").selectedIndex = 2
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 2
        document.getElementById("SHIELD2").selectedIndex = 2
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 2
        document.getElementById("MIGHT2").selectedIndex = 2
        document.getElementById("WWCHECK").checked = true
        document.getElementById("WW").selectedIndex = 1
        document.getElementById("EMPCHECK").checked = true
        document.getElementById("EMP").selectedIndex = 2
    } else if (setbuff && setbuffs == "48_SE") {
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 1
        document.getElementById("FCSCHECK").checked = true
        document.getElementById("FCS").selectedIndex = 1
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 2
        document.getElementById("SHIELD2").selectedIndex = 2
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 2
        document.getElementById("MIGHT2").selectedIndex = 2
        document.getElementById("WWCHECK").checked = true
        document.getElementById("WW").selectedIndex = 1
        document.getElementById("EMPCHECK").checked = true
        document.getElementById("EMP").selectedIndex = 1
    } else if (setbuff && setbuffs == "44_SE") {
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 0
        document.getElementById("FCSCHECK").checked = true
        document.getElementById("FCS").selectedIndex = 1
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 2
        document.getElementById("SHIELD2").selectedIndex = 2
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 2
        document.getElementById("MIGHT2").selectedIndex = 2
        document.getElementById("WWCHECK").checked = true
        document.getElementById("WW").selectedIndex = 1
        document.getElementById("EMPCHECK").checked = true
        document.getElementById("EMP").selectedIndex = 1
    } else if (setbuff && setbuffs == "40_SE") {
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 0
        document.getElementById("FCSCHECK").checked = true
        document.getElementById("FCS").selectedIndex = 0
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 2
        document.getElementById("SHIELD2").selectedIndex = 2
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 2
        document.getElementById("MIGHT2").selectedIndex = 2
        document.getElementById("WWCHECK").checked = true
        document.getElementById("WW").selectedIndex = 1
        document.getElementById("EMPCHECK").checked = true
        document.getElementById("EMP").selectedIndex = 0
    } else if (setbuff && setbuffs == "78_WC") {
        document.getElementById("GREATERMIGHTCHECK").checked = true
        document.getElementById("GREATERMIGHT").selectedIndex = 5
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 5
        document.getElementById("PROPHCHECK").checked = true
        document.getElementById("PROPH").selectedIndex = 0
        document.getElementById("FCSCHECK").checked = true
        document.getElementById("FCS").selectedIndex = 5
        document.getElementById("HASTECHECK").checked = true
        document.getElementById("HASTE").selectedIndex = 3
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 4
        document.getElementById("MB2").selectedIndex = 4
        document.getElementById("MB3").selectedIndex = 4
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 8
        document.getElementById("SHIELD2").selectedIndex = 8
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 6
        document.getElementById("MIGHT2").selectedIndex = 8
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 5
        document.getElementById("AGICHECK").checked = true
        document.getElementById("AGI").selectedIndex = 5
    } else if (setbuff && setbuffs == "74_WC") {
        document.getElementById("GREATERMIGHTCHECK").checked = true
        document.getElementById("GREATERMIGHT").selectedIndex = 5
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 5
        document.getElementById("FCSCHECK").checked = true
        document.getElementById("FCS").selectedIndex = 5
        document.getElementById("HASTECHECK").checked = true
        document.getElementById("HASTE").selectedIndex = 3
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 4
        document.getElementById("MB2").selectedIndex = 4
        document.getElementById("MB3").selectedIndex = 4
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 8
        document.getElementById("SHIELD2").selectedIndex = 8
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 6
        document.getElementById("MIGHT2").selectedIndex = 8
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 5
        document.getElementById("AGICHECK").checked = true
        document.getElementById("AGI").selectedIndex = 5
    } else if (setbuff && setbuffs == "68_WC") {
        document.getElementById("GREATERMIGHTCHECK").checked = true
        document.getElementById("GREATERMIGHT").selectedIndex = 4
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 5
        document.getElementById("FCSCHECK").checked = true
        document.getElementById("FCS").selectedIndex = 5
        document.getElementById("HASTECHECK").checked = true
        document.getElementById("HASTE").selectedIndex = 3
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 4
        document.getElementById("MB2").selectedIndex = 4
        document.getElementById("MB3").selectedIndex = 4
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 8
        document.getElementById("SHIELD2").selectedIndex = 8
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 6
        document.getElementById("MIGHT2").selectedIndex = 8
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 5
        document.getElementById("AGICHECK").checked = true
        document.getElementById("AGI").selectedIndex = 5
    } else if (setbuff && setbuffs == "66_WC") {
        document.getElementById("GREATERMIGHTCHECK").checked = true
        document.getElementById("GREATERMIGHT").selectedIndex = 4
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 5
        document.getElementById("FCSCHECK").checked = true
        document.getElementById("FCS").selectedIndex = 4
        document.getElementById("HASTECHECK").checked = true
        document.getElementById("HASTE").selectedIndex = 3
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 4
        document.getElementById("MB2").selectedIndex = 4
        document.getElementById("MB3").selectedIndex = 4
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 8
        document.getElementById("SHIELD2").selectedIndex = 8
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 6
        document.getElementById("MIGHT2").selectedIndex = 8
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 5
        document.getElementById("AGICHECK").checked = true
        document.getElementById("AGI").selectedIndex = 5
    } else if (setbuff && setbuffs == "64_WC") {
        document.getElementById("GREATERMIGHTCHECK").checked = true
        document.getElementById("GREATERMIGHT").selectedIndex = 3
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 5
        document.getElementById("FCSCHECK").checked = true
        document.getElementById("FCS").selectedIndex = 4
        document.getElementById("HASTECHECK").checked = true
        document.getElementById("HASTE").selectedIndex = 3
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 4
        document.getElementById("MB2").selectedIndex = 4
        document.getElementById("MB3").selectedIndex = 4
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 8
        document.getElementById("SHIELD2").selectedIndex = 8
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 6
        document.getElementById("MIGHT2").selectedIndex = 8
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 5
        document.getElementById("AGICHECK").checked = true
        document.getElementById("AGI").selectedIndex = 5
    } else if (setbuff && setbuffs == "58_WC") {
        document.getElementById("GREATERMIGHTCHECK").checked = true
        document.getElementById("GREATERMIGHT").selectedIndex = 3
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 4
        document.getElementById("FCSCHECK").checked = true
        document.getElementById("FCS").selectedIndex = 3
        document.getElementById("HASTECHECK").checked = true
        document.getElementById("HASTE").selectedIndex = 3
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 4
        document.getElementById("MB2").selectedIndex = 4
        document.getElementById("MB3").selectedIndex = 4
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 8
        document.getElementById("SHIELD2").selectedIndex = 8
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 6
        document.getElementById("MIGHT2").selectedIndex = 8
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 5
        document.getElementById("AGICHECK").checked = true
        document.getElementById("AGI").selectedIndex = 5
    } else if (setbuff && setbuffs == "56_WC") {
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 3
        document.getElementById("FCSCHECK").checked = true
        document.getElementById("FCS").selectedIndex = 3
        document.getElementById("HASTECHECK").checked = true
        document.getElementById("HASTE").selectedIndex = 3
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 4
        document.getElementById("MB2").selectedIndex = 4
        document.getElementById("MB3").selectedIndex = 4
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 8
        document.getElementById("SHIELD2").selectedIndex = 8
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 6
        document.getElementById("MIGHT2").selectedIndex = 8
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 5
        document.getElementById("AGICHECK").checked = true
        document.getElementById("AGI").selectedIndex = 5
    } else if (setbuff && setbuffs == "52_WC") {
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 3
        document.getElementById("FCSCHECK").checked = true
        document.getElementById("FCS").selectedIndex = 3
        document.getElementById("HASTECHECK").checked = true
        document.getElementById("HASTE").selectedIndex = 2
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 4
        document.getElementById("MB2").selectedIndex = 4
        document.getElementById("MB3").selectedIndex = 4
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 8
        document.getElementById("SHIELD2").selectedIndex = 8
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 6
        document.getElementById("MIGHT2").selectedIndex = 8
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 4
        document.getElementById("AGICHECK").checked = true
        document.getElementById("AGI").selectedIndex = 4
    } else if (setbuff && setbuffs == "48_WC") {
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 3
        document.getElementById("FCSCHECK").checked = true
        document.getElementById("FCS").selectedIndex = 3
        document.getElementById("HASTECHECK").checked = true
        document.getElementById("HASTE").selectedIndex = 2
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 3
        document.getElementById("MB2").selectedIndex = 3
        document.getElementById("MB3").selectedIndex = 3
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 8
        document.getElementById("SHIELD2").selectedIndex = 8
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 6
        document.getElementById("MIGHT2").selectedIndex = 8
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 4
        document.getElementById("AGICHECK").checked = true
        document.getElementById("AGI").selectedIndex = 4
    } else if (setbuff && setbuffs == "44_WC") {
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 3
        document.getElementById("MB2").selectedIndex = 3
        document.getElementById("MB3").selectedIndex = 3
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 8
        document.getElementById("SHIELD2").selectedIndex = 8
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 6
        document.getElementById("MIGHT2").selectedIndex = 8
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 4
        document.getElementById("AGICHECK").checked = true
        document.getElementById("AGI").selectedIndex = 3
    } else if (setbuff && setbuffs == "40_WC") {
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 3
        document.getElementById("MB2").selectedIndex = 3
        document.getElementById("MB3").selectedIndex = 3
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 8
        document.getElementById("SHIELD2").selectedIndex = 8
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 5
        document.getElementById("MIGHT2").selectedIndex = 7
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 3
        document.getElementById("AGICHECK").checked = true
        document.getElementById("AGI").selectedIndex = 3
    } else if (setbuff && setbuffs == "77_OL") {
        document.getElementById("EMPCHECK").checked = true
        document.getElementById("EMP").selectedIndex = 4
        document.getElementById("WWCHECK").checked = true
        document.getElementById("WW").selectedIndex = 3
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 7
        document.getElementById("MB2").selectedIndex = 7
        document.getElementById("MB3").selectedIndex = 7
        document.getElementById("AGICHECK").checked = true
        document.getElementById("AGI").selectedIndex = 8
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 8
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 8
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 9
        document.getElementById("MIGHT2").selectedIndex = 11
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 5
        document.getElementById("SHIELD2").selectedIndex = 5
    } else if (setbuff && setbuffs == "64_OL") {
        document.getElementById("WWCHECK").checked = true
        document.getElementById("WW").selectedIndex = 3
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 7
        document.getElementById("MB2").selectedIndex = 7
        document.getElementById("MB3").selectedIndex = 7
        document.getElementById("AGICHECK").checked = true
        document.getElementById("AGI").selectedIndex = 8
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 8
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 8
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 5
        document.getElementById("SHIELD2").selectedIndex = 5
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 9
        document.getElementById("MIGHT2").selectedIndex = 11
    } else if (setbuff && setbuffs == "58_OL") {
        document.getElementById("WWCHECK").checked = true
        document.getElementById("WW").selectedIndex = 2
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 7
        document.getElementById("MB2").selectedIndex = 7
        document.getElementById("MB3").selectedIndex = 7
        document.getElementById("AGICHECK").checked = true
        document.getElementById("AGI").selectedIndex = 8
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 8
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 8
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 5
        document.getElementById("SHIELD2").selectedIndex = 5
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 9
        document.getElementById("MIGHT2").selectedIndex = 11
    } else if (setbuff && setbuffs == "56_OL") {
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 7
        document.getElementById("MB2").selectedIndex = 7
        document.getElementById("MB3").selectedIndex = 7
        document.getElementById("AGICHECK").checked = true
        document.getElementById("AGI").selectedIndex = 8
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 8
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 8
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 5
        document.getElementById("SHIELD2").selectedIndex = 5
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 9
        document.getElementById("MIGHT2").selectedIndex = 11
    } else if (setbuff && setbuffs == "52_OL") {
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 6
        document.getElementById("MB2").selectedIndex = 6
        document.getElementById("MB3").selectedIndex = 6
        document.getElementById("AGICHECK").checked = true
        document.getElementById("AGI").selectedIndex = 7
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 7
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 7
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 5
        document.getElementById("SHIELD2").selectedIndex = 5
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 9
        document.getElementById("MIGHT2").selectedIndex = 11
    } else if (setbuff && setbuffs == "48_OL") {
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 6
        document.getElementById("MB2").selectedIndex = 6
        document.getElementById("MB3").selectedIndex = 6
        document.getElementById("AGICHECK").checked = true
        document.getElementById("AGI").selectedIndex = 7
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 6
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 7
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 4
        document.getElementById("SHIELD2").selectedIndex = 4
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 9
        document.getElementById("MIGHT2").selectedIndex = 11
    } else if (setbuff && setbuffs == "44_OL") {
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 5
        document.getElementById("MB2").selectedIndex = 5
        document.getElementById("MB3").selectedIndex = 5
        document.getElementById("AGICHECK").checked = true
        document.getElementById("AGI").selectedIndex = 6
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 6
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 7
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 4
        document.getElementById("SHIELD2").selectedIndex = 4
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 8
        document.getElementById("MIGHT2").selectedIndex = 10
    } else if (setbuff && setbuffs == "40_OL") {
        document.getElementById("MB1CHECK").checked = true
        document.getElementById("MB2CHECK").checked = true
        document.getElementById("MB3CHECK").checked = true
        document.getElementById("MB1").selectedIndex = 5
        document.getElementById("MB2").selectedIndex = 5
        document.getElementById("MB3").selectedIndex = 5
        document.getElementById("AGICHECK").checked = true
        document.getElementById("AGI").selectedIndex = 6
        document.getElementById("GUIDCHECK").checked = true
        document.getElementById("GUID").selectedIndex = 6
        document.getElementById("ACUCHECK").checked = true
        document.getElementById("ACU").selectedIndex = 6
        document.getElementById("SHIELD1CHECK").checked = true
        document.getElementById("SHIELD2CHECK").checked = true
        document.getElementById("SHIELD1").selectedIndex = 3
        document.getElementById("SHIELD2").selectedIndex = 3
        document.getElementById("MIGHT1CHECK").checked = true
        document.getElementById("MIGHT2CHECK").checked = true
        document.getElementById("MIGHT1").selectedIndex = 8
        document.getElementById("MIGHT2").selectedIndex = 10
    }

//Buff Hide/Unhide stuff
    if (JOB == "GL" || JOB == "OR" || JOB == "WA") {
        document.getElementById("BTB2CHECK").style.display = 'block'
        document.getElementById("BTB2").style.display = 'block'
        document.getElementById("BTB1CHECK").checked = false
        document.getElementById("BTB1CHECK").style.display = 'none'
        document.getElementById("BTB1").style.display = 'none'
        document.getElementById("BTB3CHECK").checked = false
        document.getElementById("BTB3CHECK").style.display = 'none'
        document.getElementById("BTB3").style.display = 'none'
    } else if (JOB == "WD" || JOB == "DE") {
        document.getElementById("BTB3CHECK").style.display = 'block'
        document.getElementById("BTB3").style.display = 'block'
        document.getElementById("BTB1CHECK").checked = false
        document.getElementById("BTB1CHECK").style.display = 'none'
        document.getElementById("BTB1").style.display = 'none'
        document.getElementById("BTB2CHECK").checked = false
        document.getElementById("BTB2CHECK").style.display = 'none'
        document.getElementById("BTB2").style.display = 'none'
    } else {
        document.getElementById("BTB1CHECK").style.display = 'block'
        document.getElementById("BTB1").style.display = 'block'
        document.getElementById("BTB2CHECK").checked = false
        document.getElementById("BTB2CHECK").style.display = 'none'
        document.getElementById("BTB2").style.display = 'none'
        document.getElementById("BTB3CHECK").checked = false
        document.getElementById("BTB3CHECK").style.display = 'none'
        document.getElementById("BTB3").style.display = 'none'
    }
    if (JOB == "HE" || JOB == "SR" || JOB == "PR") {
        document.getElementById("SAGCHECK").style.display = 'block'
        document.getElementById("SAG").style.display = 'block'
    } else {
        document.getElementById("SAGCHECK").checked = false
        document.getElementById("SAGCHECK").style.display = 'none'
        document.getElementById("SAG").style.display = 'none'
    }
    if (race == "DF" || race == "EF") {
        document.getElementById("MIGHT1CHECK").checked = false
        document.getElementById("MIGHT1CHECK").style.display = 'none'
        document.getElementById("MIGHT1").style.display = 'none'
        document.getElementById("MIGHT2CHECK").style.display = 'block'
        document.getElementById("MIGHT2").style.display = 'block'
        document.getElementById("SHIELD1CHECK").checked = false
        document.getElementById("SHIELD1CHECK").style.display = 'none'
        document.getElementById("SHIELD1").style.display = 'none'
        document.getElementById("SHIELD2CHECK").style.display = 'block'
        document.getElementById("SHIELD2").style.display = 'block'
    } else {
        document.getElementById("MIGHT2CHECK").checked = false
        document.getElementById("MIGHT2CHECK").style.display = 'none'
        document.getElementById("MIGHT2").style.display = 'none'
        document.getElementById("MIGHT1CHECK").style.display = 'block'
        document.getElementById("MIGHT1").style.display = 'block'
        document.getElementById("SHIELD2CHECK").checked = false
        document.getElementById("SHIELD2CHECK").style.display = 'none'
        document.getElementById("SHIELD2").style.display = 'none'
        document.getElementById("SHIELD1CHECK").style.display = 'block'
        document.getElementById("SHIELD1").style.display = 'block'
    }
    if (JOB == "TK" || JOB == "SW" || JOB == "SR" || JOB == "PW") {
        document.getElementById("MB1CHECK").checked = false
        document.getElementById("MB1CHECK").style.display = 'none'
        document.getElementById("MB1").style.display = 'none'
        document.getElementById("MB2CHECK").style.display = 'block'
        document.getElementById("MB2").style.display = 'block'
        document.getElementById("MB3CHECK").checked = false
        document.getElementById("MB3CHECK").style.display = 'none'
        document.getElementById("MB3").style.display = 'none'
    } else if (JOB == "DA" || JOB == "PA") {
        document.getElementById("MB1CHECK").checked = false
        document.getElementById("MB1CHECK").style.display = 'none'
        document.getElementById("MB1").style.display = 'none'
        document.getElementById("MB2CHECK").checked = false
        document.getElementById("MB2CHECK").style.display = 'none'
        document.getElementById("MB2").style.display = 'none'
        document.getElementById("MB3CHECK").style.display = 'block'
        document.getElementById("MB3").style.display = 'block'
    } else {
        document.getElementById("MB2CHECK").checked = false
        document.getElementById("MB2CHECK").style.display = 'none'
        document.getElementById("MB2").style.display = 'none'
        document.getElementById("MB1CHECK").style.display = 'block'
        document.getElementById("MB1").style.display = 'block'
        document.getElementById("MB3CHECK").checked = false
        document.getElementById("MB3CHECK").style.display = 'none'
        document.getElementById("MB3").style.display = 'none'
    }
    if (JOB == "OR") {
        document.getElementById("FRENZY1CHECK").style.display = 'block'
        document.getElementById("FRENZY1").style.display = 'block'
        document.getElementById("FRENZY2CHECK").checked = false
        document.getElementById("FRENZY2CHECK").style.display = 'none'
        document.getElementById("FRENZY2").style.display = 'none'
        document.getElementById("RAGE1CHECK").style.display = 'block'
        document.getElementById("RAGE1").style.display = 'block'
        document.getElementById("RAGE2CHECK").checked = false
        document.getElementById("RAGE2CHECK").style.display = 'none'
        document.getElementById("RAGE2").style.display = 'none'
        document.getElementById("GUTS1CHECK").style.display = 'block'
        document.getElementById("GUTS1").style.display = 'block'
        document.getElementById("GUTS2CHECK").checked = false
        document.getElementById("GUTS2CHECK").style.display = 'none'
        document.getElementById("GUTS2").style.display = 'none'
    } else if (JOB == "DE") {
        document.getElementById("FRENZY2CHECK").style.display = 'block'
        document.getElementById("FRENZY2").style.display = 'block'
        document.getElementById("FRENZY1CHECK").checked = false
        document.getElementById("FRENZY1CHECK").style.display = 'none'
        document.getElementById("FRENZY1").style.display = 'none'
        document.getElementById("RAGE2CHECK").style.display = 'block'
        document.getElementById("RAGE2").style.display = 'block'
        document.getElementById("RAGE1CHECK").checked = false
        document.getElementById("RAGE1CHECK").style.display = 'none'
        document.getElementById("RAGE1").style.display = 'none'
        document.getElementById("GUTS2CHECK").style.display = 'block'
        document.getElementById("GUTS2").style.display = 'block'
        document.getElementById("GUTS1CHECK").checked = false
        document.getElementById("GUTS1CHECK").style.display = 'none'
        document.getElementById("GUTS1").style.display = 'none'
    } else {
        document.getElementById("FRENZY1CHECK").checked = false
        document.getElementById("FRENZY1CHECK").style.display = 'none'
        document.getElementById("FRENZY1").style.display = 'none'
        document.getElementById("FRENZY2CHECK").checked = false
        document.getElementById("FRENZY2CHECK").style.display = 'none'
        document.getElementById("FRENZY2").style.display = 'none'
        document.getElementById("RAGE1CHECK").checked = false
        document.getElementById("RAGE1CHECK").style.display = 'none'
        document.getElementById("RAGE1").style.display = 'none'
        document.getElementById("RAGE2CHECK").checked = false
        document.getElementById("RAGE2CHECK").style.display = 'none'
        document.getElementById("RAGE2").style.display = 'none'
        document.getElementById("GUTS1CHECK").checked = false
        document.getElementById("GUTS1CHECK").style.display = 'none'
        document.getElementById("GUTS1").style.display = 'none'
        document.getElementById("GUTS2CHECK").checked = false
        document.getElementById("GUTS2CHECK").style.display = 'none'
        document.getElementById("GUTS2").style.display = 'none'
    }
    if (JOB == "WA" || JOB == "WD") {
        document.getElementById("WARCRY1CHECK").style.display = 'block'
        document.getElementById("WARCRY1").style.display = 'block'
        document.getElementById("WARCRY2CHECK").checked = false
        document.getElementById("WARCRY2CHECK").style.display = 'none'
        document.getElementById("WARCRY2").style.display = 'none'
    } else if (JOB == "GL") {
        document.getElementById("WARCRY2CHECK").style.display = 'block'
        document.getElementById("WARCRY2").style.display = 'block'
        document.getElementById("WARCRY1CHECK").checked = false
        document.getElementById("WARCRY1CHECK").style.display = 'none'
        document.getElementById("WARCRY1").style.display = 'none'
    } else {
        document.getElementById("WARCRY1CHECK").checked = false
        document.getElementById("WARCRY1CHECK").style.display = 'none'
        document.getElementById("WARCRY1").style.display = 'none'
        document.getElementById("WARCRY2CHECK").checked = false
        document.getElementById("WARCRY2CHECK").style.display = 'none'
        document.getElementById("WARCRY2").style.display = 'none'
    }
    if (JOB == "HK") {
        document.getElementById("MAJ1CHECK").style.display = 'block'
        document.getElementById("MAJ1").style.display = 'block'
        document.getElementById("MAJ2CHECK").checked = false
        document.getElementById("MAJ2CHECK").style.display = 'none'
        document.getElementById("MAJ2").style.display = 'none'
    } else if (JOB == "PA" || JOB == "DA") {
        document.getElementById("MAJ2CHECK").style.display = 'block'
        document.getElementById("MAJ2").style.display = 'block'
        document.getElementById("MAJ1CHECK").checked = false
        document.getElementById("MAJ1CHECK").style.display = 'none'
        document.getElementById("MAJ1").style.display = 'none'
    } else {
        document.getElementById("MAJ1CHECK").checked = false
        document.getElementById("MAJ1CHECK").style.display = 'none'
        document.getElementById("MAJ1").style.display = 'none'
        document.getElementById("MAJ2CHECK").checked = false
        document.getElementById("MAJ2CHECK").style.display = 'none'
        document.getElementById("MAJ2").style.display = 'none'
    }
    if (JOB == "HE") {
        document.getElementById("HECHECK").style.display = 'block'
        document.getElementById("HE").style.display = 'block'
    } else {
        document.getElementById("HECHECK").checked = false
        document.getElementById("HECHECK").style.display = 'none'
        document.getElementById("HE").style.display = 'none'
    }
    if (JOB == "HE" || JOB == "TH" || JOB == "SR" || JOB == "PW" || JOB == "PR" || JOB == "AW") {
        document.getElementById("UECHECK").style.display = 'block'
        document.getElementById("UE").style.display = 'block'
    } else {
        document.getElementById("UECHECK").checked = false
        document.getElementById("UECHECK").style.display = 'none'
        document.getElementById("UE").style.display = 'none'
    }
    if (JOB == "SR" || JOB == "PR") {
        document.getElementById("EVSHTCHECK").style.display = 'block'
        document.getElementById("EVSHT").style.display = 'block'
    } else {
        document.getElementById("EVSHTCHECK").checked = false
        document.getElementById("EVSHTCHECK").style.display = 'none'
        document.getElementById("EVSHT").style.display = 'none'
    }
    if (JOB == "HE" || JOB == "RO") {
        document.getElementById("DASH1CHECK").style.display = 'block'
        document.getElementById("DASH1").style.display = 'block'
        document.getElementById("DASH2CHECK").checked = false
        document.getElementById("DASH2CHECK").style.display = 'none'
        document.getElementById("DASH2").style.display = 'none'
    } else if (JOB == "TH") {
        document.getElementById("DASH2CHECK").style.display = 'block'
        document.getElementById("DASH2").style.display = 'block'
        document.getElementById("DASH1CHECK").checked = false
        document.getElementById("DASH1CHECK").style.display = 'none'
        document.getElementById("DASH1").style.display = 'none'
    } else {
        document.getElementById("DASH1CHECK").checked = false
        document.getElementById("DASH1CHECK").style.display = 'none'
        document.getElementById("DASH1").style.display = 'none'
        document.getElementById("DASH2CHECK").checked = false
        document.getElementById("DASH2CHECK").style.display = 'none'
        document.getElementById("DASH2").style.display = 'none'
    }
    if (JOB == "PW" || JOB == "AW") {
        document.getElementById("BLINDINGCHECK").style.display = 'block'
        document.getElementById("BLINDING").style.display = 'block'
    } else {
        document.getElementById("BLINDINGCHECK").checked = false
        document.getElementById("BLINDINGCHECK").style.display = 'none'
        document.getElementById("BLINDING").style.display = 'none'
    }
    if (JOB == "TH" || JOB == "PW" || JOB == "AW") {
        document.getElementById("RAPID1CHECK").style.display = 'block'
        document.getElementById("RAPID1").style.display = 'block'
        document.getElementById("RAPID2CHECK").checked = false
        document.getElementById("RAPID2CHECK").style.display = 'none'
        document.getElementById("RAPID2").style.display = 'none'
    } else if (JOB == "HE" || JOB == "SR" || JOB == "PR") {
        document.getElementById("RAPID2CHECK").style.display = 'block'
        document.getElementById("RAPID2").style.display = 'block'
        document.getElementById("RAPID1CHECK").checked = false
        document.getElementById("RAPID1CHECK").style.display = 'none'
        document.getElementById("RAPID1").style.display = 'none'
    } else {
        document.getElementById("RAPID1CHECK").checked = false
        document.getElementById("RAPID1CHECK").style.display = 'none'
        document.getElementById("RAPID1").style.display = 'none'
        document.getElementById("RAPID2CHECK").checked = false
        document.getElementById("RAPID2CHECK").style.display = 'none'
        document.getElementById("RAPID2").style.display = 'none'
    }
    if (JOB == "GL") {
        document.getElementById("DUELCHECK").style.display = 'block'
        document.getElementById("DUEL").style.display = 'block'
    } else {
        document.getElementById("DUELCHECK").checked = false
        document.getElementById("DUELCHECK").style.display = 'none'
        document.getElementById("DUEL").style.display = 'none'
    }
    if (JOB == "WD") {
        document.getElementById("TFCHECK").style.display = 'block'
        document.getElementById("TF").style.display = 'block'
    } else {
        document.getElementById("TFCHECK").checked = false
        document.getElementById("TFCHECK").style.display = 'none'
        document.getElementById("TF").style.display = 'none'
    }
    if (JOB == "HK" || JOB == "EK" || JOB == "SW" || JOB == "PK" || JOB == "BD") {
        document.getElementById("UD1CHECK").style.display = 'block'
        document.getElementById("UD1").style.display = 'block'
        document.getElementById("UD2CHECK").checked = false
        document.getElementById("UD2CHECK").style.display = 'none'
        document.getElementById("UD2").style.display = 'none'
    } else if (JOB == "PA" || JOB == "DA" || JOB == "TK" || JOB == "SK") {
        document.getElementById("UD2CHECK").style.display = 'block'
        document.getElementById("UD2").style.display = 'block'
        document.getElementById("UD1CHECK").checked = false
        document.getElementById("UD1CHECK").style.display = 'none'
        document.getElementById("UD1").style.display = 'none'
    } else {
        document.getElementById("UD1CHECK").checked = false
        document.getElementById("UD1CHECK").style.display = 'none'
        document.getElementById("UD1").style.display = 'none'
        document.getElementById("UD2CHECK").checked = false
        document.getElementById("UD2CHECK").style.display = 'none'
        document.getElementById("UD2").style.display = 'none'
    }
    if (JOB == "PR") {
        document.getElementById("DEADEYECHECK").style.display = 'block'
        document.getElementById("DEADEYE").style.display = 'block'
    } else {
        document.getElementById("DEADEYECHECK").checked = false
        document.getElementById("DEADEYECHECK").style.display = 'none'
        document.getElementById("DEADEYE").style.display = 'none'
    }
    if (JOB == "MO") {
        document.getElementById("TOTEM1CHECK").style.display = 'block'
        document.getElementById("TOTEM1").style.display = 'block'
        document.getElementById("TOTEM2CHECK").checked = false
        document.getElementById("TOTEM2CHECK").style.display = 'none'
        document.getElementById("TOTEM2").style.display = 'none'
    } else if (JOB == "TY") {
        document.getElementById("TOTEM2CHECK").style.display = 'block'
        document.getElementById("TOTEM2").style.display = 'block'
        document.getElementById("TOTEM1CHECK").checked = false
        document.getElementById("TOTEM1CHECK").style.display = 'none'
        document.getElementById("TOTEM1").style.display = 'none'
    } else {
        document.getElementById("TOTEM1CHECK").checked = false
        document.getElementById("TOTEM1CHECK").style.display = 'none'
        document.getElementById("TOTEM1").style.display = 'none'
        document.getElementById("TOTEM2CHECK").checked = false
        document.getElementById("TOTEM2CHECK").style.display = 'none'
        document.getElementById("TOTEM2").style.display = 'none'
    }
    if (JOB == "HE") {
        document.getElementById("SNIPECHECK").style.display = 'block'
        document.getElementById("SNIPE").style.display = 'block'
    } else {
        document.getElementById("SNIPECHECK").checked = false
        document.getElementById("SNIPECHECK").style.display = 'none'
        document.getElementById("SNIPE").style.display = 'none'
    }
    if (JOB == "OL" || JOB == "SOR" || JOB == "SPS" || JOB == "NE" || JOB == "SPH") {
        document.getElementById("ARPCHECK").style.display = 'block'
        document.getElementById("ARP").style.display = 'block'
    } else {
        document.getElementById("ARPCHECK").checked = false
        document.getElementById("ARPCHECK").style.display = 'none'
        document.getElementById("ARP").style.display = 'none'
    }
    if (JOB == "OM") {
        document.getElementById("SOUL1CHECK").style.display = 'block'
        document.getElementById("SOUL1").style.display = 'block'
        document.getElementById("SOUL2CHECK").checked = false
        document.getElementById("SOUL2CHECK").style.display = 'none'
        document.getElementById("SOUL2").style.display = 'none'
        document.getElementById("SOUL3CHECK").checked = false
        document.getElementById("SOUL3CHECK").style.display = 'none'
        document.getElementById("SOUL3").style.display = 'none'
    } else if (JOB == "OS") {
        document.getElementById("SOUL2CHECK").style.display = 'block'
        document.getElementById("SOUL2").style.display = 'block'
        document.getElementById("SOUL1CHECK").checked = false
        document.getElementById("SOUL1CHECK").style.display = 'none'
        document.getElementById("SOUL1").style.display = 'none'
        document.getElementById("SOUL3CHECK").checked = false
        document.getElementById("SOUL3CHECK").style.display = 'none'
        document.getElementById("SOUL3").style.display = 'none'
    } else if (JOB == "OL" || JOB == "WC") {
        document.getElementById("SOUL3CHECK").style.display = 'block'
        document.getElementById("SOUL3").style.display = 'block'
        document.getElementById("SOUL1CHECK").checked = false
        document.getElementById("SOUL1CHECK").style.display = 'none'
        document.getElementById("SOUL1").style.display = 'none'
        document.getElementById("SOUL2CHECK").checked = false
        document.getElementById("SOUL2CHECK").style.display = 'none'
        document.getElementById("SOUL2").style.display = 'none'
    } else {
        document.getElementById("SOUL1CHECK").checked = false
        document.getElementById("SOUL1CHECK").style.display = 'none'
        document.getElementById("SOUL1").style.display = 'none'
        document.getElementById("SOUL2CHECK").checked = false
        document.getElementById("SOUL2CHECK").style.display = 'none'
        document.getElementById("SOUL2").style.display = 'none'
        document.getElementById("SOUL3CHECK").checked = false
        document.getElementById("SOUL3CHECK").style.display = 'none'
        document.getElementById("SOUL3").style.display = 'none'
    }
    if (JOB == "SK" || JOB == "TK") {
        document.getElementById("GSCHECK").style.display = 'block'
        document.getElementById("GS").style.display = 'block'
    } else {
        document.getElementById("GSCHECK").checked = false
        document.getElementById("GSCHECK").style.display = 'none'
        document.getElementById("GS").style.display = 'none'
    }
    if (JOB == "OL") {
        document.getElementById("SGCHECK").style.display = 'block'
        document.getElementById("SG").style.display = 'block'
    } else {
        document.getElementById("SGCHECK").checked = false
        document.getElementById("SGCHECK").style.display = 'none'
        document.getElementById("SG").style.display = 'none'
    }
    if (JOB == "DE" || JOB == "TY") {
        document.getElementById("ZEALOTCHECK").style.display = 'block'
        document.getElementById("ZEALOT").style.display = 'block'
    } else {
        document.getElementById("ZEALOTCHECK").checked = false
        document.getElementById("ZEALOTCHECK").style.display = 'none'
        document.getElementById("ZEALOT").style.display = 'none'
    }
    if (JOB == "WA" || JOB == "GL" || JOB == "WD" || JOB == "RO" || JOB == "TH" || JOB == "HE" || JOB == "EFS" || JOB == "PW" || JOB == "SR" || JOB == "AS" || JOB == "PR" || JOB == "AW" || JOB == "OR" || JOB == "DE") {
        document.getElementById("ACCTCHECK").style.display = 'block'
        document.getElementById("ACCT").style.display = 'block'
    } else {
        document.getElementById("ACCTCHECK").checked = false
        document.getElementById("ACCTCHECK").style.display = 'none'
        document.getElementById("ACCT").style.display = 'none'
    }
    if (JOB == "BH" || JOB == "WS" || JOB == "DE" || JOB == "WD") {
        document.getElementById("POLEACCCHECK").style.display = 'block'
        document.getElementById("POLEACC").style.display = 'block'
    } else {
        document.getElementById("POLEACCCHECK").checked = false
        document.getElementById("POLEACCCHECK").style.display = 'none'
        document.getElementById("POLEACC").style.display = 'none'
    }
    if (JOB == "WD") {
        document.getElementById("FACHECK").style.display = 'block'
        document.getElementById("FA").style.display = 'block'
    } else {
        document.getElementById("FACHECK").checked = false
        document.getElementById("FACHECK").style.display = 'none'
        document.getElementById("FA").style.display = 'none'
    }
    if (JOB == "PW" || JOB == "AW") {
        document.getElementById("FOCDCHECK").style.display = 'block'
        document.getElementById("FOCD").style.display = 'block'
    } else {
        document.getElementById("FOCDCHECK").checked = false
        document.getElementById("FOCDCHECK").style.display = 'none'
        document.getElementById("FOCD").style.display = 'none'
    }
    if (JOB == "PW" || JOB == "AW" || JOB == "TH") {
        document.getElementById("SMCHECK").style.display = 'block'
        document.getElementById("SM").style.display = 'block'
    } else {
        document.getElementById("SMCHECK").checked = false
        document.getElementById("SMCHECK").style.display = 'none'
        document.getElementById("SM").style.display = 'none'
    }
    if (JOB == "TH") {
        document.getElementById("STEALTHCHECK").style.display = 'block'
        document.getElementById("STEALTH").style.display = 'block'
    } else {
        document.getElementById("STEALTHCHECK").checked = false
        document.getElementById("STEALTHCHECK").style.display = 'none'
        document.getElementById("STEALTH").style.display = 'none'
    }
    if (JOB == "TY") {
        document.getElementById("FFURYCHECK").style.display = 'block'
        document.getElementById("FFURY").style.display = 'block'
    } else {
        document.getElementById("FFURYCHECK").checked = false
        document.getElementById("FFURYCHECK").style.display = 'none'
        document.getElementById("FFURY").style.display = 'none'
    }
    if (JOB == "WL" || JOB == "ELS" || JOB == "PS") {
        document.getElementById("ARAGICHECK").style.display = 'block'
        document.getElementById("ARAGI").style.display = 'block'
    } else {
        document.getElementById("ARAGICHECK").checked = false
        document.getElementById("ARAGICHECK").style.display = 'none'
        document.getElementById("ARAGI").style.display = 'none'
    }
    if (JOB == "WC" || JOB == "SHE" || JOB == "BI" || JOB == "EE" || JOB == "PP") {
        document.getElementById("ARWISCHECK").style.display = 'block'
        document.getElementById("ARWIS").style.display = 'block'
    } else {
        document.getElementById("ARWISCHECK").checked = false
        document.getElementById("ARWISCHECK").style.display = 'none'
        document.getElementById("ARWIS").style.display = 'none'
    }
    if (JOB == "SR") {
        document.getElementById("RAPIDFIRECHECK").style.display = 'block'
        document.getElementById("RAPIDFIRE").style.display = 'block'
    } else {
        document.getElementById("RAPIDFIRECHECK").checked = false
        document.getElementById("RAPIDFIRECHECK").style.display = 'none'
        document.getElementById("RAPIDFIRE").style.display = 'none'
    }
    if (JOB == "WD" || JOB == "GL" || JOB == "WS" || JOB == "BH") {
        document.getElementById("PARRYCHECK").style.display = 'block'
        document.getElementById("PARRY").style.display = 'block'
    } else {
        document.getElementById("PARRYCHECK").checked = false
        document.getElementById("PARRYCHECK").style.display = 'none'
        document.getElementById("PARRY").style.display = 'none'
    }
    if (JOB == "TY" || JOB == "GL" || JOB == "WS" || JOB == "BH") {
        document.getElementById("RIPOSTECHECK").style.display = 'block'
        document.getElementById("RIPOSTE").style.display = 'block'
    } else {
        document.getElementById("RIPOSTECHECK").checked = false
        document.getElementById("RIPOSTECHECK").style.display = 'none'
        document.getElementById("RIPOSTE").style.display = 'none'
    }
    if (JOB == "PA") {
        document.getElementById("ANGELICICONCHECK").style.display = 'block'
        document.getElementById("ANGELICICON").style.display = 'block'
    } else {
        document.getElementById("ANGELICICONCHECK").checked = false
        document.getElementById("ANGELICICONCHECK").style.display = 'none'
        document.getElementById("ANGELICICON").style.display = 'none'
    }

//Buffs
//Accuracy
    var acct = document.getElementById("ACCT").value
    if (document.getElementById("ACCTCHECK").checked == false) {
        document.getElementById("ACCT").disabled = true;
    } else {
        document.getElementById("ACCT").disabled = false;
    }
    if (acct == "ACC" && document.getElementById("ACCTCHECK").checked == true) {
        BuffACC = BuffACC + 3
    }
//Accuracy Debuffs
    var deacc = document.getElementById("DEACC").value
    if (document.getElementById("DEACCCHECK").checked == false) {
        document.getElementById("DEACC").disabled = true;
    } else {
        document.getElementById("DEACC").disabled = false;
        BuffACC = BuffACC - DEACC[deacc]
    }
//Acumen
    var acu = document.getElementById("ACU").value
    if (document.getElementById("ACUCHECK").checked == false) {
        document.getElementById("ACU").disabled = true;
    } else {
        document.getElementById("ACU").disabled = false;
        BuffCAST = BuffCAST * ACUMEN[acu]
    }
//Agility
    var agi = document.getElementById("AGI").value
    if (document.getElementById("AGICHECK").checked == false) {
        document.getElementById("AGI").disabled = true;
    } else {
        document.getElementById("AGI").disabled = false;
        BuffEVA = BuffEVA + AGILITY[agi]
    }
//Angelic Icon
    var angelicicon = document.getElementById("ANGELICICON").value
    if (document.getElementById("ANGELICICONCHECK").checked == false) {
        document.getElementById("ANGELICICON").disabled = true;
    } else {
        document.getElementById("ANGELICICON").disabled = false;
        BuffASPD30 = BuffASPD30 * 1.3
        BuffACC30 = BuffACC30 + 6
        AddSPEED30 = AddSPEED30 + 30
        AddCRIT30 = AddCRIT30 + 100
        BuffPDEF30 = BuffPDEF30 * 1.5
        BuffMDEF30 = BuffMDEF30 * 1.5
    }
//Arcane Agility
    var aragi = document.getElementById("ARAGI").value
    if (document.getElementById("ARAGICHECK").checked == false) {
        document.getElementById("ARAGI").disabled = true;
    } else {
        document.getElementById("ARAGI").disabled = false;
        BuffCAST = BuffCAST * 1.2
    }
//Arcane Power
    var arcanepower = document.getElementById("ARP").value
    if (document.getElementById("ARPCHECK").checked == false) {
        document.getElementById("ARP").disabled = true;
    } else {
        document.getElementById("ARP").disabled = false;
        BuffMATK = 1.3 * BuffMATK
    }
//Arcane Wisdom
    var arwis = document.getElementById("ARWIS").value
    if (document.getElementById("ARWISCHECK").checked == false) {
        document.getElementById("ARWIS").disabled = true;
    } else {
        document.getElementById("ARWIS").disabled = false;
        BuffCAST = BuffCAST * 0.9
    }
//Armor Crush
    var armorcrush = document.getElementById("ARCR").value
    if (document.getElementById("ACCHECK").checked == false) {
        document.getElementById("ARCR").disabled = true;
    } else {
        document.getElementById("ARCR").disabled = false;
        BuffPDEF = 0.70 * BuffPDEF;
        BuffMDEF = 0.70 * BuffMDEF
    }
//Attack Speed Debuffs
    var deaspd = document.getElementById("DEASPD").value
    if (document.getElementById("DEASPDCHECK").checked == false) {
        document.getElementById("DEASPD").disabled = true;
    } else {
        document.getElementById("DEASPD").disabled = false;
        BuffASPD = BuffASPD * DEASPD[deaspd]
    }
//Berserker Spirit
    var zerk = document.getElementById("ZERK").value
    if (document.getElementById("ZERKCHECK").checked == false) {
        document.getElementById("ZERK").disabled = true;
    } else {
        document.getElementById("ZERK").disabled = false;
    }
    if (zerk == "1" && document.getElementById("ZERKCHECK").checked == true) {
        BuffPATK = 1.05 * BuffPATK;
        BuffPDEF = 0.95 * BuffPDEF;
        BuffMATK = BuffMATK * 1.1;
        BuffMDEF = 0.90 * BuffMDEF;
        BuffEVA = BuffEVA - 2;
        AddSPEED = AddSPEED + 5;
        BuffASPD = BuffASPD * 1.05;
        BuffCAST = BuffCAST * 1.05
    } else if (zerk == "2" && document.getElementById("ZERKCHECK").checked == true) {
        BuffPATK = 1.08 * BuffPATK;
        BuffPDEF = 0.92 * BuffPDEF;
        BuffMATK = BuffMATK * 1.16;
        BuffMDEF = 0.84 * BuffMDEF;
        BuffEVA = BuffEVA - 4;
        AddSPEED = AddSPEED + 8;
        BuffASPD = BuffASPD * 1.08;
        BuffCAST = BuffCAST * 1.08
    }
//Bless the Body
    var btb1 = document.getElementById("BTB1").value
    if (document.getElementById("BTB1CHECK").checked == false) {
        document.getElementById("BTB1").disabled = true;
    } else {
        document.getElementById("BTB1").disabled = false;
        BuffHP = BuffHP * BTB[btb1]
    }
    var btb2 = document.getElementById("BTB2").value
    if (document.getElementById("BTB2CHECK").checked == false) {
        document.getElementById("BTB2").disabled = true;
    } else {
        document.getElementById("BTB2").disabled = false;
        BuffHP = BuffHP * BTB[btb2]
    }
    var btb3 = document.getElementById("BTB3").value
    if (document.getElementById("BTB3CHECK").checked == false) {
        document.getElementById("BTB3").disabled = true;
    } else {
        document.getElementById("BTB3").disabled = false;
        BuffHP = BuffHP * BTB[btb3]
    }
//Bless the Soul
    var bts = document.getElementById("BTS").value
    if (document.getElementById("BTSCHECK").checked == false) {
        document.getElementById("BTS").disabled = true;
    } else {
        document.getElementById("BTS").disabled = false;
        BuffMP = BuffMP * BTS[bts]
    }
//Blinding Blow
    var blinding = document.getElementById("BLINDING").value
    if (document.getElementById("BLINDINGCHECK").checked == false) {
        document.getElementById("BLINDING").disabled = true;
    } else {
        document.getElementById("BLINDING").disabled = false;
        BuffSPEED = BuffSPEED * 1.4
    }
//Block Shield
    var blockshield = document.getElementById("BLKS").value
    if (document.getElementById("BLKSCHECK").checked == false) {
        document.getElementById("BLKS").disabled = true;
        document.getElementById("SHIELD1CHECK").disabled = false;
        document.getElementById("SHIELD2CHECK").disabled = false;
    } else {
        document.getElementById("BLKS").disabled = false;
        document.getElementById("SHIELD1CHECK").disabled = true;
        document.getElementById("SHIELD1CHECK").checked = false;
        document.getElementById("SHIELD2CHECK").disabled = true;
        document.getElementById("SHIELD2CHECK").checked = false;
        BuffPDEF = 0.90 * BuffPDEF
    }
//Block Wind Walk
    var bww = document.getElementById("BWW").value
    if (document.getElementById("BWWCHECK").checked == false) {
        document.getElementById("BWW").disabled = true;
        document.getElementById("WWCHECK").disabled = false;
    } else {
        document.getElementById("BWW").disabled = false;
        document.getElementById("WWCHECK").disabled = true;
        document.getElementById("WWCHECK").checked = false;
        BuffSPEED = BuffSPEED * 0.9
    }
//Curse Gloom
    var gloom = document.getElementById("GLOOM").value
    if (document.getElementById("GLOOMCHECK").checked == false) {
        document.getElementById("GLOOM").disabled = true;
    } else {
        document.getElementById("GLOOM").disabled = false;
        BuffMDEF = 0.77 * BuffMDEF
    }
//Curse of Abyss
    var coabyss = document.getElementById("COABYSS").value
    if (document.getElementById("COABYSSCHECK").checked == false) {
        document.getElementById("COABYSS").disabled = true;
    } else {
        document.getElementById("COABYSS").disabled = false;
        BuffMATK = 0.70 * BuffMATK;
        BuffEVA = BuffEVA - 6;
        BuffSPEED = BuffSPEED * 0.9;
        BuffCAST = BuffCAST * 0.8
    }
//Curse of Doom
    var codoom = document.getElementById("CODOOM").value
    if (document.getElementById("CODOOMCHECK").checked == false) {
        document.getElementById("CODOOM").disabled = true;
    } else {
        document.getElementById("CODOOM").disabled = false;
        BuffPATK = 0.83 * BuffPATK
    }
//Curse of Shade
    var coshade = document.getElementById("COSHADE").value
    if (document.getElementById("COSHADECHECK").checked == false) {
        document.getElementById("COSHADE").disabled = true;
    } else {
        document.getElementById("COSHADE").disabled = false;
        BuffPDEF = CURSEOFSHADE[coshade] * BuffPDEF;
        BuffMDEF = CURSEOFSHADE[coshade] * BuffMDEF
    }
//Dance of Concentration
    var dcon = document.getElementById("DCON").value
    if (document.getElementById("DCONCHECK").checked == false) {
        document.getElementById("DCON").disabled = true;
    } else {
        document.getElementById("DCON").disabled = false;
        BuffCAST = BuffCAST * 1.3
    }
//Dance of Fury
    var dfury = document.getElementById("DFURY").value
    if (document.getElementById("DFURYCHECK").checked == false) {
        document.getElementById("DFURY").disabled = true;
    } else {
        document.getElementById("DFURY").disabled = false;
        BuffASPD = BuffASPD * 1.15
    }
//Dance of Inspiration
    var doi = document.getElementById("DOI").value
    if (document.getElementById("DOICHECK").checked == false) {
        document.getElementById("DOI").disabled = true;
    } else {
        document.getElementById("DOI").disabled = false;
        BuffACC = BuffACC + 4
    }
//Dance of Mystic
    var domy = document.getElementById("DOMY").value
    if (document.getElementById("DOMYCHECK").checked == false) {
        document.getElementById("DOMY").disabled = true;
    } else {
        document.getElementById("DOMY").disabled = false;
        BuffMATK = 1.2 * BuffMATK
    }
//Dance of Shadow
    var dsh = document.getElementById("DSH").value
    if (document.getElementById("DSHCHECK").checked == false) {
        document.getElementById("DSH").disabled = true;
    } else {
        document.getElementById("DSH").disabled = false;
        BuffSPEED = BuffSPEED * 0.5
    }
//Dance of Warrior
    var dowa = document.getElementById("DOWA").value
    if (document.getElementById("DOWACHECK").checked == false) {
        document.getElementById("DOWA").disabled = true;
    } else {
        document.getElementById("DOWA").disabled = false;
        BuffPATK = 1.12 * BuffPATK
    }
//Dark Vortex
    var dv = document.getElementById("DV").value
    if (document.getElementById("DVCHECK").checked == false) {
        document.getElementById("DV").disabled = true;
    } else {
        document.getElementById("DV").disabled = false;
    }
//Dash
    var dash1 = document.getElementById("DASH1").value
    if (document.getElementById("DASH1CHECK").checked == false) {
        document.getElementById("DASH1").disabled = true;
    } else {
        document.getElementById("DASH1").disabled = false;
        BuffSPEED = BuffSPEED * DASH[dash1]
    }
    var dash2 = document.getElementById("DASH2").value
    if (document.getElementById("DASH2CHECK").checked == false) {
        document.getElementById("DASH2").disabled = true;
    } else {
        document.getElementById("DASH2").disabled = false;
        BuffSPEED = BuffSPEED * DASH[dash2]
    }
//Dead Eye
    var deadeye = document.getElementById("DEADEYE").value
    if (document.getElementById("DEADEYECHECK").checked == false) {
        document.getElementById("DEADEYE").disabled = true;
    } else if (document.getElementById("DEADEYECHECK").checked == true && WpnMAS == "Bow") {
        document.getElementById("DEADEYE").disabled = false;
        AddPATK = AddPATK + DEADEYEPATK[deadeye];
        BuffACC = BuffACC + DEADEYEACC[deadeye];
        BuffASPD = BuffASPD * 0.8
    } else {
        document.getElementById("DEADEYE").disabled = false;
    }
//Duelist Spirit
    var duel = document.getElementById("DUEL").value
    if (document.getElementById("DUELCHECK").checked == false) {
        document.getElementById("DUEL").disabled = true;
    } else if (document.getElementById("DUELCHECK").checked == true && WpnType == "Duals") {
        document.getElementById("DUEL").disabled = false;
        BuffASPD = BuffASPD * DUELIST[duel]
    } else {
        document.getElementById("DUEL").disabled = false;
    }
//Empower
    var emp = document.getElementById("EMP").value
    if (document.getElementById("EMPCHECK").checked == false) {
        document.getElementById("EMP").disabled = true;
    } else {
        document.getElementById("EMP").disabled = false;
        BuffMATK = BuffMATK * EMPOWER[emp]
    }
//Evade Shot
    var evsht = document.getElementById("EVSHT").value
    if (document.getElementById("EVSHTCHECK").checked == false) {
        document.getElementById("EVSHT").disabled = true;
    } else {
        document.getElementById("EVSHT").disabled = false;
        BuffEVA = BuffEVA + 6
    }
//Fire Vortex
    var fv = document.getElementById("FV").value
    if (document.getElementById("FVCHECK").checked == false) {
        document.getElementById("FV").disabled = true;
    } else {
        document.getElementById("FV").disabled = false;
        BuffSPEED = BuffSPEED * 0.9;
        BuffASPD = BuffASPD * 0.7;
        BuffCAST = BuffCAST * 0.9
    }
//Fist Fury
    var ffury = document.getElementById("FFURY").value
    if (document.getElementById("FFURYCHECK").checked == false) {
        document.getElementById("FFURY").disabled = true;
    } else {
        document.getElementById("FFURY").disabled = false;
        BuffASPD = BuffASPD * 1.25
    }
//Focus
    var fcs = document.getElementById("FCS").value
    if (document.getElementById("FCSCHECK").checked == false) {
        document.getElementById("FCS").disabled = true;
    } else {
        document.getElementById("FCS").disabled = false;
        subcritical = subcritical + (basecritical * FOCUS[fcs])
    }
//Focus Attack
    var focusattack = document.getElementById("FA").value
    if (document.getElementById("FACHECK").checked == false) {
        document.getElementById("FA").disabled = true;
    } else if (document.getElementById("FACHECK").checked == true && WpnType == "Polearm") {
        document.getElementById("FA").disabled = false;
        BuffACC = BuffACC + FOCUSATTACK[focusattack]
    } else {
        document.getElementById("FA").disabled = false;
    }
//Focus Death
    var focd = document.getElementById("FOCD").value
    if (document.getElementById("FOCDCHECK").checked == false) {
        document.getElementById("FOCD").disabled = true;
    } else {
        document.getElementById("FOCD").disabled = false;
    }
    if (focd == "FD" && document.getElementById("FOCDCHECK").checked == true) {
        subcritical = subcritical + (basecritical * -0.3)
    }
//Frenzy
    var frenzy1 = document.getElementById("FRENZY1").value
    if (document.getElementById("FRENZY1CHECK").checked == false) {
        document.getElementById("FRENZY1").disabled = true;
    } else if (frenzy1 == "1" && document.getElementById("FRENZY1CHECK").checked == true && (WpnType == "2hs" || WpnType == "2hb")) {
        document.getElementById("FRENZY1").disabled = false;
        BuffPATK = BuffPATK * FRENZY2HS[frenzy1]
        BuffACC = BuffACC + FRENZY2HSACC[frenzy1]
    } else {
        document.getElementById("FRENZY1").disabled = false;
        BuffPATK = BuffPATK * FRENZY[frenzy1]
    }
    var frenzy2 = document.getElementById("FRENZY2").value
    if (document.getElementById("FRENZY2CHECK").checked == false) {
        document.getElementById("FRENZY2").disabled = true;
    } else if (document.getElementById("FRENZY2CHECK").checked == true && (WpnType == "2hs" || WpnType == "2hb")) {
        document.getElementById("FRENZY2").disabled = false;
        BuffPATK = BuffPATK * FRENZY2HS[frenzy2]
        BuffACC = BuffACC + FRENZY2HSACC[frenzy2]
    } else {
        document.getElementById("FRENZY2").disabled = false;
        BuffPATK = BuffPATK * FRENZY[frenzy2]
    }
//Greater Might
    var greatermight = document.getElementById("GREATERMIGHT").value
    if (document.getElementById("GREATERMIGHTCHECK").checked == false) {
        document.getElementById("GREATERMIGHT").disabled = true;
        document.getElementById("GREATERSHIELDCHECK").disabled = false;
    } else {
        document.getElementById("GREATERMIGHT").disabled = false;
        document.getElementById("GREATERSHIELDCHECK").disabled = true;
        document.getElementById("GREATERSHIELDCHECK").checked = false;
        BuffPATK = BuffPATK * GREATERMIGHT[greatermight]
    }
//Greater Shield
    var greatershield = document.getElementById("GREATERSHIELD").value
    if (document.getElementById("GREATERSHIELDCHECK").checked == false) {
        document.getElementById("GREATERSHIELD").disabled = true;
        document.getElementById("GREATERMIGHTCHECK").disabled = false;
    } else {
        document.getElementById("GREATERSHIELD").disabled = false;
        document.getElementById("GREATERMIGHTCHECK").disabled = true;
        document.getElementById("GREATERMIGHTCHECK").checked = false;
        BuffPDEF = BuffPDEF * GREATERSHIELD[greatershield]
    }
//Guard Stance
    var gs = document.getElementById("GS").value
    if (document.getElementById("GSCHECK").checked == false) {
        document.getElementById("GS").disabled = true;
    } else {
        document.getElementById("GS").disabled = false;
        AddPDEF = AddPDEF + GUARDSTANCE[gs]
    }
//Guidance
    var guid = document.getElementById("GUID").value
    if (document.getElementById("GUIDCHECK").checked == false) {
        document.getElementById("GUID").disabled = true;
    } else {
        document.getElementById("GUID").disabled = false;
        BuffACC = BuffACC + GUIDANCE[guid]
    }
//Guts
    var guts1 = document.getElementById("GUTS1").value
    if (document.getElementById("GUTS1CHECK").checked == false) {
        document.getElementById("GUTS1").disabled = true;
    } else {
        document.getElementById("GUTS1").disabled = false;
        BuffPDEF = BuffPDEF * GUTS[guts1]
    }
    var guts2 = document.getElementById("GUTS2").value
    if (document.getElementById("GUTS2CHECK").checked == false) {
        document.getElementById("GUTS2").disabled = true;
    } else {
        document.getElementById("GUTS2").disabled = false;
        BuffPDEF = BuffPDEF * GUTS[guts2]
    }
//Haste
    var haste = document.getElementById("HASTE").value
    if (document.getElementById("HASTECHECK").checked == false) {
        document.getElementById("HASTE").disabled = true;
    } else {
        document.getElementById("HASTE").disabled = false;
        BuffASPD = BuffASPD * HASTE[haste]
    }
//Hawk Eye
    var hawkeye = document.getElementById("HE").value
    if (document.getElementById("HECHECK").checked == false) {
        document.getElementById("HE").disabled = true;
    } else {
        document.getElementById("HE").disabled = false;
        BuffPDEF = 0.90 * BuffPDEF;
        BuffACC = BuffACC + HAWKEYE[hawkeye]
    }
//Hero Skills
    var heroic = document.getElementById("HEROIC").value
    if (document.getElementById("HEROICCHECK").checked == false) {
        document.getElementById("HEROIC").disabled = true;
    } else {
        document.getElementById("HEROIC").disabled = false;
    }
    if (heroic == "1" && document.getElementById("HEROICCHECK").checked == true) {
        AddPATK = AddPATK + 500;
        AddMATK = AddMATK + 500;
        BuffPDEF = BuffPDEF * 0.75;
        AddMDEF = AddMDEF - 25;
        BuffACC = BuffACC + 8;
        BuffEVA = BuffEVA - 8;
        AddSPEED = AddSPEED + 20;
        AddASPD = AddASPD + 100;
        AddCAST = AddCAST + 100
    }
    if (heroic == "2" && document.getElementById("HEROICCHECK").checked == true) {
        AddPDEF = AddPDEF + 5400;
        AddMDEF = AddMDEF + 4050;
        AddSPEED = AddSPEED + 5
    }
    if (heroic == "3" && document.getElementById("HEROICCHECK").checked == true) {
        AddPATK = AddPATK + 250;
        AddPDEF = AddPDEF + 500
    }
//Hot Springs Cholera
    var chol = document.getElementById("CHOL").value
    if (document.getElementById("CHOLCHECK").checked == false) {
        document.getElementById("CHOL").disabled = true;
    } else {
        document.getElementById("CHOL").disabled = false;
        BuffACC = BuffACC + HSCHOLACC[chol];
        BuffEVA = BuffEVA + HSCHOLEVA[chol]
    }
//Hot Springs Malaria
    var mal = document.getElementById("MAL").value
    if (document.getElementById("MALCHECK").checked == false) {
        document.getElementById("MAL").disabled = true;
    } else {
        document.getElementById("MAL").disabled = false;
        BuffCAST = BuffCAST * HSMALARIA[mal]
    }
//Ice Vortex
    var iv = document.getElementById("IV").value
    if (document.getElementById("IVCHECK").checked == false) {
        document.getElementById("IV").disabled = true;
    } else {
        document.getElementById("IV").disabled = false;
        BuffSPEED = BuffSPEED * 0.7;
        BuffASPD = BuffASPD * 0.9;
        BuffCAST = BuffCAST * 0.9
    }
//Light Vortex
    var lvor = document.getElementById("LVOR").value
    if (document.getElementById("LVORCHECK").checked == false) {
        document.getElementById("LVOR").disabled = true;
    } else {
        document.getElementById("LVOR").disabled = false;
        BuffACC = BuffACC - 6
    }
//Magic Barrier
    var mb1 = document.getElementById("MB1").value
    if (document.getElementById("MB1CHECK").checked == false) {
        document.getElementById("MB1").disabled = true;
    } else {
        document.getElementById("MB1").disabled = false;
        BuffMDEF = BuffMDEF * MAGICBARRIER[mb1]
    }
    var mb2 = document.getElementById("MB2").value
    if (document.getElementById("MB2CHECK").checked == false) {
        document.getElementById("MB2").disabled = true;
    } else {
        document.getElementById("MB2").disabled = false;
        BuffMDEF = BuffMDEF * MAGICBARRIER[mb2]
    }
    var mb3 = document.getElementById("MB3").value
    if (document.getElementById("MB3CHECK").checked == false) {
        document.getElementById("MB3").disabled = true;
    } else {
        document.getElementById("MB3").disabled = false;
        BuffMDEF = BuffMDEF * MAGICBARRIER[mb3]
    }
//Majesty
    var maj1 = document.getElementById("MAJ1").value
    if (document.getElementById("MAJ1CHECK").checked == false) {
        document.getElementById("MAJ1").disabled = true;
    } else {
        document.getElementById("MAJ1").disabled = false;
        BuffPDEF = BuffPDEF * MAJESTY[maj1];
        BuffEVA = BuffEVA + MAJESTYEVA[maj1]
    }
    var maj2 = document.getElementById("MAJ2").value
    if (document.getElementById("MAJ2CHECK").checked == false) {
        document.getElementById("MAJ2").disabled = true;
    } else {
        document.getElementById("MAJ2").disabled = false;
        BuffPDEF = BuffPDEF * MAJESTY[maj2];
        BuffEVA = BuffEVA + MAJESTYEVA[maj2]
    }
//Might
    var might1 = document.getElementById("MIGHT1").value
    if (document.getElementById("MIGHT1CHECK").checked == false) {
        document.getElementById("MIGHT1").disabled = true;
    } else {
        document.getElementById("MIGHT1").disabled = false;
        BuffPATK = BuffPATK * MIGHT[might1]
    }
    var might2 = document.getElementById("MIGHT2").value
    if (document.getElementById("MIGHT2CHECK").checked == false) {
        document.getElementById("MIGHT2").disabled = true;
    } else {
        document.getElementById("MIGHT2").disabled = false;
        BuffPATK = BuffPATK * MIGHT[might2]
    }
//Parry Stance
    var parry = document.getElementById("PARRY").value
    if (document.getElementById("PARRYCHECK").checked == false) {
        document.getElementById("PARRY").disabled = true;
    } else {
        document.getElementById("PARRY").disabled = false;
        BuffPDEF = 1.25 * BuffPDEF;
        BuffMDEF = 1.25 * BuffMDEF;
        BuffACC = BuffACC - 4;
        BuffSPEED = BuffSPEED * 0.9;
        BuffASPD = BuffASPD * 0.8
    }
//P.Atk. Debuffs
    var depatk = document.getElementById("DEPATK").value
    if (document.getElementById("DEPATKCHECK").checked == false) {
        document.getElementById("DEPATK").disabled = true;
    } else {
        document.getElementById("DEPATK").disabled = false;
        BuffPATK = BuffPATK * WEAKNESS[depatk]
    }
//P.Def. Debuffs
    var depdef = document.getElementById("DEPDEF").value
    if (document.getElementById("DEPDEFCHECK").checked == false) {
        document.getElementById("DEPDEF").disabled = true;
    } else {
        document.getElementById("DEPDEF").disabled = false;
        BuffPDEF = BuffPDEF * HEX[depdef]
    }
//Polearm Accuracy
    var poleacc = document.getElementById("POLEACC").value
    if (document.getElementById("POLEACCCHECK").checked == false) {
        document.getElementById("POLEACC").disabled = true;
    } else {
        document.getElementById("POLEACC").disabled = false;
        BuffACC = BuffACC + POLEACC[poleacc]
    }
//Prophecies
    var proph = document.getElementById("PROPH").value
    if (document.getElementById("PROPHCHECK").checked == false) {
        document.getElementById("PROPH").disabled = true;
    } else {
        document.getElementById("PROPH").disabled = false;
    }
    if (proph == "COV" && document.getElementById("PROPHCHECK").checked == true) {
        BuffHP = BuffHP * 1.2;
        BuffPATK = 1.10 * BuffPATK;
        BuffMATK = 1.2 * BuffMATK;
        BuffPDEF = BuffPDEF * 1.2;
        BuffMDEF = 1.2 * BuffMDEF;
        BuffACC = BuffACC + 4;
        subcritical = subcritical + (basecritical * 0.2);
        BuffSPEED = BuffSPEED * 0.8;
        BuffASPD = BuffASPD * 1.2;
        BuffCAST = BuffCAST * 1.2
    } else if (proph == "POF" && document.getElementById("PROPHCHECK").checked == true) {
        BuffHP = BuffHP * 1.2;
        BuffPATK = 1.10 * BuffPATK;
        BuffPDEF = BuffPDEF * 1.2;
        BuffACC = BuffACC + 4;
        BuffSPEED = BuffSPEED * 0.9;
        BuffASPD = BuffASPD * 1.2
    } else if (proph == "PWA" && document.getElementById("PROPHCHECK").checked == true) {
        BuffMATK = 1.2 * BuffMATK;
        BuffMDEF = 1.2 * BuffMDEF;
        BuffSPEED = BuffSPEED * 0.9;
        BuffCAST = BuffCAST * 1.2
    } else if (proph == "PWI" && document.getElementById("PROPHCHECK").checked == true) {
        BuffACC = BuffACC + 4;
        BuffEVA = BuffEVA + 4;
        BuffASPD = BuffASPD * 1.2
    }
//Queen Buffs
    var queen = document.getElementById("QUEEN").value
    if (document.getElementById("QUEENCHECK").checked == false) {
        document.getElementById("QUEEN").disabled = true;
    } else {
        document.getElementById("QUEEN").disabled = false;
    }
    if ((queen == "1" || queen == "2" || queen == "3") && document.getElementById("QUEENCHECK").checked == true) {
        BuffPATK = CATBUFFS[queen] * BuffPATK;
        BuffACC = BuffACC + 2
    } else if ((queen == "4" || queen == "5" || queen == "6") && document.getElementById("QUEENCHECK").checked == true) {
        subcritical = subcritical + (basecritical * CATBUFFS[queen])
    }
//Rage
    var rage1 = document.getElementById("RAGE1").value
    if (document.getElementById("RAGE1CHECK").checked == false) {
        document.getElementById("RAGE1").disabled = true;
    } else if (document.getElementById("RAGE1CHECK").checked == true && (WpnType == "2hs" || WpnType == "2hb")) {
        document.getElementById("RAGE1").disabled = false;
        BuffPATK = RAGE2HS[rage1] * BuffPATK;
        BuffPDEF = 0.80 * BuffPDEF;
        BuffEVA = BuffEVA - 3;
        BuffACC = BuffACC + RAGE2HSACC[rage1]
    } else {
        document.getElementById("RAGE1").disabled = false;
        BuffPATK = RAGE[rage1] * BuffPATK;
        BuffPDEF = 0.80 * BuffPDEF;
        BuffEVA = BuffEVA - 3
    }
    var rage2 = document.getElementById("RAGE2").value
    if (document.getElementById("RAGE2CHECK").checked == false) {
        document.getElementById("RAGE2").disabled = true;
    } else if (document.getElementById("RAGE2CHECK").checked == true && (WpnType == "2hs" || WpnType == "2hb")) {
        document.getElementById("RAGE2").disabled = false;
        BuffPATK = RAGE2HS[rage2] * BuffPATK;
        BuffPDEF = 0.80 * BuffPDEF;
        BuffEVA = BuffEVA - 3;
        BuffACC = BuffACC + RAGE2HSACC[rage2]
    } else {
        document.getElementById("RAGE2").disabled = false;
        BuffPATK = RAGE[rage2] * BuffPATK;
        BuffPDEF = 0.80 * BuffPDEF;
        BuffEVA = BuffEVA - 3
    }
//Rapid Fire
    var rapidfire = document.getElementById("RAPIDFIRE").value
    if (document.getElementById("RAPIDFIRECHECK").checked == false) {
        document.getElementById("RAPIDFIRE").disabled = true;
    } else if (document.getElementById("RAPIDFIRECHECK").checked == true && WpnMAS == "Bow") {
        document.getElementById("RAPIDFIRE").disabled = false;
        AddPATK = AddPATK + RAPIDFIRE[rapidfire];
        BuffASPD = BuffASPD * 1.2
    } else {
        document.getElementById("RAPIDFIRE").disabled = false
    }
//Rapid Shot
    var rapid1 = document.getElementById("RAPID1").value
    if (document.getElementById("RAPID1CHECK").checked == false) {
        document.getElementById("RAPID1").disabled = true;
    } else if (document.getElementById("RAPID1CHECK").checked == true && WpnMAS == "Bow") {
        document.getElementById("RAPID1").disabled = false;
        BuffASPD = BuffASPD * RAPIDSHOT[rapid1]
    } else {
        document.getElementById("RAPID1").disabled = false;
    }
    var rapid2 = document.getElementById("RAPID2").value
    if (document.getElementById("RAPID2CHECK").checked == false) {
        document.getElementById("RAPID2").disabled = true;
    } else if (document.getElementById("RAPID2CHECK").checked == true && WpnMAS == "Bow") {
        document.getElementById("RAPID2").disabled = false;
        BuffASPD = BuffASPD * RAPIDSHOT[rapid2]
    } else {
        document.getElementById("RAPID2").disabled = false;
    }
//Riposte Stance
    var riposte = document.getElementById("RIPOSTE").value
    if (document.getElementById("RIPOSTECHECK").checked == false) {
        document.getElementById("RIPOSTE").disabled = true;
    } else {
        document.getElementById("RIPOSTE").disabled = false;
        BuffACC = BuffACC - 4;
        BuffSPEED = BuffSPEED * 0.9;
        BuffASPD = BuffASPD * 0.8
    }
//Seal of Despair
    var despair = document.getElementById("DESPAIR").value
    if (document.getElementById("DESPAIRCHECK").checked == false) {
        document.getElementById("DESPAIR").disabled = true;
    } else {
        document.getElementById("DESPAIR").disabled = false;
        BuffMDEF = 0.70 * BuffMDEF;
        BuffACC = BuffACC - 6;
        subcritical = subcritical + (basecritical * -0.3);
        BuffSPEED = BuffSPEED * 0.8;
        BuffASPD = BuffASPD * 0.8
    }
//Shield
    var shield1 = document.getElementById("SHIELD1").value
    if (document.getElementById("SHIELD1CHECK").checked == false) {
        document.getElementById("SHIELD1").disabled = true;
    } else {
        document.getElementById("SHIELD1").disabled = false;
        BuffPDEF = BuffPDEF * SHIELD[shield1]
    }
    var shield2 = document.getElementById("SHIELD2").value
    if (document.getElementById("SHIELD2CHECK").checked == false) {
        document.getElementById("SHIELD2").disabled = true;
    } else {
        document.getElementById("SHIELD2").disabled = false;
        BuffPDEF = BuffPDEF * SHIELD[shield2]
    }
//Shock Blast
    var shockblast = document.getElementById("SB").value
    if (document.getElementById("SBCHECK").checked == false) {
        document.getElementById("SB").disabled = true;
    } else {
        document.getElementById("SB").disabled = false;
        BuffPDEF = 0.70 * BuffPDEF;
        BuffMDEF = 0.70 * BuffMDEF
    }
//Silent Move
    var sm = document.getElementById("SM").value
    if (document.getElementById("SMCHECK").checked == false) {
        document.getElementById("SM").disabled = true;
    } else {
        document.getElementById("SM").disabled = false;
        BuffSPEED = BuffSPEED * 0.6
    }
//Slow
    var despeed = document.getElementById("DESPEED").value
    if (document.getElementById("DESPEEDCHECK").checked == false) {
        document.getElementById("DESPEED").disabled = true;
    } else {
        document.getElementById("DESPEED").disabled = false;
        BuffSPEED = BuffSPEED * SLOW[despeed]
    }
//Snipe
    var snipe = document.getElementById("SNIPE").value
    if (document.getElementById("SNIPECHECK").checked == false) {
        document.getElementById("SNIPE").disabled = true;
    } else {
        document.getElementById("SNIPE").disabled = false;
        AddPATK = AddPATK + SNIPE[snipe];
        BuffACC = BuffACC + SNIPEACC[snipe];
        subcritical = subcritical + (basecritical * 0.2)
    }
//Song of Earth
    var soea = document.getElementById("SOEA").value
    if (document.getElementById("SOECHECK").checked == false) {
        document.getElementById("SOEA").disabled = true;
    } else {
        document.getElementById("SOEA").disabled = false;
        BuffPDEF = 1.25 * BuffPDEF
    }
//Song of Hunter
    var soh = document.getElementById("SOH").value
    if (document.getElementById("SOHCHECK").checked == false) {
        document.getElementById("SOH").disabled = true;
    } else {
        document.getElementById("SOH").disabled = false;
        subcritical = subcritical + (basecritical * 1)
    }
//Song of Vitality
    var vit = document.getElementById("VIT").value
    if (document.getElementById("VITCHECK").checked == false) {
        document.getElementById("VIT").disabled = true;
    } else {
        document.getElementById("VIT").disabled = false;
        BuffHP = 1.3 * BuffHP
    }
//Song of Warding
    var ward = document.getElementById("WARD").value
    if (document.getElementById("WARDCHECK").checked == false) {
        document.getElementById("WARD").disabled = true;
    } else {
        document.getElementById("WARD").disabled = false;
        BuffMDEF = 1.3 * BuffMDEF
    }
//Song of Water
    var swat = document.getElementById("SWAT").value
    if (document.getElementById("SWATCHECK").checked == false) {
        document.getElementById("SWAT").disabled = true;
    } else {
        document.getElementById("SWAT").disabled = false;
        BuffEVA = BuffEVA + 3
    }
//Song of Wind
    var swind = document.getElementById("SWIND").value
    if (document.getElementById("SWINDCHECK").checked == false) {
        document.getElementById("SWIND").disabled = true;
    } else {
        document.getElementById("SWIND").disabled = false;
        AddSPEED = AddSPEED + 20
    }
//Soul Cry
    var soul1 = document.getElementById("SOUL1").value
    if (document.getElementById("SOUL1CHECK").checked == false) {
        document.getElementById("SOUL1").disabled = true;
    } else {
        document.getElementById("SOUL1").disabled = false;
        AddPATK = AddPATK + SOULCRY[soul1]
    }
    var soul2 = document.getElementById("SOUL2").value
    if (document.getElementById("SOUL2CHECK").checked == false) {
        document.getElementById("SOUL2").disabled = true;
    } else {
        document.getElementById("SOUL2").disabled = false;
        AddPATK = AddPATK + SOULCRY[soul2]
    }
    var soul3 = document.getElementById("SOUL3").value
    if (document.getElementById("SOUL3CHECK").checked == false) {
        document.getElementById("SOUL3").disabled = true;
    } else {
        document.getElementById("SOUL3").disabled = false;
        AddPATK = AddPATK + SOULCRY[soul3]
    }
//Soul Guard
    var sg = document.getElementById("SG").value
    if (document.getElementById("SGCHECK").checked == false) {
        document.getElementById("SG").disabled = true;
    } else {
        document.getElementById("SG").disabled = false;
        AddPDEF = AddPDEF + SOULGUARD[sg]
    }
//Soul of Sagitarrius
    var sag = document.getElementById("SAG").value
    if (document.getElementById("SAGCHECK").checked == false) {
        document.getElementById("SAG").disabled = true;
    } else {
        document.getElementById("SAG").disabled = false;
        BuffMP = BuffMP * SOULOFSAG[sag]
    }
//Stealth
    var stealth = document.getElementById("STEALTH").value
    if (document.getElementById("STEALTHCHECK").checked == false) {
        document.getElementById("STEALTH").disabled = true;
    } else {
        document.getElementById("STEALTH").disabled = false;
        BuffPATK = BuffPATK * 0.55;
        BuffPDEF = BuffPDEF * STEALTH[stealth];
        BuffMDEF = BuffMDEF * STEALTH[stealth];
        BuffACC = BuffACC - 12;
        BuffEVA = BuffEVA + STEALTHEVA[stealth]
    }
//Thrill Fight
    var tf = document.getElementById("TF").value
    if (document.getElementById("TFCHECK").checked == false) {
        document.getElementById("TF").disabled = true;
    } else {
        document.getElementById("TF").disabled = false;
        BuffSPEED = BuffSPEED * 0.8;
        BuffASPD = BuffASPD * THRILLFIGHT[tf]
    }
//Totem
    var totem1 = document.getElementById("TOTEM1").value
    if (document.getElementById("TOTEM1CHECK").checked == false) {
        document.getElementById("TOTEM1").disabled = true;
    } else {
        document.getElementById("TOTEM1").disabled = false;
    }
    if (totem1 == "BEAR" && document.getElementById("TOTEM1CHECK").checked == true) {
        BuffPATK = 1.2 * BuffPATK;
        BuffSPEED = BuffSPEED * 0.7
    } else if (totem1 == "BISON" && document.getElementById("TOTEM1CHECK").checked == true) {
        BuffPATK60 = 1.43 * BuffPATK60;
        AddCRIT60 = AddCRIT60 + 100;
        AddCRIT30 = AddCRIT30 + 300;
        BuffACC = BuffACC + 6
    } else if (totem1 == "HAWK" && document.getElementById("TOTEM1CHECK").checked == true) {
        AddCRIT = AddCRIT + 100;
        BuffACC = BuffACC + 6
    } else if (totem1 == "OGRE" && document.getElementById("TOTEM1CHECK").checked == true) {
        BuffMDEF = 1.3 * BuffMDEF;
        BuffPDEF = 1.3 * BuffPDEF;
        BuffEVA = BuffEVA - 9;
        BuffSPEED = BuffSPEED * 0.7
    } else if (totem1 == "PUMA" && document.getElementById("TOTEM1CHECK").checked == true) {
        BuffACC = BuffACC + 6;
        BuffASPD = BuffASPD * 1.2
    } else if (totem1 == "RABBIT" && document.getElementById("TOTEM1CHECK").checked == true) {
        BuffPATK = 0.70 * BuffPATK;
        BuffEVA = BuffEVA + 12;
        BuffSPEED = BuffSPEED * 1.3;
        BuffACC = BuffACC - 9
    } else if (totem1 == "WOLF" && document.getElementById("TOTEM1CHECK").checked == true) {
        BuffSPEED = BuffSPEED * 1.2;
        BuffACC = BuffACC + 3
    }
    var totem2 = document.getElementById("TOTEM2").value
    if (document.getElementById("TOTEM2CHECK").checked == false) {
        document.getElementById("TOTEM2").disabled = true;
    } else {
        document.getElementById("TOTEM2").disabled = false;
    }
    if (totem2 == "BEAR" && document.getElementById("TOTEM2CHECK").checked == true) {
        BuffPATK = 1.2 * BuffPATK;
        BuffSPEED = BuffSPEED * 0.7
    } else if (totem2 == "BISON" && document.getElementById("TOTEM2CHECK").checked == true) {
        BuffPATK60 = 1.43 * BuffPATK60;
        AddCRIT60 = AddCRIT60 + 100;
        AddCRIT30 = AddCRIT30 + 300;
        BuffACC = BuffACC + 6
    } else if (totem2 == "HAWK" && document.getElementById("TOTEM2CHECK").checked == true) {
        AddCRIT = AddCRIT + 100;
        BuffACC = BuffACC + 6
    } else if (totem2 == "OGRE" && document.getElementById("TOTEM2CHECK").checked == true) {
        BuffMDEF = 1.3 * BuffMDEF;
        BuffPDEF = 1.3 * BuffPDEF;
        BuffEVA = BuffEVA - 9;
        BuffSPEED = BuffSPEED * 0.7
    } else if (totem2 == "PUMA" && document.getElementById("TOTEM2CHECK").checked == true) {
        BuffACC = BuffACC + 6;
        BuffASPD = BuffASPD * 1.2
    } else if (totem2 == "RABBIT" && document.getElementById("TOTEM2CHECK").checked == true) {
        BuffPATK = 0.70 * BuffPATK;
        BuffEVA = BuffEVA + 12;
        BuffSPEED = BuffSPEED * 1.3;
        BuffACC = BuffACC - 9
    } else if (totem2 == "WOLF" && document.getElementById("TOTEM2CHECK").checked == true) {
        BuffSPEED = BuffSPEED * 1.2;
        BuffACC = BuffACC + 3
    }
//Touch of Death
    var tod = document.getElementById("TOD").value
    if (document.getElementById("TODCHECK").checked == false) {
        document.getElementById("TOD").disabled = true;
    } else {
        document.getElementById("TOD").disabled = false;
        BuffCP = 0.1 * BuffCP
    }
//Ultimate Defense
    var ud1 = document.getElementById("UD1").value
    if (document.getElementById("UD1CHECK").checked == false) {
        document.getElementById("UD1").disabled = true;
    } else {
        document.getElementById("UD1").disabled = false;
        AddPDEF = AddPDEF + UDPDEF[ud1]
        AddMDEF = AddMDEF + UDMDEF[ud1]
    }
    var ud2 = document.getElementById("UD2").value
    if (document.getElementById("UD2CHECK").checked == false) {
        document.getElementById("UD2").disabled = true;
    } else {
        document.getElementById("UD2").disabled = false;
        AddPDEF = AddPDEF + UDPDEF[ud2]
        AddMDEF = AddMDEF + UDMDEF[ud2]
    }
//Ultimate Evasion
    var ue = document.getElementById("UE").value
    if (document.getElementById("UECHECK").checked == false) {
        document.getElementById("UE").disabled = true;
    } else {
        document.getElementById("UE").disabled = false;
        BuffEVA = BuffEVA + UE[ue]
    }
//War Cry
    var warcry1 = document.getElementById("WARCRY1").value
    if (document.getElementById("WARCRY1CHECK").checked == false) {
        document.getElementById("WARCRY1").disabled = true;
    } else {
        document.getElementById("WARCRY1").disabled = false;
        BuffPATK = BuffPATK * WARCRY[warcry1]
    }
    var warcry2 = document.getElementById("WARCRY2").value
    if (document.getElementById("WARCRY2CHECK").checked == false) {
        document.getElementById("WARCRY2").disabled = true;
    } else {
        document.getElementById("WARCRY2").disabled = false;
        BuffPATK = BuffPATK * WARCRY[warcry2]
    }
//Wind Vortex
    var wv = document.getElementById("WV").value
    if (document.getElementById("WVCHECK").checked == false) {
        document.getElementById("WV").disabled = true;
    } else {
        document.getElementById("WV").disabled = false;
        BuffSPEED = BuffSPEED * 0.9;
        BuffASPD = BuffASPD * 0.9;
        BuffCAST = BuffCAST * 0.7
    }
//Wind Walk
    var ww = document.getElementById("WW").value
    if (document.getElementById("WWCHECK").checked == false) {
        document.getElementById("WW").disabled = true;
    } else {
        document.getElementById("WW").disabled = false;
        AddSPEED = AddSPEED + WINDWALK[ww]
    }
//Zealot
    var zealot = document.getElementById("ZEALOT").value
    if (document.getElementById("ZEALOTCHECK").checked == false) {
        document.getElementById("ZEALOT").disabled = true;
    } else {
        document.getElementById("ZEALOT").disabled = false;
        BuffASPD30 = BuffASPD30 * 1.1 * zealot
        BuffACC30 = BuffACC30 + 4 + (2 * zealot)
        AddSPEED30 = AddSPEED30 + (10 * zealot)
    }
    if (document.getElementById("ZEALOTCHECK").checked == true && JOB == "DE") {
        AddCRIT30 = AddCRIT30 + (33 * zealot)
    }

//Passive Auto-select
    if (lvlreset && LVL >= 0 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WMFCHECK").checked = false
        document.getElementById("WMM1CHECK").checked = false
        document.getElementById("WMM2CHECK").checked = false
        document.getElementById("WMM3CHECK").checked = false
        document.getElementById("WSBM1CHECK").checked = false
        document.getElementById("WSBM2CHECK").checked = false
        document.getElementById("BLUNTM1CHECK").checked = false
        document.getElementById("BLUNTM2CHECK").checked = false
        document.getElementById("FISTM1CHECK").checked = false
        document.getElementById("FISTM2CHECK").checked = false
        document.getElementById("KSBM1CHECK").checked = false
        document.getElementById("KSBM2CHECK").checked = false
        document.getElementById("DAGGERM1CHECK").checked = false
        document.getElementById("DAGGERM2CHECK").checked = false
        document.getElementById("POLEM1CHECK").checked = false
        document.getElementById("POLEM2CHECK").checked = false
        document.getElementById("BOWM1CHECK").checked = false
        document.getElementById("BOWM2CHECK").checked = false
        document.getElementById("DUALMCHECK").checked = false
        document.getElementById("THM1CHECK").checked = false
        document.getElementById("THM2CHECK").checked = false
        document.getElementById("AMFCHECK").checked = false
        document.getElementById("AMMCHECK").checked = false
        document.getElementById("HMK1CHECK").checked = false
        document.getElementById("HMK2CHECK").checked = false
        document.getElementById("HMW1CHECK").checked = false
        document.getElementById("HMW2CHECK").checked = false
        document.getElementById("HMO1CHECK").checked = false
        document.getElementById("HMO2CHECK").checked = false
        document.getElementById("HMO3CHECK").checked = false
        document.getElementById("HMPCHECK").checked = false
        document.getElementById("LMW1CHECK").checked = false
        document.getElementById("LMW2CHECK").checked = false
        document.getElementById("LMR1CHECK").checked = false
        document.getElementById("LMR2CHECK").checked = false
        document.getElementById("LMO1CHECK").checked = false
        document.getElementById("LMO2CHECK").checked = false
        document.getElementById("LMO3CHECK").checked = false
        document.getElementById("LMH1CHECK").checked = false
        document.getElementById("LMH2CHECK").checked = false
        document.getElementById("LMSCHECK").checked = false
        document.getElementById("RMN1CHECK").checked = false
        document.getElementById("RMN2CHECK").checked = false
        document.getElementById("RMH1CHECK").checked = false
        document.getElementById("RMH2CHECK").checked = false
        document.getElementById("RMO1CHECK").checked = false
        document.getElementById("RMO2CHECK").checked = false
        document.getElementById("RMO3CHECK").checked = false
        document.getElementById("MR1CHECK").checked = false
        document.getElementById("MR2CHECK").checked = false
        document.getElementById("AM1CHECK").checked = false
        document.getElementById("AM2CHECK").checked = false
        document.getElementById("AM3CHECK").checked = false
        document.getElementById("BOOSTHP1CHECK").checked = false
        document.getElementById("BOOSTHP2CHECK").checked = false
        document.getElementById("BOOSTHP3CHECK").checked = false
        document.getElementById("QUICKSTEP1CHECK").checked = false
        document.getElementById("QUICKSTEP2CHECK").checked = false
        document.getElementById("FINALFORTRESSCHECK").checked = false
        document.getElementById("BOOSTMP1CHECK").checked = false
        document.getElementById("BOOSTMP2CHECK").checked = false
        document.getElementById("BOOSTEVASION1CHECK").checked = false
        document.getElementById("BOOSTEVASION2CHECK").checked = false
        document.getElementById("FINALFRENZYCHECK").checked = false
        document.getElementById("SHADOWSENSECHECK").checked = false
        document.getElementById("AGILEMOVEMENT1CHECK").checked = false
        document.getElementById("AGILEMOVEMENT2CHECK").checked = false
        document.getElementById("CRITICALCHANCE1CHECK").checked = false
        document.getElementById("CRITICALCHANCE2CHECK").checked = false
        document.getElementById("FASTCAST1CHECK").checked = false
        document.getElementById("FASTCAST2CHECK").checked = false
        document.getElementById("BOOSTASPD1CHECK").checked = false
        document.getElementById("BOOSTASPD2CHECK").checked = false
    }
    if (lvlreset && LVL >= 5 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WMFCHECK").checked = true
        document.getElementById("WMF").selectedIndex = 0
        document.getElementById("AMFCHECK").checked = true
        document.getElementById("AMF").selectedIndex = 0
    }
    if (lvlreset && LVL >= 7 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WMM1CHECK").checked = true
        document.getElementById("WMM1").selectedIndex = 0
        document.getElementById("WMM2CHECK").checked = true
        document.getElementById("WMM2").selectedIndex = 0
        document.getElementById("WMM3CHECK").checked = true
        document.getElementById("WMM3").selectedIndex = 0
        document.getElementById("AMMCHECK").checked = true
        document.getElementById("AMM").selectedIndex = 0
        document.getElementById("LMO1CHECK").checked = true
        document.getElementById("LMO1").selectedIndex = 1
        document.getElementById("LMO2CHECK").checked = true
        document.getElementById("LMO2").selectedIndex = 1
        document.getElementById("LMO3CHECK").checked = true
        document.getElementById("LMO3").selectedIndex = 1
        document.getElementById("RMO1CHECK").checked = true
        document.getElementById("RMO1").selectedIndex = 1
        document.getElementById("RMO2CHECK").checked = true
        document.getElementById("RMO2").selectedIndex = 1
        document.getElementById("RMO3CHECK").checked = true
        document.getElementById("RMO3").selectedIndex = 1
        document.getElementById("AM1CHECK").checked = true
        document.getElementById("AM1").selectedIndex = 1
        document.getElementById("AM2CHECK").checked = true
        document.getElementById("AM2").selectedIndex = 1
        document.getElementById("AM3CHECK").checked = true
        document.getElementById("AM3").selectedIndex = 1
    }
    if (lvlreset && LVL >= 10 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WMFCHECK").checked = true
        document.getElementById("WMF").selectedIndex = 1
        document.getElementById("AMFCHECK").checked = true
        document.getElementById("AMF").selectedIndex = 2
    }
    if (lvlreset && LVL >= 14 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WMM1CHECK").checked = true
        document.getElementById("WMM1").selectedIndex = 1
        document.getElementById("WMM2CHECK").checked = true
        document.getElementById("WMM2").selectedIndex = 1
        document.getElementById("WMM3CHECK").checked = true
        document.getElementById("WMM3").selectedIndex = 1
        document.getElementById("AMMCHECK").checked = true
        document.getElementById("AMM").selectedIndex = 2
        document.getElementById("HMO1CHECK").checked = true
        document.getElementById("HMO1").selectedIndex = 1
        document.getElementById("HMO2CHECK").checked = true
        document.getElementById("HMO2").selectedIndex = 1
        document.getElementById("HMO3CHECK").checked = true
        document.getElementById("HMO3").selectedIndex = 1
        document.getElementById("LMO1CHECK").checked = true
        document.getElementById("LMO1").selectedIndex = 3
        document.getElementById("LMO2CHECK").checked = true
        document.getElementById("LMO2").selectedIndex = 3
        document.getElementById("LMO3CHECK").checked = true
        document.getElementById("LMO3").selectedIndex = 3
        document.getElementById("RMO1CHECK").checked = true
        document.getElementById("RMO1").selectedIndex = 3
        document.getElementById("RMO2CHECK").checked = true
        document.getElementById("RMO2").selectedIndex = 3
        document.getElementById("RMO3CHECK").checked = true
        document.getElementById("RMO3").selectedIndex = 3
        document.getElementById("AM1CHECK").checked = true
        document.getElementById("AM1").selectedIndex = 3
        document.getElementById("AM2CHECK").checked = true
        document.getElementById("AM2").selectedIndex = 3
        document.getElementById("AM3CHECK").checked = true
        document.getElementById("AM3").selectedIndex = 3
    }
    if (lvlreset && LVL >= 15 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WMFCHECK").checked = true
        document.getElementById("WMF").selectedIndex = 2
        document.getElementById("AMFCHECK").checked = true
        document.getElementById("AMF").selectedIndex = 4
        document.getElementById("SHADOWSENSECHECK").checked = true
        document.getElementById("AMF").selectedIndex = 0
    }
    if (lvlreset && LVL >= 20 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WMM2CHECK").checked = true
        document.getElementById("WMM2").selectedIndex = 2
        document.getElementById("WMM3CHECK").checked = true
        document.getElementById("WMM3").selectedIndex = 2
        document.getElementById("WSBM1CHECK").checked = true
        document.getElementById("WSBM1").selectedIndex = 0
        document.getElementById("WSBM2CHECK").checked = true
        document.getElementById("WSBM2").selectedIndex = 0
        document.getElementById("BLUNTM1CHECK").checked = true
        document.getElementById("BLUNTM1").selectedIndex = 0
        document.getElementById("BLUNTM2CHECK").checked = true
        document.getElementById("BLUNTM2").selectedIndex = 0
        document.getElementById("FISTM1CHECK").checked = true
        document.getElementById("FISTM1").selectedIndex = 0
        document.getElementById("FISTM2CHECK").checked = true
        document.getElementById("FISTM2").selectedIndex = 0
        document.getElementById("KSBM1CHECK").checked = true
        document.getElementById("KSBM1").selectedIndex = 0
        document.getElementById("KSBM2CHECK").checked = true
        document.getElementById("KSBM2").selectedIndex = 0
        document.getElementById("DAGGERM1CHECK").checked = true
        document.getElementById("DAGGERM1").selectedIndex = 0
        document.getElementById("DAGGERM2CHECK").checked = true
        document.getElementById("DAGGERM2").selectedIndex = 0
        document.getElementById("POLEM1CHECK").checked = true
        document.getElementById("POLEM1").selectedIndex = 0
        document.getElementById("POLEM2CHECK").checked = true
        document.getElementById("POLEM2").selectedIndex = 0
        document.getElementById("BOWM1CHECK").checked = true
        document.getElementById("BOWM1").selectedIndex = 2
        document.getElementById("BOWM2CHECK").checked = true
        document.getElementById("BOWM2").selectedIndex = 2
        document.getElementById("THM1CHECK").checked = true
        document.getElementById("THM1").selectedIndex = 0
        document.getElementById("THM2CHECK").checked = true
        document.getElementById("THM2").selectedIndex = 0
        document.getElementById("HMK1CHECK").checked = true
        document.getElementById("HMK1").selectedIndex = 2
        document.getElementById("HMK2CHECK").checked = true
        document.getElementById("HMK2").selectedIndex = 2
        document.getElementById("HMW1CHECK").checked = true
        document.getElementById("HMW1").selectedIndex = 1
        document.getElementById("HMW2CHECK").checked = true
        document.getElementById("HMW2").selectedIndex = 1
        document.getElementById("HMO2CHECK").checked = true
        document.getElementById("HMO2").selectedIndex = 3
        document.getElementById("HMO3CHECK").checked = true
        document.getElementById("HMO3").selectedIndex = 3
        document.getElementById("LMW1CHECK").checked = true
        document.getElementById("LMW1").selectedIndex = 1
        document.getElementById("LMW2CHECK").checked = true
        document.getElementById("LMW2").selectedIndex = 1
        document.getElementById("LMR1CHECK").checked = true
        document.getElementById("LMR1").selectedIndex = 1
        document.getElementById("LMR2CHECK").checked = true
        document.getElementById("LMR2").selectedIndex = 1
        document.getElementById("LMO2CHECK").checked = true
        document.getElementById("LMO2").selectedIndex = 5
        document.getElementById("LMO3CHECK").checked = true
        document.getElementById("LMO3").selectedIndex = 5
        document.getElementById("LMH1CHECK").checked = true
        document.getElementById("LMH1").selectedIndex = 1
        document.getElementById("LMH2CHECK").checked = true
        document.getElementById("LMH2").selectedIndex = 1
        document.getElementById("RMN1CHECK").checked = true
        document.getElementById("RMN1").selectedIndex = 1
        document.getElementById("RMN2CHECK").checked = true
        document.getElementById("RMN2").selectedIndex = 1
        document.getElementById("RMH1CHECK").checked = true
        document.getElementById("RMH1").selectedIndex = 1
        document.getElementById("RMH2CHECK").checked = true
        document.getElementById("RMH2").selectedIndex = 1
        document.getElementById("RMO2CHECK").checked = true
        document.getElementById("RMO2").selectedIndex = 5
        document.getElementById("RMO3CHECK").checked = true
        document.getElementById("RMO3").selectedIndex = 5
        document.getElementById("MR1CHECK").checked = true
        document.getElementById("MR1").selectedIndex = 1
        document.getElementById("MR2CHECK").checked = true
        document.getElementById("MR2").selectedIndex = 1
        document.getElementById("AM2CHECK").checked = true
        document.getElementById("AM2").selectedIndex = 5
        document.getElementById("AM3CHECK").checked = true
        document.getElementById("AM3").selectedIndex = 5
        document.getElementById("BOOSTHP1CHECK").checked = true
        document.getElementById("BOOSTHP1").selectedIndex = 0
        document.getElementById("BOOSTHP3CHECK").checked = true
        document.getElementById("BOOSTHP3").selectedIndex = 0
        document.getElementById("BOOSTMP1CHECK").checked = true
        document.getElementById("BOOSTMP1").selectedIndex = 0
        document.getElementById("BOOSTMP2CHECK").checked = true
        document.getElementById("BOOSTMP2").selectedIndex = 0
        document.getElementById("AGILEMOVEMENT1CHECK").checked = true
        document.getElementById("AGILEMOVEMENT1").selectedIndex = 0
        document.getElementById("AGILEMOVEMENT2CHECK").checked = true
        document.getElementById("AGILEMOVEMENT2").selectedIndex = 0
    }
    if (lvlreset && LVL >= 24 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WSBM1CHECK").checked = true
        document.getElementById("WSBM1").selectedIndex = 1
        document.getElementById("WSBM2CHECK").checked = true
        document.getElementById("WSBM2").selectedIndex = 1
        document.getElementById("BLUNTM1CHECK").checked = true
        document.getElementById("BLUNTM1").selectedIndex = 1
        document.getElementById("BLUNTM2CHECK").checked = true
        document.getElementById("BLUNTM2").selectedIndex = 1
        document.getElementById("FISTM1CHECK").checked = true
        document.getElementById("FISTM1").selectedIndex = 1
        document.getElementById("FISTM2CHECK").checked = true
        document.getElementById("FISTM2").selectedIndex = 1
        document.getElementById("KSBM1CHECK").checked = true
        document.getElementById("KSBM1").selectedIndex = 1
        document.getElementById("KSBM2CHECK").checked = true
        document.getElementById("KSBM2").selectedIndex = 1
        document.getElementById("DAGGERM1CHECK").checked = true
        document.getElementById("DAGGERM1").selectedIndex = 1
        document.getElementById("DAGGERM2CHECK").checked = true
        document.getElementById("DAGGERM2").selectedIndex = 1
        document.getElementById("POLEM1CHECK").checked = true
        document.getElementById("POLEM1").selectedIndex = 1
        document.getElementById("POLEM2CHECK").checked = true
        document.getElementById("POLEM2").selectedIndex = 1
        document.getElementById("BOWM1CHECK").checked = true
        document.getElementById("BOWM1").selectedIndex = 5
        document.getElementById("BOWM2CHECK").checked = true
        document.getElementById("BOWM2").selectedIndex = 5
        document.getElementById("THM1CHECK").checked = true
        document.getElementById("THM1").selectedIndex = 1
        document.getElementById("THM2CHECK").checked = true
        document.getElementById("THM2").selectedIndex = 1
        document.getElementById("HMK1CHECK").checked = true
        document.getElementById("HMK1").selectedIndex = 5
        document.getElementById("HMK2CHECK").checked = true
        document.getElementById("HMK2").selectedIndex = 5
        document.getElementById("HMW1CHECK").checked = true
        document.getElementById("HMW1").selectedIndex = 3
        document.getElementById("HMW2CHECK").checked = true
        document.getElementById("HMW2").selectedIndex = 3
        document.getElementById("LMW1CHECK").checked = true
        document.getElementById("LMW1").selectedIndex = 3
        document.getElementById("LMW2CHECK").checked = true
        document.getElementById("LMW2").selectedIndex = 3
        document.getElementById("LMR1CHECK").checked = true
        document.getElementById("LMR1").selectedIndex = 3
        document.getElementById("LMR2CHECK").checked = true
        document.getElementById("LMR2").selectedIndex = 3
        document.getElementById("MR1CHECK").checked = true
        document.getElementById("MR1").selectedIndex = 4
        document.getElementById("MR2CHECK").checked = true
        document.getElementById("MR2").selectedIndex = 4
        document.getElementById("BOOSTEVASION1CHECK").checked = true
        document.getElementById("BOOSTEVASION1").selectedIndex = 0
        document.getElementById("BOOSTEVASION2CHECK").checked = true
        document.getElementById("BOOSTEVASION2").selectedIndex = 0
    }
    if (lvlreset && LVL >= 25 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WMM2CHECK").checked = true
        document.getElementById("WMM2").selectedIndex = 4
        document.getElementById("WMM3CHECK").checked = true
        document.getElementById("WMM3").selectedIndex = 4
        document.getElementById("HMO2CHECK").checked = true
        document.getElementById("HMO2").selectedIndex = 5
        document.getElementById("HMO3CHECK").checked = true
        document.getElementById("HMO3").selectedIndex = 5
        document.getElementById("LMO2CHECK").checked = true
        document.getElementById("LMO2").selectedIndex = 7
        document.getElementById("LMO3CHECK").checked = true
        document.getElementById("LMO3").selectedIndex = 7
        document.getElementById("LMH1CHECK").checked = true
        document.getElementById("LMH1").selectedIndex = 3
        document.getElementById("LMH2CHECK").checked = true
        document.getElementById("LMH2").selectedIndex = 3
        document.getElementById("RMN1CHECK").checked = true
        document.getElementById("RMN1").selectedIndex = 3
        document.getElementById("RMN2CHECK").checked = true
        document.getElementById("RMN2").selectedIndex = 3
        document.getElementById("RMH1CHECK").checked = true
        document.getElementById("RMH1").selectedIndex = 3
        document.getElementById("RMH2CHECK").checked = true
        document.getElementById("RMH2").selectedIndex = 3
        document.getElementById("RMO2CHECK").checked = true
        document.getElementById("RMO2").selectedIndex = 7
        document.getElementById("RMO3CHECK").checked = true
        document.getElementById("RMO3").selectedIndex = 7
        document.getElementById("AM2CHECK").checked = true
        document.getElementById("AM2").selectedIndex = 7
        document.getElementById("AM3CHECK").checked = true
        document.getElementById("AM3").selectedIndex = 7
        document.getElementById("FASTCAST1CHECK").checked = true
        document.getElementById("FASTCAST1").selectedIndex = 0
        document.getElementById("FASTCAST2CHECK").checked = true
        document.getElementById("FASTCAST2").selectedIndex = 0
    }
    if (lvlreset && LVL >= 28 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WSBM1CHECK").checked = true
        document.getElementById("WSBM1").selectedIndex = 3
        document.getElementById("WSBM2CHECK").checked = true
        document.getElementById("WSBM2").selectedIndex = 3
        document.getElementById("BLUNTM1CHECK").checked = true
        document.getElementById("BLUNTM1").selectedIndex = 3
        document.getElementById("BLUNTM2CHECK").checked = true
        document.getElementById("BLUNTM2").selectedIndex = 3
        document.getElementById("FISTM1CHECK").checked = true
        document.getElementById("FISTM1").selectedIndex = 3
        document.getElementById("FISTM2CHECK").checked = true
        document.getElementById("FISTM2").selectedIndex = 3
        document.getElementById("KSBM1CHECK").checked = true
        document.getElementById("KSBM1").selectedIndex = 3
        document.getElementById("KSBM2CHECK").checked = true
        document.getElementById("KSBM2").selectedIndex = 3
        document.getElementById("DAGGERM1CHECK").checked = true
        document.getElementById("DAGGERM1").selectedIndex = 3
        document.getElementById("DAGGERM2CHECK").checked = true
        document.getElementById("DAGGERM2").selectedIndex = 3
        document.getElementById("POLEM1CHECK").checked = true
        document.getElementById("POLEM1").selectedIndex = 3
        document.getElementById("POLEM2CHECK").checked = true
        document.getElementById("POLEM2").selectedIndex = 3
        document.getElementById("BOWM1CHECK").checked = true
        document.getElementById("BOWM1").selectedIndex = 8
        document.getElementById("BOWM2CHECK").checked = true
        document.getElementById("BOWM2").selectedIndex = 8
        document.getElementById("THM1CHECK").checked = true
        document.getElementById("THM1").selectedIndex = 2
        document.getElementById("THM2CHECK").checked = true
        document.getElementById("THM2").selectedIndex = 2
        document.getElementById("HMK1CHECK").checked = true
        document.getElementById("HMK1").selectedIndex = 8
        document.getElementById("HMK2CHECK").checked = true
        document.getElementById("HMK2").selectedIndex = 8
        document.getElementById("HMW1CHECK").checked = true
        document.getElementById("HMW1").selectedIndex = 6
        document.getElementById("HMW2CHECK").checked = true
        document.getElementById("HMW2").selectedIndex = 6
        document.getElementById("LMW1CHECK").checked = true
        document.getElementById("LMW1").selectedIndex = 6
        document.getElementById("LMW2CHECK").checked = true
        document.getElementById("LMW2").selectedIndex = 6
        document.getElementById("LMR1CHECK").checked = true
        document.getElementById("LMR1").selectedIndex = 5
        document.getElementById("LMR2CHECK").checked = true
        document.getElementById("LMR2").selectedIndex = 5
        document.getElementById("MR1CHECK").checked = true
        document.getElementById("MR1").selectedIndex = 7
        document.getElementById("MR2CHECK").checked = true
        document.getElementById("MR2").selectedIndex = 7
        document.getElementById("BOOSTHP1CHECK").checked = true
        document.getElementById("BOOSTHP1").selectedIndex = 1
        document.getElementById("BOOSTHP3CHECK").checked = true
        document.getElementById("BOOSTHP3").selectedIndex = 1
        document.getElementById("QUICKSTEP1CHECK").checked = true
        document.getElementById("QUICKSTEP1").selectedIndex = 0
        document.getElementById("QUICKSTEP2CHECK").checked = true
        document.getElementById("QUICKSTEP2").selectedIndex = 0
        document.getElementById("CRITICALCHANCE1CHECK").checked = true
        document.getElementById("CRITICALCHANCE1").selectedIndex = 0
        document.getElementById("CRITICALCHANCE2CHECK").checked = true
        document.getElementById("CRITICALCHANCE2").selectedIndex = 0
    }
    if (lvlreset && LVL >= 30 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WMM2CHECK").checked = true
        document.getElementById("WMM2").selectedIndex = 6
        document.getElementById("WMM3CHECK").checked = true
        document.getElementById("WMM3").selectedIndex = 6
        document.getElementById("HMO2CHECK").checked = true
        document.getElementById("HMO2").selectedIndex = 7
        document.getElementById("HMO3CHECK").checked = true
        document.getElementById("HMO3").selectedIndex = 7
        document.getElementById("LMO2CHECK").checked = true
        document.getElementById("LMO2").selectedIndex = 9
        document.getElementById("LMO3CHECK").checked = true
        document.getElementById("LMO3").selectedIndex = 9
        document.getElementById("LMH1CHECK").checked = true
        document.getElementById("LMH1").selectedIndex = 5
        document.getElementById("LMH2CHECK").checked = true
        document.getElementById("LMH2").selectedIndex = 5
        document.getElementById("RMN1CHECK").checked = true
        document.getElementById("RMN1").selectedIndex = 5
        document.getElementById("RMN2CHECK").checked = true
        document.getElementById("RMN2").selectedIndex = 5
        document.getElementById("RMH1CHECK").checked = true
        document.getElementById("RMH1").selectedIndex = 5
        document.getElementById("RMH2CHECK").checked = true
        document.getElementById("RMH2").selectedIndex = 5
        document.getElementById("RMO2CHECK").checked = true
        document.getElementById("RMO2").selectedIndex = 9
        document.getElementById("RMO3CHECK").checked = true
        document.getElementById("RMO3").selectedIndex = 9
        document.getElementById("AM2CHECK").checked = true
        document.getElementById("AM2").selectedIndex = 9
        document.getElementById("AM3CHECK").checked = true
        document.getElementById("AM3").selectedIndex = 9
        document.getElementById("BOOSTMP1CHECK").checked = true
        document.getElementById("BOOSTMP1").selectedIndex = 1
        document.getElementById("BOOSTMP2CHECK").checked = true
        document.getElementById("BOOSTMP2").selectedIndex = 1
    }
    if (lvlreset && LVL >= 32 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WSBM1CHECK").checked = true
        document.getElementById("WSBM1").selectedIndex = 5
        document.getElementById("WSBM2CHECK").checked = true
        document.getElementById("WSBM2").selectedIndex = 5
        document.getElementById("BLUNTM1CHECK").checked = true
        document.getElementById("BLUNTM1").selectedIndex = 5
        document.getElementById("BLUNTM2CHECK").checked = true
        document.getElementById("BLUNTM2").selectedIndex = 5
        document.getElementById("FISTM1CHECK").checked = true
        document.getElementById("FISTM1").selectedIndex = 5
        document.getElementById("FISTM2CHECK").checked = true
        document.getElementById("FISTM2").selectedIndex = 5
        document.getElementById("KSBM1CHECK").checked = true
        document.getElementById("KSBM1").selectedIndex = 5
        document.getElementById("KSBM2CHECK").checked = true
        document.getElementById("KSBM2").selectedIndex = 5
        document.getElementById("DAGGERM1CHECK").checked = true
        document.getElementById("DAGGERM1").selectedIndex = 5
        document.getElementById("DAGGERM2CHECK").checked = true
        document.getElementById("DAGGERM2").selectedIndex = 5
        document.getElementById("POLEM1CHECK").checked = true
        document.getElementById("POLEM1").selectedIndex = 5
        document.getElementById("POLEM2CHECK").checked = true
        document.getElementById("POLEM2").selectedIndex = 5
        document.getElementById("BOWM1CHECK").checked = true
        document.getElementById("BOWM1").selectedIndex = 11
        document.getElementById("BOWM2CHECK").checked = true
        document.getElementById("BOWM2").selectedIndex = 11
        document.getElementById("DUALMCHECK").checked = false
        document.getElementById("THM1CHECK").checked = true
        document.getElementById("THM1").selectedIndex = 3
        document.getElementById("THM2CHECK").checked = true
        document.getElementById("THM2").selectedIndex = 3
        document.getElementById("HMK1CHECK").checked = true
        document.getElementById("HMK1").selectedIndex = 11
        document.getElementById("HMK2CHECK").checked = true
        document.getElementById("HMK2").selectedIndex = 11
        document.getElementById("HMW1CHECK").checked = true
        document.getElementById("HMW1").selectedIndex = 9
        document.getElementById("HMW2CHECK").checked = true
        document.getElementById("HMW2").selectedIndex = 9
        document.getElementById("LMW1CHECK").checked = true
        document.getElementById("LMW1").selectedIndex = 9
        document.getElementById("LMW2CHECK").checked = true
        document.getElementById("LMW2").selectedIndex = 9
        document.getElementById("LMR1CHECK").checked = true
        document.getElementById("LMR1").selectedIndex = 7
        document.getElementById("LMR2CHECK").checked = true
        document.getElementById("LMR2").selectedIndex = 7
        document.getElementById("MR1CHECK").checked = true
        document.getElementById("MR1").selectedIndex = 10
        document.getElementById("MR2CHECK").checked = true
        document.getElementById("MR2").selectedIndex = 10
    }
    if (lvlreset && LVL >= 35 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WMM2CHECK").checked = true
        document.getElementById("WMM2").selectedIndex = 8
        document.getElementById("WMM3CHECK").checked = true
        document.getElementById("WMM3").selectedIndex = 8
        document.getElementById("HMO2CHECK").checked = true
        document.getElementById("HMO2").selectedIndex = 9
        document.getElementById("HMO3CHECK").checked = true
        document.getElementById("HMO3").selectedIndex = 9
        document.getElementById("LMO2CHECK").checked = true
        document.getElementById("LMO2").selectedIndex = 11
        document.getElementById("LMO3CHECK").checked = true
        document.getElementById("LMO3").selectedIndex = 11
        document.getElementById("LMH1CHECK").checked = true
        document.getElementById("LMH1").selectedIndex = 7
        document.getElementById("LMH2CHECK").checked = true
        document.getElementById("LMH2").selectedIndex = 7
        document.getElementById("RMN1CHECK").checked = true
        document.getElementById("RMN1").selectedIndex = 7
        document.getElementById("RMN2CHECK").checked = true
        document.getElementById("RMN2").selectedIndex = 7
        document.getElementById("RMH1CHECK").checked = true
        document.getElementById("RMH1").selectedIndex = 7
        document.getElementById("RMH2CHECK").checked = true
        document.getElementById("RMH2").selectedIndex = 7
        document.getElementById("RMO2CHECK").checked = true
        document.getElementById("RMO2").selectedIndex = 11
        document.getElementById("RMO3CHECK").checked = true
        document.getElementById("RMO3").selectedIndex = 11
        document.getElementById("AM2CHECK").checked = true
        document.getElementById("AM2").selectedIndex = 11
        document.getElementById("AM3CHECK").checked = true
        document.getElementById("AM3").selectedIndex = 11
    }
    if (lvlreset && LVL >= 36 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WSBM1CHECK").checked = true
        document.getElementById("WSBM1").selectedIndex = 7
        document.getElementById("WSBM2CHECK").checked = true
        document.getElementById("WSBM2").selectedIndex = 7
        document.getElementById("BLUNTM1CHECK").checked = true
        document.getElementById("BLUNTM1").selectedIndex = 7
        document.getElementById("BLUNTM2CHECK").checked = true
        document.getElementById("BLUNTM2").selectedIndex = 7
        document.getElementById("FISTM1CHECK").checked = true
        document.getElementById("FISTM1").selectedIndex = 7
        document.getElementById("FISTM2CHECK").checked = true
        document.getElementById("FISTM2").selectedIndex = 7
        document.getElementById("KSBM1CHECK").checked = true
        document.getElementById("KSBM1").selectedIndex = 7
        document.getElementById("KSBM2CHECK").checked = true
        document.getElementById("KSBM2").selectedIndex = 7
        document.getElementById("DAGGERM1CHECK").checked = true
        document.getElementById("DAGGERM1").selectedIndex = 7
        document.getElementById("DAGGERM2CHECK").checked = true
        document.getElementById("DAGGERM2").selectedIndex = 7
        document.getElementById("POLEM1CHECK").checked = true
        document.getElementById("POLEM1").selectedIndex = 7
        document.getElementById("POLEM2CHECK").checked = true
        document.getElementById("POLEM2").selectedIndex = 7
        document.getElementById("BOWM1CHECK").checked = true
        document.getElementById("BOWM1").selectedIndex = 14
        document.getElementById("BOWM2CHECK").checked = true
        document.getElementById("BOWM2").selectedIndex = 14
        document.getElementById("DUALMCHECK").checked = false
        document.getElementById("THM1CHECK").checked = true
        document.getElementById("THM1").selectedIndex = 4
        document.getElementById("THM2CHECK").checked = true
        document.getElementById("THM2").selectedIndex = 4
        document.getElementById("HMK1CHECK").checked = true
        document.getElementById("HMK1").selectedIndex = 14
        document.getElementById("HMK2CHECK").checked = true
        document.getElementById("HMK2").selectedIndex = 14
        document.getElementById("HMW1CHECK").checked = true
        document.getElementById("HMW1").selectedIndex = 12
        document.getElementById("HMW2CHECK").checked = true
        document.getElementById("HMW2").selectedIndex = 12
        document.getElementById("LMW1CHECK").checked = true
        document.getElementById("LMW1").selectedIndex = 12
        document.getElementById("LMW2CHECK").checked = true
        document.getElementById("LMW2").selectedIndex = 12
        document.getElementById("LMR1CHECK").checked = true
        document.getElementById("LMR1").selectedIndex = 9
        document.getElementById("LMR2CHECK").checked = true
        document.getElementById("LMR2").selectedIndex = 9
        document.getElementById("MR1CHECK").checked = true
        document.getElementById("MR1").selectedIndex = 13
        document.getElementById("MR2CHECK").checked = true
        document.getElementById("MR2").selectedIndex = 13
        document.getElementById("BOOSTHP1CHECK").checked = true
        document.getElementById("BOOSTHP1").selectedIndex = 2
        document.getElementById("BOOSTHP3CHECK").checked = true
        document.getElementById("BOOSTHP3").selectedIndex = 2
        document.getElementById("BOOSTASPD1CHECK").checked = true
        document.getElementById("BOOSTASPD1").selectedIndex = 0
        document.getElementById("BOOSTASPD2CHECK").checked = true
        document.getElementById("BOOSTASPD2").selectedIndex = 0
    }
    if (lvlreset && LVL >= 40 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WMM3CHECK").checked = true
        document.getElementById("WMM3").selectedIndex = 11
        document.getElementById("WSBM2CHECK").checked = true
        document.getElementById("WSBM2").selectedIndex = 10
        document.getElementById("BLUNTM2CHECK").checked = true
        document.getElementById("BLUNTM2").selectedIndex = 10
        document.getElementById("FISTM2CHECK").checked = true
        document.getElementById("FISTM2").selectedIndex = 10
        document.getElementById("KSBM2CHECK").checked = true
        document.getElementById("KSBM2").selectedIndex = 10
        document.getElementById("DAGGERM2CHECK").checked = true
        document.getElementById("DAGGERM2").selectedIndex = 10
        document.getElementById("POLEM2CHECK").checked = true
        document.getElementById("POLEM2").selectedIndex = 10
        document.getElementById("BOWM2CHECK").checked = true
        document.getElementById("BOWM2").selectedIndex = 17
        document.getElementById("DUALMCHECK").checked = true
        document.getElementById("DUALM").selectedIndex = 2
        document.getElementById("THM2CHECK").checked = true
        document.getElementById("THM2").selectedIndex = 5
        document.getElementById("HMK2CHECK").checked = true
        document.getElementById("HMK2").selectedIndex = 17
        document.getElementById("HMW2CHECK").checked = true
        document.getElementById("HMW2").selectedIndex = 15
        document.getElementById("HMO3CHECK").checked = true
        document.getElementById("HMO3").selectedIndex = 12
        document.getElementById("HMPCHECK").checked = true
        document.getElementById("HMP").selectedIndex = 2
        document.getElementById("LMW2CHECK").checked = true
        document.getElementById("LMW2").selectedIndex = 15
        document.getElementById("LMR2CHECK").checked = true
        document.getElementById("LMR2").selectedIndex = 12
        document.getElementById("LMO3CHECK").checked = true
        document.getElementById("LMO3").selectedIndex = 14
        document.getElementById("LMH2CHECK").checked = true
        document.getElementById("LMH2").selectedIndex = 10
        document.getElementById("LMSCHECK").checked = true
        document.getElementById("LMS").selectedIndex = 2
        document.getElementById("RMN2CHECK").checked = true
        document.getElementById("RMN2").selectedIndex = 10
        document.getElementById("RMH2CHECK").checked = true
        document.getElementById("RMH2").selectedIndex = 10
        document.getElementById("RMO3CHECK").checked = true
        document.getElementById("RMO3").selectedIndex = 14
        document.getElementById("MR2CHECK").checked = true
        document.getElementById("MR2").selectedIndex = 16
        document.getElementById("AM3CHECK").checked = true
        document.getElementById("AM3").selectedIndex = 14
        document.getElementById("BOOSTHP2CHECK").checked = true
        document.getElementById("BOOSTHP2").selectedIndex = 0
        document.getElementById("BOOSTMP2CHECK").checked = true
        document.getElementById("BOOSTMP2").selectedIndex = 2
        document.getElementById("AGILEMOVEMENT2CHECK").checked = true
        document.getElementById("AGILEMOVEMENT2").selectedIndex = 1
        document.getElementById("CRITICALCHANCE2CHECK").checked = true
        document.getElementById("CRITICALCHANCE2").selectedIndex = 1
        document.getElementById("FASTCAST2CHECK").checked = true
        document.getElementById("FASTCAST2").selectedIndex = 1
    }
    if (lvlreset && LVL >= 43 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WSBM2CHECK").checked = true
        document.getElementById("WSBM2").selectedIndex = 13
        document.getElementById("BLUNTM2CHECK").checked = true
        document.getElementById("BLUNTM2").selectedIndex = 13
        document.getElementById("FISTM2CHECK").checked = true
        document.getElementById("FISTM2").selectedIndex = 13
        document.getElementById("KSBM2CHECK").checked = true
        document.getElementById("KSBM2").selectedIndex = 13
        document.getElementById("DAGGERM2CHECK").checked = true
        document.getElementById("DAGGERM2").selectedIndex = 13
        document.getElementById("POLEM2CHECK").checked = true
        document.getElementById("POLEM2").selectedIndex = 13
        document.getElementById("BOWM2CHECK").checked = true
        document.getElementById("BOWM2").selectedIndex = 20
        document.getElementById("DUALMCHECK").checked = true
        document.getElementById("DUALM").selectedIndex = 5
        document.getElementById("THM2CHECK").checked = true
        document.getElementById("THM2").selectedIndex = 6
        document.getElementById("HMK2CHECK").checked = true
        document.getElementById("HMK2").selectedIndex = 20
        document.getElementById("HMW2CHECK").checked = true
        document.getElementById("HMW2").selectedIndex = 18
        document.getElementById("LMW2CHECK").checked = true
        document.getElementById("LMW2").selectedIndex = 18
        document.getElementById("LMR2CHECK").checked = true
        document.getElementById("LMR2").selectedIndex = 15
        document.getElementById("MR2CHECK").checked = true
        document.getElementById("MR2").selectedIndex = 19
        document.getElementById("BOOSTHP3CHECK").checked = true
        document.getElementById("BOOSTHP3").selectedIndex = 3
        document.getElementById("QUICKSTEP2CHECK").checked = true
        document.getElementById("QUICKSTEP2").selectedIndex = 1
        document.getElementById("FINALFRENZYCHECK").checked = true
        document.getElementById("FINALFRENZY").selectedIndex = 0
    }
    if (lvlreset && LVL >= 44 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WMM3CHECK").checked = true
        document.getElementById("WMM3").selectedIndex = 14
        document.getElementById("HMO3CHECK").checked = true
        document.getElementById("HMO3").selectedIndex = 15
        document.getElementById("HMPCHECK").checked = true
        document.getElementById("HMP").selectedIndex = 5
        document.getElementById("LMO3CHECK").checked = true
        document.getElementById("LMO3").selectedIndex = 17
        document.getElementById("LMH2CHECK").checked = true
        document.getElementById("LMH2").selectedIndex = 13
        document.getElementById("LMSCHECK").checked = true
        document.getElementById("LMS").selectedIndex = 5
        document.getElementById("RMN2CHECK").checked = true
        document.getElementById("RMN2").selectedIndex = 13
        document.getElementById("RMH2CHECK").checked = true
        document.getElementById("RMH2").selectedIndex = 13
        document.getElementById("RMO3CHECK").checked = true
        document.getElementById("RMO3").selectedIndex = 17
        document.getElementById("AM3CHECK").checked = true
        document.getElementById("AM3").selectedIndex = 17
        document.getElementById("BOOSTHP2CHECK").checked = true
        document.getElementById("BOOSTHP2").selectedIndex = 1
    }
    if (lvlreset && LVL >= 46 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WSBM2CHECK").checked = true
        document.getElementById("WSBM2").selectedIndex = 16
        document.getElementById("BLUNTM2CHECK").checked = true
        document.getElementById("BLUNTM2").selectedIndex = 16
        document.getElementById("FISTM2CHECK").checked = true
        document.getElementById("FISTM2").selectedIndex = 16
        document.getElementById("KSBM2CHECK").checked = true
        document.getElementById("KSBM2").selectedIndex = 16
        document.getElementById("DAGGERM2CHECK").checked = true
        document.getElementById("DAGGERM2").selectedIndex = 16
        document.getElementById("POLEM2CHECK").checked = true
        document.getElementById("POLEM2").selectedIndex = 16
        document.getElementById("BOWM2CHECK").checked = true
        document.getElementById("BOWM2").selectedIndex = 23
        document.getElementById("DUALMCHECK").checked = true
        document.getElementById("DUALM").selectedIndex = 8
        document.getElementById("THM2CHECK").checked = true
        document.getElementById("THM2").selectedIndex = 7
        document.getElementById("HMK2CHECK").checked = true
        document.getElementById("HMK2").selectedIndex = 23
        document.getElementById("HMW2CHECK").checked = true
        document.getElementById("HMW2").selectedIndex = 21
        document.getElementById("LMW2CHECK").checked = true
        document.getElementById("LMW2").selectedIndex = 21
        document.getElementById("LMR2CHECK").checked = true
        document.getElementById("LMR2").selectedIndex = 18
        document.getElementById("MR2CHECK").checked = true
        document.getElementById("MR2").selectedIndex = 22
        document.getElementById("BOOSTEVASION2CHECK").checked = true
        document.getElementById("BOOSTEVASION2").selectedIndex = 1
        document.getElementById("FINALFRENZYCHECK").checked = true
        document.getElementById("FINALFRENZY").selectedIndex = 1
        document.getElementById("BOOSTASPD2CHECK").checked = true
        document.getElementById("BOOSTASPD2").selectedIndex = 1
    }
    if (lvlreset && LVL >= 48 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WMM3CHECK").checked = true
        document.getElementById("WMM3").selectedIndex = 17
        document.getElementById("HMO3CHECK").checked = true
        document.getElementById("HMO3").selectedIndex = 18
        document.getElementById("HMPCHECK").checked = true
        document.getElementById("HMP").selectedIndex = 8
        document.getElementById("LMO3CHECK").checked = true
        document.getElementById("LMO3").selectedIndex = 20
        document.getElementById("LMH2CHECK").checked = true
        document.getElementById("LMH2").selectedIndex = 16
        document.getElementById("LMSCHECK").checked = true
        document.getElementById("LMS").selectedIndex = 8
        document.getElementById("RMN2CHECK").checked = true
        document.getElementById("RMN2").selectedIndex = 16
        document.getElementById("RMH2CHECK").checked = true
        document.getElementById("RMH2").selectedIndex = 16
        document.getElementById("RMO3CHECK").checked = true
        document.getElementById("RMO3").selectedIndex = 20
        document.getElementById("AM3CHECK").checked = true
        document.getElementById("AM3").selectedIndex = 20
        document.getElementById("BOOSTHP2CHECK").checked = true
        document.getElementById("BOOSTHP2").selectedIndex = 2
        document.getElementById("BOOSTMP2CHECK").checked = true
        document.getElementById("BOOSTMP2").selectedIndex = 3
    }
    if (lvlreset && LVL >= 49 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WSBM2CHECK").checked = true
        document.getElementById("WSBM2").selectedIndex = 19
        document.getElementById("BLUNTM2CHECK").checked = true
        document.getElementById("BLUNTM2").selectedIndex = 19
        document.getElementById("FISTM2CHECK").checked = true
        document.getElementById("FISTM2").selectedIndex = 19
        document.getElementById("KSBM2CHECK").checked = true
        document.getElementById("KSBM2").selectedIndex = 19
        document.getElementById("DAGGERM2CHECK").checked = true
        document.getElementById("DAGGERM2").selectedIndex = 19
        document.getElementById("POLEM2CHECK").checked = true
        document.getElementById("POLEM2").selectedIndex = 19
        document.getElementById("BOWM2CHECK").checked = true
        document.getElementById("BOWM2").selectedIndex = 26
        document.getElementById("DUALMCHECK").checked = true
        document.getElementById("DUALM").selectedIndex = 11
        document.getElementById("THM2CHECK").checked = true
        document.getElementById("THM2").selectedIndex = 8
        document.getElementById("HMK2CHECK").checked = true
        document.getElementById("HMK2").selectedIndex = 26
        document.getElementById("HMW2CHECK").checked = true
        document.getElementById("HMW2").selectedIndex = 24
        document.getElementById("LMW2CHECK").checked = true
        document.getElementById("LMW2").selectedIndex = 24
        document.getElementById("LMR2CHECK").checked = true
        document.getElementById("LMR2").selectedIndex = 21
        document.getElementById("MR2CHECK").checked = true
        document.getElementById("MR2").selectedIndex = 25
        document.getElementById("BOOSTHP3CHECK").checked = true
        document.getElementById("BOOSTHP3").selectedIndex = 4
        document.getElementById("FINALFRENZYCHECK").checked = true
        document.getElementById("FINALFRENZY").selectedIndex = 2
        document.getElementById("CRITICALCHANCE2CHECK").checked = true
        document.getElementById("CRITICALCHANCE2").selectedIndex = 2
    }
    if (lvlreset && LVL >= 52 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WMM3CHECK").checked = true
        document.getElementById("WMM3").selectedIndex = 20
        document.getElementById("WSBM2CHECK").checked = true
        document.getElementById("WSBM2").selectedIndex = 22
        document.getElementById("BLUNTM2CHECK").checked = true
        document.getElementById("BLUNTM2").selectedIndex = 22
        document.getElementById("FISTM2CHECK").checked = true
        document.getElementById("FISTM2").selectedIndex = 22
        document.getElementById("KSBM2CHECK").checked = true
        document.getElementById("KSBM2").selectedIndex = 22
        document.getElementById("DAGGERM2CHECK").checked = true
        document.getElementById("DAGGERM2").selectedIndex = 22
        document.getElementById("POLEM2CHECK").checked = true
        document.getElementById("POLEM2").selectedIndex = 22
        document.getElementById("BOWM2CHECK").checked = true
        document.getElementById("BOWM2").selectedIndex = 29
        document.getElementById("DUALMCHECK").checked = true
        document.getElementById("DUALM").selectedIndex = 14
        document.getElementById("THM2CHECK").checked = true
        document.getElementById("THM2").selectedIndex = 9
        document.getElementById("HMK2CHECK").checked = true
        document.getElementById("HMK2").selectedIndex = 29
        document.getElementById("HMW2CHECK").checked = true
        document.getElementById("HMW2").selectedIndex = 27
        document.getElementById("HMO3CHECK").checked = true
        document.getElementById("HMO3").selectedIndex = 21
        document.getElementById("HMPCHECK").checked = true
        document.getElementById("HMP").selectedIndex = 11
        document.getElementById("LMW2CHECK").checked = true
        document.getElementById("LMW2").selectedIndex = 27
        document.getElementById("LMR2CHECK").checked = true
        document.getElementById("LMR2").selectedIndex = 24
        document.getElementById("LMO3CHECK").checked = true
        document.getElementById("LMO3").selectedIndex = 23
        document.getElementById("LMH2CHECK").checked = true
        document.getElementById("LMH2").selectedIndex = 19
        document.getElementById("LMSCHECK").checked = true
        document.getElementById("LMS").selectedIndex = 11
        document.getElementById("RMN2CHECK").checked = true
        document.getElementById("RMN2").selectedIndex = 19
        document.getElementById("RMH2CHECK").checked = true
        document.getElementById("RMH2").selectedIndex = 19
        document.getElementById("RMO3CHECK").checked = true
        document.getElementById("RMO3").selectedIndex = 23
        document.getElementById("MR2CHECK").checked = true
        document.getElementById("MR2").selectedIndex = 28
        document.getElementById("AM3CHECK").checked = true
        document.getElementById("AM3").selectedIndex = 23
        document.getElementById("BOOSTHP2CHECK").checked = true
        document.getElementById("BOOSTHP2").selectedIndex = 3
        document.getElementById("FINALFORTRESSCHECK").checked = true
        document.getElementById("FINALFORTRESS").selectedIndex = 0
        document.getElementById("FINALFRENZYCHECK").checked = true
        document.getElementById("FINALFRENZY").selectedIndex = 3
    }
    if (lvlreset && LVL >= 55 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WSBM2CHECK").checked = true
        document.getElementById("WSBM2").selectedIndex = 25
        document.getElementById("BLUNTM2CHECK").checked = true
        document.getElementById("BLUNTM2").selectedIndex = 25
        document.getElementById("FISTM2CHECK").checked = true
        document.getElementById("FISTM2").selectedIndex = 25
        document.getElementById("KSBM2CHECK").checked = true
        document.getElementById("KSBM2").selectedIndex = 25
        document.getElementById("DAGGERM2CHECK").checked = true
        document.getElementById("DAGGERM2").selectedIndex = 25
        document.getElementById("POLEM2CHECK").checked = true
        document.getElementById("POLEM2").selectedIndex = 25
        document.getElementById("BOWM2CHECK").checked = true
        document.getElementById("BOWM2").selectedIndex = 32
        document.getElementById("DUALMCHECK").checked = true
        document.getElementById("DUALM").selectedIndex = 17
        document.getElementById("THM2CHECK").checked = true
        document.getElementById("THM2").selectedIndex = 10
        document.getElementById("HMK2CHECK").checked = true
        document.getElementById("HMK2").selectedIndex = 32
        document.getElementById("HMW2CHECK").checked = true
        document.getElementById("HMW2").selectedIndex = 30
        document.getElementById("LMW2CHECK").checked = true
        document.getElementById("LMW2").selectedIndex = 30
        document.getElementById("LMR2CHECK").checked = true
        document.getElementById("LMR2").selectedIndex = 27
        document.getElementById("MR2CHECK").checked = true
        document.getElementById("MR2").selectedIndex = 31
        document.getElementById("BOOSTHP3CHECK").checked = true
        document.getElementById("BOOSTHP3").selectedIndex = 5
        document.getElementById("FINALFORTRESSCHECK").checked = true
        document.getElementById("FINALFORTRESS").selectedIndex = 1
        document.getElementById("FINALFRENZYCHECK").checked = true
        document.getElementById("FINALFRENZY").selectedIndex = 4
    }
    if (lvlreset && LVL >= 56 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WMM3CHECK").checked = true
        document.getElementById("WMM3").selectedIndex = 23
        document.getElementById("HMO3CHECK").checked = true
        document.getElementById("HMO3").selectedIndex = 24
        document.getElementById("HMPCHECK").checked = true
        document.getElementById("HMP").selectedIndex = 14
        document.getElementById("LMO3CHECK").checked = true
        document.getElementById("LMO3").selectedIndex = 26
        document.getElementById("LMH2CHECK").checked = true
        document.getElementById("LMH2").selectedIndex = 22
        document.getElementById("LMSCHECK").checked = true
        document.getElementById("LMS").selectedIndex = 14
        document.getElementById("RMN2CHECK").checked = true
        document.getElementById("RMN2").selectedIndex = 22
        document.getElementById("RMH2CHECK").checked = true
        document.getElementById("RMH2").selectedIndex = 22
        document.getElementById("RMO3CHECK").checked = true
        document.getElementById("RMO3").selectedIndex = 26
        document.getElementById("AM3CHECK").checked = true
        document.getElementById("AM3").selectedIndex = 26
        document.getElementById("BOOSTHP2CHECK").checked = true
        document.getElementById("BOOSTHP2").selectedIndex = 4
        document.getElementById("BOOSTMP2CHECK").checked = true
        document.getElementById("BOOSTMP2").selectedIndex = 4
        document.getElementById("FASTCAST2CHECK").checked = true
        document.getElementById("FASTCAST2").selectedIndex = 2
    }
    if (lvlreset && LVL >= 58 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WMM3CHECK").checked = true
        document.getElementById("WMM3").selectedIndex = 25
        document.getElementById("WSBM2CHECK").checked = true
        document.getElementById("WSBM2").selectedIndex = 28
        document.getElementById("BLUNTM2CHECK").checked = true
        document.getElementById("BLUNTM2").selectedIndex = 28
        document.getElementById("FISTM2CHECK").checked = true
        document.getElementById("FISTM2").selectedIndex = 28
        document.getElementById("KSBM2CHECK").checked = true
        document.getElementById("KSBM2").selectedIndex = 28
        document.getElementById("DAGGERM2CHECK").checked = true
        document.getElementById("DAGGERM2").selectedIndex = 28
        document.getElementById("POLEM2CHECK").checked = true
        document.getElementById("POLEM2").selectedIndex = 28
        document.getElementById("BOWM2CHECK").checked = true
        document.getElementById("BOWM2").selectedIndex = 35
        document.getElementById("DUALMCHECK").checked = true
        document.getElementById("DUALM").selectedIndex = 20
        document.getElementById("THM2CHECK").checked = true
        document.getElementById("THM2").selectedIndex = 11
        document.getElementById("HMK2CHECK").checked = true
        document.getElementById("HMK2").selectedIndex = 35
        document.getElementById("HMW2CHECK").checked = true
        document.getElementById("HMW2").selectedIndex = 33
        document.getElementById("HMO3CHECK").checked = true
        document.getElementById("HMO3").selectedIndex = 26
        document.getElementById("HMPCHECK").checked = true
        document.getElementById("HMP").selectedIndex = 16
        document.getElementById("LMW2CHECK").checked = true
        document.getElementById("LMW2").selectedIndex = 33
        document.getElementById("LMR2CHECK").checked = true
        document.getElementById("LMR2").selectedIndex = 30
        document.getElementById("LMO3CHECK").checked = true
        document.getElementById("LMO3").selectedIndex = 28
        document.getElementById("LMH2CHECK").checked = true
        document.getElementById("LMH2").selectedIndex = 24
        document.getElementById("LMSCHECK").checked = true
        document.getElementById("LMS").selectedIndex = 16
        document.getElementById("RMN2CHECK").checked = true
        document.getElementById("RMN2").selectedIndex = 24
        document.getElementById("RMH2CHECK").checked = true
        document.getElementById("RMH2").selectedIndex = 24
        document.getElementById("RMO3CHECK").checked = true
        document.getElementById("RMO3").selectedIndex = 28
        document.getElementById("MR2CHECK").checked = true
        document.getElementById("MR2").selectedIndex = 34
        document.getElementById("AM3CHECK").checked = true
        document.getElementById("AM3").selectedIndex = 28
        document.getElementById("FINALFORTRESSCHECK").checked = true
        document.getElementById("FINALFORTRESS").selectedIndex = 2
        document.getElementById("BOOSTEVASION2CHECK").checked = true
        document.getElementById("BOOSTEVASION2").selectedIndex = 2
        document.getElementById("FINALFRENZYCHECK").checked = true
        document.getElementById("FINALFRENZY").selectedIndex = 5
        document.getElementById("BOOSTASPD2CHECK").checked = true
        document.getElementById("BOOSTASPD2").selectedIndex = 2
    }
    if (lvlreset && LVL >= 60 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WMM3CHECK").checked = true
        document.getElementById("WMM3").selectedIndex = 27
        document.getElementById("WSBM2CHECK").checked = true
        document.getElementById("WSBM2").selectedIndex = 30
        document.getElementById("BLUNTM2CHECK").checked = true
        document.getElementById("BLUNTM2").selectedIndex = 30
        document.getElementById("FISTM2CHECK").checked = true
        document.getElementById("FISTM2").selectedIndex = 30
        document.getElementById("KSBM2CHECK").checked = true
        document.getElementById("KSBM2").selectedIndex = 30
        document.getElementById("DAGGERM2CHECK").checked = true
        document.getElementById("DAGGERM2").selectedIndex = 30
        document.getElementById("POLEM2CHECK").checked = true
        document.getElementById("POLEM2").selectedIndex = 30
        document.getElementById("BOWM2CHECK").checked = true
        document.getElementById("BOWM2").selectedIndex = 37
        document.getElementById("DUALMCHECK").checked = true
        document.getElementById("DUALM").selectedIndex = 22
        document.getElementById("THM2CHECK").checked = true
        document.getElementById("THM2").selectedIndex = 12
        document.getElementById("HMK2CHECK").checked = true
        document.getElementById("HMK2").selectedIndex = 37
        document.getElementById("HMW2CHECK").checked = true
        document.getElementById("HMW2").selectedIndex = 35
        document.getElementById("HMO3CHECK").checked = true
        document.getElementById("HMO3").selectedIndex = 28
        document.getElementById("HMPCHECK").checked = true
        document.getElementById("HMP").selectedIndex = 18
        document.getElementById("LMW2CHECK").checked = true
        document.getElementById("LMW2").selectedIndex = 35
        document.getElementById("LMR2CHECK").checked = true
        document.getElementById("LMR2").selectedIndex = 32
        document.getElementById("LMO3CHECK").checked = true
        document.getElementById("LMO3").selectedIndex = 30
        document.getElementById("LMH2CHECK").checked = true
        document.getElementById("LMH2").selectedIndex = 26
        document.getElementById("LMSCHECK").checked = true
        document.getElementById("LMS").selectedIndex = 18
        document.getElementById("RMN2CHECK").checked = true
        document.getElementById("RMN2").selectedIndex = 26
        document.getElementById("RMH2CHECK").checked = true
        document.getElementById("RMH2").selectedIndex = 26
        document.getElementById("RMO3CHECK").checked = true
        document.getElementById("RMO3").selectedIndex = 30
        document.getElementById("MR2CHECK").checked = true
        document.getElementById("MR2").selectedIndex = 36
        document.getElementById("AM3CHECK").checked = true
        document.getElementById("AM3").selectedIndex = 30
        document.getElementById("FINALFORTRESSCHECK").checked = true
        document.getElementById("FINALFORTRESS").selectedIndex = 3
        document.getElementById("BOOSTMP2CHECK").checked = true
        document.getElementById("BOOSTMP2").selectedIndex = 5
        document.getElementById("FINALFRENZYCHECK").checked = true
        document.getElementById("FINALFRENZY").selectedIndex = 6
    }
    if (lvlreset && LVL >= 62 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WMM3CHECK").checked = true
        document.getElementById("WMM3").selectedIndex = 29
        document.getElementById("WSBM2CHECK").checked = true
        document.getElementById("WSBM2").selectedIndex = 32
        document.getElementById("BLUNTM2CHECK").checked = true
        document.getElementById("BLUNTM2").selectedIndex = 32
        document.getElementById("FISTM2CHECK").checked = true
        document.getElementById("FISTM2").selectedIndex = 32
        document.getElementById("KSBM2CHECK").checked = true
        document.getElementById("KSBM2").selectedIndex = 32
        document.getElementById("DAGGERM2CHECK").checked = true
        document.getElementById("DAGGERM2").selectedIndex = 32
        document.getElementById("POLEM2CHECK").checked = true
        document.getElementById("POLEM2").selectedIndex = 32
        document.getElementById("BOWM2CHECK").checked = true
        document.getElementById("BOWM2").selectedIndex = 39
        document.getElementById("DUALMCHECK").checked = true
        document.getElementById("DUALM").selectedIndex = 24
        document.getElementById("THM2CHECK").checked = true
        document.getElementById("THM2").selectedIndex = 13
        document.getElementById("HMK2CHECK").checked = true
        document.getElementById("HMK2").selectedIndex = 39
        document.getElementById("HMW2CHECK").checked = true
        document.getElementById("HMW2").selectedIndex = 37
        document.getElementById("HMO3CHECK").checked = true
        document.getElementById("HMO3").selectedIndex = 30
        document.getElementById("HMPCHECK").checked = true
        document.getElementById("HMP").selectedIndex = 20
        document.getElementById("LMW2CHECK").checked = true
        document.getElementById("LMW2").selectedIndex = 37
        document.getElementById("LMR2CHECK").checked = true
        document.getElementById("LMR2").selectedIndex = 34
        document.getElementById("LMO3CHECK").checked = true
        document.getElementById("LMO3").selectedIndex = 32
        document.getElementById("LMH2CHECK").checked = true
        document.getElementById("LMH2").selectedIndex = 28
        document.getElementById("LMSCHECK").checked = true
        document.getElementById("LMS").selectedIndex = 20
        document.getElementById("RMN2CHECK").checked = true
        document.getElementById("RMN2").selectedIndex = 28
        document.getElementById("RMH2CHECK").checked = true
        document.getElementById("RMH2").selectedIndex = 28
        document.getElementById("RMO3CHECK").checked = true
        document.getElementById("RMO3").selectedIndex = 32
        document.getElementById("MR2CHECK").checked = true
        document.getElementById("MR2").selectedIndex = 38
        document.getElementById("AM3CHECK").checked = true
        document.getElementById("AM3").selectedIndex = 32
        document.getElementById("BOOSTHP3CHECK").checked = true
        document.getElementById("BOOSTHP3").selectedIndex = 6
        document.getElementById("BOOSTHP2CHECK").checked = true
        document.getElementById("BOOSTHP2").selectedIndex = 5
        document.getElementById("FINALFORTRESSCHECK").checked = true
        document.getElementById("FINALFORTRESS").selectedIndex = 4
        document.getElementById("FINALFRENZYCHECK").checked = true
        document.getElementById("FINALFRENZY").selectedIndex = 7
    }
    if (lvlreset && LVL >= 64 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WMM3CHECK").checked = true
        document.getElementById("WMM3").selectedIndex = 31
        document.getElementById("WSBM2CHECK").checked = true
        document.getElementById("WSBM2").selectedIndex = 34
        document.getElementById("BLUNTM2CHECK").checked = true
        document.getElementById("BLUNTM2").selectedIndex = 34
        document.getElementById("FISTM2CHECK").checked = true
        document.getElementById("FISTM2").selectedIndex = 34
        document.getElementById("KSBM2CHECK").checked = true
        document.getElementById("KSBM2").selectedIndex = 34
        document.getElementById("DAGGERM2CHECK").checked = true
        document.getElementById("DAGGERM2").selectedIndex = 34
        document.getElementById("POLEM2CHECK").checked = true
        document.getElementById("POLEM2").selectedIndex = 34
        document.getElementById("BOWM2CHECK").checked = true
        document.getElementById("BOWM2").selectedIndex = 41
        document.getElementById("DUALMCHECK").checked = true
        document.getElementById("DUALM").selectedIndex = 26
        document.getElementById("THM2CHECK").checked = true
        document.getElementById("THM2").selectedIndex = 14
        document.getElementById("HMK2CHECK").checked = true
        document.getElementById("HMK2").selectedIndex = 41
        document.getElementById("HMW2CHECK").checked = true
        document.getElementById("HMW2").selectedIndex = 39
        document.getElementById("HMO3CHECK").checked = true
        document.getElementById("HMO3").selectedIndex = 32
        document.getElementById("HMPCHECK").checked = true
        document.getElementById("HMP").selectedIndex = 22
        document.getElementById("LMW2CHECK").checked = true
        document.getElementById("LMW2").selectedIndex = 39
        document.getElementById("LMR2CHECK").checked = true
        document.getElementById("LMR2").selectedIndex = 36
        document.getElementById("LMO3CHECK").checked = true
        document.getElementById("LMO3").selectedIndex = 34
        document.getElementById("LMH2CHECK").checked = true
        document.getElementById("LMH2").selectedIndex = 30
        document.getElementById("LMSCHECK").checked = true
        document.getElementById("LMS").selectedIndex = 22
        document.getElementById("RMN2CHECK").checked = true
        document.getElementById("RMN2").selectedIndex = 30
        document.getElementById("RMH2CHECK").checked = true
        document.getElementById("RMH2").selectedIndex = 30
        document.getElementById("RMO3CHECK").checked = true
        document.getElementById("RMO3").selectedIndex = 34
        document.getElementById("MR2CHECK").checked = true
        document.getElementById("MR2").selectedIndex = 40
        document.getElementById("AM3CHECK").checked = true
        document.getElementById("AM3").selectedIndex = 34
        document.getElementById("FINALFORTRESSCHECK").checked = true
        document.getElementById("FINALFORTRESS").selectedIndex = 5
        document.getElementById("FINALFRENZYCHECK").checked = true
        document.getElementById("FINALFRENZY").selectedIndex = 8
    }
    if (lvlreset && LVL >= 66 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WMM3CHECK").checked = true
        document.getElementById("WMM3").selectedIndex = 33
        document.getElementById("WSBM2CHECK").checked = true
        document.getElementById("WSBM2").selectedIndex = 36
        document.getElementById("BLUNTM2CHECK").checked = true
        document.getElementById("BLUNTM2").selectedIndex = 36
        document.getElementById("FISTM2CHECK").checked = true
        document.getElementById("FISTM2").selectedIndex = 36
        document.getElementById("KSBM2CHECK").checked = true
        document.getElementById("KSBM2").selectedIndex = 36
        document.getElementById("DAGGERM2CHECK").checked = true
        document.getElementById("DAGGERM2").selectedIndex = 36
        document.getElementById("POLEM2CHECK").checked = true
        document.getElementById("POLEM2").selectedIndex = 36
        document.getElementById("BOWM2CHECK").checked = true
        document.getElementById("BOWM2").selectedIndex = 43
        document.getElementById("DUALMCHECK").checked = true
        document.getElementById("DUALM").selectedIndex = 28
        document.getElementById("THM2CHECK").checked = true
        document.getElementById("THM2").selectedIndex = 15
        document.getElementById("HMK2CHECK").checked = true
        document.getElementById("HMK2").selectedIndex = 43
        document.getElementById("HMW2CHECK").checked = true
        document.getElementById("HMW2").selectedIndex = 41
        document.getElementById("HMO3CHECK").checked = true
        document.getElementById("HMO3").selectedIndex = 34
        document.getElementById("HMPCHECK").checked = true
        document.getElementById("HMP").selectedIndex = 24
        document.getElementById("LMW2CHECK").checked = true
        document.getElementById("LMW2").selectedIndex = 41
        document.getElementById("LMR2CHECK").checked = true
        document.getElementById("LMR2").selectedIndex = 38
        document.getElementById("LMO3CHECK").checked = true
        document.getElementById("LMO3").selectedIndex = 36
        document.getElementById("LMH2CHECK").checked = true
        document.getElementById("LMH2").selectedIndex = 32
        document.getElementById("LMSCHECK").checked = true
        document.getElementById("LMS").selectedIndex = 24
        document.getElementById("RMN2CHECK").checked = true
        document.getElementById("RMN2").selectedIndex = 32
        document.getElementById("RMH2CHECK").checked = true
        document.getElementById("RMH2").selectedIndex = 32
        document.getElementById("RMO3CHECK").checked = true
        document.getElementById("RMO3").selectedIndex = 36
        document.getElementById("MR2CHECK").checked = true
        document.getElementById("MR2").selectedIndex = 42
        document.getElementById("AM3CHECK").checked = true
        document.getElementById("AM3").selectedIndex = 36
        document.getElementById("BOOSTHP3CHECK").checked = true
        document.getElementById("BOOSTHP3").selectedIndex = 7
        document.getElementById("FINALFORTRESSCHECK").checked = true
        document.getElementById("FINALFORTRESS").selectedIndex = 6
        document.getElementById("BOOSTMP2CHECK").checked = true
        document.getElementById("BOOSTMP2").selectedIndex = 6
        document.getElementById("FINALFRENZYCHECK").checked = true
        document.getElementById("FINALFRENZY").selectedIndex = 9
    }
    if (lvlreset && LVL >= 68 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WMM3CHECK").checked = true
        document.getElementById("WMM3").selectedIndex = 35
        document.getElementById("WSBM2CHECK").checked = true
        document.getElementById("WSBM2").selectedIndex = 38
        document.getElementById("BLUNTM2CHECK").checked = true
        document.getElementById("BLUNTM2").selectedIndex = 38
        document.getElementById("FISTM2CHECK").checked = true
        document.getElementById("FISTM2").selectedIndex = 38
        document.getElementById("KSBM2CHECK").checked = true
        document.getElementById("KSBM2").selectedIndex = 38
        document.getElementById("DAGGERM2CHECK").checked = true
        document.getElementById("DAGGERM2").selectedIndex = 38
        document.getElementById("POLEM2CHECK").checked = true
        document.getElementById("POLEM2").selectedIndex = 38
        document.getElementById("BOWM2CHECK").checked = true
        document.getElementById("BOWM2").selectedIndex = 45
        document.getElementById("DUALMCHECK").checked = true
        document.getElementById("DUALM").selectedIndex = 30
        document.getElementById("THM2CHECK").checked = true
        document.getElementById("THM2").selectedIndex = 16
        document.getElementById("HMK2CHECK").checked = true
        document.getElementById("HMK2").selectedIndex = 45
        document.getElementById("HMW2CHECK").checked = true
        document.getElementById("HMW2").selectedIndex = 43
        document.getElementById("HMO3CHECK").checked = true
        document.getElementById("HMO3").selectedIndex = 36
        document.getElementById("HMPCHECK").checked = true
        document.getElementById("HMP").selectedIndex = 26
        document.getElementById("LMW2CHECK").checked = true
        document.getElementById("LMW2").selectedIndex = 43
        document.getElementById("LMR2CHECK").checked = true
        document.getElementById("LMR2").selectedIndex = 40
        document.getElementById("LMO3CHECK").checked = true
        document.getElementById("LMO3").selectedIndex = 38
        document.getElementById("LMH2CHECK").checked = true
        document.getElementById("LMH2").selectedIndex = 34
        document.getElementById("LMSCHECK").checked = true
        document.getElementById("LMS").selectedIndex = 26
        document.getElementById("RMN2CHECK").checked = true
        document.getElementById("RMN2").selectedIndex = 34
        document.getElementById("RMH2CHECK").checked = true
        document.getElementById("RMH2").selectedIndex = 34
        document.getElementById("RMO3CHECK").checked = true
        document.getElementById("RMO3").selectedIndex = 38
        document.getElementById("MR2CHECK").checked = true
        document.getElementById("MR2").selectedIndex = 44
        document.getElementById("AM3CHECK").checked = true
        document.getElementById("AM3").selectedIndex = 38
        document.getElementById("FINALFORTRESSCHECK").checked = true
        document.getElementById("FINALFORTRESS").selectedIndex = 7
        document.getElementById("FINALFRENZYCHECK").checked = true
        document.getElementById("FINALFRENZY").selectedIndex = 10
    }
    if (lvlreset && LVL >= 70 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WMM3CHECK").checked = true
        document.getElementById("WMM3").selectedIndex = 37
        document.getElementById("WSBM2CHECK").checked = true
        document.getElementById("WSBM2").selectedIndex = 40
        document.getElementById("BLUNTM2CHECK").checked = true
        document.getElementById("BLUNTM2").selectedIndex = 40
        document.getElementById("FISTM2CHECK").checked = true
        document.getElementById("FISTM2").selectedIndex = 40
        document.getElementById("KSBM2CHECK").checked = true
        document.getElementById("KSBM2").selectedIndex = 40
        document.getElementById("DAGGERM2CHECK").checked = true
        document.getElementById("DAGGERM2").selectedIndex = 40
        document.getElementById("POLEM2CHECK").checked = true
        document.getElementById("POLEM2").selectedIndex = 40
        document.getElementById("BOWM2CHECK").checked = true
        document.getElementById("BOWM2").selectedIndex = 47
        document.getElementById("DUALMCHECK").checked = true
        document.getElementById("DUALM").selectedIndex = 32
        document.getElementById("THM2CHECK").checked = true
        document.getElementById("THM2").selectedIndex = 17
        document.getElementById("HMK2CHECK").checked = true
        document.getElementById("HMK2").selectedIndex = 47
        document.getElementById("HMW2CHECK").checked = true
        document.getElementById("HMW2").selectedIndex = 45
        document.getElementById("HMO3CHECK").checked = true
        document.getElementById("HMO3").selectedIndex = 38
        document.getElementById("HMPCHECK").checked = true
        document.getElementById("HMP").selectedIndex = 28
        document.getElementById("LMW2CHECK").checked = true
        document.getElementById("LMW2").selectedIndex = 45
        document.getElementById("LMR2CHECK").checked = true
        document.getElementById("LMR2").selectedIndex = 42
        document.getElementById("LMO3CHECK").checked = true
        document.getElementById("LMO3").selectedIndex = 40
        document.getElementById("LMH2CHECK").checked = true
        document.getElementById("LMH2").selectedIndex = 36
        document.getElementById("LMSCHECK").checked = true
        document.getElementById("LMS").selectedIndex = 28
        document.getElementById("RMN2CHECK").checked = true
        document.getElementById("RMN2").selectedIndex = 36
        document.getElementById("RMH2CHECK").checked = true
        document.getElementById("RMH2").selectedIndex = 36
        document.getElementById("RMO3CHECK").checked = true
        document.getElementById("RMO3").selectedIndex = 40
        document.getElementById("MR2CHECK").checked = true
        document.getElementById("MR2").selectedIndex = 46
        document.getElementById("AM3CHECK").checked = true
        document.getElementById("AM3").selectedIndex = 40
        document.getElementById("BOOSTHP3CHECK").checked = true
        document.getElementById("BOOSTHP3").selectedIndex = 8
        document.getElementById("BOOSTHP2CHECK").checked = true
        document.getElementById("BOOSTHP2").selectedIndex = 6
        document.getElementById("FINALFORTRESSCHECK").checked = true
        document.getElementById("FINALFORTRESS").selectedIndex = 8
        document.getElementById("FINALFRENZYCHECK").checked = true
        document.getElementById("FINALFRENZY").selectedIndex = 11
    }
    if (lvlreset && LVL >= 72 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WMM3CHECK").checked = true
        document.getElementById("WMM3").selectedIndex = 39
        document.getElementById("WSBM2CHECK").checked = true
        document.getElementById("WSBM2").selectedIndex = 42
        document.getElementById("BLUNTM2CHECK").checked = true
        document.getElementById("BLUNTM2").selectedIndex = 42
        document.getElementById("FISTM2CHECK").checked = true
        document.getElementById("FISTM2").selectedIndex = 42
        document.getElementById("KSBM2CHECK").checked = true
        document.getElementById("KSBM2").selectedIndex = 42
        document.getElementById("DAGGERM2CHECK").checked = true
        document.getElementById("DAGGERM2").selectedIndex = 42
        document.getElementById("POLEM2CHECK").checked = true
        document.getElementById("POLEM2").selectedIndex = 42
        document.getElementById("BOWM2CHECK").checked = true
        document.getElementById("BOWM2").selectedIndex = 49
        document.getElementById("DUALMCHECK").checked = true
        document.getElementById("DUALM").selectedIndex = 34
        document.getElementById("THM2CHECK").checked = true
        document.getElementById("THM2").selectedIndex = 18
        document.getElementById("HMK2CHECK").checked = true
        document.getElementById("HMK2").selectedIndex = 49
        document.getElementById("HMW2CHECK").checked = true
        document.getElementById("HMW2").selectedIndex = 47
        document.getElementById("HMO3CHECK").checked = true
        document.getElementById("HMO3").selectedIndex = 40
        document.getElementById("HMPCHECK").checked = true
        document.getElementById("HMP").selectedIndex = 30
        document.getElementById("LMW2CHECK").checked = true
        document.getElementById("LMW2").selectedIndex = 47
        document.getElementById("LMR2CHECK").checked = true
        document.getElementById("LMR2").selectedIndex = 44
        document.getElementById("LMO3CHECK").checked = true
        document.getElementById("LMO3").selectedIndex = 42
        document.getElementById("LMH2CHECK").checked = true
        document.getElementById("LMH2").selectedIndex = 38
        document.getElementById("LMSCHECK").checked = true
        document.getElementById("LMS").selectedIndex = 30
        document.getElementById("RMN2CHECK").checked = true
        document.getElementById("RMN2").selectedIndex = 38
        document.getElementById("RMH2CHECK").checked = true
        document.getElementById("RMH2").selectedIndex = 38
        document.getElementById("RMO3CHECK").checked = true
        document.getElementById("RMO3").selectedIndex = 42
        document.getElementById("MR2CHECK").checked = true
        document.getElementById("MR2").selectedIndex = 48
        document.getElementById("AM3CHECK").checked = true
        document.getElementById("AM3").selectedIndex = 42
        document.getElementById("FINALFORTRESSCHECK").checked = true
        document.getElementById("FINALFORTRESS").selectedIndex = 9
        document.getElementById("BOOSTMP2CHECK").checked = true
        document.getElementById("BOOSTMP2").selectedIndex = 7
        document.getElementById("FINALFRENZYCHECK").checked = true
        document.getElementById("FINALFRENZY").selectedIndex = 12
    }
    if (lvlreset && LVL >= 74 && document.getElementById("AUTOPASSIVECHECK").checked == true) {
        document.getElementById("WMM3CHECK").checked = true
        document.getElementById("WMM3").selectedIndex = 41
        document.getElementById("WSBM2CHECK").checked = true
        document.getElementById("WSBM2").selectedIndex = 44
        document.getElementById("BLUNTM2CHECK").checked = true
        document.getElementById("BLUNTM2").selectedIndex = 44
        document.getElementById("FISTM2CHECK").checked = true
        document.getElementById("FISTM2").selectedIndex = 44
        document.getElementById("KSBM2CHECK").checked = true
        document.getElementById("KSBM2").selectedIndex = 44
        document.getElementById("DAGGERM2CHECK").checked = true
        document.getElementById("DAGGERM2").selectedIndex = 44
        document.getElementById("POLEM2CHECK").checked = true
        document.getElementById("POLEM2").selectedIndex = 44
        document.getElementById("BOWM2CHECK").checked = true
        document.getElementById("BOWM2").selectedIndex = 51
        document.getElementById("DUALMCHECK").checked = true
        document.getElementById("DUALM").selectedIndex = 36
        document.getElementById("THM2CHECK").checked = true
        document.getElementById("THM2").selectedIndex = 19
        document.getElementById("HMK2CHECK").checked = true
        document.getElementById("HMK2").selectedIndex = 51
        document.getElementById("HMW2CHECK").checked = true
        document.getElementById("HMW2").selectedIndex = 49
        document.getElementById("HMO3CHECK").checked = true
        document.getElementById("HMO3").selectedIndex = 42
        document.getElementById("HMPCHECK").checked = true
        document.getElementById("HMP").selectedIndex = 32
        document.getElementById("LMW2CHECK").checked = true
        document.getElementById("LMW2").selectedIndex = 49
        document.getElementById("LMR2CHECK").checked = true
        document.getElementById("LMR2").selectedIndex = 46
        document.getElementById("LMO3CHECK").checked = true
        document.getElementById("LMO3").selectedIndex = 44
        document.getElementById("LMH2CHECK").checked = true
        document.getElementById("LMH2").selectedIndex = 40
        document.getElementById("LMSCHECK").checked = true
        document.getElementById("LMS").selectedIndex = 32
        document.getElementById("RMN2CHECK").checked = true
        document.getElementById("RMN2").selectedIndex = 40
        document.getElementById("RMH2CHECK").checked = true
        document.getElementById("RMH2").selectedIndex = 40
        document.getElementById("RMO3CHECK").checked = true
        document.getElementById("RMO3").selectedIndex = 44
        document.getElementById("MR2CHECK").checked = true
        document.getElementById("MR2").selectedIndex = 50
        document.getElementById("AM3CHECK").checked = true
        document.getElementById("AM3").selectedIndex = 44
        document.getElementById("BOOSTHP3CHECK").checked = true
        document.getElementById("BOOSTHP3").selectedIndex = 9
        document.getElementById("FINALFORTRESSCHECK").checked = true
        document.getElementById("FINALFORTRESS").selectedIndex = 0
        document.getElementById("FINALFRENZYCHECK").checked = true
        document.getElementById("FINALFRENZY").selectedIndex = 13
    }

//Passive Hide/Unhide Stuff
    if (race == "HF" || race == "EF" || race == "DF" || race == "OF" || race == "DW") {
        document.getElementById("WMFCHECK").style.display = 'block'
        document.getElementById("WMF").style.display = 'block'
        document.getElementById("AMFCHECK").style.display = 'block'
        document.getElementById("AMF").style.display = 'block'
    } else {
        document.getElementById("WMFCHECK").checked = false
        document.getElementById("WMFCHECK").style.display = 'none'
        document.getElementById("WMF").style.display = 'none'
        document.getElementById("AMFCHECK").checked = false
        document.getElementById("AMFCHECK").style.display = 'none'
        document.getElementById("AMF").style.display = 'none'
    }
    if (JOB == "HM" || JOB == "EM" || JOB == "DM" || JOB == "OM") {
        document.getElementById("WMM1CHECK").style.display = 'block'
        document.getElementById("WMM1").style.display = 'block'
        document.getElementById("WMM2CHECK").checked = false
        document.getElementById("WMM2CHECK").style.display = 'none'
        document.getElementById("WMM2").style.display = 'none'
        document.getElementById("WMM3CHECK").checked = false
        document.getElementById("WMM3CHECK").style.display = 'none'
        document.getElementById("WMM3").style.display = 'none'
        document.getElementById("BOOSTMP1CHECK").checked = false
        document.getElementById("BOOSTMP1CHECK").style.display = 'none'
        document.getElementById("BOOSTMP1").style.display = 'none'
        document.getElementById("BOOSTMP2CHECK").checked = false
        document.getElementById("BOOSTMP2CHECK").style.display = 'none'
        document.getElementById("BOOSTMP2").style.display = 'none'
        document.getElementById("FASTCAST1CHECK").checked = false
        document.getElementById("FASTCAST1CHECK").style.display = 'none'
        document.getElementById("FASTCAST1").style.display = 'none'
        document.getElementById("FASTCAST2CHECK").checked = false
        document.getElementById("FASTCAST2CHECK").style.display = 'none'
        document.getElementById("FASTCAST2").style.display = 'none'
        document.getElementById("AM1CHECK").style.display = 'block'
        document.getElementById("AM1").style.display = 'block'
        document.getElementById("AM2CHECK").checked = false
        document.getElementById("AM2CHECK").style.display = 'none'
        document.getElementById("AM2").style.display = 'none'
        document.getElementById("AM3CHECK").checked = false
        document.getElementById("AM3CHECK").style.display = 'none'
        document.getElementById("AM3").style.display = 'none'
    } else if (JOB == "WI" || JOB == "CL" || JOB == "EW" || JOB == "EO" || JOB == "DW" || JOB == "SO" || JOB == "OS") {
        document.getElementById("WMM2CHECK").style.display = 'block'
        document.getElementById("WMM2").style.display = 'block'
        document.getElementById("WMM1CHECK").checked = false
        document.getElementById("WMM1CHECK").style.display = 'none'
        document.getElementById("WMM1").style.display = 'none'
        document.getElementById("WMM3CHECK").checked = false
        document.getElementById("WMM3CHECK").style.display = 'none'
        document.getElementById("WMM3").style.display = 'none'
        document.getElementById("BOOSTMP1CHECK").style.display = 'block'
        document.getElementById("BOOSTMP1").style.display = 'block'
        document.getElementById("BOOSTMP2CHECK").checked = false
        document.getElementById("BOOSTMP2CHECK").style.display = 'none'
        document.getElementById("BOOSTMP2").style.display = 'none'
        document.getElementById("FASTCAST1CHECK").style.display = 'block'
        document.getElementById("FASTCAST1").style.display = 'block'
        document.getElementById("FASTCAST2CHECK").checked = false
        document.getElementById("FASTCAST2CHECK").style.display = 'none'
        document.getElementById("FASTCAST2").style.display = 'none'
        document.getElementById("AM2CHECK").style.display = 'block'
        document.getElementById("AM2").style.display = 'block'
        document.getElementById("AM1CHECK").checked = false
        document.getElementById("AM1CHECK").style.display = 'none'
        document.getElementById("AM1").style.display = 'none'
        document.getElementById("AM3CHECK").checked = false
        document.getElementById("AM3CHECK").style.display = 'none'
        document.getElementById("AM3").style.display = 'none'
    } else if (JOB == "SOR" || JOB == "NE" || JOB == "WL" || JOB == "PP" || JOB == "BI" || JOB == "SPS" || JOB == "ELS" || JOB == "EE" || JOB == "SPH" || JOB == "PS" || JOB == "WC" || JOB == "SHE" || JOB == "OL") {
        document.getElementById("WMM3CHECK").style.display = 'block'
        document.getElementById("WMM3").style.display = 'block'
        document.getElementById("WMM1CHECK").checked = false
        document.getElementById("WMM1CHECK").style.display = 'none'
        document.getElementById("WMM1").style.display = 'none'
        document.getElementById("WMM2CHECK").checked = false
        document.getElementById("WMM2CHECK").style.display = 'none'
        document.getElementById("WMM2").style.display = 'none'
        document.getElementById("BOOSTMP2CHECK").style.display = 'block'
        document.getElementById("BOOSTMP2").style.display = 'block'
        document.getElementById("BOOSTMP1CHECK").checked = false
        document.getElementById("BOOSTMP1CHECK").style.display = 'none'
        document.getElementById("BOOSTMP1").style.display = 'none'
        document.getElementById("FASTCAST2CHECK").style.display = 'block'
        document.getElementById("FASTCAST2").style.display = 'block'
        document.getElementById("FASTCAST1CHECK").checked = false
        document.getElementById("FASTCAST1CHECK").style.display = 'none'
        document.getElementById("FASTCAST1").style.display = 'none'
        document.getElementById("AM3CHECK").style.display = 'block'
        document.getElementById("AM3").style.display = 'block'
        document.getElementById("AM1CHECK").checked = false
        document.getElementById("AM1CHECK").style.display = 'none'
        document.getElementById("AM1").style.display = 'none'
        document.getElementById("AM2CHECK").checked = false
        document.getElementById("AM2CHECK").style.display = 'none'
        document.getElementById("AM2").style.display = 'none'
    } else {
        document.getElementById("WMM1CHECK").checked = false
        document.getElementById("WMM1CHECK").style.display = 'none'
        document.getElementById("WMM1").style.display = 'none'
        document.getElementById("WMM2CHECK").checked = false
        document.getElementById("WMM2CHECK").style.display = 'none'
        document.getElementById("WMM2").style.display = 'none'
        document.getElementById("WMM3CHECK").checked = false
        document.getElementById("WMM3CHECK").style.display = 'none'
        document.getElementById("WMM3").style.display = 'none'
        document.getElementById("BOOSTMP1CHECK").checked = false
        document.getElementById("BOOSTMP1CHECK").style.display = 'none'
        document.getElementById("BOOSTMP1").style.display = 'none'
        document.getElementById("BOOSTMP2CHECK").checked = false
        document.getElementById("BOOSTMP2CHECK").style.display = 'none'
        document.getElementById("BOOSTMP2").style.display = 'none'
        document.getElementById("FASTCAST1CHECK").checked = false
        document.getElementById("FASTCAST1CHECK").style.display = 'none'
        document.getElementById("FASTCAST1").style.display = 'none'
        document.getElementById("FASTCAST2CHECK").checked = false
        document.getElementById("FASTCAST2CHECK").style.display = 'none'
        document.getElementById("FASTCAST2").style.display = 'none'
        document.getElementById("AM1CHECK").checked = false
        document.getElementById("AM1CHECK").style.display = 'none'
        document.getElementById("AM1").style.display = 'none'
        document.getElementById("AM2CHECK").checked = false
        document.getElementById("AM2CHECK").style.display = 'none'
        document.getElementById("AM2").style.display = 'none'
        document.getElementById("AM3CHECK").checked = false
        document.getElementById("AM3CHECK").style.display = 'none'
        document.getElementById("AM3").style.display = 'none'
    }
    if (race == "HM" || race == "EM" || race == "DM") {
        document.getElementById("AMMCHECK").style.display = 'block'
        document.getElementById("AMM").style.display = 'block'
    } else {
        document.getElementById("AMMCHECK").checked = false
        document.getElementById("AMMCHECK").style.display = 'none'
        document.getElementById("AMM").style.display = 'none'
    }
    if (JOB == "WA" || JOB == "OR" || JOB == "WD") {
        document.getElementById("WSBM1CHECK").style.display = 'block'
        document.getElementById("WSBM1").style.display = 'block'
        document.getElementById("WSBM2CHECK").checked = false
        document.getElementById("WSBM2CHECK").style.display = 'none'
        document.getElementById("WSBM2").style.display = 'none'
    } else if (JOB == "GL" || JOB == "DE") {
        document.getElementById("WSBM2CHECK").style.display = 'block'
        document.getElementById("WSBM2").style.display = 'block'
        document.getElementById("WSBM1CHECK").checked = false
        document.getElementById("WSBM1CHECK").style.display = 'none'
        document.getElementById("WSBM1").style.display = 'none'
    } else {
        document.getElementById("WSBM1CHECK").checked = false
        document.getElementById("WSBM1CHECK").style.display = 'none'
        document.getElementById("WSBM1").style.display = 'none'
        document.getElementById("WSBM2CHECK").checked = false
        document.getElementById("WSBM2CHECK").style.display = 'none'
        document.getElementById("WSBM2").style.display = 'none'
    }
    if (JOB == "AR" || JOB == "SC") {
        document.getElementById("BLUNTM1CHECK").style.display = 'block'
        document.getElementById("BLUNTM1").style.display = 'block'
        document.getElementById("BLUNTM2CHECK").checked = false
        document.getElementById("BLUNTM2CHECK").style.display = 'none'
        document.getElementById("BLUNTM2").style.display = 'none'
    } else if (JOB == "WS" || JOB == "BH") {
        document.getElementById("BLUNTM2CHECK").style.display = 'block'
        document.getElementById("BLUNTM2").style.display = 'block'
        document.getElementById("BLUNTM1CHECK").checked = false
        document.getElementById("BLUNTM1CHECK").style.display = 'none'
        document.getElementById("BLUNTM1").style.display = 'none'
    } else {
        document.getElementById("BLUNTM1CHECK").checked = false
        document.getElementById("BLUNTM1CHECK").style.display = 'none'
        document.getElementById("BLUNTM1").style.display = 'none'
        document.getElementById("BLUNTM2CHECK").checked = false
        document.getElementById("BLUNTM2CHECK").style.display = 'none'
        document.getElementById("BLUNTM2").style.display = 'none'
    }
    if (JOB == "AR" || JOB == "WA" || JOB == "GL" || JOB == "OR" || JOB == "SC") {
        document.getElementById("POLEM1CHECK").style.display = 'block'
        document.getElementById("POLEM1").style.display = 'block'
        document.getElementById("POLEM2CHECK").checked = false
        document.getElementById("POLEM2CHECK").style.display = 'none'
        document.getElementById("POLEM2").style.display = 'none'
    } else if (JOB == "WS" || JOB == "BH" || JOB == "WD" || JOB == "DE") {
        document.getElementById("POLEM2CHECK").style.display = 'block'
        document.getElementById("POLEM2").style.display = 'block'
        document.getElementById("POLEM1CHECK").checked = false
        document.getElementById("POLEM1CHECK").style.display = 'none'
        document.getElementById("POLEM1").style.display = 'none'
    } else {
        document.getElementById("POLEM1CHECK").checked = false
        document.getElementById("POLEM1CHECK").style.display = 'none'
        document.getElementById("POLEM1").style.display = 'none'
        document.getElementById("POLEM2CHECK").checked = false
        document.getElementById("POLEM2CHECK").style.display = 'none'
        document.getElementById("POLEM2").style.display = 'none'
    }
    if (JOB == "MO") {
        document.getElementById("FISTM1CHECK").style.display = 'block'
        document.getElementById("FISTM1").style.display = 'block'
        document.getElementById("FISTM2CHECK").checked = false
        document.getElementById("FISTM2CHECK").style.display = 'none'
        document.getElementById("FISTM2").style.display = 'none'
    } else if (JOB == "TY") {
        document.getElementById("FISTM2CHECK").style.display = 'block'
        document.getElementById("FISTM2").style.display = 'block'
        document.getElementById("FISTM1CHECK").checked = false
        document.getElementById("FISTM1CHECK").style.display = 'none'
        document.getElementById("FISTM1").style.display = 'none'
    } else {
        document.getElementById("FISTM1CHECK").checked = false
        document.getElementById("FISTM1CHECK").style.display = 'none'
        document.getElementById("FISTM1").style.display = 'none'
        document.getElementById("FISTM2CHECK").checked = false
        document.getElementById("FISTM2CHECK").style.display = 'none'
        document.getElementById("FISTM2").style.display = 'none'
    }
    if (JOB == "EK" || JOB == "HK" || JOB == "PK") {
        document.getElementById("MR1CHECK").style.display = 'block'
        document.getElementById("MR1").style.display = 'block'
        document.getElementById("MR2CHECK").checked = false
        document.getElementById("MR2CHECK").style.display = 'none'
        document.getElementById("MR2").style.display = 'none'
    } else if (JOB == "DA" || JOB == "PA" || JOB == "TK" || JOB == "SW" || JOB == "SK" || JOB == "BD") {
        document.getElementById("MR2CHECK").style.display = 'block'
        document.getElementById("MR2").style.display = 'block'
        document.getElementById("MR1CHECK").checked = false
        document.getElementById("MR1CHECK").style.display = 'none'
        document.getElementById("MR1").style.display = 'none'
    } else {
        document.getElementById("MR1CHECK").checked = false
        document.getElementById("MR1CHECK").style.display = 'none'
        document.getElementById("MR1").style.display = 'none'
        document.getElementById("MR2CHECK").checked = false
        document.getElementById("MR2CHECK").style.display = 'none'
        document.getElementById("MR2").style.display = 'none'
    }
    if (JOB == "EK" || JOB == "HK" || JOB == "PK" || JOB == "BD") {
        document.getElementById("KSBM1CHECK").style.display = 'block'
        document.getElementById("KSBM1").style.display = 'block'
        document.getElementById("KSBM2CHECK").checked = false
        document.getElementById("KSBM2CHECK").style.display = 'none'
        document.getElementById("KSBM2").style.display = 'none'
        document.getElementById("HMK1CHECK").style.display = 'block'
        document.getElementById("HMK1").style.display = 'block'
        document.getElementById("HMK2CHECK").checked = false
        document.getElementById("HMK2CHECK").style.display = 'none'
        document.getElementById("HMK2").style.display = 'none'
    } else if (JOB == "DA" || JOB == "PA" || JOB == "TK" || JOB == "SW" || JOB == "SK") {
        document.getElementById("KSBM2CHECK").style.display = 'block'
        document.getElementById("KSBM2").style.display = 'block'
        document.getElementById("KSBM1CHECK").checked = false
        document.getElementById("KSBM1CHECK").style.display = 'none'
        document.getElementById("KSBM1").style.display = 'none'
        document.getElementById("HMK2CHECK").style.display = 'block'
        document.getElementById("HMK2").style.display = 'block'
        document.getElementById("HMK1CHECK").checked = false
        document.getElementById("HMK1CHECK").style.display = 'none'
        document.getElementById("HMK1").style.display = 'none'
    } else {
        document.getElementById("KSBM1CHECK").checked = false
        document.getElementById("KSBM1CHECK").style.display = 'none'
        document.getElementById("KSBM1").style.display = 'none'
        document.getElementById("KSBM2CHECK").checked = false
        document.getElementById("KSBM2CHECK").style.display = 'none'
        document.getElementById("KSBM2").style.display = 'none'
        document.getElementById("HMK1CHECK").checked = false
        document.getElementById("HMK1CHECK").style.display = 'none'
        document.getElementById("HMK1").style.display = 'none'
        document.getElementById("HMK2CHECK").checked = false
        document.getElementById("HMK2CHECK").style.display = 'none'
        document.getElementById("HMK2").style.display = 'none'
    }
    if (JOB == "EFS" || JOB == "SR" || JOB == "HE" || JOB == "RO" || JOB == "PR" || JOB == "AS") {
        document.getElementById("DAGGERM1CHECK").style.display = 'block'
        document.getElementById("DAGGERM1").style.display = 'block'
        document.getElementById("DAGGERM2CHECK").checked = false
        document.getElementById("DAGGERM2CHECK").style.display = 'none'
        document.getElementById("DAGGERM2").style.display = 'none'
        document.getElementById("BOOSTEVASION1CHECK").style.display = 'block'
        document.getElementById("BOOSTEVASION1").style.display = 'block'
        document.getElementById("BOOSTEVASION2CHECK").checked = false
        document.getElementById("BOOSTEVASION2CHECK").style.display = 'none'
        document.getElementById("BOOSTEVASION2").style.display = 'none'
    } else if (JOB == "PW" || JOB == "TH" || JOB == "AW") {
        document.getElementById("DAGGERM2CHECK").style.display = 'block'
        document.getElementById("DAGGERM2").style.display = 'block'
        document.getElementById("DAGGERM1CHECK").checked = false
        document.getElementById("DAGGERM1CHECK").style.display = 'none'
        document.getElementById("DAGGERM1").style.display = 'none'
        document.getElementById("BOOSTEVASION2CHECK").style.display = 'block'
        document.getElementById("BOOSTEVASION2").style.display = 'block'
        document.getElementById("BOOSTEVASION1CHECK").checked = false
        document.getElementById("BOOSTEVASION1CHECK").style.display = 'none'
        document.getElementById("BOOSTEVASION1").style.display = 'none'
    } else {
        document.getElementById("DAGGERM1CHECK").checked = false
        document.getElementById("DAGGERM1CHECK").style.display = 'none'
        document.getElementById("DAGGERM1").style.display = 'none'
        document.getElementById("DAGGERM2CHECK").checked = false
        document.getElementById("DAGGERM2CHECK").style.display = 'none'
        document.getElementById("DAGGERM2").style.display = 'none'
        document.getElementById("BOOSTEVASION1CHECK").checked = false
        document.getElementById("BOOSTEVASION1CHECK").style.display = 'none'
        document.getElementById("BOOSTEVASION1").style.display = 'none'
        document.getElementById("BOOSTEVASION2CHECK").checked = false
        document.getElementById("BOOSTEVASION2CHECK").style.display = 'none'
        document.getElementById("BOOSTEVASION2").style.display = 'none'
    }
    if (JOB == "PW" || JOB == "EFS" || JOB == "TH" || JOB == "RO" || JOB == "AW" || JOB == "AS") {
        document.getElementById("BOWM1CHECK").style.display = 'block'
        document.getElementById("BOWM1").style.display = 'block'
        document.getElementById("BOWM2CHECK").checked = false
        document.getElementById("BOWM2CHECK").style.display = 'none'
        document.getElementById("BOWM2").style.display = 'none'
    } else if (JOB == "SR" || JOB == "HE" || JOB == "PR") {
        document.getElementById("BOWM2CHECK").style.display = 'block'
        document.getElementById("BOWM2").style.display = 'block'
        document.getElementById("BOWM1CHECK").checked = false
        document.getElementById("BOWM1CHECK").style.display = 'none'
        document.getElementById("BOWM1").style.display = 'none'
    } else {
        document.getElementById("BOWM1CHECK").checked = false
        document.getElementById("BOWM1CHECK").style.display = 'none'
        document.getElementById("BOWM1").style.display = 'none'
        document.getElementById("BOWM2CHECK").checked = false
        document.getElementById("BOWM2CHECK").style.display = 'none'
        document.getElementById("BOWM2").style.display = 'none'
    }
    if (JOB == "EFS" || JOB == "RO" || JOB == "AS") {
        document.getElementById("QUICKSTEP1CHECK").style.display = 'block'
        document.getElementById("QUICKSTEP1").style.display = 'block'
        document.getElementById("QUICKSTEP2CHECK").checked = false
        document.getElementById("QUICKSTEP2CHECK").style.display = 'none'
        document.getElementById("QUICKSTEP2").style.display = 'none'
    } else if (JOB == "SR" || JOB == "HE" || JOB == "PR" || JOB == "PW" || JOB == "TH" || JOB == "AW") {
        document.getElementById("QUICKSTEP2CHECK").style.display = 'block'
        document.getElementById("QUICKSTEP2").style.display = 'block'
        document.getElementById("QUICKSTEP1CHECK").checked = false
        document.getElementById("QUICKSTEP1CHECK").style.display = 'none'
        document.getElementById("QUICKSTEP1").style.display = 'none'
    } else {
        document.getElementById("QUICKSTEP1CHECK").checked = false
        document.getElementById("QUICKSTEP1CHECK").style.display = 'none'
        document.getElementById("QUICKSTEP1").style.display = 'none'
        document.getElementById("QUICKSTEP2CHECK").checked = false
        document.getElementById("QUICKSTEP2CHECK").style.display = 'none'
        document.getElementById("QUICKSTEP2").style.display = 'none'
    }
    if (JOB == "BD" || JOB == "GL") {
        document.getElementById("DUALMCHECK").style.display = 'block'
        document.getElementById("DUALM").style.display = 'block'
    } else {
        document.getElementById("DUALMCHECK").checked = false
        document.getElementById("DUALMCHECK").style.display = 'none'
        document.getElementById("DUALM").style.display = 'none'
    }
    if (JOB == "OR") {
        document.getElementById("THM1CHECK").style.display = 'block'
        document.getElementById("THM1").style.display = 'block'
        document.getElementById("THM2CHECK").checked = false
        document.getElementById("THM2CHECK").style.display = 'none'
        document.getElementById("THM2").style.display = 'none'
    } else if (JOB == "DE") {
        document.getElementById("THM2CHECK").style.display = 'block'
        document.getElementById("THM2").style.display = 'block'
        document.getElementById("THM1CHECK").checked = false
        document.getElementById("THM1CHECK").style.display = 'none'
        document.getElementById("THM1").style.display = 'none'
    } else {
        document.getElementById("THM1CHECK").checked = false
        document.getElementById("THM1CHECK").style.display = 'none'
        document.getElementById("THM1").style.display = 'none'
        document.getElementById("THM2CHECK").checked = false
        document.getElementById("THM2CHECK").style.display = 'none'
        document.getElementById("THM2").style.display = 'none'
    }
    if (JOB == "WA" || JOB == "GL" || JOB == "OR" || JOB == "AR" || JOB == "SC" || JOB == "OL" || JOB == "WC") {
        document.getElementById("BOOSTHP1CHECK").style.display = 'block'
        document.getElementById("BOOSTHP1").style.display = 'block'
        document.getElementById("BOOSTHP2CHECK").checked = false
        document.getElementById("BOOSTHP2CHECK").style.display = 'none'
        document.getElementById("BOOSTHP2").style.display = 'none'
        document.getElementById("BOOSTHP3CHECK").checked = false
        document.getElementById("BOOSTHP3CHECK").style.display = 'none'
        document.getElementById("BOOSTHP3").style.display = 'none'
    } else if (JOB == "PP" || JOB == "OL" || JOB == "WC") {
        document.getElementById("BOOSTHP2CHECK").style.display = 'block'
        document.getElementById("BOOSTHP2").style.display = 'block'
        document.getElementById("BOOSTHP1CHECK").checked = false
        document.getElementById("BOOSTHP1CHECK").style.display = 'none'
        document.getElementById("BOOSTHP1").style.display = 'none'
        document.getElementById("BOOSTHP3CHECK").checked = false
        document.getElementById("BOOSTHP3CHECK").style.display = 'none'
        document.getElementById("BOOSTHP3").style.display = 'none'
    } else if (JOB == "WD" || JOB == "DE" || JOB == "BH" || JOB == "WS") {
        document.getElementById("BOOSTHP3CHECK").style.display = 'block'
        document.getElementById("BOOSTHP3").style.display = 'block'
        document.getElementById("BOOSTHP1CHECK").checked = false
        document.getElementById("BOOSTHP1CHECK").style.display = 'none'
        document.getElementById("BOOSTHP1").style.display = 'none'
        document.getElementById("BOOSTHP2CHECK").checked = false
        document.getElementById("BOOSTHP2CHECK").style.display = 'none'
        document.getElementById("BOOSTHP2").style.display = 'none'
    } else {
        document.getElementById("BOOSTHP1CHECK").checked = false
        document.getElementById("BOOSTHP1CHECK").style.display = 'none'
        document.getElementById("BOOSTHP1").style.display = 'none'
        document.getElementById("BOOSTHP2CHECK").checked = false
        document.getElementById("BOOSTHP2CHECK").style.display = 'none'
        document.getElementById("BOOSTHP2").style.display = 'none'
        document.getElementById("BOOSTHP3CHECK").checked = false
        document.getElementById("BOOSTHP3CHECK").style.display = 'none'
        document.getElementById("BOOSTHP3").style.display = 'none'
    }
    if (JOB == "WD" || JOB == "GL") {
        document.getElementById("FINALFRENZYCHECK").style.display = 'block'
        document.getElementById("FINALFRENZY").style.display = 'block'
    } else {
        document.getElementById("FINALFRENZYCHECK").checked = false
        document.getElementById("FINALFRENZYCHECK").style.display = 'none'
        document.getElementById("FINALFRENZY").style.display = 'none'
    }
    if (JOB == "DA" || JOB == "PA" || JOB == "TK" || JOB == "SK") {
        document.getElementById("FINALFORTRESSCHECK").style.display = 'block'
        document.getElementById("FINALFORTRESS").style.display = 'block'
    } else {
        document.getElementById("FINALFORTRESSCHECK").checked = false
        document.getElementById("FINALFORTRESSCHECK").style.display = 'none'
        document.getElementById("FINALFORTRESS").style.display = 'none'
    }
    if (race == "DF") {
        document.getElementById("SHADOWSENSECHECK").style.display = 'block'
        document.getElementById("SHADOWSENSE").style.display = 'block'
    } else {
        document.getElementById("SHADOWSENSECHECK").checked = false
        document.getElementById("SHADOWSENSECHECK").style.display = 'none'
        document.getElementById("SHADOWSENSE").style.display = 'none'
    }
    if (JOB == "MO") {
        document.getElementById("AGILEMOVEMENT1CHECK").style.display = 'block'
        document.getElementById("AGILEMOVEMENT1").style.display = 'block'
        document.getElementById("AGILEMOVEMENT2CHECK").checked = false
        document.getElementById("AGILEMOVEMENT2CHECK").style.display = 'none'
        document.getElementById("AGILEMOVEMENT2").style.display = 'none'
    } else if (JOB == "TY") {
        document.getElementById("AGILEMOVEMENT2CHECK").style.display = 'block'
        document.getElementById("AGILEMOVEMENT2").style.display = 'block'
        document.getElementById("AGILEMOVEMENT1CHECK").checked = false
        document.getElementById("AGILEMOVEMENT1CHECK").style.display = 'none'
        document.getElementById("AGILEMOVEMENT1").style.display = 'none'
    } else {
        document.getElementById("AGILEMOVEMENT1CHECK").checked = false
        document.getElementById("AGILEMOVEMENT1CHECK").style.display = 'none'
        document.getElementById("AGILEMOVEMENT1").style.display = 'none'
        document.getElementById("AGILEMOVEMENT2CHECK").checked = false
        document.getElementById("AGILEMOVEMENT2CHECK").style.display = 'none'
        document.getElementById("AGILEMOVEMENT2").style.display = 'none'
    }
    if (JOB == "EFS" || JOB == "SR" || JOB == "HE" || JOB == "RO") {
        document.getElementById("CRITICALCHANCE1CHECK").style.display = 'block'
        document.getElementById("CRITICALCHANCE1").style.display = 'block'
        document.getElementById("CRITICALCHANCE2CHECK").checked = false
        document.getElementById("CRITICALCHANCE2CHECK").style.display = 'none'
        document.getElementById("CRITICALCHANCE2").style.display = 'none'
    } else if (JOB == "PW" || JOB == "TH") {
        document.getElementById("CRITICALCHANCE2CHECK").style.display = 'block'
        document.getElementById("CRITICALCHANCE2").style.display = 'block'
        document.getElementById("CRITICALCHANCE1CHECK").checked = false
        document.getElementById("CRITICALCHANCE1CHECK").style.display = 'none'
        document.getElementById("CRITICALCHANCE1").style.display = 'none'
    } else {
        document.getElementById("CRITICALCHANCE1CHECK").checked = false
        document.getElementById("CRITICALCHANCE1CHECK").style.display = 'none'
        document.getElementById("CRITICALCHANCE1").style.display = 'none'
        document.getElementById("CRITICALCHANCE2CHECK").checked = false
        document.getElementById("CRITICALCHANCE2CHECK").style.display = 'none'
        document.getElementById("CRITICALCHANCE2").style.display = 'none'
    }
    if (JOB == "MO" || JOB == "HE" || JOB == "RO") {
        document.getElementById("BOOSTASPD1CHECK").style.display = 'block'
        document.getElementById("BOOSTASPD1").style.display = 'block'
        document.getElementById("BOOSTASPD2CHECK").checked = false
        document.getElementById("BOOSTASPD2CHECK").style.display = 'none'
        document.getElementById("BOOSTASPD2").style.display = 'none'
    } else if (JOB == "TY" || JOB == "TH") {
        document.getElementById("BOOSTASPD2CHECK").style.display = 'block'
        document.getElementById("BOOSTASPD2").style.display = 'block'
        document.getElementById("BOOSTASPD1CHECK").checked = false
        document.getElementById("BOOSTASPD1CHECK").style.display = 'none'
        document.getElementById("BOOSTASPD1").style.display = 'none'
    } else {
        document.getElementById("BOOSTASPD1CHECK").checked = false
        document.getElementById("BOOSTASPD1CHECK").style.display = 'none'
        document.getElementById("BOOSTASPD1").style.display = 'none'
        document.getElementById("BOOSTASPD2CHECK").checked = false
        document.getElementById("BOOSTASPD2CHECK").style.display = 'none'
        document.getElementById("BOOSTASPD2").style.display = 'none'
    }
    if (JOB == "OM") {
        document.getElementById("HMO1CHECK").style.display = 'block'
        document.getElementById("HMO1").style.display = 'block'
        document.getElementById("HMO2CHECK").checked = false
        document.getElementById("HMO2CHECK").style.display = 'none'
        document.getElementById("HMO2").style.display = 'none'
        document.getElementById("HMO3CHECK").checked = false
        document.getElementById("HMO3CHECK").style.display = 'none'
        document.getElementById("HMO3").style.display = 'none'
        document.getElementById("LMO1CHECK").style.display = 'block'
        document.getElementById("LMO1").style.display = 'block'
        document.getElementById("LMO3CHECK").checked = false
        document.getElementById("LMO3CHECK").style.display = 'none'
        document.getElementById("LMO3").style.display = 'none'
        document.getElementById("LMO2CHECK").checked = false
        document.getElementById("LMO2CHECK").style.display = 'none'
        document.getElementById("LMO2").style.display = 'none'
        document.getElementById("RMO1CHECK").style.display = 'block'
        document.getElementById("RMO1").style.display = 'block'
        document.getElementById("RMO2CHECK").checked = false
        document.getElementById("RMO2CHECK").style.display = 'none'
        document.getElementById("RMO2").style.display = 'none'
        document.getElementById("RMO3CHECK").checked = false
        document.getElementById("RMO3CHECK").style.display = 'none'
        document.getElementById("RMO3").style.display = 'none'
    } else if (JOB == "OS") {
        document.getElementById("HMO2CHECK").style.display = 'block'
        document.getElementById("HMO2").style.display = 'block'
        document.getElementById("HMO3CHECK").checked = false
        document.getElementById("HMO3CHECK").style.display = 'none'
        document.getElementById("HMO3").style.display = 'none'
        document.getElementById("HMO1CHECK").checked = false
        document.getElementById("HMO1CHECK").style.display = 'none'
        document.getElementById("HMO1").style.display = 'none'
        document.getElementById("LMO2CHECK").style.display = 'block'
        document.getElementById("LMO2").style.display = 'block'
        document.getElementById("LMO1CHECK").checked = false
        document.getElementById("LMO1CHECK").style.display = 'none'
        document.getElementById("LMO1").style.display = 'none'
        document.getElementById("LMO3CHECK").checked = false
        document.getElementById("LMO3CHECK").style.display = 'none'
        document.getElementById("LMO3").style.display = 'none'
        document.getElementById("RMO2CHECK").style.display = 'block'
        document.getElementById("RMO2").style.display = 'block'
        document.getElementById("RMO1CHECK").checked = false
        document.getElementById("RMO1CHECK").style.display = 'none'
        document.getElementById("RMO1").style.display = 'none'
        document.getElementById("RMO3CHECK").checked = false
        document.getElementById("RMO3CHECK").style.display = 'none'
        document.getElementById("RMO3").style.display = 'none'
    } else if (JOB == "WC" || JOB == "OL") {
        document.getElementById("HMO3CHECK").style.display = 'block'
        document.getElementById("HMO3").style.display = 'block'
        document.getElementById("HMO2CHECK").checked = false
        document.getElementById("HMO2CHECK").style.display = 'none'
        document.getElementById("HMO2").style.display = 'none'
        document.getElementById("HMO1CHECK").checked = false
        document.getElementById("HMO1CHECK").style.display = 'none'
        document.getElementById("HMO1").style.display = 'none'
        document.getElementById("LMO3CHECK").style.display = 'block'
        document.getElementById("LMO3").style.display = 'block'
        document.getElementById("LMO1CHECK").checked = false
        document.getElementById("LMO1CHECK").style.display = 'none'
        document.getElementById("LMO1").style.display = 'none'
        document.getElementById("LMO2CHECK").checked = false
        document.getElementById("LMO2CHECK").style.display = 'none'
        document.getElementById("LMO2").style.display = 'none'
        document.getElementById("RMO3CHECK").style.display = 'block'
        document.getElementById("RMO3").style.display = 'block'
        document.getElementById("RMO2CHECK").checked = false
        document.getElementById("RMO2CHECK").style.display = 'none'
        document.getElementById("RMO2").style.display = 'none'
        document.getElementById("RMO1CHECK").checked = false
        document.getElementById("RMO1CHECK").style.display = 'none'
        document.getElementById("RMO1").style.display = 'none'
    } else {
        document.getElementById("HMO1CHECK").checked = false
        document.getElementById("HMO1CHECK").style.display = 'none'
        document.getElementById("HMO1").style.display = 'none'
        document.getElementById("HMO2CHECK").checked = false
        document.getElementById("HMO2CHECK").style.display = 'none'
        document.getElementById("HMO2").style.display = 'none'
        document.getElementById("HMO3CHECK").checked = false
        document.getElementById("HMO3CHECK").style.display = 'none'
        document.getElementById("HMO3").style.display = 'none'
        document.getElementById("LMO1CHECK").checked = false
        document.getElementById("LMO1CHECK").style.display = 'none'
        document.getElementById("LMO1").style.display = 'none'
        document.getElementById("LMO2CHECK").checked = false
        document.getElementById("LMO2CHECK").style.display = 'none'
        document.getElementById("LMO2").style.display = 'none'
        document.getElementById("LMO3CHECK").checked = false
        document.getElementById("LMO3CHECK").style.display = 'none'
        document.getElementById("LMO3").style.display = 'none'
        document.getElementById("RMO1CHECK").checked = false
        document.getElementById("RMO1CHECK").style.display = 'none'
        document.getElementById("RMO1").style.display = 'none'
        document.getElementById("RMO2CHECK").checked = false
        document.getElementById("RMO2CHECK").style.display = 'none'
        document.getElementById("RMO2").style.display = 'none'
        document.getElementById("RMO3CHECK").checked = false
        document.getElementById("RMO3CHECK").style.display = 'none'
        document.getElementById("RMO3").style.display = 'none'
    }
    if (JOB == "PP") {
        document.getElementById("HMPCHECK").style.display = 'block'
        document.getElementById("HMP").style.display = 'block'
    } else {
        document.getElementById("HMPCHECK").checked = false
        document.getElementById("HMPCHECK").style.display = 'none'
        document.getElementById("HMP").style.display = 'none'
    }
    if (JOB == "WA" || JOB == "OR" || JOB == "AR" || JOB == "SC") {
        document.getElementById("HMW1CHECK").style.display = 'block'
        document.getElementById("HMW1").style.display = 'block'
        document.getElementById("HMW2CHECK").checked = false
        document.getElementById("HMW2CHECK").style.display = 'none'
        document.getElementById("HMW2").style.display = 'none'
        document.getElementById("LMW1CHECK").style.display = 'block'
        document.getElementById("LMW1").style.display = 'block'
        document.getElementById("LMW2CHECK").checked = false
        document.getElementById("LMW2CHECK").style.display = 'none'
        document.getElementById("LMW2").style.display = 'none'
    } else if (JOB == "WD" || JOB == "GL" || JOB == "DE" || JOB == "WS" || JOB == "BH") {
        document.getElementById("HMW2CHECK").style.display = 'block'
        document.getElementById("HMW2").style.display = 'block'
        document.getElementById("HMW1CHECK").checked = false
        document.getElementById("HMW1CHECK").style.display = 'none'
        document.getElementById("HMW1").style.display = 'none'
        document.getElementById("LMW2CHECK").style.display = 'block'
        document.getElementById("LMW2").style.display = 'block'
        document.getElementById("LMW1CHECK").checked = false
        document.getElementById("LMW1CHECK").style.display = 'none'
        document.getElementById("LMW1").style.display = 'none'
    } else {
        document.getElementById("HMW1CHECK").checked = false
        document.getElementById("HMW1CHECK").style.display = 'none'
        document.getElementById("HMW1").style.display = 'none'
        document.getElementById("HMW2CHECK").checked = false
        document.getElementById("HMW2CHECK").style.display = 'none'
        document.getElementById("HMW2").style.display = 'none'
        document.getElementById("LMW1CHECK").checked = false
        document.getElementById("LMW1CHECK").style.display = 'none'
        document.getElementById("LMW1").style.display = 'none'
        document.getElementById("LMW2CHECK").checked = false
        document.getElementById("LMW2CHECK").style.display = 'none'
        document.getElementById("LMW2").style.display = 'none'
    }
    if (JOB == "EFS" || JOB == "RO" || JOB == "AS" || JOB == "MO") {
        document.getElementById("LMR1CHECK").style.display = 'block'
        document.getElementById("LMR1").style.display = 'block'
        document.getElementById("LMR2CHECK").checked = false
        document.getElementById("LMR2CHECK").style.display = 'none'
        document.getElementById("LMR2").style.display = 'none'
    } else if (JOB == "PW" || JOB == "SR" || JOB == "TH" || JOB == "HE" || JOB == "AW" || JOB == "PR" || JOB == "TY") {
        document.getElementById("LMR2CHECK").style.display = 'block'
        document.getElementById("LMR2").style.display = 'block'
        document.getElementById("LMR1CHECK").checked = false
        document.getElementById("LMR1CHECK").style.display = 'none'
        document.getElementById("LMR1").style.display = 'none'
    } else {
        document.getElementById("LMR1CHECK").checked = false
        document.getElementById("LMR1CHECK").style.display = 'none'
        document.getElementById("LMR1").style.display = 'none'
        document.getElementById("LMR2CHECK").checked = false
        document.getElementById("LMR2CHECK").style.display = 'none'
        document.getElementById("LMR2").style.display = 'none'
    }
    if (JOB == "CL" || JOB == "EO" || JOB == "SO") {
        document.getElementById("LMH1CHECK").style.display = 'block'
        document.getElementById("LMH1").style.display = 'block'
        document.getElementById("LMH2CHECK").checked = false
        document.getElementById("LMH2CHECK").style.display = 'none'
        document.getElementById("LMH2").style.display = 'none'
        document.getElementById("RMH1CHECK").style.display = 'block'
        document.getElementById("RMH1").style.display = 'block'
        document.getElementById("RMH2CHECK").checked = false
        document.getElementById("RMH2CHECK").style.display = 'none'
        document.getElementById("RMH2").style.display = 'none'
    } else if (JOB == "PP" || JOB == "BI" || JOB == "EE" || JOB == "SHE") {
        document.getElementById("LMH2CHECK").style.display = 'block'
        document.getElementById("LMH2").style.display = 'block'
        document.getElementById("LMH1CHECK").checked = false
        document.getElementById("LMH1CHECK").style.display = 'none'
        document.getElementById("LMH1").style.display = 'none'
        document.getElementById("RMH2CHECK").style.display = 'block'
        document.getElementById("RMH2").style.display = 'block'
        document.getElementById("RMH1CHECK").checked = false
        document.getElementById("RMH1CHECK").style.display = 'none'
        document.getElementById("RMH1").style.display = 'none'
    } else {
        document.getElementById("LMH1CHECK").checked = false
        document.getElementById("LMH1CHECK").style.display = 'none'
        document.getElementById("LMH1").style.display = 'none'
        document.getElementById("LMH2CHECK").checked = false
        document.getElementById("LMH2CHECK").style.display = 'none'
        document.getElementById("LMH2").style.display = 'none'
        document.getElementById("RMH1CHECK").checked = false
        document.getElementById("RMH1CHECK").style.display = 'none'
        document.getElementById("RMH1").style.display = 'none'
        document.getElementById("RMH2CHECK").checked = false
        document.getElementById("RMH2CHECK").style.display = 'none'
        document.getElementById("RMH2").style.display = 'none'
    }
    if (JOB == "ELS" || JOB == "PS" || JOB == "WL") {
        document.getElementById("LMSCHECK").style.display = 'block'
        document.getElementById("LMS").style.display = 'block'
    } else {
        document.getElementById("LMSCHECK").checked = false
        document.getElementById("LMSCHECK").style.display = 'none'
        document.getElementById("LMS").style.display = 'none'
    }
    if (JOB == "WI" || JOB == "DW" || JOB == "EW") {
        document.getElementById("RMN1CHECK").style.display = 'block'
        document.getElementById("RMN1").style.display = 'block'
        document.getElementById("RMN2CHECK").checked = false
        document.getElementById("RMN2CHECK").style.display = 'none'
        document.getElementById("RMN2").style.display = 'none'
    } else if (JOB == "NE" || JOB == "WL" || JOB == "SOR" || JOB == "SPH" || JOB == "PS" || JOB == "SPS" || JOB == "ELS") {
        document.getElementById("RMN2CHECK").style.display = 'block'
        document.getElementById("RMN2").style.display = 'block'
        document.getElementById("RMN1CHECK").checked = false
        document.getElementById("RMN1CHECK").style.display = 'none'
        document.getElementById("RMN1").style.display = 'none'
    } else {
        document.getElementById("RMN1CHECK").checked = false
        document.getElementById("RMN1CHECK").style.display = 'none'
        document.getElementById("RMN1").style.display = 'none'
        document.getElementById("RMN2CHECK").checked = false
        document.getElementById("RMN2CHECK").style.display = 'none'
        document.getElementById("RMN2").style.display = 'none'
    }

//Nuker Nerf
    if (race == "HM" || race == "EM" || race == "OM" || race == "DM") {
        if (AType != "R") {
            BuffASPD = BuffASPD * 0.8;
            BuffCAST = BuffCAST * 0.5
        }
        if (WpnMAS == "Bow" || WpnType == "Polearm") {
            BuffACC = BuffACC - 8;
            BuffCAST = BuffCAST * 0.7
        }
    }
    if (document.getElementById("HMO1CHECK").checked == true && AType == "H" || document.getElementById("HMO2CHECK").checked == true && AType == "H" || document.getElementById("HMO3CHECK").checked == true && AType == "H") {
        BuffCAST = BuffCAST * 1.71;
        BuffASPD = BuffASPD * 1.25
    }
    if (document.getElementById("LMO1CHECK").checked == true && AType == "L" || document.getElementById("LMO2CHECK").checked == true && AType == "L" || document.getElementById("LMO3CHECK").checked == true && AType == "L") {
        BuffCAST = BuffCAST * 1.9;
        BuffASPD = BuffASPD * 1.25
    }
    if (document.getElementById("LMSCHECK").checked == true && AType == "L") {
        BuffCAST = BuffCAST * 1.88;
        BuffASPD = BuffASPD * 1.25
    }
    if (document.getElementById("LMH1CHECK").checked == true && AType == "L" || document.getElementById("LMH2CHECK").checked == true && AType == "L") {
        BuffCAST = BuffCAST * 1.91;
        BuffASPD = BuffASPD * 1.25
    }
    if (document.getElementById("HMPCHECK").checked == true && AType == "H") {
        BuffCAST = BuffCAST * 1.68;
        BuffASPD = BuffASPD * 1.25
    }

//Passives
//Weapon Mastery for Fighter Classes
    var wmf = document.getElementById("WMF").value
    if (document.getElementById("WMFCHECK").checked == false) {
        document.getElementById("WMF").disabled = true;
    } else {
        document.getElementById("WMF").disabled = false;
        AddPATK = AddPATK + WMF[wmf]
    }
//Weapon Mastery for Mystic Classes
    var wmm1 = document.getElementById("WMM1").value
    if (document.getElementById("WMM1CHECK").checked == false) {
        document.getElementById("WMM1").disabled = true;
    } else {
        document.getElementById("WMM1").disabled = false;
        AddPATK = AddPATK + WMMPATK[wmm1];
        AddMATK = AddMATK + WMMMATK[wmm1]
    }
    var wmm2 = document.getElementById("WMM2").value
    if (document.getElementById("WMM2CHECK").checked == false) {
        document.getElementById("WMM2").disabled = true;
    } else {
        document.getElementById("WMM2").disabled = false;
        AddPATK = AddPATK + WMMPATK[wmm2];
        AddMATK = AddMATK + WMMMATK[wmm2]
    }
    var wmm3 = document.getElementById("WMM3").value
    if (document.getElementById("WMM3CHECK").checked == false) {
        document.getElementById("WMM3").disabled = true;
    } else {
        document.getElementById("WMM3").disabled = false;
        AddPATK = AddPATK + WMMPATK[wmm3];
        AddMATK = AddMATK + WMMMATK[wmm3]
    }
//Sword/Blunt Mastery (Warrior)
    var wsbm1 = document.getElementById("WSBM1").value
    if (document.getElementById("WSBM1CHECK").checked == false) {
        document.getElementById("WSBM1").disabled = true;
    } else if (document.getElementById("WSBM1CHECK").checked == true && (WpnMAS == "Blunt" || WpnMAS == "Sword")) {
        document.getElementById("WSBM1").disabled = false;
        AddPATK = AddPATK + MTYPE1[wsbm1]
    } else if (document.getElementById("WSBM1CHECK").checked == true) {
        document.getElementById("WSBM1").disabled = false;
    }
    var wsbm2 = document.getElementById("WSBM2").value
    if (document.getElementById("WSBM2CHECK").checked == false) {
        document.getElementById("WSBM2").disabled = true;
    } else if (document.getElementById("WSBM2CHECK").checked == true && (WpnMAS == "Blunt" || WpnMAS == "Sword")) {
        document.getElementById("WSBM2").disabled = false;
        AddPATK = AddPATK + MTYPE1[wsbm2]
    } else if (document.getElementById("WSBM2CHECK").checked == true) {
        document.getElementById("WSBM2").disabled = false;
    }
//Blunt Mastery
    var bluntm1 = document.getElementById("BLUNTM1").value
    if (document.getElementById("BLUNTM1CHECK").checked == false) {
        document.getElementById("BLUNTM1").disabled = true;
    } else if (document.getElementById("BLUNTM1CHECK").checked == true && WpnMAS == "Blunt") {
        document.getElementById("BLUNTM1").disabled = false;
        AddPATK = AddPATK + MTYPE1[bluntm1];
    } else {
        document.getElementById("BLUNTM1").disabled = false;
    }
    var bluntm2 = document.getElementById("BLUNTM2").value
    if (document.getElementById("BLUNTM2CHECK").checked == false) {
        document.getElementById("BLUNTM2").disabled = true;
    } else if (document.getElementById("BLUNTM2CHECK").checked == true && WpnMAS == "Blunt") {
        document.getElementById("BLUNTM2").disabled = false;
        AddPATK = AddPATK + MTYPE1[bluntm2];
        AddSPEED = AddSPEED + BLUNTMSPEED[bluntm2]
    } else {
        document.getElementById("BLUNTM2").disabled = false;
    }
//Polearm Mastery
    var polem1 = document.getElementById("POLEM1").value
    if (document.getElementById("POLEM1CHECK").checked == false) {
        document.getElementById("POLEM1").disabled = true;
    } else if (document.getElementById("POLEM1CHECK").checked == true && WpnMAS == "Polearm") {
        document.getElementById("POLEM1").disabled = false;
        AddPATK = AddPATK + MTYPE1[polem1]
    } else {
        document.getElementById("POLEM1").disabled = false;
    }
    var polem2 = document.getElementById("POLEM2").value
    if (document.getElementById("POLEM2CHECK").checked == false) {
        document.getElementById("POLEM2").disabled = true;
    } else if (document.getElementById("POLEM2CHECK").checked == true && WpnMAS == "Polearm") {
        document.getElementById("POLEM2").disabled = false;
        AddPATK = AddPATK + MTYPE1[polem2]
    } else {
        document.getElementById("POLEM2").disabled = false;
    }
//Fist Mastery
    var fistm1 = document.getElementById("FISTM1").value
    if (document.getElementById("FISTM1CHECK").checked == false) {
        document.getElementById("FISTM1").disabled = true;
    } else if (document.getElementById("FISTM1CHECK").checked == true && WpnMAS == "Fist") {
        document.getElementById("FISTM1").disabled = false;
        AddPATK = AddPATK + MTYPE1[fistm1]
    } else {
        document.getElementById("FISTM1").disabled = false;
    }
    var fistm2 = document.getElementById("FISTM2").value
    if (document.getElementById("FISTM2CHECK").checked == false) {
        document.getElementById("FISTM2").disabled = true;
    } else if (document.getElementById("FISTM2CHECK").checked == true && WpnMAS == "Fist") {
        document.getElementById("FISTM2").disabled = false;
        AddPATK = AddPATK + MTYPE1[fistm2]
    } else {
        document.getElementById("FISTM2").disabled = false;
    }
//Sword/Blunt Mastery (Knight)
    var ksbm1 = document.getElementById("KSBM1").value
    if (document.getElementById("KSBM1CHECK").checked == false) {
        document.getElementById("KSBM1").disabled = true;
    } else if (document.getElementById("KSBM1CHECK").checked == true && (WpnMAS == "Sword" || WpnMAS == "Blunt")) {
        document.getElementById("KSBM1").disabled = false;
        AddPATK = AddPATK + KNIGHTMASTERY[ksbm1]
    } else {
        document.getElementById("KSBM1").disabled = false;
    }
    var ksbm2 = document.getElementById("KSBM2").value
    if (document.getElementById("KSBM2CHECK").checked == false) {
        document.getElementById("KSBM2").disabled = true;
    } else if (document.getElementById("KSBM2CHECK").checked == true && (WpnMAS == "Sword" || WpnMAS == "Blunt")) {
        document.getElementById("KSBM2").disabled = false;
        AddPATK = AddPATK + KNIGHTMASTERY[ksbm2]
    } else {
        document.getElementById("KSBM2").disabled = false;
    }
//Dagger Mastery
    var daggerm1 = document.getElementById("DAGGERM1").value
    if (document.getElementById("DAGGERM1CHECK").checked == false) {
        document.getElementById("DAGGERM1").disabled = true;
    } else if (document.getElementById("DAGGERM1CHECK").checked == true && WpnMAS == "Dagger") {
        document.getElementById("DAGGERM1").disabled = false;
        AddPATK = AddPATK + DAGGERM[daggerm1]
    } else {
        document.getElementById("DAGGERM1").disabled = false;
    }
    var daggerm2 = document.getElementById("DAGGERM2").value
    if (document.getElementById("DAGGERM2CHECK").checked == false) {
        document.getElementById("DAGGERM2").disabled = true;
    } else if (document.getElementById("DAGGERM2CHECK").checked == true && WpnMAS == "Dagger") {
        document.getElementById("DAGGERM2").disabled = false;
        AddPATK = AddPATK + DAGGERM[daggerm2]
    } else {
        document.getElementById("DAGGERM2").disabled = false;
    }
//Bow Mastery
    var bowm1 = document.getElementById("BOWM1").value
    if (document.getElementById("BOWM1CHECK").checked == false) {
        document.getElementById("BOWM1").disabled = true;
    } else if (document.getElementById("BOWM1CHECK").checked == true && WpnMAS == "Bow") {
        document.getElementById("BOWM1").disabled = false;
        AddPATK = AddPATK + BOWM[bowm1]
    } else {
        document.getElementById("BOWM1").disabled = false;
    }
    var bowm2 = document.getElementById("BOWM2").value
    if (document.getElementById("BOWM2CHECK").checked == false) {
        document.getElementById("BOWM2").disabled = true;
    } else if (document.getElementById("BOWM2CHECK").checked == true && WpnMAS == "Bow") {
        document.getElementById("BOWM2").disabled = false;
        AddPATK = AddPATK + BOWM[bowm2]
    } else {
        document.getElementById("BOWM2").disabled = false;
    }
//Dual Weapon Mastery
    var dualm = document.getElementById("DUALM").value
    if (document.getElementById("DUALMCHECK").checked == false) {
        document.getElementById("DUALM").disabled = true;
    } else if (document.getElementById("DUALMCHECK").checked == true && WpnMAS == "Duals") {
        document.getElementById("DUALM").disabled = false;
        AddPATK = AddPATK + DUALM[dualm]
    } else {
        document.getElementById("DUALM").disabled = false;
    }
//Two Handed Weapon Mastery
    var thm1 = document.getElementById("THM1").value
    if (document.getElementById("THM1CHECK").checked == false) {
        document.getElementById("THM1").disabled = true;
    } else if (document.getElementById("THM1CHECK").checked == true && (WpnType == "2hs" || WpnType == "2hb")) {
        document.getElementById("THM1").disabled = false;
        AddPATK = AddPATK + THM[thm1];
        BuffACC = BuffACC + 3
    } else {
        document.getElementById("THM1").disabled = false;
    }
    var thm2 = document.getElementById("THM2").value
    if (document.getElementById("THM2CHECK").checked == false) {
        document.getElementById("THM2").disabled = true;
    } else if (document.getElementById("THM2CHECK").checked == true && (WpnType == "2hs" || WpnType == "2hb")) {
        document.getElementById("THM2").disabled = false;
        AddPATK = AddPATK + THM[thm2];
        BuffACC = BuffACC + 3
    } else {
        document.getElementById("THM2").disabled = false;
    }

//Armor Mastery (Fighter)
    var amf = document.getElementById("AMF").value
    if (document.getElementById("AMFCHECK").checked == false) {
        document.getElementById("AMF").disabled = true;
    } else if (document.getElementById("AMFCHECK").checked == true && AType == "L") {
        document.getElementById("AMF").disabled = false;
        AddPDEF = AddPDEF + AMF[amf];
        BuffEVA = BuffEVA + AMFEVA[amf]
    } else if (document.getElementById("AMFCHECK").checked == true && AType != "L") {
        document.getElementById("AMF").disabled = false;
        AddPDEF = AddPDEF + AMF[amf];
    }
//Armor Mastery (Mystic)
    var amm = document.getElementById("AMM").value
    if (document.getElementById("AMMCHECK").checked == false) {
        document.getElementById("AMM").disabled = true;
    } else {
        document.getElementById("AMM").disabled = false;
        AddPDEF = AddPDEF + AMM[amm]
    }
//Heavy Armor Mastery (Knight)
    var hmk1 = document.getElementById("HMK1").value
    if (document.getElementById("HMK1CHECK").checked == false) {
        document.getElementById("HMK1").disabled = true;
    } else if (document.getElementById("HMK1CHECK").checked == true && AType == "H") {
        document.getElementById("HMK1").disabled = false;
        AddPDEF = AddPDEF + HMK[hmk1]
    } else {
        document.getElementById("HMK1").disabled = false;
    }
    var hmk2 = document.getElementById("HMK2").value
    if (document.getElementById("HMK2CHECK").checked == false) {
        document.getElementById("HMK2").disabled = true;
    } else if (document.getElementById("HMK2CHECK").checked == true && AType == "H") {
        document.getElementById("HMK2").disabled = false;
        AddPDEF = AddPDEF + HMK[hmk2]
    } else {
        document.getElementById("HMK2").disabled = false;
    }
//Heavy Armor Mastery (Warrior)
    var hmw1 = document.getElementById("HMW1").value
    if (document.getElementById("HMW1CHECK").checked == false) {
        document.getElementById("HMW1").disabled = true;
    } else if (document.getElementById("HMW1CHECK").checked == true && AType == "H") {
        document.getElementById("HMW1").disabled = false;
        AddPDEF = AddPDEF + HMW[hmw1]
    } else {
        document.getElementById("HMW1").disabled = false;
    }
    var hmw2 = document.getElementById("HMW2").value
    if (document.getElementById("HMW2CHECK").checked == false) {
        document.getElementById("HMW2").disabled = true;
    } else if (document.getElementById("HMW2CHECK").checked == true && AType == "H") {
        document.getElementById("HMW2").disabled = false;
        AddPDEF = AddPDEF + HMW[hmw2]
    } else {
        document.getElementById("HMW2").disabled = false;
    }
//Heavy Armor Mastery (Orc Mystic)
    var hmo1 = document.getElementById("HMO1").value
    if (document.getElementById("HMO1CHECK").checked == false) {
        document.getElementById("HMO1").disabled = true;
    } else if (document.getElementById("HMO1CHECK").checked == true && AType == "H") {
        document.getElementById("HMO1").disabled = false;
        AddPDEF = AddPDEF + HMO[hmo1]
    } else {
        document.getElementById("HMO1").disabled = false;
    }
    var hmo2 = document.getElementById("HMO2").value
    if (document.getElementById("HMO2CHECK").checked == false) {
        document.getElementById("HMO2").disabled = true;
    } else if (document.getElementById("HMO2CHECK").checked == true && AType == "H") {
        document.getElementById("HMO2").disabled = false;
        AddPDEF = AddPDEF + HMO[hmo2]
    } else {
        document.getElementById("HMO2").disabled = false;
    }
    var hmo3 = document.getElementById("HMO3").value
    if (document.getElementById("HMO3CHECK").checked == false) {
        document.getElementById("HMO3").disabled = true;
    } else if (document.getElementById("HMO3CHECK").checked == true && AType == "H") {
        document.getElementById("HMO3").disabled = false;
        AddPDEF = AddPDEF + HMO[hmo3]
    } else {
        document.getElementById("HMO3").disabled = false;
    }
//Heavy Armor Mastery (Prophet)
    var hmp = document.getElementById("HMP").value
    if (document.getElementById("HMPCHECK").checked == false) {
        document.getElementById("HMP").disabled = true;
    } else if (document.getElementById("HMPCHECK").checked == true && AType == "H") {
        document.getElementById("HMP").disabled = false;
        AddPDEF = AddPDEF + HMP[hmp]
    } else {
        document.getElementById("HMP").disabled = false;
    }
//Light Armor Mastery (Warrior)
    var lmw1 = document.getElementById("LMW1").value
    if (document.getElementById("LMW1CHECK").checked == false) {
        document.getElementById("LMW1").disabled = true;
    } else if (document.getElementById("LMW1CHECK").checked == true && AType == "L") {
        document.getElementById("LMW1").disabled = false;
        AddPDEF = AddPDEF + LMW[lmw1]
        BuffEVA = BuffEVA + LMWEVA[lmw1]
    } else {
        document.getElementById("LMW1").disabled = false;
    }
    var lmw2 = document.getElementById("LMW2").value
    if (document.getElementById("LMW2CHECK").checked == false) {
        document.getElementById("LMW2").disabled = true;
    } else if (document.getElementById("LMW2CHECK").checked == true && AType == "L") {
        document.getElementById("LMW2").disabled = false;
        AddPDEF = AddPDEF + LMW[lmw2]
        BuffEVA = BuffEVA + LMWEVA[lmw2]
    } else {
        document.getElementById("LMW2").disabled = false;
    }
//Light Armor Mastery (Rogue)
    var lmr1 = document.getElementById("LMR1").value
    if (document.getElementById("LMR1CHECK").checked == false) {
        document.getElementById("LMR1").disabled = true;
    } else if (document.getElementById("LMR1CHECK").checked == true && AType == "L") {
        document.getElementById("LMR1").disabled = false;
        AddPDEF = AddPDEF + LMR[lmr1]
        BuffEVA = BuffEVA + LMREVA[lmr1]
    } else {
        document.getElementById("LMR1").disabled = false;
    }
    var lmr2 = document.getElementById("LMR2").value
    if (document.getElementById("LMR2CHECK").checked == false) {
        document.getElementById("LMR2").disabled = true;
    } else if (document.getElementById("LMR2CHECK").checked == true && AType == "L") {
        document.getElementById("LMR2").disabled = false;
        AddPDEF = AddPDEF + LMR[lmr2]
        BuffEVA = BuffEVA + LMREVA[lmr2]
    } else {
        document.getElementById("LMR2").disabled = false;
    }
//Light Armor Mastery (Orc Mystic)
    var lmo1 = document.getElementById("LMO1").value
    if (document.getElementById("LMO1CHECK").checked == false) {
        document.getElementById("LMO1").disabled = true;
    } else if (document.getElementById("LMO1CHECK").checked == true && AType == "L") {
        document.getElementById("LMO1").disabled = false;
        AddPDEF = AddPDEF + LMO[lmo1]
    } else {
        document.getElementById("LMO1").disabled = false;
    }
    var lmo2 = document.getElementById("LMO2").value
    if (document.getElementById("LMO2CHECK").checked == false) {
        document.getElementById("LMO2").disabled = true;
    } else if (document.getElementById("LMO2CHECK").checked == true && AType == "L") {
        document.getElementById("LMO2").disabled = false;
        AddPDEF = AddPDEF + LMO[lmo2]
    } else {
        document.getElementById("LMO2").disabled = false;
    }
    var lmo3 = document.getElementById("LMO3").value
    if (document.getElementById("LMO3CHECK").checked == false) {
        document.getElementById("LMO3").disabled = true;
    } else if (document.getElementById("LMO3CHECK").checked == true && AType == "L") {
        document.getElementById("LMO3").disabled = false;
        AddPDEF = AddPDEF + LMO[lmo3]
    } else {
        document.getElementById("LMO3").disabled = false;
    }
//Light Armor Mastery (Healer)
    var lmh1 = document.getElementById("LMH1").value
    if (document.getElementById("LMH1CHECK").checked == false) {
        document.getElementById("LMH1").disabled = true;
    } else if (document.getElementById("LMH1CHECK").checked == true && AType == "L") {
        document.getElementById("LMH1").disabled = false;
        AddPDEF = AddPDEF + LMH[lmh1]
    } else {
        document.getElementById("LMH1").disabled = false;
    }
    var lmh2 = document.getElementById("LMH2").value
    if (document.getElementById("LMH2CHECK").checked == false) {
        document.getElementById("LMH2").disabled = true;
    } else if (document.getElementById("LMH2CHECK").checked == true && AType == "L") {
        document.getElementById("LMH2").disabled = false;
        AddPDEF = AddPDEF + LMH[lmh2]
    } else {
        document.getElementById("LMH2").disabled = false;
    }
//Light Armor Mastery (Summoner)
    var lms = document.getElementById("LMS").value
    if (document.getElementById("LMSCHECK").checked == false) {
        document.getElementById("LMS").disabled = true;
    } else if (document.getElementById("LMSCHECK").checked == true && AType == "L") {
        document.getElementById("LMS").disabled = false;
        AddPDEF = AddPDEF + LMS[lms]
    } else {
        document.getElementById("LMS").disabled = false;
    }
//Robe Mastery (Nuker)
    var rmn1 = document.getElementById("RMN1").value
    if (document.getElementById("RMN1CHECK").checked == false) {
        document.getElementById("RMN1").disabled = true;
    } else if (document.getElementById("RMN1CHECK").checked == true && AType == "R") {
        document.getElementById("RMN1").disabled = false;
        AddPDEF = AddPDEF + RMN[rmn1]
    } else {
        document.getElementById("RMN1").disabled = false;
    }
    var rmn2 = document.getElementById("RMN2").value
    if (document.getElementById("RMN2CHECK").checked == false) {
        document.getElementById("RMN2").disabled = true;
    } else if (document.getElementById("RMN2CHECK").checked == true && AType == "R") {
        document.getElementById("RMN2").disabled = false;
        AddPDEF = AddPDEF + RMN[rmn2]
    } else {
        document.getElementById("RMN2").disabled = false;
    }
//Robe Armor Mastery (Healer)
    var rmh1 = document.getElementById("RMH1").value
    if (document.getElementById("RMH1CHECK").checked == false) {
        document.getElementById("RMH1").disabled = true;
    } else if (document.getElementById("RMH1CHECK").checked == true && AType == "R") {
        document.getElementById("RMH1").disabled = false;
        AddPDEF = AddPDEF + RMH[rmh1]
    } else {
        document.getElementById("RMH1").disabled = false;
    }
    var rmh2 = document.getElementById("RMH2").value
    if (document.getElementById("RMH2CHECK").checked == false) {
        document.getElementById("RMH2").disabled = true;
    } else if (document.getElementById("RMH2CHECK").checked == true && AType == "R") {
        document.getElementById("RMH2").disabled = false;
        AddPDEF = AddPDEF + RMH[rmh2]
    } else {
        document.getElementById("RMH2").disabled = false;
    }
//Robe Armor Mastery (Orc Mystic)
    var rmo1 = document.getElementById("RMO1").value
    if (document.getElementById("RMO1CHECK").checked == false) {
        document.getElementById("RMO1").disabled = true;
    } else if (document.getElementById("RMO1CHECK").checked == true && AType == "R") {
        document.getElementById("RMO1").disabled = false;
        AddPDEF = AddPDEF + RMO[rmo1]
    } else {
        document.getElementById("RMO1").disabled = false;
    }
    var rmo2 = document.getElementById("RMO2").value
    if (document.getElementById("RMO2CHECK").checked == false) {
        document.getElementById("RMO2").disabled = true;
    } else if (document.getElementById("RMO2CHECK").checked == true && AType == "R") {
        document.getElementById("RMO2").disabled = false;
        AddPDEF = AddPDEF + RMO[rmo2]
    } else {
        document.getElementById("RMO2").disabled = false;
    }
    var rmo3 = document.getElementById("RMO3").value
    if (document.getElementById("RMO3CHECK").checked == false) {
        document.getElementById("RMO3").disabled = true;
    } else if (document.getElementById("RMO3CHECK").checked == true && AType == "R") {
        document.getElementById("RMO3").disabled = false;
        AddPDEF = AddPDEF + RMO[rmo3]
    } else {
        document.getElementById("RMO3").disabled = false;
    }
//Magic Resistance
    var mr1 = document.getElementById("MR1").value
    if (document.getElementById("MR1CHECK").checked == false) {
        document.getElementById("MR1").disabled = true;
    } else {
        document.getElementById("MR1").disabled = false;
        AddMDEF = AddMDEF + MR[mr1]
    }
    var mr2 = document.getElementById("MR2").value
    if (document.getElementById("MR2CHECK").checked == false) {
        document.getElementById("MR2").disabled = true;
    } else {
        document.getElementById("MR2").disabled = false;
        AddMDEF = AddMDEF + MR[mr2]
    }
//Anti-Magic
    var am1 = document.getElementById("AM1").value
    if (document.getElementById("AM1CHECK").checked == false) {
        document.getElementById("AM1").disabled = true;
    } else {
        document.getElementById("AM1").disabled = false;
        AddMDEF = AddMDEF + AM[am1]
    }
    var am2 = document.getElementById("AM2").value
    if (document.getElementById("AM2CHECK").checked == false) {
        document.getElementById("AM2").disabled = true;
    } else {
        document.getElementById("AM2").disabled = false;
        AddMDEF = AddMDEF + AM[am2]
    }
    var am3 = document.getElementById("AM3").value
    if (document.getElementById("AM3CHECK").checked == false) {
        document.getElementById("AM3").disabled = true;
    } else {
        document.getElementById("AM3").disabled = false;
        AddMDEF = AddMDEF + AM[am3]
    }
//Agile Movement
    var agilemovement1 = document.getElementById("AGILEMOVEMENT1").value
    if (document.getElementById("AGILEMOVEMENT1CHECK").checked == false) {
        document.getElementById("AGILEMOVEMENT1").disabled = true;
    } else if (document.getElementById("AGILEMOVEMENT1CHECK").checked == true && AType == "L") {
        document.getElementById("AGILEMOVEMENT1").disabled = false;
        BuffACC = BuffACC + AGILEMOVEMENT[agilemovement1]
        AddSPEED = AddSPEED + AGILEMOVEMENTSPEED[agilemovement1]
    } else {
        document.getElementById("AGILEMOVEMENT1").disabled = false;
    }
    var agilemovement2 = document.getElementById("AGILEMOVEMENT2").value
    if (document.getElementById("AGILEMOVEMENT2CHECK").checked == false) {
        document.getElementById("AGILEMOVEMENT2").disabled = true;
    } else if (document.getElementById("AGILEMOVEMENT2CHECK").checked == true && AType == "L") {
        document.getElementById("AGILEMOVEMENT2").disabled = false;
        BuffACC = BuffACC + AGILEMOVEMENT[agilemovement2]
        AddSPEED = AddSPEED + AGILEMOVEMENTSPEED[agilemovement2]
    } else {
        document.getElementById("AGILEMOVEMENT2").disabled = false;
    }
//Boost Attack Speed
    var boostaspd1 = document.getElementById("BOOSTASPD1").value
    if (document.getElementById("BOOSTASPD1CHECK").checked == false) {
        document.getElementById("BOOSTASPD1").disabled = true;
    } else {
        document.getElementById("BOOSTASPD1").disabled = false;
        BuffASPD = BuffASPD * BOOSTASPD[boostaspd1]
    }
    var boostaspd2 = document.getElementById("BOOSTASPD2").value
    if (document.getElementById("BOOSTASPD2CHECK").checked == false) {
        document.getElementById("BOOSTASPD2").disabled = true;
    } else {
        document.getElementById("BOOSTASPD2").disabled = false;
        BuffASPD = BuffASPD * BOOSTASPD[boostaspd2]
    }
//Boost Evasion
    var boostevasion1 = document.getElementById("BOOSTEVASION1").value
    if (document.getElementById("BOOSTEVASION1CHECK").checked == false) {
        document.getElementById("BOOSTEVASION1").disabled = true;
    } else {
        document.getElementById("BOOSTEVASION1").disabled = false;
        BuffEVA = BuffEVA + BOOSTEVASION[boostevasion1]
    }
    var boostevasion2 = document.getElementById("BOOSTEVASION2").value
    if (document.getElementById("BOOSTEVASION2CHECK").checked == false) {
        document.getElementById("BOOSTEVASION2").disabled = true;
    } else {
        document.getElementById("BOOSTEVASION2").disabled = false;
        BuffEVA = BuffEVA + BOOSTEVASION[boostevasion2]
    }
//Boost HP
    var boosthp1 = document.getElementById("BOOSTHP1").value
    if (document.getElementById("BOOSTHP1CHECK").checked == false) {
        document.getElementById("BOOSTHP1").disabled = true;
    } else {
        document.getElementById("BOOSTHP1").disabled = false;
        AddHP = AddHP + BOOSTHP[boosthp1]
        AddCP = AddCP + BOOSTHPCP[boosthp1]
    }
    var boosthp2 = document.getElementById("BOOSTHP2").value
    if (document.getElementById("BOOSTHP2CHECK").checked == false) {
        document.getElementById("BOOSTHP2").disabled = true;
    } else {
        document.getElementById("BOOSTHP2").disabled = false;
        AddHP = AddHP + BOOSTHP[boosthp2]
        AddCP = AddCP + BOOSTHPCP[boosthp2]
    }
    var boosthp3 = document.getElementById("BOOSTHP3").value
    if (document.getElementById("BOOSTHP3CHECK").checked == false) {
        document.getElementById("BOOSTHP3").disabled = true;
    } else {
        document.getElementById("BOOSTHP3").disabled = false;
        AddHP = AddHP + BOOSTHP[boosthp3]
        AddCP = AddCP + BOOSTHPCP[boosthp3]
    }
//Boost Mana
    var boostmp1 = document.getElementById("BOOSTMP1").value
    if (document.getElementById("BOOSTMP1CHECK").checked == false) {
        document.getElementById("BOOSTMP1").disabled = true;
    } else {
        document.getElementById("BOOSTMP1").disabled = false;
        AddMP = AddMP + BOOSTMP[boostmp1]
    }
    var boostmp2 = document.getElementById("BOOSTMP2").value
    if (document.getElementById("BOOSTMP2CHECK").checked == false) {
        document.getElementById("BOOSTMP2").disabled = true;
    } else {
        document.getElementById("BOOSTMP2").disabled = false;
        AddMP = AddMP + BOOSTMP[boostmp2]
    }
//Clan Aegis
    var clanpdef = document.getElementById("CLANPDEF").value
    if (document.getElementById("CLANPDEFCHECK").checked == false) {
        document.getElementById("CLANPDEF").disabled = true;
    } else {
        document.getElementById("CLANPDEF").disabled = false;
        BuffPDEF = BuffPDEF * CLANAEGIS[clanpdef]
    }
//Clan Magic Protection
    var clanmdef = document.getElementById("CLANMDEF").value
    if (document.getElementById("CLANMDEFCHECK").checked == false) {
        document.getElementById("CLANMDEF").disabled = true;
    } else {
        document.getElementById("CLANMDEF").disabled = false;
        BuffMDEF = BuffMDEF * CLANMAGICPROTECTION[clanmdef]
    }
//Clan Might
    var clanpatk = document.getElementById("CLANPATK").value
    if (document.getElementById("CLANPATKCHECK").checked == false) {
        document.getElementById("CLANPATK").disabled = true;
    } else {
        document.getElementById("CLANPATK").disabled = false;
        BuffPATK = BuffPATK * CLANMIGHT[clanpatk]
    }
//Clan Spirituality
    var clancp = document.getElementById("CLANCP").value
    if (document.getElementById("CLANCPCHECK").checked == false) {
        document.getElementById("CLANCP").disabled = true;
    } else {
        document.getElementById("CLANCP").disabled = false;
        BuffCP = BuffCP * 1.06
    }
//Clan Vitality
    var clanhp = document.getElementById("CLANHP").value
    if (document.getElementById("CLANHPCHECK").checked == false) {
        document.getElementById("CLANHP").disabled = true;
    } else {
        document.getElementById("CLANHP").disabled = false;
        BuffHP = BuffHP * CLANVITALITY[clanhp]
    }
//Critical Chance
    var criticalchance1 = document.getElementById("CRITICALCHANCE1").value
    if (document.getElementById("CRITICALCHANCE1CHECK").checked == false) {
        document.getElementById("CRITICALCHANCE1").disabled = true;
    } else {
        document.getElementById("CRITICALCHANCE1").disabled = false;
        subcritical = subcritical + (basecritical * CRITICALCHANCE[criticalchance1])
    }
    var criticalchance2 = document.getElementById("CRITICALCHANCE2").value
    if (document.getElementById("CRITICALCHANCE2CHECK").checked == false) {
        document.getElementById("CRITICALCHANCE2").disabled = true;
    } else {
        document.getElementById("CRITICALCHANCE2").disabled = false;
        subcritical = subcritical + (basecritical * CRITICALCHANCE[criticalchance2])
    }
//Fast Spell Casting
    var fastcast1 = document.getElementById("FASTCAST1").value
    if (document.getElementById("FASTCAST1CHECK").checked == false) {
        document.getElementById("FASTCAST1").disabled = true;
    } else {
        document.getElementById("FASTCAST1").disabled = false;
        BuffCAST = BuffCAST * FASTCAST[fastcast1]
    }
    var fastcast2 = document.getElementById("FASTCAST2").value
    if (document.getElementById("FASTCAST2CHECK").checked == false) {
        document.getElementById("FASTCAST2").disabled = true;
    } else {
        document.getElementById("FASTCAST2").disabled = false;
        BuffCAST = BuffCAST * FASTCAST[fastcast2]
    }
//Final Fortress
    var finalfortress = document.getElementById("FINALFORTRESS").value
    if (document.getElementById("FINALFORTRESSCHECK").checked == false) {
        document.getElementById("FINALFORTRESS").disabled = true;
    } else {
        document.getElementById("FINALFORTRESS").disabled = false;
        AddPDEF30 = AddPDEF30 + FINALFORTRESS[finalfortress]
    }
//Final Frenzy
    var finalfrenzy = document.getElementById("FINALFRENZY").value
    if (document.getElementById("FINALFRENZYCHECK").checked == false) {
        document.getElementById("FINALFRENZY").disabled = true;
    } else {
        document.getElementById("FINALFRENZY").disabled = false;
        AddPATK30 = AddPATK30 + FINALFRENZY[finalfrenzy]
    }
//Quick Step
    var quickstep1 = document.getElementById("QUICKSTEP1").value
    if (document.getElementById("QUICKSTEP1CHECK").checked == false) {
        document.getElementById("QUICKSTEP1").disabled = true;
    } else {
        document.getElementById("QUICKSTEP1").disabled = false;
        AddSPEED = AddSPEED + QUICKSTEP[quickstep1]
    }
    var quickstep2 = document.getElementById("QUICKSTEP2").value
    if (document.getElementById("QUICKSTEP2CHECK").checked == false) {
        document.getElementById("QUICKSTEP2").disabled = true;
    } else {
        document.getElementById("QUICKSTEP2").disabled = false;
        AddSPEED = AddSPEED + QUICKSTEP[quickstep2]
    }
//Shadow Sense
    var shadowsense = document.getElementById("SHADOWSENSE").value
    if (document.getElementById("SHADOWSENSECHECK").checked == false) {
        document.getElementById("SHADOWSENSE").disabled = true;
    } else {
        document.getElementById("SHADOWSENSE").disabled = false;
        BuffACC = BuffACC + 3
    }

//Base Stat Display
    document.getElementById("STR").innerHTML = STR
    document.getElementById("CON").innerHTML = CON
    document.getElementById("DEX").innerHTML = DEX
    document.getElementById("INT").innerHTML = INT
    document.getElementById("WIT").innerHTML = WIT
    document.getElementById("MEN").innerHTML = MEN

//HP calculation
    var hp = BaseHP * CONMOD * BuffHP + NECKLACEHP + AddHP
    if (hp < 1) {
        hp = 1
    }
    var hp2 = Math.floor(hp)
    var hp60 = hp * .6
    if (hp60 < 1) {
        hp60 = 0
    }
    var hp602 = Math.floor(hp60)
    var hp30 = hp * .3
    if (hp30 < 1) {
        hp30 = 0
    }
    var hp302 = Math.floor(hp30)
    if (document.getElementById("HP1").checked == true) {
        document.getElementById("HP").innerHTML = (hp2)
    } else if (document.getElementById("HP6").checked == true && hp602 <= 0) {
        document.getElementById("HP").innerHTML = (hp602 + "/" + hp2);
        alert("You have died. In a stat calculator. You lose the Internets.")
    } else if (document.getElementById("HP6").checked == true && hp602 >= 1) {
        document.getElementById("HP").innerHTML = (hp602 + "/" + hp2)
    } else if (document.getElementById("HP3").checked == true && hp302 <= 0) {
        document.getElementById("HP").innerHTML = (hp302 + "/" + hp2);
        alert("You have died. In a stat calculator. You lose the Internets.")
    } else if (document.getElementById("HP3").checked == true && hp302 >= 1) {
        document.getElementById("HP").innerHTML = (hp302 + "/" + hp2)
    }

//CP calculation
    var cp = BaseCP * CONMOD * BuffCP + AddCP
    var cp2 = Math.floor(cp)
    document.getElementById("CP").innerHTML = cp2

//MP calculation
    var mp = BaseMP * MENMOD * BuffMP + AddMP
    var mp2 = Math.floor(mp)
    document.getElementById("MP").innerHTML = mp2

//P.Atk. calculation
    var WpnPATK = WpnPATK + (weaponunderenchant * underPATK) + (weaponoverenchant * overPATK)
    if (document.getElementById("WMM1CHECK").checked == true || document.getElementById("WMM2CHECK").checked == true || document.getElementById("WMM3CHECK").checked == true) {
        MasteryPATK = 1.45
    } else if (document.getElementById("WMFCHECK").checked == true) {
        MasteryPATK = 1.085
    }
    var patk = WpnPATK * STRMOD * LVLMOD * NECKLACEPATK * MasteryPATK * BuffPATK + AddPATK
    var patk2 = Math.floor(patk)
    var patk60 = WpnPATK * STRMOD * LVLMOD * NECKLACEPATK * MasteryPATK * BuffPATK * BuffPATK60 + AddPATK + AddPATK60
    var patk602 = Math.floor(patk60)
    var patk30 = WpnPATK * STRMOD * LVLMOD * NECKLACEPATK * MasteryPATK * BuffPATK * BuffPATK60 * BuffPATK30 + AddPATK + AddPATK60 + AddPATK30
    var patk302 = Math.floor(patk30)
    if (document.getElementById("HP1").checked == true) {
        document.getElementById("PATK").innerHTML = patk2
    } else if (document.getElementById("HP6").checked == true) {
        document.getElementById("PATK").innerHTML = patk602
    } else if (document.getElementById("HP3").checked == true) {
        document.getElementById("PATK").innerHTML = patk302
    }

//M.Atk. calculation
    var WpnMATK = WpnMATK + (weaponunderenchant * underMATK) + (weaponoverenchant * overMATK)
    if (document.getElementById("WMM1CHECK").checked == true || document.getElementById("WMM2CHECK").checked == true || document.getElementById("WMM3CHECK").checked == true) {
        MasteryMATK = WpnMATK * (INTMOD * INTMOD) * (LVLMOD * LVLMOD) * 0.17 * BuffMATK
    }
    var matk = WpnMATK * (INTMOD * INTMOD) * (LVLMOD * LVLMOD) * NECKLACEMATK * BuffMATK + AddMATK + MasteryMATK
    var matk2 = Math.floor(matk)
    document.getElementById("MATK").innerHTML = matk2

//P.Def. calculation
    var Cloak = 4
    apdef = Cloak + Helmet + Upper + Lower + Glove + Boot
    pdef = apdef * LVLMOD * BuffPDEF + AddPDEF
    pdef2 = Math.floor(pdef)
    pdef60 = apdef * LVLMOD * BuffPDEF * BuffPDEF60 + AddPDEF + AddPDEF60
    pdef602 = Math.floor(pdef60)
    pdef30 = apdef * LVLMOD * BuffPDEF * BuffPDEF60 * BuffPDEF30 + AddPDEF + AddPDEF60 + AddPDEF30
    pdef302 = Math.floor(pdef30)
    if (document.getElementById("HP1").checked == true) {
        document.getElementById("PDEF").innerHTML = pdef2
    } else if (document.getElementById("HP6").checked == true) {
        document.getElementById("PDEF").innerHTML = pdef602
    } else if (document.getElementById("HP3").checked == true) {
        document.getElementById("PDEF").innerHTML = pdef302
    }

//M.Def. calculation
    jmdef = Ring1 + Ring2 + Earring1 + Earring2 + Necklace
    mdef = jmdef * LVLMOD * MENMOD * BuffMDEF + AddMDEF
    mdef2 = Math.floor(mdef)
    document.getElementById("MDEF").innerHTML = mdef2
    mdef60 = jmdef * LVLMOD * MENMOD * BuffMDEF * BuffMDEF60 + AddMDEF + AddMDEF60
    mdef602 = Math.floor(mdef60)
    mdef30 = jmdef * LVLMOD * MENMOD * BuffMDEF * BuffMDEF60 * BuffMDEF30 + AddMDEF + AddMDEF60 + AddMDEF30
    mdef302 = Math.floor(mdef30)
    if (document.getElementById("HP1").checked == true) {
        document.getElementById("MDEF").innerHTML = mdef2
    } else if (document.getElementById("HP6").checked == true) {
        document.getElementById("MDEF").innerHTML = mdef602
    } else if (document.getElementById("HP3").checked == true) {
        document.getElementById("MDEF").innerHTML = mdef302
    }

//Accuracy Calculation
    var Accuracy = (Math.sqrt(DEX) * 6) + LVL + WpnAcc + RINGOFQUEENACC + RINGOFBAIUMACC + RINGOFCOREACC + BuffACC
    var Accuracy2 = Math.floor(Accuracy)
    var Accuracy60 = Accuracy2 + BuffACC60
    var Accuracy602 = Math.floor(Accuracy60)
    var Accuracy30 = Accuracy2 + BuffACC30 + BuffACC60
    var Accuracy302 = Math.floor(Accuracy30)
    document.getElementById("ACCURACY").innerHTML = Accuracy2
    if (document.getElementById("HP1").checked == true) {
        document.getElementById("ACCURACY").innerHTML = Accuracy2
    } else if (document.getElementById("HP6").checked == true) {
        document.getElementById("ACCURACY").innerHTML = Accuracy602
    } else if (document.getElementById("HP3").checked == true) {
        document.getElementById("ACCURACY").innerHTML = Accuracy302
    }

//Evasion Calculation
    var Evasion = (Math.sqrt(DEX) * 6) + LVL + ShieldEvasion + BuffEVA
    var Evasion2 = Math.floor(Evasion)
    var Evasion60 = Evasion2 + BuffEVA60
    var Evasion602 = Math.floor(Evasion60)
    var Evasion30 = Evasion2 + BuffEVA30 + BuffEVA60
    var Evasion302 = Math.floor(Evasion30)
    if (document.getElementById("HP1").checked == true) {
        document.getElementById("EVASION").innerHTML = Evasion2
    } else if (document.getElementById("HP6").checked == true) {
        document.getElementById("EVASION").innerHTML = Evasion602
    } else if (document.getElementById("HP3").checked == true) {
        document.getElementById("EVASION").innerHTML = Evasion302
    }

//Critical calculation
    var finalcritical = basecritical + AddCRIT + subcritical
    var finalcritical2 = Math.floor(finalcritical)
    if (finalcritical2 > 500) {
        finalcritical2 = 500
    }
    var finalcritical60 = basecritical + AddCRIT + subcritical + AddCRIT60
    var finalcritical602 = Math.floor(finalcritical60)
    if (finalcritical602 > 500) {
        finalcritical602 = 500
    }
    var finalcritical30 = basecritical + AddCRIT + subcritical + AddCRIT60 + AddCRIT30
    var finalcritical302 = Math.floor(finalcritical30)
    if (finalcritical302 > 500) {
        finalcritical302 = 500
    }
    if (document.getElementById("HP1").checked == true) {
        document.getElementById("CRITICAL").innerHTML = finalcritical2
    } else if (document.getElementById("HP6").checked == true) {
        document.getElementById("CRITICAL").innerHTML = finalcritical602
    } else if (document.getElementById("HP3").checked == true) {
        document.getElementById("CRITICAL").innerHTML = finalcritical302
    }

//Speed calculation
    if (document.getElementById("WALK").checked == true) {
        var Speed = BaseWalk * DEXMOD * BuffSPEED + AddSPEED
        var Speed2 = Math.floor(Speed)
        var Speed60 = BaseWalk * DEXMOD * BuffSPEED * BuffSPEED60 + AddSPEED + AddSPEED60
        var Speed602 = Math.floor(Speed60)
        var Speed30 = BaseWalk * DEXMOD * BuffSPEED * BuffSPEED60 * BuffSPEED30 + AddSPEED + AddSPEED60 + AddSPEED30
        var Speed302 = Math.floor(Speed30)
    } else if (document.getElementById("WALK").checked == false) {
        var Speed = BaseRun * DEXMOD * BuffSPEED + AddSPEED
        var Speed2 = Math.floor(Speed)
        var Speed60 = BaseRun * DEXMOD * BuffSPEED * BuffSPEED60 + AddSPEED + AddSPEED60
        var Speed602 = Math.floor(Speed60)
        var Speed30 = BaseRun * DEXMOD * BuffSPEED * BuffSPEED60 * BuffSPEED30 + AddSPEED + AddSPEED60 + AddSPEED30
        var Speed302 = Math.floor(Speed30)
    }
    if (document.getElementById("HP1").checked == true) {
        document.getElementById("SPEED").innerHTML = Speed2
    } else if (document.getElementById("HP6").checked == true) {
        document.getElementById("SPEED").innerHTML = Speed602
    } else if (document.getElementById("HP3").checked == true) {
        document.getElementById("SPEED").innerHTML = Speed302
    }

//Atk. Spd. calculation
    var atkspd = WpnSpd * DEXMOD * RINGOFBAIUMASPD * BuffASPD + AddASPD
    var atkspd2 = Math.floor(atkspd)
    var atkspd60 = WpnSpd * DEXMOD * RINGOFBAIUMASPD * BuffASPD * BuffASPD60 + AddASPD
    var atkspd602 = Math.floor(atkspd60)
    var atkspd30 = WpnSpd * DEXMOD * RINGOFBAIUMASPD * BuffASPD * BuffASPD60 * BuffASPD30 + AddASPD
    var atkspd302 = Math.floor(atkspd30)
    if (document.getElementById("HP1").checked == true) {
        document.getElementById("ATKSPD").innerHTML = atkspd2
    } else if (document.getElementById("HP6").checked == true) {
        document.getElementById("ATKSPD").innerHTML = atkspd602
    } else if (document.getElementById("HP3").checked == true) {
        document.getElementById("ATKSPD").innerHTML = atkspd302
    }

//Casting Spd. calculation
    var castingspd = 333 * WITMOD * RINGOFBAIUMCAST * BuffCAST + AddCAST
    var castingspd2 = Math.floor(castingspd)
    document.getElementById("CASTINGSPD").innerHTML = castingspd2

    //document.getElementById("TEST").innerHTML = WpnPATK
}