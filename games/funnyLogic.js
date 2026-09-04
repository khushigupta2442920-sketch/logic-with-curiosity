// ============================================
// FUNNY LOGIC
// Easy = 30
// Medium = 30
// Hard = 30
// Total = 90 Questions
// ============================================

const funnyLogicQuestions = {

    // ========================================
    // EASY - 30 QUESTIONS
    // ========================================

    easy: [

        {
            q: "Ek aadmi bina umbrella ke baarish me bheeg raha tha, lekin uske baal bilkul nahi bheege. Kyun?",
            options: [
                "Baarish fake thi",
                "Woh ganja tha",
                "Usne cap pehni thi",
                "Woh ghar ke andar tha"
            ],
            answer: 1,
            hint: "Uske sir par baal hi nahi the."
        },

        {
            q: "Ek room me 5 log hain. Har person ek doosre se handshake karta hai. Total handshakes?",
            options: ["5", "10", "15", "20"],
            answer: 1,
            hint: "Har pair sirf ek baar handshake karega."
        },

        {
            q: "Aapke paas 3 apples hain. Aap 2 le lete ho. Aapke paas kitne apples hain?",
            options: ["1", "2", "3", "5"],
            answer: 1,
            hint: "Jo aapne liye, woh aapke paas hain."
        },

        {
            q: "Ek rooster roof par egg deta hai. Egg kis taraf girega?",
            options: ["Left", "Right", "Front", "Rooster egg nahi deta"],
            answer: 3,
            hint: "Rooster male chicken hota hai."
        },

        {
            q: "Kaunsi cheez tootne par awaaz nahi karti?",
            options: ["Glass", "Promise", "Plate", "Bottle"],
            answer: 1,
            hint: "Isse todne par emotional problem ho sakti hai."
        },

        {
            q: "Ek aadmi ke paas 10 socks hain: 5 black aur 5 white. Andhere me same colour ka pair guarantee karne ke liye minimum kitne socks lene honge?",
            options: ["2", "3", "4", "5"],
            answer: 3,
            hint: "Worst case me pehle black aur white aa sakta hai."
        },

        {
            q: "1 kg cotton aur 1 kg iron me kaunsa heavy hai?",
            options: ["Cotton", "Iron", "Dono equal", "Depends"],
            answer: 2,
            hint: "Dono ka weight 1 kg hai."
        },

        {
            q: "Aap race me second person ko overtake karte ho. Ab aap kis position par ho?",
            options: ["First", "Second", "Third", "Last"],
            answer: 1,
            hint: "Aapne second ko overtake kiya."
        },

        {
            q: "Ek table par 4 apples hain. Aap ek apple utha lete ho. Table par kitne apples bache?",
            options: ["1", "2", "3", "4"],
            answer: 2,
            hint: "Ek aapne utha liya."
        },

        {
            q: "Ek saal me kitne months me kam se kam 28 days hote hain?",
            options: ["1", "2", "6", "12"],
            answer: 3,
            hint: "Har month me 28 se zyada ya exactly 28 days hote hain."
        },

        {
            q: "Doctor ne 3 tablets di. Har 30 minute me ek tablet leni hai. Sab tablets kitne time me khatam hongi?",
            options: ["30 minutes", "60 minutes", "90 minutes", "120 minutes"],
            answer: 1,
            hint: "Pehli tablet abhi leni hai."
        },

        {
            q: "2 fathers aur 2 sons market gaye. Total sirf 3 log the. Kaise?",
            options: [
                "Do twins the",
                "Grandfather, father aur son",
                "Do friends the",
                "Question impossible hai"
            ],
            answer: 1,
            hint: "Ek person father bhi aur son bhi ho sakta hai."
        },

        {
            q: "Aapke paas matchstick hai. Dark room me candle, lamp aur stove hai. Sabse pehle kya jalaoge?",
            options: ["Candle", "Lamp", "Stove", "Matchstick"],
            answer: 3,
            hint: "Pehle matchstick jalani padegi."
        },

        {
            q: "Ek farmer ke paas 10 sheep thi. 7 ko chhodkar sab bhaag gayi. Kitni bachi?",
            options: ["3", "7", "10", "0"],
            answer: 1,
            hint: "7 ko chhodkar sab bhaag gayi."
        },

        {
            q: "Aap ek candle jala rahe ho. Candle ko bujhane ke liye kya karoge?",
            options: ["Usse dekho", "Us par hawa karo", "Usse khao", "Usse paint karo"],
            answer: 1,
            hint: "Hawa se flame bujh sakti hai."
        },

        {
            q: "Ek clock me 12 baj rahe hain. 12 strikes ke beech 11 intervals hote hain. Agar 12 strikes me 11 seconds lage, 6 strikes me kitna time lagega?",
            options: ["4 seconds", "5 seconds", "6 seconds", "11 seconds"],
            answer: 1,
            hint: "6 strikes = 5 intervals."
        },

        {
            q: "Ek aadmi ke paas 5 rupees the. Usne 5 rupees kharch kar diye. Uske paas kya bacha?",
            options: ["5 rupees", "10 rupees", "0 rupees", "1 rupee"],
            answer: 2,
            hint: "Usne saare paise kharch kar diye."
        },

        {
            q: "Ek train electric hai aur north ki taraf ja rahi hai. Smoke kis direction me jayega?",
            options: ["North", "South", "East", "Smoke nahi hoga"],
            answer: 3,
            hint: "Electric train smoke nahi karti."
        },

        {
            q: "Aapke paas 10 mango hain. Aapne 3 kha liye. Kitne mango bache?",
            options: ["3", "7", "10", "13"],
            answer: 1,
            hint: "10 - 3."
        },

        {
            q: "Ek room me 10 candles hain. 2 bujh gayi. Kitni candles room me hain?",
            options: ["8", "2", "10", "0"],
            answer: 2,
            hint: "Bujhne se candle disappear nahi hoti."
        },

        {
            q: "Ek person ke 4 legs hain subah, 2 legs dopahar aur 3 legs shaam. Woh kya hai?",
            options: ["Dog", "Human", "Cat", "Table"],
            answer: 1,
            hint: "Classic riddle: baby, adult, old person."
        },

        {
            q: "Aapke paas ek empty glass hai. Usme kya bhar sakte ho?",
            options: ["Air", "Stone only", "Nothing", "Only water"],
            answer: 0,
            hint: "Glass khaali ho tab bhi air hoti hai."
        },

        {
            q: "Ek week me kitne days hote hain?",
            options: ["5", "6", "7", "8"],
            answer: 2,
            hint: "Monday se Sunday."
        },

        {
            q: "Agar kal Sunday tha, to aaj kya hai?",
            options: ["Saturday", "Sunday", "Monday", "Tuesday"],
            answer: 2,
            hint: "Sunday ke baad Monday."
        },

        {
            q: "Ek tree par 10 birds baithe hain. Hunter ne ek ko shoot kiya. Tree par kitne birds bache?",
            options: ["9", "10", "1", "0"],
            answer: 3,
            hint: "Baaki birds awaaz sunkar udd jayenge."
        },

        {
            q: "Ek pencil ko sharpen karne ke baad woh chhoti hoti hai ya badi?",
            options: ["Chhoti", "Badi", "Same", "Invisible"],
            answer: 0,
            hint: "Sharpen karte waqt pencil ka wood remove hota hai."
        },

        {
            q: "Aap ek room me enter karte ho aur switch dekhte ho. Switch off hai. Light on kaise hogi?",
            options: [
                "Switch on karke",
                "Switch ko dekho",
                "Room se bhaagkar",
                "Window band karke"
            ],
            answer: 0,
            hint: "Simple answer."
        },

        {
            q: "Ek book ke 100 pages hain. Page 1 se 100 tak numbering me first digit 1 kitni baar aata hai?",
            options: ["10", "11", "20", "21"],
            answer: 2,
            hint: "1, 10-19 aur 21,31...91 ko count karo."
        },

        {
            q: "Ek aadmi ke paas 2 coins hain, total 30 rupees. Ek coin 10 rupees ka nahi hai. Coins kaunse hain?",
            options: [
                "10 + 20",
                "20 + 10",
                "5 + 25",
                "15 + 15"
            ],
            answer: 0,
            hint: "Statement kehta hai 'ek coin' 10 ka nahi hai."
        },

        {
            q: "Agar aap ek hole me 5 rupees daalte ho aur phir 5 rupees nikal lete ho, hole me kitna bacha?",
            options: ["5", "10", "0", "15"],
            answer: 2,
            hint: "Jo dala tha woh nikal liya."
        }
    ],


    // ========================================
    // MEDIUM - 30 QUESTIONS
    // ========================================

    medium: [

        {
            q: "Ek family me 4 daughters hain. Har daughter ka ek brother hai. Total children kitne?",
            options: ["4", "5", "8", "9"],
            answer: 1,
            hint: "Sab daughters ka brother same ho sakta hai."
        },

        {
            q: "5 machines 5 minutes me 5 toys banati hain. 100 machines 100 toys kitne minutes me banayengi?",
            options: ["5", "20", "100", "500"],
            answer: 0,
            hint: "Har machine 5 minutes me 1 toy."
        },

        {
            q: "Ek farmer ke paas chickens aur cows hain. Total 10 heads aur 28 legs hain. Cows kitni hain?",
            options: ["3", "4", "5", "6"],
            answer: 0,
            hint: "Chicken 2 legs, cow 4 legs."
        },

        {
            q: "Aapke paas 8 balls hain. Ek ball baaki sabse heavy hai. Balance scale se minimum kitni weighings me find kar sakte ho?",
            options: ["1", "2", "3", "4"],
            answer: 1,
            hint: "3-3-2 groups try karo."
        },

        {
            q: "Ek number ka half 25 hai. Number kya hai?",
            options: ["25", "40", "50", "75"],
            answer: 2,
            hint: "25 × 2."
        },

        {
            q: "Sequence: 2, 6, 12, 20, 30, ?",
            options: ["36", "40", "42", "44"],
            answer: 2,
            hint: "1×2, 2×3, 3×4..."
        },

        {
            q: "Sequence: 1, 4, 9, 16, 25, ?",
            options: ["30", "32", "36", "49"],
            answer: 2,
            hint: "Square numbers."
        },

        {
            q: "3 cats 3 mice ko 3 minutes me pakadti hain. 1 cat 1 mouse ko kitne minutes me pakdegi?",
            options: ["1", "3", "6", "9"],
            answer: 1,
            hint: "Har cat ek mouse 3 minutes me."
        },

        {
            q: "Aap race me third person ko overtake karte ho. Aapki position kya hogi?",
            options: ["First", "Second", "Third", "Fourth"],
            answer: 2,
            hint: "Aap third ki jagah aaoge."
        },

        {
            q: "Ek clock 3 baar strike karne me 4 seconds leti hai. 6 baar strike karne me kitna time?",
            options: ["8 seconds", "10 seconds", "12 seconds", "6 seconds"],
            answer: 1,
            hint: "3 strikes = 2 intervals."
        },

        {
            q: "20 students me 12 cricket aur 10 football khelte hain. Minimum kitne dono khelte honge?",
            options: ["0", "2", "10", "12"],
            answer: 1,
            hint: "12 + 10 - 20."
        },

        {
            q: "Ek room me 3 switches hain aur doosre room me 3 bulbs. Bulb room me sirf ek baar ja sakte ho. Bulbs identify karne ke liye kya use karoge?",
            options: ["Bulb ka colour", "Heat", "Room size", "Door"],
            answer: 1,
            hint: "Ek bulb ko kuch der on rakho."
        },

        {
            q: "Ek snail 10 meter wall climb karta hai. Din me 3m up aur raat me 2m slide karta hai. Top kitne din me?",
            options: ["7", "8", "9", "10"],
            answer: 1,
            hint: "Last day slide nahi karega."
        },

        {
            q: "Ek bag me 5 red aur 5 blue balls hain. Same colour ki pair guarantee karne ke liye minimum balls?",
            options: ["2", "3", "4", "5"],
            answer: 1,
            hint: "Pehle 2 alag colours aa sakte hain."
        },

        {
            q: "Ek person Monday ko city se nikla aur 3 din baad wapas aaya. Kaunsa day tha?",
            options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
            answer: 2,
            hint: "Monday + 3 days."
        },

        {
            q: "Ek family me 3 brothers hain. Har brother ki ek sister hai. Total children?",
            options: ["3", "4", "6", "7"],
            answer: 1,
            hint: "Sister same hai."
        },

        {
            q: "10 people handshake karein. Total handshakes?",
            options: ["20", "45", "50", "90"],
            answer: 1,
            hint: "10×9÷2."
        },

        {
            q: "Ek number me 5 add karne par 20 milta hai. Number?",
            options: ["10", "15", "20", "25"],
            answer: 1,
            hint: "20 - 5."
        },

        {
            q: "Ek basket me 6 apples hain. 6 people ko ek-ek apple dena hai aur basket me bhi ek apple rehna chahiye. Kaise?",
            options: [
                "Impossible",
                "Last person ko basket ke saath apple do",
                "Ek apple chhupa do",
                "Do apples kaat do"
            ],
            answer: 1,
            hint: "Last apple basket me hi rehna chahiye."
        },

        {
            q: "Aapke paas 4 coins hain. Total 40 rupees. Kaise ho sakta hai?",
            options: [
                "10+10+10+10",
                "20+10+5+5",
                "20+20+0+0",
                "5+5+5+5"
            ],
            answer: 0,
            hint: "Simple combination."
        },

        {
            q: "Ek bus me 10 passengers the. 3 utar gaye aur 5 chadh gaye. Ab kitne?",
            options: ["8", "10", "12", "15"],
            answer: 2,
            hint: "10 - 3 + 5."
        },

        {
            q: "Aapke paas 12 eggs hain. 2 break ho gaye, 2 cook hue aur 2 eat hue. Kitne eggs bache?",
            options: ["6", "8", "10", "12"],
            answer: 0,
            hint: "Wahi 2 break, cook aur eat hue."
        },

        {
            q: "Ek father apne son se 30 years bada hai. 5 years baad difference kya hoga?",
            options: ["25", "30", "35", "40"],
            answer: 1,
            hint: "Age difference same rehta hai."
        },

        {
            q: "Aapke paas 100 rupees hain. Aap 30 rupees spend karte ho. Phir 20 spend karte ho. Kitne bache?",
            options: ["40", "50", "60", "70"],
            answer: 0,
            hint: "100 - 30 - 20."
        },

        {
            q: "Ek class me 30 students hain. 15 boys aur 15 girls. Teacher ko kitne students chahiye ki ek boy aur ek girl definitely mil jaye?",
            options: ["2", "15", "16", "30"],
            answer: 2,
            hint: "Worst case me pehle saare boys aa sakte hain."
        },

        {
            q: "Ek box me 3 red, 3 blue aur 3 green balls hain. Same colour ki 2 balls guarantee karne ke liye minimum kitni balls?",
            options: ["2", "3", "4", "5"],
            answer: 2,
            hint: "3 colours hain."
        },

        {
            q: "Sequence: 3, 8, 15, 24, 35, ?",
            options: ["44", "46", "48", "50"],
            answer: 2,
            hint: "Differences 5, 7, 9, 11..."
        },

        {
            q: "Ek train 60 km/h se 2 hours travel karti hai. Distance?",
            options: ["30 km", "60 km", "120 km", "180 km"],
            answer: 2,
            hint: "Speed × time."
        },

        {
            q: "Ek person ke paas 7 books hain. Woh 2 friends ko 2-2 books deta hai. Kitni bachi?",
            options: ["2", "3", "4", "5"],
            answer: 1,
            hint: "7 - 4."
        }
    ],


    // ========================================
    // HARD - 30 QUESTIONS
    // ========================================

    hard: [

        {
            q: "12 coins me se ek counterfeit hai aur woh heavy ya light ho sakta hai. Classic puzzle me minimum balance weighings?",
            options: ["2", "3", "4", "6"],
            answer: 1,
            hint: "Classic 12-coin puzzle."
        },

        {
            q: "27 balls me ek heavy ball hai. Balance scale se minimum weighings?",
            options: ["2", "3", "4", "5"],
            answer: 1,
            hint: "27 = 3³."
        },

        {
            q: "81 balls me ek heavy ball hai. Minimum weighings?",
            options: ["3", "4", "5", "6"],
            answer: 1,
            hint: "81 = 3⁴."
        },

        {
            q: "100 people ek doosre se handshake karte hain. Total handshakes?",
            options: ["4950", "5000", "5050", "9900"],
            answer: 0,
            hint: "n(n-1)/2."
        },

        {
            q: "Sequence: 1, 2, 6, 24, 120, ?",
            options: ["240", "360", "720", "840"],
            answer: 2,
            hint: "1!, 2!, 3!, 4!, 5!..."
        },

        {
            q: "Sequence: 2, 3, 5, 8, 12, 17, ?",
            options: ["21", "23", "24", "25"],
            answer: 1,
            hint: "Differences +1, +2, +3..."
        },

        {
            q: "100 lockers hain. Sab initially closed hain. Har i-th student i-th locker ke multiples ko toggle karta hai. End me kaunse lockers open honge?",
            options: [
                "Prime numbers",
                "Odd numbers",
                "Perfect squares",
                "Even numbers"
            ],
            answer: 2,
            hint: "Odd number of divisors wale lockers open rahenge."
        },

        {
            q: "100 lockers puzzle me locker 50 end me open hoga ya closed?",
            options: ["Open", "Closed", "Random", "Depends"],
            answer: 1,
            hint: "50 perfect square nahi hai."
        },

        {
            q: "100 lockers puzzle me locker 64 end me?",
            options: ["Open", "Closed", "Random", "Impossible"],
            answer: 0,
            hint: "64 perfect square hai."
        },

        {
            q: "100-floor building aur 2 eggs hain. Worst-case minimum drops classic strategy me kitne?",
            options: ["10", "14", "19", "25"],
            answer: 1,
            hint: "1+2+...+14 = 105."
        },

        {
            q: "Ek farmer ko wolf, goat aur cabbage river ke paar le jana hai. Boat me farmer ke saath ek hi cheez ja sakti hai. Pehle kya le jayega?",
            options: ["Wolf", "Goat", "Cabbage", "Kuch nahi"],
            answer: 1,
            hint: "Wolf goat ko aur goat cabbage ko nahi kha sakte."
        },

        {
            q: "Snail 10m wall par 3m/day climb aur 2m/night slide karta hai. Top kab?",
            options: ["Day 7", "Day 8", "Day 9", "Day 10"],
            answer: 1,
            hint: "8th day par 10m reach kar lega."
        },

        {
            q: "Clock 12 strikes in 11 seconds. 6 strikes kitne seconds?",
            options: ["4", "5", "6", "11"],
            answer: 1,
            hint: "12 strikes = 11 intervals."
        },

        {
            q: "3 switches aur 3 bulbs puzzle me ek bulb ko identify karne ke liye heat kaise use karoge?",
            options: [
                "Switch ko on karke immediately room jao",
                "Ek switch ko kuch time on rakho, off karo, doosra on karo",
                "Sab switches on karo",
                "Kisi switch ko touch mat karo"
            ],
            answer: 1,
            hint: "Bulb on rehne par warm hota hai."
        },

        {
            q: "8 coins me ek coin lighter hai. Balance scale se minimum weighings?",
            options: ["1", "2", "3", "4"],
            answer: 1,
            hint: "3-3-2 strategy."
        },

        {
            q: "Aapke paas 9 balls hain. Ek heavier hai. 2 weighings me kaise find karoge?",
            options: [
                "3-3-3 groups",
                "4-4-1 groups",
                "2-2-5 groups",
                "Random"
            ],
            answer: 0,
            hint: "Pehle 3 vs 3."
        },

        {
            q: "Ek room me 100 people hain. Har person har doosre person se exactly ek baar handshake karta hai. Last person kitne handshakes karega?",
            options: ["50", "99", "100", "4950"],
            answer: 1,
            hint: "Last person baaki 99 se."
        },

        {
            q: "Ek number ka 20% = 50. Number?",
            options: ["100", "200", "250", "500"],
            answer: 2,
            hint: "50 ÷ 0.20."
        },

        {
            q: "Ek train 120 km/h se 30 minutes chale. Distance?",
            options: ["30 km", "60 km", "90 km", "120 km"],
            answer: 1,
            hint: "30 minutes = 0.5 hour."
        },

        {
            q: "Agar 4 workers 4 walls ko 4 days me paint karte hain, same rate par 1 worker 1 wall ko kitne days?",
            options: ["1", "4", "8", "16"],
            answer: 1,
            hint: "Har worker ek wall 4 days me."
        },

        {
            q: "Ek clock 6 baar strike karne me 5 seconds leti hai. 12 baar strike karne me?",
            options: ["10 sec", "11 sec", "12 sec", "15 sec"],
            answer: 1,
            hint: "6 strikes = 5 intervals; 12 = 11 intervals."
        },

        {
            q: "Ek basket me 10 red, 10 blue aur 10 green balls hain. Same colour ke 3 balls guarantee karne ke liye minimum kitne balls?",
            options: ["5", "6", "7", "8"],
            answer: 2,
            hint: "Worst case: 2-2-2, next ball third same colour."
        },

        {
            q: "Ek box me 4 red aur 4 blue socks hain. Same colour ka pair guarantee karne ke liye minimum?",
            options: ["2", "3", "4", "5"],
            answer: 1,
            hint: "2 colours hain."
        },

        {
            q: "Ek family me 2 parents aur 4 children hain. Har child ke 3 siblings hain. Total people?",
            options: ["4", "6", "8", "10"],
            answer: 1,
            hint: "4 children ek doosre ke siblings hain."
        },

        {
            q: "Ek person 10 floors chadh raha hai. Har minute 3 floors up aur 2 floors down. 10th floor tak pahunchne me?",
            options: ["7 min", "8 min", "9 min", "10 min"],
            answer: 1,
            hint: "Final climb ke baad neeche nahi aayega."
        },

        {
            q: "Aapke paas 5 boxes hain. Sirf ek me gold hai. Har box par ek statement hai aur sirf ek statement true hai. Is type ke puzzle ko kya kehte hain?",
            options: [
                "Logic puzzle",
                "Sorting puzzle",
                "Memory puzzle",
                "Reaction puzzle"
            ],
            answer: 0,
            hint: "Statements ko logically analyze karna hota hai."
        },

        {
            q: "Ek race me aap last person ko overtake karte ho. Aapki position kya hogi?",
            options: [
                "First",
                "Second",
                "Last possible nahi",
                "Second last"
            ],
            answer: 2,
            hint: "Last person ke peeche koi nahi hota."
        },

        {
            q: "Aapke paas 3 red aur 3 blue balls hain. Andhere me same colour ki 2 balls guarantee karne ke liye minimum?",
            options: ["2", "3", "4", "5"],
            answer: 1,
            hint: "Do colours hain."
        },

        {
            q: "Ek person ke paas 10 coins hain. Woh 3 coins table par rakhta hai, 2 pocket me rakhta hai aur baaki haath me. Total coins kitne hain?",
            options: ["5", "8", "10", "15"],
            answer: 2,
            hint: "Coins ki location badli hai, quantity nahi."
        },

        {
            q: "Ek puzzle me aapko 'think outside the box' kaha jata hai. Iska funny logic meaning kya hai?",
            options: [
                "Box ko tod do",
                "Normal assumption se hatkar socho",
                "Box me so jao",
                "Answer box ke bahar likho"
            ],
            answer: 1,
            hint: "Problem ko different angle se dekho."
        }
    ]
};


// ============================================
// START FUNNY LOGIC
// ============================================

export function startFunnyLogic() {

    const gameContent =
        document.getElementById("gameContent");

    if (!gameContent) return;


    let difficulty = "easy";
    let currentQuestion = 0;
    let score = 0;
    let answered = false;


    function render() {

        const list =
            funnyLogicQuestions[difficulty];

        const question =
            list[currentQuestion];


        if (!question) {

            gameContent.innerHTML = `
                <div class="result-card">

                    <h2>🎉 Game Complete!</h2>

                    <p>
                        Funny Logic me tumhara score:
                    </p>

                    <h1>
                        ${score} / ${list.length}
                    </h1>

                    <button id="funnyAgain">
                        🔄 Play Again
                    </button>

                </div>
            `;


            document
                .getElementById("funnyAgain")
                .onclick = () => {

                    currentQuestion = 0;
                    score = 0;
                    answered = false;

                    render();
                };

            return;
        }


        gameContent.innerHTML = `

            <div class="funny-game">

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
                    😂 Score: ${score}
                </div>


                <p>
                    Question
                    ${currentQuestion + 1}
                    / ${list.length}
                </p>


                <div class="question-card">

                    <h2>
                        ${question.q}
                    </h2>

                </div>


                <div
                    id="funnyOptions"
                    class="options-container">
                </div>


                <button
                    id="funnyHint"
                    class="hint-btn">

                    💡 Hint

                </button>


                <p
                    id="funnyHintText"
                    class="hint-text">
                </p>


                <button
                    id="funnyNext"
                    class="next-btn hidden">

                    Next ➡️

                </button>

            </div>
        `;


        // Difficulty buttons

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


        // Options

        const options =
            document.getElementById(
                "funnyOptions"
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
                            "#funnyOptions .option-btn"
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
                        .getElementById("funnyNext")
                        .classList.remove("hidden");

                };


                options.appendChild(button);

            }
        );


        // Hint

        document
            .getElementById("funnyHint")
            .onclick = () => {

                document
                    .getElementById("funnyHintText")
                    .textContent =
                    "💡 " + question.hint;

            };


        // Next

        document
            .getElementById("funnyNext")
            .onclick = () => {

                if (!answered) return;

                currentQuestion++;

                answered = false;

                render();

            };

    }


    render();

}