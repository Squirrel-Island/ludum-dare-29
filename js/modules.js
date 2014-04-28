var Modules = {};

Modules.content = {
  play: {
    mode: "story",
    content: ["Play"]
  },
  story1_1: {
    mode: "story",
    bgm: "story",
    content: ["My son was killed in front of my eyes.",

              "I remember holding him as he died, bleeding in the street.",

              "The driver who hit him never slowed down.",

              "I watched those taillights fade down the road...",

              "... and burned the license plate into my memory.",

              "..."]
  },
  story1_2: {
    mode: "story",
    bg: "jail-far.jpg",
    content: [
      "The driver is in jail now, waiting to make bail. ",

      "By some cruel twist of fate, I am the guard on duty.",

      "Is it lucky that I can see the man who killed my son face to face?",

      "I don't know. But his face, like the license plate, has been burned into my eyes.",

      "It disgusts me.",

      "...",

      "I hear he is from a rich family.",

      "There is no doubt he will make bail by tomorrow.",

      "After that, I wonder if he will see the inside of a cell again?",

      "The system is corrupt. His family, no, his money will likely keep him out of prison.",

      "The charges will be reduced. Community service for a couple months...",

      "I don't want that.",

      "The bastard killed my kid.",

      "I don't want to live knowing my son's killer got off scot-free.",

      "But what can I do?"
    ],
  },
  story1_3: {
    mode: "story",
    bg: true,
    content: [
       "...",

        "......",

        "*Punish him.*",

        "...",

        "*Make him suffer.*",

        "No. That voice... is not mine.",

        "*This is your only chance.*",

        "That's... right. This is my only chance.",

        "Wait...",

        "No, this isn't right. Whose voice is that?",

        "*I am you. I am your other voice.*",

        "You are not me. I won't listen to you.",

        "*Why not just talk to him? Berate him.*",

        "I... don't think it's a good idea.",

        "*It will be fine. C'mon, just try to prove me wrong!*"
    ]
  },
  battle1: {
    mode: "battle",
    bg: "battle.jpg",
    bgm: "battle",
    content: [{
                question: "Where's the harm in talking to the guy?",
                good    : "I'm not sure how I may react.",
                bad     : "No harm in a little chat, right?"
              },
              {
                question: "What good would come from talking to him?",
                good    : "None. It would probably hurt more.",
                bad     : "It will make us feel better."
              },
              {
                question: "I want to know the man that killed my son...",
                good    : "Knowing him probably won't do me any good.",
                bad     : "We'll sleep better if we just talk to him now."
              },
              {
                question: "What would I even say?",
                good    : "There is nothing to say here.",
                bad     : "Berate him! Show him your pain."
              },
              {
                question: "I want him to know what he did...",
                good    : "He already knows. Do I need to tell him?",
                bad     : "He doesn't understand who he's hurt."
              },
              {
                question: "I need him to know what he did.",
                good    : "Fine. But I have to stay calm.",
                bad     : "Yes. Talk to him. TEAR HIM DOWN!"
              }]

  },
  story2_1: {
    mode: "story",
    bgm: "story",
    bg: "jail-far.jpg",
    content: [
      "I've decided. I'll talk to him.",

      "But I must stay calm.",

      "The voice in my head is sneering as I approach the cell.",

      "I wish it would go away. It feels...",

      "... dangerous."
    ]
  },
  story2_2: {
    mode: "story",
    bg: "jail-close.jpg",
    content: [
      "My hands are shaking as I reach the cell.",

      "\"Hey, you.\"",

      "The prisoner looks at me from his cot. I'm sure he doesn't recognize me.",

      "\"Whaddya want?\"",

      "He looks groggy. I must have woken him.",

      "\"Do you know who I am?\"",

      "I try to keep my voice steady.",

      "\"'Course not. Why would I? Pig.\"",

      "\"You killed my son.\"",

      "Was there a glint of recollection in his eye?",

      "\"So yer the bastard that got me thrown in here.\"",

      "He glares.",

      "\"Yeah.\"",

      "I don't know what I expected from this conversation.",

      "\"Guess what, cop. You're just wastin' both our time.\"",

      "A slight grin appears on his lips. ",

      "I want to punch it back into his face as he speaks.",

      "\"Y'know, I'll be out on bail by tomorrow. I'll just pay my way out.\"",

      "He emphasizes the word \"pay.\"",

      "\"Don't you feel bad at all? You killed a child.\" A pause. \"My child.\"",

      "He considers.",

      "\"Lil' bit. Can't do jack about it now, though.\"",

      "A shrug. A small chuckle escapes his throat.",

      "I want it to stop.",

      "I want to make it stop.",

      "I want to wrap my hands around his throat...",

      "... and make it stop."
    ]
  },
  story2_3: {
    mode: "story",
    bg: true,
    content: [
      "*Then do it.*",

      "But I can't do that.",

      "*You can.*",

      "I mustn't.",

      "*Why not? Tell me.*",

      "*And I will tell you.*"
    ]
  },
  battle2: {
    mode: "battle",
    bg: "battle.jpg",
    bgm: "battle",
    content: [{
          question: "Why not?",
          good    : "If I go in there, it will get out of control.",
          bad     : "This is your chance for revenge."
        },
        {
          question: "I am no murderer. I'd be no better than him.",
          good    : "Then don't go in there. I'll probably lose control.",
          bad     : "Don't kill. Crush his blathering jaw!"
        },
        {
          question: "I don't need to strangle him. Just shut him up.",
          good    : "Maybe. I can just scare him into silence. Threaten him.",
          bad     : "Exactly! Knock the sucker out. Make it hurt."
        },
        {
          question: "But he doesn't even deserve to live. He killed my son!",
          good    : "What will happen to me if I kill him?",
          bad     : "Then go in there and give him what he deserves!"
        },
        {
          question: "Even without killing him, what happens to me if I go in there?",
          good    : "I'll lose my job. I won't be able to provide for my family.",
          bad     : "We lose our job, but we'll find another."
        },
        {
          question: "What would my family think of me if I assaulted this man?",
          good    : "They would be ashamed. But they might be grateful.",
          bad     : "They would want us to do it!"
        },
        {
          question: "He's unarmed. This wouldn't even be a fair fight...",
          good    : "How pathetic would I have to be to crush an unarmed man?",
          bad     : "Are you kidding!? He KILLED our SON! Fair? FAIR!?"
        },
        {
          question: "He killed my son. KILLED him. And now he's laughing...",
          good    : "Is there even a question? Could I stop if I wanted to?",
          bad     : "There was never a question. GET HIM!"
        }]
  },
  story3_1: {
    mode: "story",
    bg: "jail-close.jpg",
    bgm: "story",
    content: [
      "I realize as I fumble for the cell key that there was never a question.",

      "I slam the key into the lock, and the door springs open.",

      "The man jumps off his cot with a start...",

      "... but not before my fist catches his jaw.",

      "He has stopped laughing.",

      "But I won't kill him.",

      "That's what I tell myself as I throw him to the ground.",

      "I kick him over and over.",

      "It feels good.",

      "Amazing.",

      "I am crying.",

      "The tears feel hot on my cheeks, and that's okay.",

      "Then, I am hoisting him against the wall by the collar.",

      "And I choke on my own voice.",

      "\"Why... why don't you care?\"",

      "His eyes are hard. Cold. Regretful?",

      "I don't know anymore.",

      "How did it even come to this?",

      "His face is swelling. Several teeth are missing.",

      "His jaw wears a red mask of blood from his streaming nose.",

      "Did I do this?",

      "He speaks.",

      "\"Why should I care?\"",

      "As he says this, he spits on my shoes. Red.",

      "But it seems feigned. Is he being spiteful?",

      "I don't care. I pull him forward and push him back into the wall.",

      "Hard.",

      "\"Ack! Get the hell off me!\"",

      "He clocks me in the temple, but I don't budge.",

      "That is not what hurts right now.",

      "\"Hey, to hell with you man. To hell with you and yer damn kid. I hope he rots!\"",

      "Perhaps he doesn't mean this. He is just angry.",

      "But I am furious.",

      "Now my hands do wrap around his throat."
    ]
  },
  story3_2: {
    mode: "story",
    bg: true,
    content: [
      "*Kill him.*",

      "Yeah.",

      "I think of my wife.",

      "And my daughter. Our remaining child.",

      "I can't do this.",

      "*Do it. Don't lose this opportunity.*",

      "I won't do it.",

      "*I know you will. We know you will.*",

      "Then you'll have to make me. But don't lose, you disgusting voice in my head.",

      "If you do, I'm sending you back.",

      "Back beneath the surface of my mind.",

      "Back into the hole you slithered out of...",

      "... beneath the surface."
    ]
  },
  battle3: {
    mode: "battle",
    bg: "battle.jpg",
    bgm: "battle",
    content: [{
        question: "Kill him. Strangle the life out of that murderer! Kill... Kill. KILL!",
        good    : "I won't. I gave in before, and look where it got me. I won't lose to you again.",
        bad     : "Kill him. Choke him. END HIM! You know you want to!"
      },
      {
        question: "Our hands are on his throat. He can't stop us. You can't stop us.",
        good    : "I can let go. I don't need to listen to you. You... demon voice!",
        bad     : "Together, we will end this man. You will listen."
      },
      {
        question: "This is for our son. To let this man live is to abandon our dead child!",
        good    : "And to kill this man now is to abandon my remaining daughter and my wife.",
        bad     : "Our wife and kid will understand. They will COMMEND us!"
      },
      {
        question: "If we don't end this now, the bastard will get off scot-free. Only we will lose!",
        good    : "There is still a chance he will be prosecuted. But if I kill him now, I will lose everything.",
        bad     : "If we kill him, we win. Don't let him take our son without punishment."
      },
      {
        question: "I'll be thrown in jail for this. If I go through with this, I lose everything...",
        good    : "If I don't let go of his throat, I will lose everything important to me with certainty.",
        bad     : "It's a lose-lose situation, pal. At least if we kill him, we won't lose for nothing."
      },
      {
        question: "What about my wife? How will she fare if I'm arrested for murder?",
        good    : "She's a strong woman, but I can't put her through that. Especially after losing our son.",
        bad     : "She's a tough one, bud. She'll be fine without you."
      },
      {
        question: "And my daughter? She would lose her Daddy over one terrible decision!",
        good    : "She already lost her brother. She loved him so much. I need to be there for her.",
        bad     : "Our wife can take care of our daughter. They'd want you to do this."
      },
      {
        question: "What about myself? I couldn't live with a murder on my hands.",
        good    : "I don't want to live with blood on my hands and my son in the grave. I... couldn't.",
        bad     : "You've already lost your son. It couldn't get worse."
      },
      {
        question: "We can do this. We can handle it. Together.",
        good    : "I refuse. I refuse to acknowledge you. You can only make things worse.",
        bad     : "Come now, join me in one last endeavor. This is it!"
      },
      {
        question: "So what'll it be, pal? Let this man free or take our revenge!?",
        good    : "We have to let him free. I want revenge, but not this way.",
        bad     : "There is no other way to get revenge."
      },
      {
        question: "Last question. Do we wish to live... or die?",
        good    : "Live.",
        bad     : "Die."
      }]
  }
};

Modules.endings = {
  good1_1: {
    mode: "story",
    bgm: "story",
    bg: "jail-close.jpg",
    content: [
      "Questions race through my head. My hands are still clasped around the man's throat.",

      "He killed my son. But I have a family. ",

      "They need me, now more than ever.",

      "I can't abandon them.",

      "My grip loosens. The man falls to the ground.",

      "\"I'm going to let you live. A privilege you stole from my son.\"",

      "He gasps, and as the air enters his lungs, I know I made the right decision.",

      "He watches warily as I leave the cell, locking it behind me."
    ]
  },
  good1_2: {
    mode: "story",
    bg: "jail-far.jpg",
    content: [
      "I don't look back.",

      "I never look back.",

      "I depart the prison for good, leaving behind only a resignation."
    ]
  },
  good1_3: {
    mode: "story",
    bg: true,
    content: [
      "Days pass, and I watch the news. Read the paper.",

      "There will be something on that man's case. I know it.",

      "And one day, there is.",

      "He has been sent to prison.",

      "Vehicular manslaughter. Max sentence.",

      "Maybe there is such a thing as retribution after all.",

      "His family paid for the best lawyers.",

      "They even tried to tip off the judge.",

      "But to no avail.",

      "I am grateful for that.",

      "I watch the story on the television.",

      "My wife is in my arms,",

      "my daughter lying in my lap.",

      "And I smile.",

      "Somewhere, my son is watching us.",

      "He is smiling too."
    ]
  },
  good_end: {
    mode: "story",
    end: true,
    note: "Good ending."
  },

  neutral1_1: {
    mode: "story",
    bg: "jail-far.jpg",
    bgm: "story",
    content: [
      "I loosen my grip on the man's throat.",

      "I can't kill him.",

      "But I can't stand to see him go free either.",

      "Without a word, I exit the cell.",

      "And lock it.",

      "That day I resign from my job."
    ]
  },
  neutral1_2: {
    mode: "story",
    bg: true,
    content: [
      "I tell my family we're moving.",

      "There's a nice town overlooking a lake to the north.",

      "We can start fresh there.",

      "I stop following the news.",

      "I'm sure my son's case will come up...",

      "... but I can't bear to see the result.",

      "It would be too painful.",

      "I suppose I'll never know how it turns out.",

      "And perhaps that's okay."
    ]
  },
  neutral_end: {
    mode: "story",
    end: true,
    note: "Neutral ending."
  },

  bad1_1: {
  mode: "story",
  bg: "jail-close.jpg",
  bgm: "story",
  content: [
    "I grip the man's throat tighter.",

    "I want to squeeze the life out of him.",

    "Need to.",

    "His eyes bulge, and his lips turn blue.",

    "Choking, gagging.",

    "He reaches weakly for my wrist.",

    "Then, he stops struggling.",

    "It's over.",

    "I look at my hands.",

    "They are slick with blood.",

    "And I look at the bruises on his neck.",

    "They are shaped like my hands.",

    "What have I done?",

    "My son is dead.",

    "And I have killed a man.",

    "I can't go back to my wife and daughter.",

    "I can't go back to myself.",

    "The fiendish voice in my head snickers, and I want it gone.",

    "I want everything gone.",

    "What am I?",

    "A father?",

    "A husband?",

    "...",

    "A murderer?",

    "I reach for my waist and remove my gun from its holster.",

    "Standing in this dreary cell, next to the corpse of my child's killer...",

    "... I raise the gun to my head.",

    "A single tear escapes my eye.",

    "I say goodbye to my wife and daughter.",

    "I do not say goodbye to myself.",

    "I died a long time ago.",

    "And I pull the trigger."
  ]
  },
    bad_end: {
    mode: "story",
    end: true,
    note: "Bad ending."
  }
};
