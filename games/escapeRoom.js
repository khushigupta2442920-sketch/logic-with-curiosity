// ==========================================
// ESCAPE ROOM QUESTIONS
// ==========================================

const escapeQuestions = {

    // ==========================================
    // EASY
    // ==========================================

    easy: [

        {
            q: `🔐 Darwaza kholne ke liye 3-digit code chahiye.
Clue: 1st digit = 2, 2nd digit = 5, 3rd digit = 8.
Code kya hai?`,
            options: ["258", "285", "528", "825"],
            answer: 0,
            hint: "Digits ko diye gaye order me rakho."
        },

        {
            q: `🗝️ Table par 3 keys hain: 🔴 🔵 🟢
Clue: "Sky ka colour wali key chuno."`,
            options: ["🔴 Red", "🔵 Blue", "🟢 Green", "Koi nahi"],
            answer: 1,
            hint: "Sky normally kis colour ka hota hai?"
        },

        {
            q: `🚪 Door par likha hai: 5 + 3 = ?
Correct number press karne par door khulega.`,
            options: ["6", "7", "8", "9"],
            answer: 2,
            hint: "Simple addition."
        },

        {
            q: `🔦 Dark room me clue mila:
"Mere paas 4 legs hain, lekin main chal nahi sakta."`,
            options: ["🐶 Dog", "🪑 Chair", "🐱 Cat", "🚗 Car"],
            answer: 1,
            hint: "Room me rakhi cheez socho."
        },

        {
            q: `📦 Box par clue hai:
"Main khulta hoon, par darwaza nahi hoon.
Mere andar cheezein rakhi jaati hain."`,
            options: ["📦 Box", "🪟 Window", "🪑 Chair", "💡 Lamp"],
            answer: 0,
            hint: "Cheezein kis me rakhi jaati hain?"
        },

        {
            q: `🕯️ Room me 5 candles hain.
2 candles bujh gayi.
Kitni candles jal rahi hain?`,
            options: ["2", "3", "4", "5"],
            answer: 1,
            hint: "5 me se 2."
        },

        {
            q: `🔢 Lock code:
10, 20, 30, ?`,
            options: ["35", "40", "45", "50"],
            answer: 1,
            hint: "Har baar kitna add ho raha hai?"
        },

        {
            q: `🧩 Puzzle:
A = 1, B = 2, C = 3,
to D = ?`,
            options: ["2", "3", "4", "5"],
            answer: 2,
            hint: "Alphabet ka order dekho."
        },

        {
            q: `🗝️ Clue:
"Main chhoti hoon, metal ki hoon aur lock khol sakti hoon."`,
            options: ["🔑 Key", "🪙 Coin", "📎 Clip", "✏️ Pencil"],
            answer: 0,
            hint: "Lock kis cheez se khulta hai?"
        },

        {
            q: `🚪 Door code:
2 + 2 × 2 = ?`,
            options: ["6", "8", "4", "10"],
            answer: 0,
            hint: "Pehle multiplication karo."
        },

        {
            q: `🕵️ Clue:
"Main room ko roshan karta hoon,
lekin main Suraj nahi hoon."`,
            options: ["🛏️ Bed", "💡 Bulb", "🚪 Door", "📦 Box"],
            answer: 1,
            hint: "Light source socho."
        },

        {
            q: `🔐 Lock par:
4, 6, 8, ?`,
            options: ["9", "10", "11", "12"],
            answer: 1,
            hint: "Even numbers."
        },

        {
            q: `🧩 Ek room me 3 boxes hain.
Red box ke andar key hai.
Red box kaun sa hai?`,
            options: ["🔴", "🔵", "🟢", "🟡"],
            answer: 0,
            hint: "Clue bilkul simple hai."
        },

        {
            q: `🪞 Mirror par message hai:
"DAY ka opposite kya hai?"`,
            options: ["Morning", "Night", "Evening", "Noon"],
            answer: 1,
            hint: "Din ka opposite."
        },

        {
            q: `🔢 Code sequence:
1, 3, 5, 7, ?`,
            options: ["8", "9", "10", "11"],
            answer: 1,
            hint: "Odd numbers."
        },

        {
            q: `🗝️ Key box par likha hai:
"Week ka first day?"`,
            options: ["Monday", "Tuesday", "Sunday", "Friday"],
            answer: 2,
            hint: "Common calendar order me."
        },

        {
            q: `📜 Clue:
"Mere 2 hands hain, par main clap nahi kar sakta."`,
            options: ["🕒 Clock", "🙋 Person", "🐒 Monkey", "🧤 Gloves"],
            answer: 0,
            hint: "Hands time batate hain."
        },

        {
            q: `🚪 Door par:
12, 10, 8, 6, ?`,
            options: ["5", "4", "3", "2"],
            answer: 1,
            hint: "Har baar 2 kam."
        },

        {
            q: `🔦 Clue:
"Mujhe press karoge to main light on kar dunga."`,
            options: ["💡 Switch", "🪑 Chair", "🔑 Key", "📦 Box"],
            answer: 0,
            hint: "Light control karne wali cheez."
        },

        {
            q: `📦 Box code:
1 + 4 + 5 = ?`,
            options: ["8", "9", "10", "11"],
            answer: 1,
            hint: "Numbers add karo."
        },

        {
            q: `🧩 Clue:
"Mere bina door lock nahi rahega.
Mujhe ghumaya jaata hai."`,
            options: ["🔑 Key", "🪑 Chair", "📕 Book", "💡 Bulb"],
            answer: 0,
            hint: "Lock ke saath use hoti hai."
        },

        {
            q: `🔢 Lock:
5, 10, 15, 20, ?`,
            options: ["22", "25", "30", "35"],
            answer: 1,
            hint: "5-5 increase."
        },

        {
            q: `🕯️ 7 candles me se 3 bujh gayi.
Kitni candles jal rahi hain?`,
            options: ["3", "4", "5", "7"],
            answer: 1,
            hint: "7 - 3."
        },

        {
            q: `🪟 Clue:
"Main transparent hoon aur tum mujhe paar nahi kar sakte."`,
            options: ["Door", "Window glass", "Curtain", "Wall"],
            answer: 1,
            hint: "Transparent surface."
        },

        {
            q: `🔐 Code:
9 - 4 = ?`,
            options: ["3", "4", "5", "6"],
            answer: 2,
            hint: "Simple subtraction."
        },

        {
            q: `📚 Clue:
"Mere pages hain aur mujhe padha jaata hai."`,
            options: ["📕 Book", "🪑 Chair", "🔑 Key", "💡 Bulb"],
            answer: 0,
            hint: "Pages kis cheez me hote hain?"
        },

        {
            q: `🔢 Sequence:
2, 4, 6, 8, ?`,
            options: ["9", "10", "11", "12"],
            answer: 1,
            hint: "Even numbers."
        },

        {
            q: `🕰️ Clue:
"Main time batata hoon."`,
            options: ["Clock", "Door", "Box", "Chair"],
            answer: 0,
            hint: "Time dekhne ke liye."
        },

        {
            q: `🚪 Door par likha hai:
3 × 3 = ?`,
            options: ["6", "8", "9", "12"],
            answer: 2,
            hint: "3 ko 3 baar add karo."
        },

        {
            q: `🏆 Final clue:
"Escape karne ke liye tumhe kya chahiye?"`,
            options: ["🔑 Key", "🍕 Pizza", "🧸 Teddy", "⚽ Ball"],
            answer: 0,
            hint: "Locked door ke liye."
        }

    ],


    // ==========================================
    // MEDIUM
    // ==========================================

    medium: [

        {
            q: `🔐 Code sequence:
2, 6, 12, 20, ?`,
            options: ["28", "30", "32", "36"],
            answer: 1,
            hint: "Pattern n × (n+1) dekho."
        },

        {
            q: `🧩 Agar CAT = 3 letters aur HOUSE = 5 letters,
to GARDEN = ?`,
            options: ["5", "6", "7", "8"],
            answer: 1,
            hint: "Letters count karo."
        },

        {
            q: `🚪 Lock code:
15, 12, 9, 6, ?`,
            options: ["4", "3", "2", "1"],
            answer: 1,
            hint: "Har step 3 kam."
        },

        {
            q: `🕵️ Clue:
Ek room me 4 corners hain.
Har corner me ek cat baithi hai.
Total cats?`,
            options: ["2", "3", "4", "8"],
            answer: 2,
            hint: "Har corner ki ek cat."
        },

        {
            q: `🔢 Code:
3, 6, 12, 24, ?`,
            options: ["36", "42", "48", "50"],
            answer: 2,
            hint: "Har number double ho raha hai."
        },

        {
            q: `🗝️ 3 keys hain:
12, 21, 31.
Clue: "Sabse chhota number chuno."`,
            options: ["12", "21", "31", "None"],
            answer: 0,
            hint: "Numbers compare karo."
        },

        {
            q: `📜 Clue:
Agar MONDAY ke baad 3 din hain,
to kaunsa day hoga?`,
            options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
            answer: 2,
            hint: "Monday ke 3 din baad."
        },

        {
            q: `🔐 Code:
100 ÷ 10 + 5 = ?`,
            options: ["10", "15", "20", "25"],
            answer: 1,
            hint: "Pehle division."
        },

        {
            q: `🧩 Ek box me 8 balls hain.
3 red aur baaki blue hain.
Blue balls kitni?`,
            options: ["3", "4", "5", "6"],
            answer: 2,
            hint: "8 - 3."
        },

        {
            q: `🚪 Sequence:
1, 4, 9, 16, ?`,
            options: ["20", "24", "25", "36"],
            answer: 2,
            hint: "Squares."
        },

        {
            q: `🕵️ Ek clock 3 baje 3 baar bell bajati hai.
5 baje kitni baar?`,
            options: ["3", "4", "5", "6"],
            answer: 2,
            hint: "Hour ke equal."
        },

        {
            q: `🔑 Alphabet code:
A=1, B=2...
to KEY ka total?`,
            options: ["35", "37", "41", "45"],
            answer: 2,
            hint: "K=11, E=5, Y=25."
        },

        {
            q: `📦 3 boxes hain.
Key red box me nahi aur blue box me bhi nahi.
Key kahan hai?`,
            options: ["Red", "Blue", "Green", "Impossible"],
            answer: 2,
            hint: "Sirf ek box bacha."
        },

        {
            q: `🔐 Code:
5 × 4 - 6 = ?`,
            options: ["12", "14", "16", "20"],
            answer: 1,
            hint: "Multiplication first."
        },

        {
            q: `🧩 Ek number ko 2 se multiply karke
6 add karne par 20 milta hai.
Number?`,
            options: ["5", "6", "7", "8"],
            answer: 1,
            hint: "20 - 6 = 14."
        },

        {
            q: `🚪
4, 8, 16, 32, ?`,
            options: ["48", "56", "64", "72"],
            answer: 2,
            hint: "Double."
        },

        {
            q: `🗝️ 3 locks hain:
7, 14, 21.
Clue: smallest even number.`,
            options: ["7", "14", "21", "None"],
            answer: 1,
            hint: "Even number kaun sa hai?"
        },

        {
            q: `📜 Clue:
"Mere paas face aur hands hain,
par body nahi."`,
            options: ["Clock", "Person", "Mirror", "Phone"],
            answer: 0,
            hint: "Face + hands."
        },

        {
            q: `🔐 Code:
50 - 15 + 5 = ?`,
            options: ["30", "35", "40", "45"],
            answer: 2,
            hint: "Left to right."
        },

        {
            q: `🧩 Agar 2 cats ke 8 legs hain,
to 5 cats ke kitne legs?`,
            options: ["16", "18", "20", "24"],
            answer: 2,
            hint: "Ek cat = 4 legs."
        },

        {
            q: `🚪
11, 22, 33, 44, ?`,
            options: ["50", "55", "66", "77"],
            answer: 1,
            hint: "11 add ho raha hai."
        },

        {
            q: `🕵️ Room me 10 lamps hain.
4 off hain.
Kitne ON hain?`,
            options: ["4", "5", "6", "10"],
            answer: 2,
            hint: "10 - 4."
        },

        {
            q: `🔑 A=1, B=2, C=3.
CAB ka value?`,
            options: ["5", "6", "7", "8"],
            answer: 1,
            hint: "C + A + B."
        },

        {
            q: `📦 12 keys me se 4 broken hain.
Working keys kitni?`,
            options: ["6", "7", "8", "9"],
            answer: 2,
            hint: "12 - 4."
        },

        {
            q: `🔐 81 ka square root kya hai?`,
            options: ["7", "8", "9", "10"],
            answer: 2,
            hint: "9 × 9."
        },

        {
            q: `🧩
3, 9, 27, ?`,
            options: ["54", "72", "81", "108"],
            answer: 2,
            hint: "×3."
        },

        {
            q: `🚪 Ek key 5 seconds me lock kholti hai.
3 locks hain.
Same key se total time?`,
            options: ["5 sec", "10 sec", "15 sec", "20 sec"],
            answer: 2,
            hint: "5 × 3."
        },

        {
            q: `🕯️ 12 candles me 5 bujh gayi.
Kitni jal rahi?`,
            options: ["5", "6", "7", "12"],
            answer: 2,
            hint: "12 - 5."
        },

        {
            q: `🔢 Code:
7 × 7 - 9 = ?`,
            options: ["38", "40", "42", "49"],
            answer: 2,
            hint: "49 - 9."
        },

        {
            q: `🏆 Final clue:
3-digit code ke digits hain 4, 2, 9.
Sabse bada possible code?`,
            options: ["429", "492", "924", "942"],
            answer: 3,
            hint: "Digits ko descending order me rakho."
        }

    ],


    // ==========================================
    // HARD
    // ==========================================

    hard: [

        {
            q: `🔐 Code sequence:
1, 1, 2, 3, 5, 8, ?`,
            options: ["11", "12", "13", "15"],
            answer: 2,
            hint: "Pichhle do numbers add karo."
        },

        {
            q: `🧩 Ek room me 3 switches hain
aur doosre room me 3 bulbs.
Tum bulb room me sirf ek baar ja sakte ho.
Kaise identify karoge?`,
            options: [
                "Randomly guess",
                "Ek switch ON karke wait, OFF karo; doosra ON rakho; bulbs check karo",
                "Sab switches ON",
                "Possible nahi"
            ],
            answer: 1,
            hint: "Bulb ki heat bhi clue de sakti hai."
        },

        {
            q: `🚪 Code:
3, 6, 18, 72, ?`,
            options: ["144", "216", "360", "720"],
            answer: 3,
            hint: "×2, ×3, ×4, ×5..."
        },

        {
            q: `🕵️ Ek prisoner ke paas 2 doors hain.
Ek freedom, ek danger.
Do guards me ek hamesha truth aur ek hamesha lie bolta hai.
Ek question kya puchoge?`,
            options: [
                "Tumhara naam?",
                "Agar main doosre guard se poochun ki freedom ka door kaunsa hai, to woh kya kahega?",
                "Kya tum guard ho?",
                "Kuch nahi"
            ],
            answer: 1,
            hint: "Truth + lie ko cancel karna hai."
        },

        {
            q: `🔢 Sequence:
2, 5, 10, 17, 26, ?`,
            options: ["35", "36", "37", "38"],
            answer: 2,
            hint: "+3, +5, +7, +9..."
        },

        {
            q: `🔐 3-digit lock:
Digits ka sum 12 hai.
First digit second se 2 zyada hai,
third digit second se 1 kam.
Code?`,
            options: ["543", "453", "564", "354"],
            answer: 0,
            hint: "Second digit = 4 try karo."
        },

        {
            q: `🧩 Ek clock har hour me 1 minute fast hoti hai.
6 hours baad kitni minutes fast?`,
            options: ["5", "6", "7", "12"],
            answer: 1,
            hint: "1 minute per hour."
        },

        {
            q: `🚪 Code:
3, 6, 18, 72, ?`,
            options: ["144", "216", "360", "720"],
            answer: 3,
            hint: "×2, ×3, ×4, ×5."
        },

        {
            q: `🕵️ 5 prisoners ko ek line me khada kiya gaya.
A, B ko dekhta hai;
B, C ko;
C, D ko;
D, E ko.
Kaun sabse zyada logon ko dekh sakta hai?`,
            options: ["A", "B", "C", "D"],
            answer: 0,
            hint: "Line ki direction socho."
        },

        {
            q: `🔑 A=1, B=2...
LOCK ka value?`,
            options: ["41", "42", "43", "45"],
            answer: 1,
            hint: "L=12, O=15, C=3, K=11."
        },

        {
            q: `📦 9 identical boxes me ek box heavy hai.
Balance scale se minimum kitni weighing me
heavy box find kar sakte ho?`,
            options: ["1", "2", "3", "4"],
            answer: 1,
            hint: "3-3-3 groups."
        },

        {
            q: `🔐 Code:
1, 4, 10, 22, 46, ?`,
            options: ["90", "92", "94", "96"],
            answer: 2,
            hint: "×2 + 2."
        },

        {
            q: `🧩 Ek room me 6 people hain.
Har person har doosre person se
ek baar handshake karta hai.
Total handshakes?`,
            options: ["12", "15", "18", "30"],
            answer: 1,
            hint: "n(n-1)/2."
        },

        {
            q: `🚪 Tumhare paas 8 coins hain.
Ek coin fake hai aur halka hai.
Balance scale se minimum weighings?`,
            options: ["1", "2", "3", "4"],
            answer: 1,
            hint: "3-3-2 strategy."
        },

        {
            q: `🕯️ 2 ropes hain.
Har rope exactly 60 min me jalti hai,
lekin unevenly.
Exactly 45 min kaise measure karoge?`,
            options: [
                "Ek rope jalao",
                "Pehli rope dono ends se aur doosri ek end se jalao; pehli khatam hone par doosri ka doosra end jalao",
                "Dono ropes ek end se",
                "Impossible"
            ],
            answer: 1,
            hint: "Dono ends se jalne par time half."
        },

        {
            q: `🔢 Sequence:
1, 2, 6, 24, 120, ?`,
            options: ["240", "360", "720", "840"],
            answer: 2,
            hint: "Factorial pattern."
        },

        {
            q: `🕵️ Ek aadmi Friday ko city se nikla,
3 din baad Friday ko wapas aaya.
Kaise?`,
            options: [
                "Impossible",
                "Uske horse ka naam Friday tha",
                "Calendar galat tha",
                "Woh time travel karta tha"
            ],
            answer: 1,
            hint: "Friday sirf day nahi, naam bhi ho sakta hai."
        },

        {
            q: `🔐 4-digit code me koi digit repeat nahi hota.
Digits 1,2,3,4 hain.
Sabse chhota even code?`,
            options: ["1234", "1243", "1324", "1342"],
            answer: 0,
            hint: "Ascending order se start karo."
        },

        {
            q: `🧩 10 prisoners ke paas 10 boxes hain.
Har box me ek naam.
Har prisoner maximum 5 boxes khol sakta hai.
Sabke survive karne ki probability badhane wali
famous strategy kya hai?`,
            options: [
                "Random boxes",
                "Cycle-following strategy",
                "First 5 boxes only",
                "Last 5 boxes only"
            ],
            answer: 1,
            hint: "Permutation cycles."
        },

        {
            q: `🚪 Code:
7, 14, 28, 56, ?`,
            options: ["84", "96", "112", "120"],
            answer: 2,
            hint: "Har baar ×2."
        },

        {
            q: `🔑 4 switches hain aur 4 bulbs doosre room me.
Tum sirf ek baar bulb room me ja sakte ho.
Strategy?`,
            options: [
                "Sab ON",
                "Timing + heat + ON/OFF states use karo",
                "Random",
                "Impossible"
            ],
            answer: 1,
            hint: "Bulbs heat retain karte hain."
        },

        {
            q: `🧩 Ek train 60 km/h se 2 ghante chalti hai.
Phir 30 km/h se 1 ghanta.
Total distance?`,
            options: ["120 km", "135 km", "150 km", "180 km"],
            answer: 2,
            hint: "Distance = speed × time."
        },

        {
            q: `🔢 100 lockers hain.
1st person sab lockers toggle karta hai,
2nd every 2nd,
3rd every 3rd...
End me kaunse lockers open rahenge?`,
            options: [
                "Prime numbers",
                "Odd numbers",
                "Perfect square numbers",
                "All numbers"
            ],
            answer: 2,
            hint: "Odd number of divisors wale numbers."
        },

        {
            q: `🕵️ Ek room me 100 people hain.
Har person doosre sabse handshake karta hai.
Total handshakes?`,
            options: ["4950", "5000", "5050", "9900"],
            answer: 0,
            hint: "n(n-1)/2."
        },

        {
            q: `🔐 Code:
2, 12, 36, 80, 150, ?`,
            options: ["240", "252", "270", "300"],
            answer: 1,
            hint: "Pattern n² × (n+1) dekho."
        },

        {
            q: `🧩 3 boxes hain:
Apple, Orange, Mixed.
Sab labels wrong hain.
Sirf ek fruit nikal kar sab labels correct
kaise karoge?`,
            options: [
                "Apple box se fruit",
                "Orange box se fruit",
                "Mixed label wale box se fruit",
                "Impossible"
            ],
            answer: 2,
            hint: "Sab labels wrong hain."
        },

        {
            q: `🚪 Ek lock me 3 digits hain.

682: ek digit correct & correct place.
614: ek digit correct but wrong place.
206: two digits correct but wrong places.
738: nothing correct.
780: one digit correct but wrong place.

Code?`,
            options: ["042", "024", "204", "420"],
            answer: 1,
            hint: "738 se digits eliminate karo."
        },

        {
            q: `🕯️ Ek room me 3 candles hain.
Har candle 4 hours jalti hai.
Sab 8 PM par jalayi gayi.
10 PM par kitni candles ka 2 hours burn ho chuka hoga?`,
            options: ["1", "2", "3", "0"],
            answer: 2,
            hint: "Teeno ek saath jal rahi hain."
        },

        {
            q: `🏆 Final Escape:
Tumhare paas 3 keys hain aur 3 locks.
Har key sirf ek lock kholti hai.
Worst case me maximum kitne attempts lagenge
sab locks identify karne me?`,
            options: ["3", "4", "5", "6"],
            answer: 2,
            hint: "Systematic elimination."
        }

    ]

};


// ==========================================
// OPTIONAL: MAKE QUESTIONS AVAILABLE GLOBALLY
// ==========================================

window.escapeQuestions = escapeQuestions;


// ==========================================
// CHECK DATA
// ==========================================

console.log(
    "Escape questions loaded successfully.",
    escapeQuestions
);
// ============================================
// START ESCAPE ROOM GAME
// ============================================

export function startEscapeRoom() {

    const gameContent =
        document.getElementById("gameContent");

    if (!gameContent) return;

    let difficulty = "easy";
    let currentQuestion = 0;
    let score = 0;
    let answered = false;


    function render() {

        const questions =
            escapeQuestions[difficulty];

        const question =
            questions[currentQuestion];


        // GAME COMPLETE

        if (!question) {

            gameContent.innerHTML = `

                <div class="result-card">

                    <h2>🔐 Escape Room Complete!</h2>

                    <p>Tumne Room Escape kar liya! 🎉</p>

                    <p>Tumhara Score</p>

                    <h1>
                        ${score} / ${questions.length}
                    </h1>

                    <button id="escapeAgain">
                        🔄 Dobara Khelo
                    </button>

                </div>

            `;


            document
                .getElementById("escapeAgain")
                .onclick = () => {

                    currentQuestion = 0;
                    score = 0;
                    answered = false;

                    render();

                };

            return;
        }


        gameContent.innerHTML = `

            <div class="escape-game">

                <div class="funny-levels">

                    <button data-level="easy">
                        🟢 Easy
                    </button>

                    <button data-level="medium">
                        🟡 Medium
                    </button>

                    <button data-level="hard">
                        🔴 Hard
                    </button>

                </div>


                <div class="score-box">
                    🔐 Score: ${score}
                </div>


                <p>
                    Escape Challenge
                    ${currentQuestion + 1}
                    / ${questions.length}
                </p>


                <div class="question-card">

                    <h2>
                        ${question.q}
                    </h2>

                </div>


                <div
                    id="escapeOptions"
                    class="options-container">
                </div>


                <button
                    id="escapeHint"
                    class="hint-btn">

                    💡 Hint

                </button>


                <p
                    id="escapeHintText"
                    class="hint-text">
                </p>


                <button
                    id="escapeNext"
                    class="next-btn hidden">

                    Next ➡️

                </button>

            </div>

        `;


        // ============================================
        // LEVEL BUTTONS
        // ============================================

        document
            .querySelectorAll(".funny-levels button")
            .forEach(button => {

                button.onclick = () => {

                    difficulty =
                        button.dataset.level;

                    currentQuestion = 0;
                    score = 0;
                    answered = false;

                    render();

                };

            });


        // ============================================
        // OPTIONS
        // ============================================

        const optionsContainer =
            document.getElementById(
                "escapeOptions"
            );


        question.options.forEach(
            (option, index) => {

                const button =
                    document.createElement("button");


                button.className =
                    "option-btn";


                button.textContent =
                    `${String.fromCharCode(65 + index)}. ${option}`;


                button.onclick = () => {

                    if (answered) return;

                    answered = true;


                    const all =
                        document.querySelectorAll(
                            "#escapeOptions .option-btn"
                        );


                    all.forEach(btn => {
                        btn.disabled = true;
                    });


                    if (index === question.answer) {

                        button.classList.add("correct");

                        score++;

                    } else {

                        button.classList.add("wrong");

                        all[question.answer]
                            .classList.add("correct");

                    }


                    document
                        .getElementById("escapeNext")
                        .classList.remove("hidden");

                };


                optionsContainer
                    .appendChild(button);

            }
        );


        // ============================================
        // HINT
        // ============================================

        document
            .getElementById("escapeHint")
            .onclick = () => {

                document
                    .getElementById("escapeHintText")
                    .textContent =
                    "💡 " + question.hint;

            };


        // ============================================
        // NEXT
        // ============================================

        document
            .getElementById("escapeNext")
            .onclick = () => {

                if (!answered) return;

                currentQuestion++;

                answered = false;

                render();

            };

    }


    render();

}