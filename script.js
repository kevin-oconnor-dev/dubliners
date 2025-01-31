// array of all passages
let textBank = [
    {
        text: `Every night as I gazed up at the window I said softly to myself the word paralysis. 
        It had always sounded strangely in my ears, like the word gnomon in the Euclid and the word simony in the Catechism.
        But now it sounded to me like the name of some maleficent and sinful being.`,
        played: false
    },
    {
        text: `I kept her brown figure always in my eye and, when we came near the point at which our ways diverged, I quickened my pace and passed her.
        This happened morning after morning.
        I had never spoken to her, except for a few casual words, and yet her name was like a summons to all my foolish blood.`,
        played: false
    },
    {
        text: `I lingered before her stall, though I knew my stay was useless, to make my interest in her wares seem the more real.
        Then I turned away slowly and walked down the middle of the bazaar.
        I allowed the two pennies to fall against the sixpence in my pocket.
        I heard a voice call from one end of the gallery that the light was out.
        The upper part of the hall was now completely dark.
        Gazing up into the darkness I saw myself as a creature driven and derided by vanity; and my eyes burned with anguish and anger.`,
        played: false
    },
    {
        text: `So she had had that romance in her life: a man had died for her sake.
        It hardly pained him now to think how poor a part he, her husband, had played in her life.
        He watched her while she slept as though he and she had never lived together as man and wife.
        His curious eyes rested long upon her face and on her hair: and, as he thought of what she must have been then, in that time of her first girlish beauty, a strange, friendly pity for her entered his soul.
        He did not like to say even to himself that her face was no longer beautiful but he knew that it was no longer the face for which Michael Furey had braved death.`,
        played: false
    },
    {
        text: `A bell clanged upon her heart. She felt him seize her hand:
        “Come!”
        All the seas of the world tumbled about her heart.
        He was drawing her into them: he would drown her.
        She gripped with both hands at the iron railing.
        “Come!”
        No! No! No! It was impossible.
        Her hands clutched the iron in frenzy.
        Amid the seas she sent a cry of anguish!
        “Eveline! Evvy!”
        He rushed beyond the barrier and called to her to follow.
        He was shouted at to go on but he still called to her.
        She set her white face to him, passive, like a helpless animal.
        Her eyes gave him no sign of love or farewell or recognition.`,
        played: false
    },
    {
        text: `His head was large, globular and oily; it sweated in all weathers; and his large round hat, set upon it sideways, looked like a bulb which had grown out of another.
        He always stared straight before him as if he were on parade and, when he wished to gaze after someone in the street, it was necessary for him to move his body from the hips.
        At present he was about town.
        Whenever any job was vacant a friend was always ready to give him the hard word.
        He was often to be seen walking with policemen in plain clothes, talking earnestly.`,
        played: false
    },
    {
        text: `Mr Alleyne began a tirade of abuse, saying that two letters were missing.
        The man answered that he knew nothing about them, that he had made a faithful copy.
        The tirade continued: it was so bitter and violent that the man could hardly restrain his fist from descending upon the head of the manikin before him:
        “I know nothing about any other two letters,” he said stupidly.
        “You—know—nothing. Of course you know nothing,” said Mr Alleyne.
        “Tell me,” he added, glancing first for approval to the lady beside him, “do you take me for a fool? Do you think me an utter fool?”
        The man glanced from the lady’s face to the little egg-shaped head and back again; and, almost before he was aware of it, his tongue had found a felicitous moment:
        “I don’t think, sir,” he said, “that that’s a fair question to put to me.”`,
        played: false
    },
    {
        text: `“I agree with Miss Beirne,” said Mr O’Madden Burke.
        “Pay her nothing.”
        In another corner of the room were Mrs Kearney and her husband, Mr Bell, Miss Healy and the young lady who had to recite the patriotic piece.
        Mrs Kearney said that the Committee had treated her scandalously.
        She had spared neither trouble nor expense and this was how she was repaid.
        They thought they had only a girl to deal with and that, therefore, they could ride roughshod over her.
        But she would show them their mistake.
        They wouldn’t have dared to have treated her like that if she had been a man.
        But she would see that her daughter got her rights: she wouldn’t be fooled.
        If they didn’t pay her to the last farthing she would make Dublin ring.`,
        played: false
    },
    {
        text: `The man listened to the clicking of the machine for a few minutes and then set to work to finish his copy.
        But his head was not clear and his mind wandered away to the glare and rattle of the public-house.
        It was a night for hot punches.
        He struggled on with his copy, but when the clock struck five he had still fourteen pages to write.
        Blast it! He couldn’t finish it in time.
        He longed to execrate aloud, to bring his fist down on something violently.
        He was so enraged that he wrote Bernard Bernard instead of Bernard Bodley and had to begin again on a clean sheet.`,
        played: false
    },
    {
        text: `I went up the slope calmly but my heart was beating quickly with fear that he would seize me by the ankles.
        When I reached the top of the slope I turned round and, without looking at him, called loudly across the field: “Murphy!”
        My voice had an accent of forced bravery in it and I was ashamed of my paltry stratagem.
        I had to call the name again before Mahony saw me and hallooed in answer.
        How my heart beat as he came running across the field to me!
        He ran as if to bring me aid.
        And I was penitent; for in my heart I had always despised him a little.`,
        played: false
    },
];

let activeText = ``;
let activeIndex = 0;
newActive();

    let typeSpeed = 70; // time delay of print out
    let stringLength = activeText.length; // the length of the text array
    let textPos = 0; // initialise text position
    let canChangePassage = true; // initalize button enabler
    let imgCount = 0; // initialize image counter

     
    function typeText()
    {
     canChangePassage = false;
     document.getElementById('background-img').classList.remove("fade-in"); // hide background
     document.getElementById('new-text').classList.add('hide-btn');
     const destination = document.getElementById("typedtext");
     if (!destination || activeText.length === 0) return; // check for empty strings or a non-existing destination
     destination.innerHTML = activeText.substring(0, textPos); // append next letter to page
     textPos++;
     if ( textPos > activeText.length) {
        textPos = 0;
        changeImg(); // set new background image
        document.getElementById('background-img').classList.add("fade-in"); // fade-in the background
        textBank[activeIndex].played = true; // mark last passage as played
        if (textBank.every( (item) => item.played)) return; // check there is at least one unplayed passage
        newActive();
        canChangePassage = true;
        document.getElementById('new-text').classList.remove('hide-btn');
     } else {
      setTimeout(typeText, typeSpeed);
     }
    }


    
    function randomInRange(min, max) {
        return Math.floor( Math.random() * (max - min + 1) ) + min;
    }
    
    function newActive() {
        do {
        newIndex = randomInRange(0, textBank.length - 1);
        } while (textBank[newIndex].played === true);
        console.log(`new active index: ${newIndex}`);
        activeIndex = newIndex;
        activeText = textBank[activeIndex].text;
    }

    function newPassage() {
        if (canChangePassage === false) return;
        typeText();
    }

    function changeFastest() {
        document.getElementById('normal').classList.remove('speed-selected'); // remove class if last selected
        document.getElementById('fast').classList.remove('speed-selected'); // ^^^
        typeSpeed = 45;
        document.getElementById('fastest').classList.add('speed-selected');
        console.log(typeSpeed);
    }

    function changeFast() {
        document.getElementById('normal').classList.remove('speed-selected');
        document.getElementById('fastest').classList.remove('speed-selected');
        typeSpeed = 55;
        document.getElementById('fast').classList.add('speed-selected');
        console.log(typeSpeed);
    }

    function changeNormal() {
        document.getElementById('fast').classList.remove('speed-selected');
        document.getElementById('fastest').classList.remove('speed-selected');
        typeSpeed = 70;
        document.getElementById('normal').classList.add('speed-selected');
        console.log(typeSpeed);
    }
    
    function changeImg() {
        let imgCount = randomInRange(1, 26);
        if (imgCount < 11) document.getElementById('background-img').src = `img/dublin-old${imgCount}.webp`
        if (imgCount >= 11) document.getElementById('background-img').src = `img/dublin-old${imgCount}.jpg`
    }

    
    typeText();


