import React from 'react';
import {Simpson} from "../Simpson/Simpson";

export const Simpsons = () => {

    const Homer = 'https://static.wikia.nocookie.net/simpsons/images/0/02/Homer_Simpson_2006.png';
    const Marge = 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png';
    const Bart = 'https://www.pngplay.com/wp-content/uploads/6/Bart-Simpson-Character-Background-PNG-Image.png';
    const Lisa = 'https://upload.wikimedia.org/wikipedia/sr/e/ec/Lisa_Simpson.png';
    const Margaret = 'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png';

    const t_Homer = 'Homer Simpson';
    const t_Marge = 'Marge Simpson';
    const t_Bart = 'Bart Simpson';
    const t_Lisa = 'Lisa Simpson';
    const t_Margaret = 'Margaret Simpson';

    const d_Homer = 'His favorite color is blue, and he enjoys dancing, eating donuts, drinking, hugging, driving a ' +
        'sit-down arcade racer, playing the piano and horse riding. His favorite kiddie rides are "Stuart Little", ' +
        '"Barney Train" and "Ride the Champion Mechanical Horse".';
    const d_Marge = 'She is also one of the five main characters in The Simpsons TV series. ' +
        'She and her husband Homer have three children: Bart, Lisa, and Maggie. ' +
        'Marge is the moralistic force in her family and often provides a grounding voice in the midst of her ' +
        'family\'s antics by trying to maintain order in the Simpson household. ' +
        'Aside from her duties at home, Marge has flirted briefly with a number ' +
        'of careers ranging from a police officer to an anti-violence activist.';
    const d_Bart = 'Even at a young age, Bart has accomplished many feats. ' +
        'He has won an award for his Angry Dad web series, he has discovered a new comet which was named after him' +
        ', and he also has performed in a successful band with Milhouse Van Houten, Nelson Muntz, and Ralph Wiggum.';
    const d_Lisa = 'In "Homer and Lisa Exchange Cross Words" she is also known as Lisa Bouvier. ' +
        'She was named after a train called Lil\' Lisa on her parents\' 1st anniversary. ' +
        'She is a charismatic 8-year-old girl, who exceeds the standard achievement of the intelligence ' +
        'level of children her age. Not to everyone\'s surprise, she is also the moral center of her family. ' +
        'In her upbringing, Lisa lacks parental involvement of Homer and Marge, which leads to hobbies such as ' +
        'playing saxophone and guitar, riding and caring for horses, and interest in advanced studies. ' +
        'In school, Lisa\'s popularity is affected by those who view her as a geeky overachiever, ' +
        'which leaves her with only a few friends. She focuses on her goals and strives to reach her potential, ' +
        'and at the age of eight, she is already a member of Mensa with an IQ of 159. Her lack of parental ' +
        'involvement also leads to her lashing out at those who she deems lower than her or even above her. ' +
        'She has extreme jealousy from time to time and will do whatever it takes to reclaim her title as the smartest; ' +
        'but only if she deems it necessary. Otherwise, she\'s the intelligent one who usually thinks things through.';
    const d_Margaret = 'Margaret Evelyn Lenny "Maggie" Simpson (born January 14, 1988) ' +
        'is the 1-year-old daughter and youngest child of Marge and Homer Simpson, ' +
        'the baby sister to Bart and Lisa Simpson and one of the five main characters of The Simpsons. ' +
        'She is often seen sucking on her pacifier, and when she walks, ' +
        'she trips over her clothing and falls on her face. Because she rarely ever talks, ' +
        'Maggie is the least seen and heard in the Simpson family. Maggie is at the very young, infant age of 1.';

    return (
        <div>
            <h1 className='simpsons'>Simpsons Family</h1>
            <Simpson url={Homer} title={t_Homer} description={d_Homer}/>
            <Simpson url={Marge} title={t_Marge} description={d_Marge}/>
            <Simpson url={Bart} title={t_Bart} description={d_Bart}/>
            <Simpson url={Lisa} title={t_Lisa} description={d_Lisa}/>
            <Simpson url={Margaret} title={t_Margaret} description={d_Margaret}/>
        </div>
    );
}