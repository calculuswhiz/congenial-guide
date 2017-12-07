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
    al : {
        single : [[.02,.04,.05],[0,500,3000]],
        married: [[.02,.04,.05],[0,1000,6000]]
    },
    ak : {
        single : [[0],[0]],
        married : [[0],[0]]
    },
    az : {
        single : [[.0259,.0288,.0336,.0424,.0454],[0,10179,25455,50890,152668]],
        married : [[.0259,.0288,.0336,.0424,.0454],[0,20357,50890,101779,305336]],
    },
    ar : {
        single : [[.0090, .0250, .0350, .0450, .0600, .0690],[0, 4299, 8500, 12699, 21199, 35100]],
        married : [[.0090, .0250, .0350, .0450, .0600, .0690],[4299, 8500, 12699, 21199, 35100]] 
    },
    ca : {
        single : [[.0100, .0200, .0400, .0600, .0800, .0930, .01030, .01130, .01230, .01330], [0, 8015, 19001, 29989, 41629, 52612, 268750, 322499, 537498, 1000000]],
        married : [[.0100, .0200, .0400, .0600, .0800, .0930, .01030, .01130, .01230, .01330],[0, 16030, 38002, 59978, 83258, 105224, 537500, 644998, 1000000, 1074996]]
    },
    co : {
        single : [[.0463],[0]],
        married : [[.0463],[0]]
    },
    ct : {
        single : [[.0300, .0500, .0550, .0600, .0650, .0690, .0699], [0, 10000, 50000, 100000, 200000, 250000, 500000]],
        married : [[.0300, .0500, .0550, .0600, .0650, .0690, .0699], [0, 20000, 100000, 200000, 400000, 500000, 1000000]]
    },
    de : {
        single : [[.0220, .0390, .0480, .0520, .0555, .0660], [2000, 5000, 10000, 20000, 25000, 60000]],
        married : [[.0220, .0390, .0480, .0520, .0555, .0660], [2000, 5000, 10000, 20000, 25000, 60000]]
    },
    fl : {
        single : [[0],[0]],
        married : [[0],[0]]
    },
    ga : {
        single : [[.0100, .0200, .0300, .0400, .0500, .0600], [0, 750, 2250, 3750, 5250, 7000]],
        married : [[.0100, .0200, .0300, .0400, .0500, .0600], [0, 1000, 3000, 5000, 7000, 10000]]
    },
    hi : {
        single : [[.0140, .0320, .0550, .0640, .0680, .0720, .0760, .0790, .0825], [0, 2400, 4800, 9600, 14400, 19200, 24000, 36000, 48000]],
        married : [[.0140, .0320, .0550, .0640, .0680, .0720, .0760, .0790, .0825], [0, 4800, 9600, 19200, 28800, 38400, 48000, 72000, 96000]]
    },
    id : {
        single : [[.0160, .0360, .0410, .0510, .0610, .0710, .0740], [0, 1454, 2908, 4362, 5816, 7270, 10905]],
        married : [[.0160, .0360, .0410, .0510, .0610, .0710, .0740], [0, 2908, 5816, 8724, 11632, 14540, 21810]]
    },
    il : {
        single : [[.0495],[0]],
        married : [[.0495],[0]]
    },
    in : {
        single : [[.0323],[0]],
        married : [[.0323],[0]]
    },
    ia : {
        single : [[.0036, .0072, .0243, .0450, .0612, .0648, .0680, .0792, .0898], [0, 1573, 3146, 6292, 14157, 23595, 31460, 47190, 70785]],
        married : [[.0036, .0072, .0243, .0450, .0612, .0648, .0680, .0792, .0898], [0, 1573, 3146, 6292, 14157, 23595, 31460, 47190, 70785]]
    },
    ks : {
        single : [[.0290, .0490, .0520], [0, 15000, 30000]],
        married : [[.0290, .0490, .0520], [0, 30000, 60000]]
    },
    ky : {
        single : [[.0200, .0300, .0400, .0500, .0580, .0600], [0, 3000, 4000, 5000, 8000, 75000]],
        married : [[.0200, .0300, .0400, .0500, .0580, .0600], [0, 3000, 4000, 5000, 8000, 75000]]
    },
    la : {
        single : [[.0200, .0400, .0600], [0, 12500, 50000]],
        married : [[.0200, .0400, .0600], [0, 25000, 100000]]
    },
    me : {
        single : [[.0580, .0675, .0715], [0, 21050, 50000]],
        married : [[.0580, .0675, .0715], [0, 42099, 74999]]
    }, 
    md : {
        single : [[.0200, .0300, .0400, .0475, .0500, .0525, .0550, .0575], [0, 1000, 2000, 3000, 100000, 125000, ,150000, 250000]],
        married : [[.0200, .0300, .0400, .0475, .0500, .0525, .0550, .0575], [0, 1000, 2000, 3000, 150000, 175000, 225000, 300000]]
    },
    ma : {
        single : [[.0510],[0]],
        married : [[.0510],[0]]
    },
    mi : {
        single : [[.0425],[0]],
        married : [[.0425], [0]]
    },
    mn : {
        single : [[.0535, .0705, .0785, .0985], [0, 25390, 83400, 156911]],
        married : [[.0535, .0705, .0785, .0985], [0, 37110, 147450, 261510]]
    },
    ms : {
        single : [[.0300, .0400, .0500], [0, 5000, 10000]],
        married : [[.0300, .0400, .0500], [0, 5000, 10000]]
    },
    mo : {
        single : [[.0150, .0200, .0250, .0300, .0350, .0400, .0450, .0500, .0550, .0600], [0, 1008, 2016, 3024, 4032, 5040, 6048, 7056, 8064, 9072]],
        married : [[.0150, .0200, .0250, .0300, .0350, .0400, .0450, .0500, .0550, .0600], [0, 1008, 2016, 3024, 4032, 5040, 6048, 7056, 8064, 9072]]
    },
    mt : {
        single : [[.0100, .0200, .0300, .0400, .0500, .0600, .0690], [0, 2900, 5200, 7900, 10600, 13600, 17600]],
        married : [[.0100, .0200, .0300, .0400, .0500, .0600, .0690], [0, 2900, 5200, 7900, 10600, 13600, 17600]]
    },
    ne : {
        single : [[.0246, .0351, .0501, .0684], [0, 3090, 18510, 29830]],
        married : [[.0246, .0351, .0501, .0684], [0, 6170, 37030, 59660]]
    },
    nv : {
        single : [[0],[0]],
        married : [[0],[0]]
    },
    nh : {
        single : [[.05],[0]],
        married : [[.05],[0]]
    },
    nj : {
        single : [[.0140, .0175, .0350, .05525, .0637, .0897], [0, 20000, 35000, 40000, 75000, 500000]],
        married : [[.0140, .0175, .0245, .0350, .05525, .0637, .0897], [0, 20000, 50000, 70000, 80000, 150000, 500000]]
    },
    nm : {
        single : [[.0170, .0320, .0470, .0490], [0, 5500, 11000, 16000]],
        married : [[.0170, .0320, .0470, .0490], [0, 8000, 16000, 24000]]
    },
    ny : {
        single : [[.0400, .0450, .0525, .0590, .0645, .0665, .0685, .0882], [0, 8500, 11700, 13900, 21400, 80650, 215400, 1077550]],
        married : [[.0400, .0450, .0525, .0590, .0645, .0665, .0685, .0882], [0, 17150, 23600, 27900, 43000, 161550, 323200, 2155350]]
    },
    nc : {
        single : [[.05499], [0]],
        married : [[.05499], [0]]
    },
    nd : {
        single : [[.0110, .0204, .0227, .0264, .0290], [0, 37950, 91900, 191650, 416700]],
        married : [[.0110, .0204, .0227, .0264, .0290], [0, 37950, 91900, 191650, 416700]]
    },
    oh : {
        single : [[.00495, .00990, .01980, .02476, .02969, .03465, .03960, .04597, .04997], [0, 5250, 10500, 15800, 21100, 42100, 84200, 105300, 210600]],
        married : [[.00495, .00990, .01980, .02476, .02969, .03465, .03960, .04597, .04997], [0, 5250, 10500, 15800, 21100, 42100, 84200, 105300, 210600]]
    },
    ok : {
        single : [[.0050, .0100, .0200, .0300, .0400, .0500], [0, 1000, 2500, 3750, 4900, 7200]],
        married : [[.0050, .0100, .0200, .0300, .0400, .0500], [0, 2000, 5000, 7500, 9800, 12200]]
    },
    or : {
        single : [[.0500, .0700, .0900, .0990], [0, 3350, 8450, 125000]],
        married : [[.0500, .0700, .0900, .0990], [0, 6700, 16900, 250000]]
    },
    pa : {
        single : [[.0307],[0]],
        married : [[.0307],[0]]
    },
    ri : {
        single : [[.0375, .0475, .0599], [0, 61300, 139400]],
        married : [[.0375, .0475, .0599], [0, 61300, 139400]]
    },
    sc : {
        single : [[.0000, .0300, .0400, .0500, .0600, .0700], [0, 2930, 5860, 8790, 11720, 14650]],
        married : [[.0000, .0300, .0400, .0500, .0600, .0700], [0, 2930, 5860, 8790, 11720, 14650]]
    },
    sd : {
        single : [[0], [0]],
        married :[[0], [0]]
    },
    tn : {
        single : [[.05],[0]],
        married : [[.05],[0]]
    },
    tx : {
        single : [[0],[0]],
        married : [[0],[0]]
    },
    ut : {
        single : [[.05],[0]],
        married : [[.05],[0]]
    },
    vt : {
        single : [[.0355, .0680, .0780, .0880, .0895], [0, 37950, 91900, 191650, 416700]],
        married : [[.0355, .0680, .0780, .0880, .0895], [0, 63350, 153100, 233350, 416700]]
    },
    va : {
        single : [[.0200, .0300, .0500, .0575], [0, 3000, 5000, 17000]],
        married : [[.0200, .0300, .0500, .0575], [0, 3000, 5000, 17000]]
    },
    wa : {
        single : [[0],[0]],
        married : [[0],[0]]
    },
    wv : {
        single : [[.0300, .0400, .0450, .0600, .0650],[0, 10000, 25000, 40000, 60000]],
        married :[[.0300, .0400, .0450, .0600, .0650],[0, 10000, 25000, 40000, 60000]]
    },
    wi : {
        single : [[.0400, .0584, .0627, .0765], [0, 11230, 22470, 247350]],
        married : [[.0400, .0584, .0627, .0765], [0, 14980, 29960, 329810]]
    },
    wy : {
        single : [[0],[0]],
        married : [[0],[0]]
    },
    dc : {
        single : [[.0400, .0600, .0650, .0850, .0875, .0895], [0, 10000, 40000, 60000, 350000, 1000000]],
        married : [[.0400, .0600, .0650, .0850, .0875, .0895], [0, 10000, 40000, 60000, 350000, 1000000]]
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