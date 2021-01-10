
// reference: https://www.jspsych.org/plugins/jspsych-iat-html/
// jsPsych plugins can be found at https://github.com/jspsych/jsPsych
// this psiturk project is coded based on the jspsych stroop project at https://github.com/alexanderrich/stroop-jspsych


/* load psiturk */
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);

// new finding: delete will cause diability to record data
var mycondition = condition;  // these two variables are passed by the psiturk server process
var mycounterbalance = counterbalance;  // they tell you which condition you have been assigned to


var welcome_block = {
    type: 'html-keyboard-response',
    stimulus: '<p>Welcome to the Task. In this study you will ' +
        'complete an Implicit Association Test (IAT) in which you ' +
        'will be asked to sort pictures and words into groups as ' +
        'fast as you can.</p><p>Press any key to begin.</p>',
    post_trial_gap: 1500
};

var category_block = {
    type: 'html-keyboard-response',
    stimulus: '<p>Next, you will use the "E" and "I" computer keys ' + 'to categorize items into groups as fast as you can. ' +
        'These are the four groups and the items that belong to each:<br><br>' +
        '<strong>Good</strong>:<br>' + 'Friendship, Appealing, Excitement, Glad, Enjoy,  ' +
        'Terrific, Excellent, Attractive<br><br>' + '<strong>Bad</strong>:<br>' + 'Hate,  ' +
        'Despise, Annoy, Hurtful, Ugly, Scorn, Detest, Rotten<br><br>' +
        '<strong>European Americans</strong>:<br>' + "<img src='/static/images/race/wf1.jpg'></img>  " +
        "<img src='/static/images/race/wf2.jpg'></img>  " + "<img src='/static/images/race/wf3.jpg'></img>  " +
        "<img src='/static/images/race/wm1.jpg'></img>  " + "<img src='/static/images/race/wm2.jpg'></img>  " +
        "<img src='/static/images/race/wm3.jpg'></img><br><br>" + '<strong>African Americans</strong>:<br>' +
        "<img src='/static/images/race/bf1.jpg'></img>  " + "<img src='/static/images/race/bf2.jpg'></img>  " +
        "<img src='/static/images/race/bf3.jpg'></img>  " + "<img src='/static/images/race/bm2.jpg'></img>  " +
        "<img src='/static/images/race/bm3.jpg'></img>  " + "<img src='/static/images/race/bm1.jpg'></img><br><br>" +
        "Press any key to continue.</p>",
    post_trial_gap: 1500
};

var instructions_block = {
    type: 'html-keyboard-response',
    stimulus: "<div style='position: absolute; top: 18%; left: 20%'><p>Press E for:<br><strong>European Americans</strong></p></div>" +
        "<div style='position: absolute; top: 18%; right: 20%'><p>Press I for:<br><strong>African Americans</strong></p></div>" +
        "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'>Put a left finger on the <strong>E</strong> key for items that belong to the European Americans category. Put a right finger on the " +
        "<strong>I</strong> key for items that belong to the African Americans " +
        "category. Items will appear one at a time.<br><br>" + "If you " +
        "make a mistake, a red X will appear. Press the keys listed below " +
        "to continue. Go as fast as you can while being accurate.<br><br> " +
        "Press the any key when you are ready to start.</div>",
};


var trial_block = {
    timeline: [
        {
            type: 'iat-image',
            stimulus: jsPsych.timelineVariable('stimulus'),
            stim_key_association: jsPsych.timelineVariable('stim_key_association'),
            html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
            bottom_instructions: '<p>If you press the wrong key, a red X will appear. Press the other key to continue</p>',
            force_correct_key_press: true,
            display_feedback: true,
            trial_duration: 3000, //Only if display_feedback is false
            left_category_key: 'E',
            right_category_key: 'I',
            left_category_label: ['European Americans'],
            right_category_label: ['African Americans'],
            response_ends_trial: true,
            data: { iat_type: 'practice' }
        }
    ],
    timeline_variables: [
        { stimulus: "/static/images/race/wm1.jpg", stim_key_association: "left" },
        { stimulus: "/static/images/race/wm2.jpg", stim_key_association: "left" },
        { stimulus: "/static/images/race/wm3.jpg", stim_key_association: "left" },
        { stimulus: "/static/images/race/wf1.jpg", stim_key_association: "left" },
        { stimulus: "/static/images/race/wf2.jpg", stim_key_association: "left" },
        { stimulus: "/static/images/race/wf3.jpg", stim_key_association: "left" },
        { stimulus: "/static/images/race/bm1.jpg", stim_key_association: "right" },
        { stimulus: "/static/images/race/bm2.jpg", stim_key_association: "right" },
        { stimulus: "/static/images/race/bm3.jpg", stim_key_association: "right" },
        { stimulus: "/static/images/race/bf1.jpg", stim_key_association: "right" },
        { stimulus: "/static/images/race/bf2.jpg", stim_key_association: "right" },
        { stimulus: "/static/images/race/bf3.jpg", stim_key_association: "right" }

    ],
    randomize_order: true,
    repetitions: 2
};

var instructions_block2 = {
    type: 'html-keyboard-response',
    stimulus: "<div style='position: absolute; top: 18%; left: 20%'>Press E for:<br><strong>BAD</strong></div>" +
        "<div style='position: absolute; top: 18%; right: 20%'>Press I for:<br><strong>GOOD</strong></div>" +
        "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'>Put a left finger on the <strong>E</strong> key for items that " +
        "belong to the Bad category. Put a right finger on the " +
        "<strong>I</strong> key for items that belong to the Good " +
        "category. Items will appear one at a time.<br><br>" + "If you " +
        "make a mistake, a red X will appear. Press the keys listed below " +
        "to continue. Go as fast as you can while being accurate.<br><br> " +
        "Press the any key when you are ready to start.</div>",
};

var trial_block2 = {
    timeline: [
        {
            type: 'iat-html',
            stimulus: jsPsych.timelineVariable('stimulus'),
            stim_key_association: jsPsych.timelineVariable('stim_key_association'),
            html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
            bottom_instructions: '<p>If you press the wrong key, a red X will appear. Press the other key to continue</p>',
            force_correct_key_press: true,
            display_feedback: true,
            trial_duration: 3000, //Only if display_feedback is false
            left_category_key: 'E',
            right_category_key: 'I',
            left_category_label: ['Bad'],
            right_category_label: ['Good'],
            response_ends_trial: true,
            data: { iat_type: 'practice' }
        }
    ],
    timeline_variables: [
        { stimulus: "Humiliate", stim_key_association: "left" },
        { stimulus: "Evil", stim_key_association: "left" },
        { stimulus: "Grief", stim_key_association: "left" },
        { stimulus: "Yucky", stim_key_association: "left" },
        { stimulus: "Detest", stim_key_association: "left" },
        { stimulus: "Poison", stim_key_association: "left" },
        { stimulus: "Abuse", stim_key_association: "left" },
        { stimulus: "Despise", stim_key_association: "left" },
        { stimulus: "Fabulous", stim_key_association: "right" },
        { stimulus: "Excitement", stim_key_association: "right" },
        { stimulus: "Glorious", stim_key_association: "right" },
        { stimulus: "Cheerful", stim_key_association: "right" },
        { stimulus: "Cherish", stim_key_association: "right" },
        { stimulus: "Enjoy", stim_key_association: "right" },
        { stimulus: "Delightful", stim_key_association: "right" },
        { stimulus: "Joyous", stim_key_association: "right" }
    ],
    randomize_order: true,
    repetitions: 2
};

var instructions_block3 = {
    type: 'html-keyboard-response',
    stimulus: "<div style='position: absolute; top: 18%; left: 20%'>Press E for:<br> " +
        "<strong>BAD</strong><br>" + "or<br>" + "<strong>European Americans</strong></div>" + "<div style='position: absolute; top: 18%; right: 20%'>" +
        "Press I for:<br>" + "<strong>GOOD</strong><br>" + "or<br>" + "<strong>African Americans</strong></div>" +
        "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'>Use <strong>E</strong> for Bad and for " +
        "European Americans<br>" + "Use <strong>I</strong> for Good and for African Americans<br>" +
        "Each item belongs to only one category.<br><br>" + "If you " +
        "make a mistake, a red X will appear. Press the keys listed below " +
        "to continue. Go as fast as you can while being accurate.<br><br> " +
        "Press the any key when you are ready to start.</div>",
};

var trial_block3 = {
    timeline: [
        {
            type: jsPsych.timelineVariable('type'),
            stimulus: jsPsych.timelineVariable('stimulus'),
            stim_key_association: jsPsych.timelineVariable('stim_key_association'),
            html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
            bottom_instructions: '<p>If you press the wrong key, a red X will appear. Press the other key to continue</p>',
            force_correct_key_press: true,
            display_feedback: true,
            trial_duration: 3000, //Only if display_feedback is false
            left_category_key: 'E',
            right_category_key: 'I',
            left_category_label: ['Bad', 'European Americans'],
            right_category_label: ['Good', 'African Americans'],
            response_ends_trial: true,
            data: { iat_type: 'practice' }
        }
    ],
    timeline_variables: [
        { type: 'iat-image', stimulus: "/static/images/race/wm1.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/wm2.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/wm3.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/wf1.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/wf2.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/wf3.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/bm1.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/bm2.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/bm3.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/bf1.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/bf2.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/bf3.jpg", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Humiliate", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Evil", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Grief", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Yucky", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Detest", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Poison", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Abuse", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Despise", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Fabulous", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Excitement", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Glorious", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Cheerful", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Cherish", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Enjoy", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Delightful", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Joyous", stim_key_association: "right" }
    ],
    randomize_order: true,
    repetitions: 1
};

var instructions_block4 = {
    type: 'html-keyboard-response',
    stimulus: "<div style='position: absolute; top: 18%; left: 20%'>Press E for:<br> " +
        "<strong>BAD</strong><br>" + "or<br>" + "<strong>European Americans</strong></div>" + "<div style='position: absolute; top: 18%; right: 20%'>" +
        "Press I for:<br>" + "<strong>GOOD</strong><br>" + "or<br>" + "<strong>African Americans</strong></div>" +
        "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'>This is the same as the previous part.<br>" + "Use <strong>E</strong> for Bad and for " +
        "European Americans<br>" + "Use <strong>I</strong> for Good and for African Americans<br>" +
        "Each item belongs to only one category.<br><br>" + "If you " +
        "make a mistake, a red X will appear. Press the keys listed below " +
        "to continue. Go as fast as you can while being accurate.<br><br> " +
        "Press the any key when you are ready to start.</div>",
};

var trial_block4 = {
    timeline: [
        {
            type: jsPsych.timelineVariable('type'),
            is_html: jsPsych.timelineVariable('is_html'),
            stimulus: jsPsych.timelineVariable('stimulus'),
            stim_key_association: jsPsych.timelineVariable('stim_key_association'),
            html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
            bottom_instructions: '<p>If you press the wrong key, a red X will appear. Press the other key to continue</p>',
            force_correct_key_press: true,
            display_feedback: true,
            trial_duration: 3000, //Only if display_feedback is false
            left_category_key: 'E',
            right_category_key: 'I',
            left_category_label: ['Bad', 'European Americans'],
            right_category_label: ['Good', 'African Americans'],
            response_ends_trial: true,
            data: { iat_type: 'bad-old' }
        }
    ],
    timeline_variables: [
        { type: 'iat-image', stimulus: "/static/images/race/wm1.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/wm2.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/wm3.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/wf1.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/wf2.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/wf3.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/bm1.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/bm2.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/bm3.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/bf1.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/bf2.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/bf3.jpg", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Humiliate", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Evil", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Grief", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Yucky", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Detest", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Poison", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Abuse", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Despise", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Fabulous", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Excitement", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Glorious", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Cheerful", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Cherish", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Enjoy", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Delightful", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Joyous", stim_key_association: "right" }
    ],
    randomize_order: true,
    repetitions: 2
};

var instructions_block5 = {
    type: 'html-keyboard-response',
    stimulus: "<div style='position: absolute; top: 18%; left: 20%'>Press E for:<br>" + "<strong>African Americans</strong></div>" +
        "<div style='position: absolute; top: 18%; right: 20%'>Press I for:<br>" + "<strong>European Americans</strong></div>" +
        "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'>Watch out, the labels have changed positions!<br>" +
        "Use <strong>E</strong> for African Americans<br>" + "Use <strong>I</strong> for European Americans<br><br>" +
        "If you make a mistake, a red X will appear. Press the keys listed below " +
        "to continue. Go as fast as you can while being accurate.<br><br> " +
        "Press the any key when you are ready to start.</div>"
};

var trial_block5 = {
    timeline: [
        {
            type: 'iat-image',
            is_html: false,
            stimulus: jsPsych.timelineVariable('stimulus'),
            stim_key_association: jsPsych.timelineVariable('stim_key_association'),
            html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
            bottom_instructions: '<p>If you press the wrong key, a red X will appear. Press the other key to continue</p>',
            force_correct_key_press: true,
            display_feedback: true,
            trial_duration: 3000, //Only if display_feedback is false
            left_category_key: 'E',
            right_category_key: 'I',
            left_category_label: ['African Americans'],
            right_category_label: ['European Americans'],
            response_ends_trial: true,
            data: { iat_type: 'practice' }
        }
    ],
    timeline_variables: [
        { type: 'iat-image', stimulus: "/static/images/race/wm1.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/wm2.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/wm3.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/wf1.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/wf2.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/wf3.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/bm1.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/bm2.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/bm3.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/bf1.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/bf2.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/bf3.jpg", stim_key_association: "left" }

    ],
    randomize_order: true,
    repetitions: 2
};

var instructions_block6 = {
    type: 'html-keyboard-response',
    stimulus: "<div style='position: absolute; top: 18%; left: 20%'>Press E for:<br>" + "<strong>BAD</strong><br>" + "or<br>" +
        "<strong>African Americans</strong></div>" + "<div style='position: absolute; top: 18%; right: 20%'>Press I for:<br>" + "<strong>GOOD</strong><br>" + "or<br>" +
        "<strong>European Americans</strong></div>" +
        "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'>Use <strong>E</strong> for Bad and for African Americans<br>" +
        "Use <strong>I</strong> for Good and for European Americans<br><br>" +
        "If you make a mistake, a red X will appear. Press the keys listed below " +
        "to continue. Go as fast as you can while being accurate.<br><br> " +
        "Press the any key when you are ready to start.</div>"
};

var trial_block6 = {
    timeline: [
        {
            type: jsPsych.timelineVariable('type'),
            stimulus: jsPsych.timelineVariable('stimulus'),
            stim_key_association: jsPsych.timelineVariable('stim_key_association'),
            html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
            bottom_instructions: '<p>If you press the wrong key, a red X will appear. Press the other key to continue</p>',
            force_correct_key_press: true,
            display_feedback: true,
            trial_duration: 3000, //Only if display_feedback is false
            left_category_key: 'E',
            right_category_key: 'I',
            left_category_label: ['Bad', 'African Americans'],
            right_category_label: ['Good', 'European Americans'],
            response_ends_trial: true,
            data: { iat_type: 'practice' }
        }
    ],
    timeline_variables: [
        { type: 'iat-image', stimulus: "/static/images/race/wm1.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/wm2.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/wm3.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/wf1.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/wf2.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/wf3.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/bm1.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/bm2.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/bm3.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/bf1.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/bf2.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/bf3.jpg", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Humiliate", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Evil", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Grief", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Yucky", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Detest", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Poison", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Abuse", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Despise", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Fabulous", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Excitement", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Glorious", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Cheerful", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Cherish", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Enjoy", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Delightful", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Joyous", stim_key_association: "right" }
    ],
    randomize_order: true,
    repetitions: 1
};

var instructions_block7 = {
    type: 'html-keyboard-response',
    stimulus: "<div style='position: absolute; top: 18%; left: 20%'>Press E for:<br>" + "<strong>Bad</strong><br>" + "or<br>" +
        "<strong>African Americans</strong></div>" + "<div style='position: absolute; top: 18%; right: 20%'>Press I for:<br>" + "<strong>Good</strong><br>" + "or<br>" +
        "<strong>European Americans</strong></div>" +
        "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'>This is the same as the previous part<br>" +
        "Use <strong>E</strong> for Bad and for African Americans<br>" +
        "Use <strong>I</strong> for Good and for European Americans<br>" +
        "Each item belongs to only one category<br><br>" +
        "If you make a mistake, a red X will appear. Press the keys listed below " +
        "to continue. Go as fast as you can while being accurate.<br><br> " +
        "Press the any key when you are ready to start.</div>"
};

var trial_block7 = {
    timeline: [
        {
            type: jsPsych.timelineVariable('type'),
            is_html: jsPsych.timelineVariable('is_html'),
            stimulus: jsPsych.timelineVariable('stimulus'),
            stim_key_association: jsPsych.timelineVariable('stim_key_association'),
            html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
            bottom_instructions: '<p>If you press the wrong key, a red X will appear. Press the other key to continue</p>',
            force_correct_key_press: true,
            display_feedback: true,
            trial_duration: 3000, //Only if display_feedback is false
            left_category_key: 'E',
            right_category_key: 'I',
            left_category_label: ['Bad', 'African Americans'],
            right_category_label: ['Good', 'European Americans'],
            response_ends_trial: true,
            data: { iat_type: 'bad-young' }
        }
    ],
    timeline_variables: [
        { type: 'iat-image', stimulus: "/static/images/race/wm1.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/wm2.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/wm3.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/wf1.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/wf2.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/wf3.jpg", stim_key_association: "right" },
        { type: 'iat-image', stimulus: "/static/images/race/bm1.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/bm2.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/bm3.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/bf1.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/bf2.jpg", stim_key_association: "left" },
        { type: 'iat-image', stimulus: "/static/images/race/bf3.jpg", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Humiliate", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Evil", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Grief", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Yucky", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Detest", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Poison", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Abuse", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Despise", stim_key_association: "left" },
        { type: 'iat-html', stimulus: "Fabulous", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Excitement", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Glorious", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Cheerful", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Cherish", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Enjoy", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Delightful", stim_key_association: "right" },
        { type: 'iat-html', stimulus: "Joyous", stim_key_association: "right" }
    ],
    randomize_order: true,
    repetitions: 2
};

var debrief_block = {
    type: "html-keyboard-response",
    stimulus: function () {
        // calculate D-score from https://faculty.washington.edu/agg/pdf/GB&N.JPSP.2003.pdf
        // first find mean RT
        var bad_old = jsPsych.data.get().filter({ iat_type: 'bad-old' }).filterCustom(function (x) { return x.rt < 10000 });
        var mean_correct_responses_bad_old = bad_old.filter({ correct: true }).select('rt').mean();
        var bad_young = jsPsych.data.get().filter({ iat_type: 'bad-young' }).filterCustom(function (x) { return x.rt < 10000 });
        var mean_correct_responses_bad_young = bad_young.filter({ correct: true }).select('rt').mean();

        // get overall sd
        var sd = bad_old.join(bad_young).filter({ correct: true }).select('rt').sd();

        var d = (mean_correct_responses_bad_young - mean_correct_responses_bad_old) / sd;

        return "<p>You're done! Below is some information about how you performed.</p>" +
            "<p>When the pairs were BAD/YOUNG and GOOD/OLD, it took you an average of <strong>" + Math.floor(mean_correct_responses_bad_young) + "ms</strong> to respond.</p>" +
            "<p>When the pairs were BAD/OLD and GOOD/YOUNG, it took you an average of <strong>" + Math.floor(mean_correct_responses_bad_old) + "ms</strong> to respond.</p>" +
            "<p>Your D score, an index of performance that takes into account this difference and the overall level of variability in your responses, is <strong>" + d.toFixed(2) + "</strong></p>" +
            "<p>For reference, the Project Implicit IAT website labels D scores above 0.15 as a slight bias, scores above 0.35 as a moderate bias, and scores above 0.65 a strong bias.</p>"
    }
};

var timeline = [];
timeline.push(welcome_block);
timeline.push(category_block);
timeline.push(instructions_block);
timeline.push(trial_block);
timeline.push(instructions_block2);
timeline.push(trial_block2);
timeline.push(instructions_block3);
timeline.push(trial_block3);
timeline.push(instructions_block4);
timeline.push(trial_block4);
timeline.push(instructions_block5);
timeline.push(trial_block5);
timeline.push(instructions_block6);
timeline.push(trial_block6);
timeline.push(instructions_block7);
timeline.push(trial_block7);
timeline.push(debrief_block);



/* record id, condition, counterbalance on every trial */
jsPsych.data.addProperties({
    uniqueId: uniqueId,
    condition: condition,
    counterbalance: counterbalance
});

jsPsych.init({
    display_element: 'jspsych-target',
    timeline: timeline,
    // record data to psiTurk after each trial
    on_data_update: function (data) {
        psiturk.recordTrialData(data);
    },
    on_finish: function () {

        // record proportion correct as unstructured data
        //psiturk.recordUnstructuredData("bonus", jsPsych.data.get()
        //                               .filter([{stimulus_type: 'incongruent'},
        //                                        {stimulus_type: 'congruent'},
        //                                        {stimulus_type: 'unrelated'}])
        //                               .select('correct')
        //                               .mean()
        //                               .toFixed(2));

        // save data
        psiturk.saveData({
            success: function () {
                // upon saving, add proportion correct as a bonus (see custom.py) and complete HIT
                //psiturk.computeBonus("compute_bonus", function () {
                //    psiturk.completeHIT();
                //});

            }
        });
    },
});
