const brainTwist = {
    easy: [
        {
            q: "🧠 Ek aadmi ke paas 10 apples hain. Usne 3 apples le liye. Ab uske paas kitne apples hain?",
            options: ["3", "7", "10", "13"],
            answer: 0,
            hint: "Question me kaha gaya hai ki usne 3 apples le liye."
        },
        {
            q: "🧠 Tum race me second person ko overtake karte ho. Ab tum kis position par ho?",
            options: ["First", "Second", "Third", "Last"],
            answer: 1,
            hint: "Tumne second ko overtake kiya hai."
        },
        {
            q: "🧠 Ek room me 5 candles hain. 2 candles bujh gayi. Kitni candles ab bhi room me hain?",
            options: ["2", "3", "5", "0"],
            answer: 2,
            hint: "Bujhne se candle room se gayab nahi hoti."
        },
        {
            q: "🧠 Ek saal me kitne months me 28 days hote hain?",
            options: ["1", "2", "11", "12"],
            answer: 3,
            hint: "Har month me kam se kam 28 days hote hain."
        },
        {
            q: "🧠 Agar tumhare paas 5 mango hain aur tum 2 le lo, tumhare paas kitne mango hain?",
            options: ["2", "3", "5", "7"],
            answer: 0,
            hint: "Tumne kitne mango liye?"
        },
        {
            q: "🧠 Kaunsi cheez jitni zyada dry hoti hai, utni hi zyada wet karti hai?",
            options: ["Towel", "Paper", "Sand", "Stone"],
            answer: 0,
            hint: "Nahane ke baad use karte hain."
        },
        {
            q: "🧠 Ek table par 4 apples hain. Tumne ek apple utha liya. Tumhare paas kitne apples hain?",
            options: ["1", "3", "4", "0"],
            answer: 0,
            hint: "Tumne jo uthaya woh tumhare paas hai."
        },
        {
            q: "🧠 Ek plane India aur Nepal ke border par crash hua. Survivors ko kahan bury karoge?",
            options: ["India", "Nepal", "Border par", "Survivors ko bury nahi karte"],
            answer: 3,
            hint: "Survivors zinda hain."
        },
        {
            q: "🧠 Doctor ne 3 tablets di aur kaha har 30 minute me ek tablet lena. Sab tablets khatam hone me kitna time lagega?",
            options: ["30 min", "60 min", "90 min", "120 min"],
            answer: 1,
            hint: "First tablet abhi leni hai."
        },
        {
            q: "🧠 Ek rooster roof par egg deta hai. Egg kis side girega?",
            options: ["Left", "Right", "Front", "Rooster egg nahi deta"],
            answer: 3,
            hint: "Rooster male chicken hota hai."
        },
        {
            q: "🧠 1 kg cotton aur 1 kg iron me kaunsa heavy hai?",
            options: ["Cotton", "Iron", "Dono equal", "Depends"],
            answer: 2,
            hint: "Dono ka weight 1 kg hai."
        },
        {
            q: "🧠 Agar 5 machines 5 minutes me 5 toys banati hain, to 1 machine 5 minutes me kitne toys banayegi?",
            options: ["1", "5", "10", "25"],
            answer: 0,
            hint: "Har machine 5 minutes me 1 toy banati hai."
        },
        {
            q: "🧠 Dark room me candle, lamp aur stove hai. Tumhare paas ek matchbox hai. Sabse pehle kya jalayoge?",
            options: ["Candle", "Lamp", "Stove", "Matchstick"],
            answer: 3,
            hint: "Pehle matchstick jalani padegi."
        },
        {
            q: "🧠 Ek aadmi Monday ko horse par city gaya aur 3 din baad Monday ko wapas aaya. Kaise?",
            options: ["Time travel", "Horse ka naam Monday tha", "Calendar galat tha", "Impossible"],
            answer: 1,
            hint: "Monday horse ka naam tha."
        },
        {
            q: "🧠 Agar 2 + 2 = 4, 3 + 3 = 6, to 4 + 4 = ?",
            options: ["6", "7", "8", "9"],
            answer: 2,
            hint: "Simple addition."
        },
        {
            q: "🧠 Ek dozen me kitne items hote hain?",
            options: ["10", "12", "20", "24"],
            answer: 1,
            hint: "Common counting term."
        },
        {
            q: "🧠 Ek tree par 10 birds baithe hain. Hunter ne ek bird ko shoot kiya. Tree par kitne birds bachenge?",
            options: ["9", "10", "1", "0"],
            answer: 3,
            hint: "Baaki birds awaaz se ud jayenge."
        },
        {
            q: "🧠 Agar kal Sunday tha, to aaj kya hai?",
            options: ["Saturday", "Sunday", "Monday", "Tuesday"],
            answer: 2,
            hint: "Sunday ke baad Monday."
        },
        {
            q: "🧠 Kaunsi cheez tootne par awaaz nahi karti?",
            options: ["Glass", "Promise", "Plate", "Bottle"],
            answer: 1,
            hint: "Ek emotional answer socho."
        },
        {
            q: "🧠 Tum ek candle ko 3 pieces me cut karte ho. Kitne pieces milenge?",
            options: ["2", "3", "4", "6"],
            answer: 1,
            hint: "Question directly 3 pieces bol raha hai."
        },
        {
            q: "🧠 Ek week me kitne days hote hain?",
            options: ["5", "6", "7", "8"],
            answer: 2,
            hint: "Monday se Sunday."
        },
        {
            q: "🧠 Ek room me 2 fathers aur 2 sons hain, lekin total 3 people hain. Kaise?",
            options: ["Impossible", "Grandfather, father aur son", "Do twins", "Two brothers"],
            answer: 1,
            hint: "Ek person father aur son dono ho sakta hai."
        },
        {
            q: "🧠 Kaunsi cheez upar jaati hai lekin neeche nahi aati?",
            options: ["Age", "Ball", "Rain", "Lift"],
            answer: 0,
            hint: "Time ke saath badhti hai."
        },
        {
            q: "🧠 Ek aadmi ke paas 2 coins hain, total ₹15. Ek coin ₹10 ka nahi hai. Coins kaunse hain?",
            options: ["₹5 + ₹10", "₹7 + ₹8", "₹10 + ₹5", "₹15 + ₹0"],
            answer: 0,
            hint: "₹10 ka coin doosra coin ho sakta hai."
        },
        {
            q: "🧠 10 me se 10 subtract karo. Kitna bacha?",
            options: ["0", "1", "10", "20"],
            answer: 0,
            hint: "10 - 10."
        },
        {
            q: "🧠 Kaunsi cheez ke teeth hote hain par woh bite nahi karti?",
            options: ["Dog", "Comb", "Shark", "Tiger"],
            answer: 1,
            hint: "Hair ke liye use hoti hai."
        },
        {
            q: "🧠 Ek clock 12 baar strike karne me 11 seconds leti hai. 6 baar strike karne me kitna time lagega?",
            options: ["5 sec", "11 sec", "6 sec", "10 sec"],
            answer: 0,
            hint: "12 strikes me 11 gaps hote hain."
        },
        {
            q: "🧠 Agar 3 cats 3 mice ko 3 minutes me pakadti hain, to 1 cat 1 mouse ko kitne minutes me pakdegi?",
            options: ["1", "3", "6", "9"],
            answer: 1,
            hint: "Har cat ek mouse 3 minutes me pakadti hai."
        },
        {
            q: "🧠 Tumhare paas 6 eggs hain. 2 tod diye, 2 fry kiye aur 2 kha liye. Kitne eggs bache?",
            options: ["0", "2", "4", "6"],
            answer: 0,
            hint: "Wahi 2 eggs todkar fry aur khae gaye."
        },
        {
            q: "🧠 Kaunsi cheez chalti hai par uske legs nahi hote?",
            options: ["Dog", "Clock", "Chair", "Table"],
            answer: 1,
            hint: "Time ke saath chalti hai."
        }
    ],

    medium: [
        {
            q: "🧠 Ek farmer ke paas 17 sheep thi. All but 9 died. Kitni sheep bachi?",
            options: ["8", "9", "17", "0"],
            answer: 1,
            hint: "'All but 9' ka matlab 9 ko chhodkar sab."
        },
        {
            q: "🧠 Ek bat aur ball ki total price ₹110 hai. Bat ball se ₹100 mehngi hai. Ball ki price?",
            options: ["₹5", "₹10", "₹15", "₹20"],
            answer: 0,
            hint: "x + (x + 100) = 110."
        },
        {
            q: "🧠 5 people ek room me hain. Har person har doosre person se handshake karta hai. Total handshakes?",
            options: ["5", "10", "15", "20"],
            answer: 1,
            hint: "n(n-1)/2."
        },
        {
            q: "🧠 Ek train 100m long hai aur 100m bridge cross karti hai. Train ko poori tarah cross karne ke liye kitna distance travel karna hoga?",
            options: ["100m", "150m", "200m", "300m"],
            answer: 2,
            hint: "Train length + bridge length."
        },
        {
            q: "🧠 Tumhare paas 8 balls hain. Ek ball heavier hai. Balance scale se minimum weighings kitni hongi?",
            options: ["1", "2", "3", "4"],
            answer: 1,
            hint: "3-3-2 groups banao."
        },
        {
            q: "🧠 1 se 100 tak digit 9 kitni baar aata hai?",
            options: ["10", "19", "20", "21"],
            answer: 2,
            hint: "Units aur tens dono positions count karo."
        },
        {
            q: "🧠 Ek father ki age son se 30 years zyada hai. 5 years baad difference kitna hoga?",
            options: ["25", "30", "35", "40"],
            answer: 1,
            hint: "Age difference change nahi hota."
        },
        {
            q: "🧠 Ek room me 10 people hain. Sab ek doosre se handshake karte hain. Total handshakes?",
            options: ["45", "50", "55", "90"],
            answer: 0,
            hint: "10 × 9 ÷ 2."
        },
        {
            q: "🧠 3 switches aur 3 bulbs puzzle me bulb ko touch karke identify kar sakte ho. Kaunsi extra clue useful hai?",
            options: ["Bulb ki heat", "Bulb ka colour", "Room ka size", "Door ka colour"],
            answer: 0,
            hint: "ON rehne par bulb garam hota hai."
        },
        {
            q: "🧠 Ek number ka half 20 hai. Number?",
            options: ["10", "20", "40", "60"],
            answer: 2,
            hint: "20 × 2."
        },
        {
            q: "🧠 Sequence: 2, 6, 12, 20, 30, ?",
            options: ["36", "40", "42", "44"],
            answer: 2,
            hint: "1×2, 2×3, 3×4, 4×5..."
        },
        {
            q: "🧠 Ek aadmi 10th floor par rehta hai. Neeche jaate waqt lift use karta hai, upar aate waqt 7th floor tak lift aur phir stairs. Kyun?",
            options: ["Lift kharab hai", "Woh short hai", "Stairs pasand hain", "10th floor closed hai"],
            answer: 1,
            hint: "Woh 10th floor ka button reach nahi kar pata."
        },
        {
            q: "🧠 3 boxes hain: Apples, Oranges, Mixed. Teeno labels wrong hain. Sirf ek fruit nikalna hai. Kis box se?",
            options: ["Apples", "Oranges", "Mixed", "Kisi se bhi"],
            answer: 2,
            hint: "Mixed label wala actually mixed nahi ho sakta."
        },
        {
            q: "🧠 Ek clock 5 minutes slow hai. Tum use 10 minutes fast kar dete ho. Ab clock actual time se?",
            options: ["5 min fast", "5 min slow", "10 min fast", "Correct"],
            answer: 0,
            hint: "-5 + 10 = +5."
        },
        {
            q: "🧠 Ek number ko 3 se multiply karke 6 subtract kiya to 15 mila. Number?",
            options: ["5", "6", "7", "8"],
            answer: 0,
            hint: "3x - 6 = 15."
        },
        {
            q: "🧠 4 people ko bridge cross karna hai. Times 1, 2, 7, 10 minutes. Torch ek hai. Minimum time?",
            options: ["17", "19", "20", "21"],
            answer: 1,
            hint: "Fastest two ka smart use karo."
        },
        {
            q: "🧠 Ek bag me 5 red aur 5 blue socks hain. Dark room me same colour pair guarantee karne ke liye minimum socks?",
            options: ["2", "3", "4", "5"],
            answer: 1,
            hint: "Worst case me pehle 2 different colours ho sakte hain."
        },
        {
            q: "🧠 Sequence: 1, 4, 9, 16, 25, ?",
            options: ["30", "32", "36", "49"],
            answer: 2,
            hint: "Square numbers hain."
        },
        {
            q: "🧠 20 students me 12 cricket khelte hain, 10 football. Minimum kitne dono khelte hain?",
            options: ["0", "2", "10", "12"],
            answer: 1,
            hint: "12 + 10 - 20 = 2."
        },
        {
            q: "🧠 Ek farmer ke paas chickens aur cows hain. Total heads 10 aur legs 28. Cows kitni?",
            options: ["3", "4", "5", "6"],
            answer: 0,
            hint: "Chicken 2 legs, cow 4 legs."
        },
        {
            q: "🧠 2 fathers aur 2 sons fishing par gaye. Har person ne 1 fish pakdi. Total 3 fish hi kyun?",
            options: ["Ek fish chhod di", "Grandfather, father, son", "Ek person ne fish share ki", "Impossible"],
            answer: 1,
            hint: "Total people 3 hain."
        },
        {
            q: "🧠 Agar yesterday tomorrow hota, to today Friday hota. Actual today kya hai?",
            options: ["Thursday", "Friday", "Saturday", "Sunday"],
            answer: 2,
            hint: "Agar yesterday ko tomorrow maana jaye, to day relation 2 din shift hota hai."
        },
        {
            q: "🧠 100 lockers problem me end me kaunse lockers open rahte hain?",
            options: ["Prime numbers", "Odd numbers", "Perfect squares", "Even numbers"],
            answer: 2,
            hint: "Sirf perfect squares ke odd number of divisors hote hain."
        },
        {
            q: "🧠 1 se 50 tak numbers me digit 5 kitni baar aata hai?",
            options: ["5", "6", "10", "15"],
            answer: 1,
            hint: "5, 15, 25, 35, 45, 50."
        },
        {
            q: "🧠 Ek clock 3 baje 3 chimes me 2 seconds leti hai. 6 chimes me kitna time lagega?",
            options: ["4 sec", "5 sec", "6 sec", "10 sec"],
            answer: 1,
            hint: "3 chimes = 2 intervals, isliye 1 interval = 1 sec."
        },
        {
            q: "🧠 Ek rope 60 min me jalti hai. Agar dono ends se jalao to kitna time lagega?",
            options: ["15 min", "30 min", "45 min", "60 min"],
            answer: 1,
            hint: "Dono ends se jalane par time half ho jata hai."
        },
        {
            q: "🧠 6 people circle me baithe hain. Har person ke exactly 2 neighbours hain. Total neighbour relationships kitni hain?",
            options: ["6", "10", "12", "18"],
            answer: 0,
            hint: "Circle me har pair of neighbours ek relationship banata hai."
        },
        {
            q: "🧠 Ek shopkeeper ₹100 item par 20% discount deta hai. Selling price?",
            options: ["₹70", "₹80", "₹90", "₹120"],
            answer: 1,
            hint: "20% of ₹100 = ₹20."
        },
        {
            q: "🧠 Sequence: 3, 8, 15, 24, 35, ?",
            options: ["44", "46", "48", "50"],
            answer: 2,
            hint: "+5, +7, +9, +11, +13."
        },
        {
            q: "🧠 Ek person ke paas 4 daughters hain. Har daughter ka ek brother hai. Total children?",
            options: ["4", "5", "8", "9"],
            answer: 1,
            hint: "Sab daughters ka same brother ho sakta hai."
        }
    ],

    hard: [
        {
            q: "🧠 3 switches aur 3 bulbs hain. Tum bulb room me sirf ek baar ja sakte ho. Correct strategy kya hai?",
            options: [
                "Ek switch ON rakho, doosra kuch der ON karke OFF karo, third OFF rakho; light aur heat check karo",
                "Sab switches OFF rakho",
                "Sab switches ON rakho",
                "Random switch choose karo"
            ],
            answer: 0,
            hint: "Light ke saath bulb ki heat bhi information deti hai."
        },
        {
            q: "🧠 12 coins me ek counterfeit hai, lekin pata nahi heavy hai ya light. Balance scale se guaranteed find karna possible hai?",
            options: ["Haan, 3 weighings", "Haan, 1 weighing", "Haan, 2 weighings", "Nahi"],
            answer: 0,
            hint: "Classic 12-coin puzzle 3 weighings me solve hota hai."
        },
        {
            q: "🧠 100 prisoners aur 100 boxes puzzle me famous strategy kya use karti hai?",
            options: ["Random selection", "Permutation cycles", "First 50 boxes", "Last 50 boxes"],
            answer: 1,
            hint: "Har number ko next box ke pointer ki tarah follow karte hain."
        },
        {
            q: "🧠 Ek uneven rope 60 min me jalti hai. 45 min measure karne ke liye kya karoge?",
            options: [
                "Ek rope ek end se jalao",
                "Pehli rope dono ends se aur doosri rope ek end se jalao; pehli khatam hone par doosri ka doosra end jalao",
                "Dono ropes ek end se jalao",
                "Impossible"
            ],
            answer: 1,
            hint: "Pehli rope 30 min me khatam hogi, phir doosri 15 min me."
        },
        {
            q: "🧠 5 bags me coins hain. Ek bag ke coins 9g ke hain, baaki 10g. Ek weighing me fake bag kaise find karoge?",
            options: [
                "Bag 1 se 1, bag 2 se 2, bag 3 se 3, bag 4 se 4, bag 5 se 5 coins lekar weigh karo",
                "Har bag se 1 coin lo",
                "Sab coins weigh karo",
                "Possible nahi"
            ],
            answer: 0,
            hint: "1, 2, 3, 4, 5 coins ka pattern unique weight difference dega."
        },
        {
            q: "🧠 2 guards aur 2 doors puzzle me ek question se correct door kaise find karoge?",
            options: [
                "Random choose",
                "Doosre guard se poochna ki doosra guard kya kahega",
                "Apna naam poochna",
                "Guard ko ignore karna"
            ],
            answer: 1,
            hint: "Truth aur lie dono tumhe wrong door ki taraf point karenge."
        },
        {
            q: "🧠 9 balls me ek heavier hai. Balance scale se minimum weighings?",
            options: ["1", "2", "3", "4"],
            answer: 1,
            hint: "3-3-3 groups banao."
        },
        {
            q: "🧠 8 coins me ek lighter hai. Balance scale se minimum weighings?",
            options: ["1", "2", "3", "4"],
            answer: 1,
            hint: "3-3-2 groups banao."
        },
        {
            q: "🧠 4 people bridge cross karte hain: 1, 2, 7, 10 min. Torch required hai. Minimum total time?",
            options: ["17", "19", "20", "21"],
            answer: 1,
            hint: "1 aur 2 ko fastest pair ki tarah use karo."
        },
        {
            q: "🧠 5 people bridge cross karte hain: 1, 2, 5, 8, 10 min. Minimum time?",
            options: ["17", "19", "20", "21"],
            answer: 3,
            hint: "Fastest pair ko strategically repeat karo."
        },
        {
            q: "🧠 100 lockers toggle puzzle me locker 36 open rahega ya closed?",
            options: ["Open", "Closed", "Random", "Depends"],
            answer: 0,
            hint: "36 perfect square hai."
        },
        {
            q: "🧠 100 lockers me locker 50 ka final state?",
            options: ["Open", "Closed", "Depends", "Impossible"],
            answer: 1,
            hint: "50 perfect square nahi hai."
        },
        {
            q: "🧠 6 people handshake puzzle me total handshakes?",
            options: ["12", "15", "18", "30"],
            answer: 1,
            hint: "6 × 5 ÷ 2."
        },
        {
            q: "🧠 10 people handshake puzzle?",
            options: ["35", "40", "45", "50"],
            answer: 2,
            hint: "10 × 9 ÷ 2."
        },
        {
            q: "🧠 20 people handshake puzzle?",
            options: ["180", "190", "200", "210"],
            answer: 1,
            hint: "20 × 19 ÷ 2."
        },
        {
            q: "🧠 3 boxes me labels all wrong hain. Mixed box se Apple nikla. Apple label wale box me kya hoga?",
            options: ["Apple", "Orange", "Mixed", "Empty"],
            answer: 1,
            hint: "Mixed box actually Apple-only hai, isliye baaki labels se elimination karo."
        },
        {
            q: "🧠 Ek farmer ke paas 100 ducks hain. 10 ko chhodkar sab bhaag gaye. Kitni ducks bachi?",
            options: ["90", "10", "100", "0"],
            answer: 1,
            hint: "'10 ko chhodkar sab' ka matlab 10 bachi."
        },
        {
            q: "🧠 Tumhare paas 3 boxes hain. Ek me apples, ek me oranges aur ek me dono hain. Labels sab galat hain. Agar 'Apples' label wale box se orange nikla, to us box me kya hai?",
            options: ["Sirf apples", "Sirf oranges", "Mixed", "Kuch nahi"],
            answer: 2,
            hint: "Apple label wala mixed hona chahiye."
        },
        {
            q: "🧠 Ek room me 100 log hain. Har person har doosre person se handshake karta hai. Total handshakes?",
            options: ["4950", "5000", "5050", "9900"],
            answer: 0,
            hint: "100 × 99 ÷ 2."
        },
        {
            q: "🧠 Sequence: 1, 1, 2, 3, 5, 8, ?",
            options: ["11", "12", "13", "15"],
            answer: 2,
            hint: "Har number previous two numbers ka sum hai."
        },
        {
            q: "🧠 Sequence: 2, 3, 5, 8, 12, 17, ?",
            options: ["21", "22", "23", "24"],
            answer: 2,
            hint: "Differences +1, +2, +3, +4, +5..."
        },
        {
            q: "🧠 Ek clock 6 minutes fast hai. Har hour me 1 minute aur fast ho jaati hai. 4 hours baad kitni fast hogi?",
            options: ["7 min", "8 min", "9 min", "10 min"],
            answer: 2,
            hint: "6 + 4 × 1."
        },
        {
            q: "🧠 Ek number ka 25% = 20 hai. Number kya hai?",
            options: ["40", "60", "80", "100"],
            answer: 2,
            hint: "20 × 4."
        },
        {
            q: "🧠 Ek train 60 km/h ki speed se chal rahi hai. 30 minutes me kitna distance cover karegi?",
            options: ["20 km", "30 km", "40 km", "60 km"],
            answer: 1,
            hint: "30 minutes = 0.5 hour."
        },
        {
            q: "🧠 10 coins hain. 3 coins ko table par ulta kar diya. Agar sab coins initially heads the, ab heads kitne rahenge?",
            options: ["3", "7", "10", "0"],
            answer: 1,
            hint: "3 heads tails ban gaye."
        },
        {
            q: "🧠 Ek aadmi ke 4 sons hain. Har son ki ek sister hai. Total children kitne hain?",
            options: ["4", "5", "8", "9"],
            answer: 1,
            hint: "Sab sons ki same sister ho sakti hai."
        },
        {
            q: "🧠 Tumhare paas 10 chocolates hain. Tum 2 chocolates har 10 minute me khate ho. Sab chocolates khatam hone me kitna time lagega?",
            options: ["40 min", "50 min", "60 min", "20 min"],
            answer: 0,
            hint: "5 groups × 10 minutes = 50, lekin pehla group turant khaya ja sakta hai."
        },
        {
            q: "🧠 Ek basket me 6 apples hain. 6 logon ko ek-ek apple dena hai, lekin basket me ek apple rehna chahiye. Kaise?",
            options: [
                "Ek apple aadha kar do",
                "Last person ko basket ke saath apple do",
                "Ek person ko apple mat do",
                "Impossible"
            ],
            answer: 1,
            hint: "Last person ko basket ke andar wala apple de do."
        },
        {
            q: "🧠 Ek aadmi ke paas 5 daughters hain. Har daughter ka ek brother hai. Har child ke 2 parents hain. Total children kitne hain?",
            options: ["5", "6", "7", "10"],
            answer: 1,
            hint: "5 daughters + same brother = 6 children."
        },
        {
            q: "🧠 Ek building me 20 floors hain. Lift sirf odd floors par rukti hai. Tum 14th floor par jaana chahte ho. Sabse paas ka floor jahan lift rukegi?",
            options: ["13th", "14th", "15th", "12th"],
            answer: 0,
            hint: "14 ke paas odd floors 13 aur 15 hain; 13 closer hai."
        },
        {
            q: "🧠 Ek race me tum third person ko overtake karte ho. Ab tum kis position par ho?",
            options: ["Second", "Third", "Fourth", "First"],
            answer: 1,
            hint: "Third ko overtake karne par tum third position lete ho."
        }
    ]
};
// ============================================
// START IMPOSSIBLE GAME
// ============================================

export function startImpossible() {

    const gameContent =
        document.getElementById("gameContent");

    if (!gameContent) return;

    let difficulty = "easy";
    let currentQuestion = 0;
    let score = 0;
    let answered = false;

    function render() {

        const questions =
            brainTwist[difficulty];

        const question =
            questions[currentQuestion];

        // GAME COMPLETE
        if (!question) {

            gameContent.innerHTML = `
                <div class="result-card">

                    <h2>🌀 Impossible Complete!</h2>

                    <p>Tumhara Score</p>

                    <h1>
                        ${score} / ${questions.length}
                    </h1>

                    <button id="impossibleAgain">
                        🔄 Dobara Khelo
                    </button>

                </div>
            `;

            document
                .getElementById("impossibleAgain")
                .onclick = () => {

                    currentQuestion = 0;
                    score = 0;
                    answered = false;

                    render();
                };

            return;
        }

        gameContent.innerHTML = `

            <div class="impossible-game">

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
                    🌀 Score: ${score}
                </div>

                <p>
                    Impossible Challenge
                    ${currentQuestion + 1}
                    / ${questions.length}
                </p>

                <div class="question-card">

                    <h2>${question.q}</h2>

                </div>

                <div
                    id="impossibleOptions"
                    class="options-container">
                </div>

                <button
                    id="impossibleHint"
                    class="hint-btn">

                    💡 Hint

                </button>

                <p
                    id="impossibleHintText"
                    class="hint-text">
                </p>

                <button
                    id="impossibleNext"
                    class="next-btn hidden" >

                    Next ➡️

                </button>

            </div>
        `;

        // LEVELS
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

        // OPTIONS
        const optionsContainer =
            document.getElementById(
                "impossibleOptions"
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
                            "#impossibleOptions .option-btn"
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
                        .getElementById("impossibleNext")
                        .classList.remove("hidden");
                };

                optionsContainer
                    .appendChild(button);
            }
        );

        // HINT
        document
            .getElementById("impossibleHint")
            .onclick = () => {

                document
                    .getElementById("impossibleHintText")
                    .textContent =
                    "💡 " + question.hint;
            };

        // NEXT
        document
            .getElementById("impossibleNext")
            .onclick = () => {

                if (!answered) return;

                currentQuestion++;
                answered = false;

                render();
            };
    }

    render();
}
