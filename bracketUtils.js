function getFederalTaxRate(annualIncome, type="single"){
    // for 2017
    if(annualIncome < 0)
        return 0;
    if(type == "joint"){
        if(annualIncome < 18650 && annualIncome >= 0){
            return .1;
        } else if(annualIncome < 75900){
            return .15;
        } else if(annualIncome < 153100){
            return .25;
        } else if(annualIncome < 233350){
            return .28;
        } else if(annualIncome < 416700){
            return .33;
        } else if(annualIncome < 470700){
            return .35;
        } else {
            return .396;
        }
    } else if(type == "head"){
        if(annualIncome < 13350 && annualIncome >= 0){
            return .1;
        } else if(annualIncome < 50800){
            return .15;
        } else if(annualIncome < 131200){
            return .25;
        } else if(annualIncome < 212500){
            return .28;
        } else if(annualIncome < 416700){
            return .33;
        } else if(annualIncome < 444500){
            return .35;
        } else {
            return .396;
        }
    } else if(type == "single") {
        if(annualIncome < 9325 && annualIncome >= 0){
            return .1;
        } else if(annualIncome < 37950){
            return .15;
        } else if(annualIncome < 91900){
            return .25;
        } else if(annualIncome < 191650){
            return .28;
        } else if(annualIncome < 416700){
            return .33;
        } else if(annualIncome < 418400){
            return .35;
        } else {
            return .396;
        }
    }
}

let stateBrackets = {
    ak : {
        single : [[0],[0]],
        joint : [[0],[0]],
        longTermCG : [[.000],[0]],
        fullName : "Alaska"
    },
    al : {
        single : [[.02,.04,.05],[0,500,3000]],
        joint : [[.02,.04,.05],[0,1000,6000]],
        longTermCG : [[.050],[0]],
        fullName : "Alabama"
    },
    ar : {
        single : [[.0090, .0250, .0350, .0450, .0600, .0690],[0, 4299, 8500, 12699, 21199, 35100]],
        joint : [[.0090, .0250, .0350, .0450, .0600, .0690],[4299, 8500, 12699, 21199, 35100]],
        longTermCG : [[.070],[0]],
        fullName : "Arkansas"
    },
    az : {
        single : [[.0259,.0288,.0336,.0424,.0454],[0,10179,25455,50890,152668]],
        joint : [[.0259,.0288,.0336,.0424,.0454],[0,20357,50890,101779,305336]],
        longTermCG : [[.045],[0]],
        fullName : "Arizona"
    },
    ca : {
        single : [[.0100, .0200, .0400, .0600, .0800, .0930, .01030, .01130, .01230, .01330], [0, 8015, 19001, 29989, 41629, 52612, 268750, 322499, 537498, 1000000]],
        joint : [[.0100, .0200, .0400, .0600, .0800, .0930, .01030, .01130, .01230, .01330],[0, 16030, 38002, 59978, 83258, 105224, 537500, 644998, 1000000, 1074996]],
        longTermCG : [[.133],[0]],
        fullName : "California"
    },
    co : {
        single : [[.0463],[0]],
        joint : [[.0463],[0]],
        longTermCG : [[.046],[0]],
        fullName : "Colorado"
    },
    ct : {
        single : [[.0300, .0500, .0550, .0600, .0650, .0690, .0699], [0, 10000, 50000, 100000, 200000, 250000, 500000]],
        joint : [[.0300, .0500, .0550, .0600, .0650, .0690, .0699], [0, 20000, 100000, 200000, 400000, 500000, 1000000]],
        longTermCG : [[.067],[0]],
        fullName : "Connecticut"
    },
    dc : {
        single : [[.0400, .0600, .0650, .0850, .0875, .0895], [0, 10000, 40000, 60000, 350000, 1000000]],
        joint : [[.0400, .0600, .0650, .0850, .0875, .0895], [0, 10000, 40000, 60000, 350000, 1000000]],
        longTermCG : [[.090],[0]],
        fullName : "Washington, D.C."
    },
    de : {
        single : [[.0220, .0390, .0480, .0520, .0555, .0660], [2000, 5000, 10000, 20000, 25000, 60000]],
        joint : [[.0220, .0390, .0480, .0520, .0555, .0660], [2000, 5000, 10000, 20000, 25000, 60000]],
        longTermCG : [[.066],[0]],
        fullName : "Delaware"
    },
    fl : {
        single : [[0],[0]],
        joint : [[0],[0]],
        longTermCG : [[.000],[0]],
        fullName : "Florida"
    },
    ga : {
        single : [[.0100, .0200, .0300, .0400, .0500, .0600], [0, 750, 2250, 3750, 5250, 7000]],
        joint : [[.0100, .0200, .0300, .0400, .0500, .0600], [0, 1000, 3000, 5000, 7000, 10000]],
        longTermCG : [[.060],[0]],
        fullName : "Georgia"
    },
    hi : {
        single : [[.0140, .0320, .0550, .0640, .0680, .0720, .0760, .0790, .0825], [0, 2400, 4800, 9600, 14400, 19200, 24000, 36000, 48000]],
        joint : [[.0140, .0320, .0550, .0640, .0680, .0720, .0760, .0790, .0825], [0, 4800, 9600, 19200, 28800, 38400, 48000, 72000, 96000]],
        longTermCG : [[.073],[0]],
        fullName : "Hawaii"
    },
    ia : {
        single : [[.0036, .0072, .0243, .0450, .0612, .0648, .0680, .0792, .0898], [0, 1573, 3146, 6292, 14157, 23595, 31460, 47190, 70785]],
        joint : [[.0036, .0072, .0243, .0450, .0612, .0648, .0680, .0792, .0898], [0, 1573, 3146, 6292, 14157, 23595, 31460, 47190, 70785]],
        longTermCG : [[.090],[0]],
        fullName : "Iowa"
    },
    id : {
        single : [[.0160, .0360, .0410, .0510, .0610, .0710, .0740], [0, 1454, 2908, 4362, 5816, 7270, 10905]],
        joint : [[.0160, .0360, .0410, .0510, .0610, .0710, .0740], [0, 2908, 5816, 8724, 11632, 14540, 21810]],
        longTermCG : [[.074],[0]],
        fullName : "Idaho"
    },
    il : {
        single : [[.0495],[0]],
        joint : [[.0495],[0]],
        longTermCG : [[.050],[0]],
        fullName : "Illinois"
    },
    in : {
        single : [[.0323],[0]],
        joint : [[.0323],[0]],
        longTermCG : [[.034],[0]],
        fullName : "Indiana"
    },
    ks : {
        single : [[.0290, .0490, .0520], [0, 15000, 30000]],
        joint : [[.0290, .0490, .0520], [0, 30000, 60000]],
        longTermCG : [[.048],[0]],
        fullName : "Kansas"
    },
    ky : {
        single : [[.0200, .0300, .0400, .0500, .0580, .0600], [0, 3000, 4000, 5000, 8000, 75000]],
        joint : [[.0200, .0300, .0400, .0500, .0580, .0600], [0, 3000, 4000, 5000, 8000, 75000]],
        longTermCG : [[.060],[0]],
        fullName : "Kentucky"
    },
    la : {
        single : [[.0200, .0400, .0600], [0, 12500, 50000]],
        joint : [[.0200, .0400, .0600], [0, 25000, 100000]],
        longTermCG : [[.060],[0]],
        fullName : "Louisiana"
    },
    ma : {
        single : [[.0510],[0]],
        joint : [[.0510],[0]],
        longTermCG : [[.052],[0]],
        fullName : "Massachusetts"
    },
    md : {
        single : [[.0200, .0300, .0400, .0475, .0500, .0525, .0550, .0575], [0, 1000, 2000, 3000, 100000, 125000,150000, 250000]],
        joint : [[.0200, .0300, .0400, .0475, .0500, .0525, .0550, .0575], [0, 1000, 2000, 3000, 150000, 175000, 225000, 300000]],
        longTermCG : [[.058],[0]],
        fullName : "Maryland"
    },
    me : {
        single : [[.0580, .0675, .0715], [0, 21050, 50000]],
        joint : [[.0580, .0675, .0715], [0, 42099, 74999]],
        longTermCG : [[.080],[0]],
        fullName : "Maine"
    },
    mi : {
        single : [[.0425],[0]],
        joint : [[.0425], [0]],
        longTermCG : [[.044],[0]],
        fullName : "Michigan"
    },
    mn : {
        single : [[.0535, .0705, .0785, .0985], [0, 25390, 83400, 156911]],
        joint : [[.0535, .0705, .0785, .0985], [0, 37110, 147450, 261510]],
        longTermCG : [[.069],[0]],
        fullName : "Minnesota"
    },
    mo : {
        single : [[.0150, .0200, .0250, .0300, .0350, .0400, .0450, .0500, .0550, .0600], [0, 1008, 2016, 3024, 4032, 5040, 6048, 7056, 8064, 9072]],
        joint : [[.0150, .0200, .0250, .0300, .0350, .0400, .0450, .0500, .0550, .0600], [0, 1008, 2016, 3024, 4032, 5040, 6048, 7056, 8064, 9072]],
        longTermCG : [[.099],[0]],
        fullName : "Missouri"
    },
    ms : {
        single : [[.0300, .0400, .0500], [0, 5000, 10000]],
        joint : [[.0300, .0400, .0500], [0, 5000, 10000]],
        longTermCG : [[.060],[0]],
        fullName : "Mississippi"
    },
    mt : {
        single : [[.0100, .0200, .0300, .0400, .0500, .0600, .0690], [0, 2900, 5200, 7900, 10600, 13600, 17600]],
        joint : [[.0100, .0200, .0300, .0400, .0500, .0600, .0690], [0, 2900, 5200, 7900, 10600, 13600, 17600]],
        longTermCG : [[.050],[0]],
        fullName : "Montana"
    },
    nc : {
        single : [[.05499], [0]],
        joint : [[.05499], [0]],
        longTermCG : [[.058],[0]],
        fullName : "North Carolina"
    },
    nd : {
        single : [[.0110, .0204, .0227, .0264, .0290], [0, 37950, 91900, 191650, 416700]],
        joint : [[.0110, .0204, .0227, .0264, .0290], [0, 37950, 91900, 191650, 416700]],
        longTermCG : [[.032],[0]],
        fullName : "North Dakota"
    },
    ne : {
        single : [[.0246, .0351, .0501, .0684], [0, 3090, 18510, 29830]],
        joint : [[.0246, .0351, .0501, .0684], [0, 6170, 37030, 59660]],
        longTermCG : [[.068],[0]],
        fullName : "Nebraska"
    },
    nh : {
        single : [[.05],[0]],
        joint : [[.05],[0]],
        longTermCG : [[.000],[0]],
        fullName : "New Hampshire"
    },
    nj : {
        single : [[.0140, .0175, .0350, .05525, .0637, .0897], [0, 20000, 35000, 40000, 75000, 500000]],
        joint : [[.0140, .0175, .0245, .0350, .05525, .0637, .0897], [0, 20000, 50000, 70000, 80000, 150000, 500000]],
        longTermCG : [[.090],[0]],
        fullName : "New Jersey"
    },
    nm : {
        single : [[.0170, .0320, .0470, .0490], [0, 5500, 11000, 16000]],
        joint : [[.0170, .0320, .0470, .0490], [0, 8000, 16000, 24000]],
        longTermCG : [[.049],[0]],
        fullName : "New Mexico"
    },
    nv : {
        single : [[0],[0]],
        joint : [[0],[0]],
        longTermCG : [[.000],[0]],
        fullName : "Nevada"
    },
    ny : {
        single : [[.0400, .0450, .0525, .0590, .0645, .0665, .0685, .0882], [0, 8500, 11700, 13900, 21400, 80650, 215400, 1077550]],
        joint : [[.0400, .0450, .0525, .0590, .0645, .0665, .0685, .0882], [0, 17150, 23600, 27900, 43000, 161550, 323200, 2155350]],
        longTermCG : [[.088],[0]],
        fullName : "New York"
    },
    oh : {
        single : [[.00495, .00990, .01980, .02476, .02969, .03465, .03960, .04597, .04997], [0, 5250, 10500, 15800, 21100, 42100, 84200, 105300, 210600]],
        joint : [[.00495, .00990, .01980, .02476, .02969, .03465, .03960, .04597, .04997], [0, 5250, 10500, 15800, 21100, 42100, 84200, 105300, 210600]],
        longTermCG : [[.054],[0]],
        fullName : "Ohio"
    },
    ok : {
        single : [[.0050, .0100, .0200, .0300, .0400, .0500], [0, 1000, 2500, 3750, 4900, 7200]],
        joint : [[.0050, .0100, .0200, .0300, .0400, .0500], [0, 2000, 5000, 7500, 9800, 12200]],
        longTermCG : [[.053],[0]],
        fullName : "Oklahoma"
    },
    or : {
        single : [[.0500, .0700, .0900, .0990], [0, 3350, 8450, 125000]],
        joint : [[.0500, .0700, .0900, .0990], [0, 6700, 16900, 250000]],
        longTermCG : [[.099],[0]],
        fullName : "Oregon"
    },
    pa : {
        single : [[.0307],[0]],
        joint : [[.0307],[0]],
        longTermCG : [[.031],[0]],
        fullName : "Pennsylvania"
    },
    ri : {
        single : [[.0375, .0475, .0599], [0, 61300, 139400]],
        joint : [[.0375, .0475, .0599], [0, 61300, 139400]],
        longTermCG : [[.060],[0]],
        fullName : "Rhode Island"
    },
    sc : {
        single : [[.0000, .0300, .0400, .0500, .0600, .0700], [0, 2930, 5860, 8790, 11720, 14650]],
        joint : [[.0000, .0300, .0400, .0500, .0600, .0700], [0, 2930, 5860, 8790, 11720, 14650]],
        longTermCG : [[.070],[0]],
        fullName : "South Carolina"
    },
    sd : {
        single : [[0], [0]],
        joint :[[0], [0]],
        longTermCG : [[.000],[0]],
        fullName : "South Dakota"
    },
    tn : {
        single : [[.05],[0]],
        joint : [[.05],[0]],
        longTermCG : [[.000],[0]],
        fullName : "Tennessee"
    },
    tx : {
        single : [[0],[0]],
        joint : [[0],[0]],
        longTermCG : [[.000],[0]],
        fullName : "Texas"
    },
    ut : {
        single : [[.05],[0]],
        joint : [[.05],[0]],
        longTermCG : [[.050],[0]],
        fullName : "Utah"
    },
    va : {
        single : [[.0200, .0300, .0500, .0575], [0, 3000, 5000, 17000]],
        joint : [[.0200, .0300, .0500, .0575], [0, 3000, 5000, 17000]],
        longTermCG : [[.058],[0]],
        fullName : "Virginia"
    },
    vt : {
        single : [[.0355, .0680, .0780, .0880, .0895], [0, 37950, 91900, 191650, 416700]],
        joint : [[.0355, .0680, .0780, .0880, .0895], [0, 63350, 153100, 233350, 416700]],
        longTermCG : [[.090],[0]],
        fullName : "Vermont"
    },
    wa : {
        single : [[0],[0]],
        joint : [[0],[0]],
        longTermCG : [[.000],[0]],
        fullName : "Washington"
    },
    wi : {
        single : [[.0400, .0584, .0627, .0765], [0, 11230, 22470, 247350]],
        joint : [[.0400, .0584, .0627, .0765], [0, 14980, 29960, 329810]],
        longTermCG : [[.077],[0]],
        fullName : "Wisconsin"
    },
    wv : {
        single : [[.0300, .0400, .0450, .0600, .0650],[0, 10000, 25000, 40000, 60000]],
        joint :[[.0300, .0400, .0450, .0600, .0650],[0, 10000, 25000, 40000, 60000]],
        longTermCG : [[.065],[0]],
        fullName : "West Virginia"
    },
    wy : {
        single : [[0],[0]],
        joint : [[0],[0]],
        longTermCG : [[.000],[0]],
        fullName : "Wyoming"
    }
};

function getStateTaxRate(state, maritalStatus, income){
    if(income < 0)
        return 0;
    
    let checkArray = stateBrackets[state][maritalStatus];
    let rates = checkArray[0];
    let brackets = checkArray[1];
    
    if(brackets.length == 1)
        return rates[0];
    
    let i=0;
    for(let len=brackets.length; i<len-1; i++){
        if(brackets[i] < income && income < brackets[i+1]){
            return rates[i];
        }
    }
    return rates[i];
}

function getStateFullName(abbrev){
    return stateBrackets[abbrev].fullName;
}
