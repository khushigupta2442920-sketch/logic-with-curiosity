// ============================================
// PAHELI - 90 UNIQUE HINDI RIDDLES
// Easy 30 | Medium 30 | Hard 30
// ============================================

const paheliQuestions = {

    // ========================================
    // 🟢 EASY - 30
    // ========================================

    easy: [

        {
            q: "Main bina pair ke chalti hoon, bina muh ke bolti hoon aur bina pankh ke udti hoon. Main kya hoon?",
            options: ["Hawa", "Ghadi", "Kitab", "Paani"],
            answer: 0,
            hint: "Mujhe mehsoos kar sakte ho, dekh nahi sakte."
        },

        {
            q: "Jitna mujhe sukhaoge, main utni hi geeli hoti jaungi. Main kya hoon?",
            options: ["Mitti", "Towel", "Ret", "Kapda"],
            answer: 1,
            hint: "Nahaane ke baad meri zarurat padti hai."
        },

        {
            q: "Mere paas aankhen hain, par main dekh nahi sakti. Main kya hoon?",
            options: ["Aloo", "Sui", "Camera", "Gudiya"],
            answer: 1,
            hint: "Meri aankh se dhaaga guzarta hai."
        },

        {
            q: "Mere daant bahut saare hain, lekin main kha nahi sakti.",
            options: ["Kanghi", "Sher", "Bottle", "Joota"],
            answer: 0,
            hint: "Baalo se mera roz ka connection hai."
        },

        {
            q: "Main jitna bada hota jaata hoon, utna hi kam dikhai deta hoon.",
            options: ["Andhera", "Pahaad", "Suraj", "Ped"],
            answer: 0,
            hint: "Raat me mera raaj hota hai."
        },

        {
            q: "Mujhe todoge to awaaz nahi aayegi, lekin kisi ka dil zaroor toot sakta hai.",
            options: ["Glass", "Vaada", "Lakdi", "Patthar"],
            answer: 1,
            hint: "Log ise aksar nibhane ka promise karte hain."
        },

        {
            q: "Main ghar me aati hoon, par darwaze se nahi.",
            options: ["Dhoop", "Mehmaan", "Billi", "Courier"],
            answer: 0,
            hint: "Khidki kholte hi aa sakti hoon."
        },

        {
            q: "Mere bina phone ki battery bhi bekaar lag sakti hai. Main kaun hoon?",
            options: ["Internet", "Cover", "Wallpaper", "Speaker"],
            answer: 0,
            hint: "Online duniya se connection."
        },

        {
            q: "Main likhti nahi, phir bhi har roz bahut kuch record karti hoon.",
            options: ["Camera", "Pencil", "Notebook", "Eraser"],
            answer: 0,
            hint: "Tasveer meri speciality hai."
        },

        {
            q: "Mera sir aur poonch hai, par mera shareer nahi.",
            options: ["Sikka", "Saap", "Machhli", "Patang"],
            answer: 0,
            hint: "Pocket me mil sakti hoon."
        },

        {
            q: "Main toot jaati hoon agar tum mera naam le lo.",
            options: ["Khamoshi", "Glass", "Bottle", "Dosti"],
            answer: 0,
            hint: "Jab koi nahi bol raha hota."
        },

        {
            q: "Main khud nahi chalti, par mere andar duniya ghoomti hai.",
            options: ["Globe", "Car", "Cycle", "Fan"],
            answer: 0,
            hint: "Duniya ka chhota model."
        },

        {
            q: "Mujhe jitna bharo, main utni hi halki lag sakti hoon.",
            options: ["Balloon", "Bucket", "Bag", "Bottle"],
            answer: 0,
            hint: "Andar hawa bharo."
        },

        {
            q: "Main din me chhoti aur shaam ko lambi ho jaati hoon.",
            options: ["Parachhai", "Sadak", "Nadi", "Rassi"],
            answer: 0,
            hint: "Roshni ke saath mera size badalta hai."
        },

        {
            q: "Mujhe pakad nahi sakte, lekin main tumhe pakad sakti hoon.",
            options: ["Neend", "Patthar", "Kitaab", "Pencil"],
            answer: 0,
            hint: "Raat ko mere saamne haar jaate ho."
        },

        {
            q: "Main khud andhi hoon, par doosron ko raasta dikha sakti hoon.",
            options: ["Torch", "Chashma", "Joota", "Map"],
            answer: 0,
            hint: "Mujhe on karo aur darkness gayab."
        },

        {
            q: "Mere paas pages hain, par main ped nahi hoon.",
            options: ["Book", "Calendar", "Notebook", "Sabhi"],
            answer: 3,
            hint: "Teenon me pages mil sakte hain."
        },

        {
            q: "Main jitni baar ghoomti hoon, utni baar wahi jagah laut aati hoon.",
            options: ["Ghadi ki sui", "Rocket", "Bus", "Lift"],
            answer: 0,
            hint: "Time batati hoon."
        },

        {
            q: "Mujhe kaatne par main roti nahi, lekin tum ro sakte ho.",
            options: ["Pyaaz", "Cake", "Kagaz", "Lakdi"],
            answer: 0,
            hint: "Kitchen me milti hoon."
        },

        {
            q: "Main paani me paida hoti hoon, par paani me jaate hi mar jaati hoon.",
            options: ["Barf", "Aag", "Machhli", "Kamalgatta"],
            answer: 1,
            hint: "Paani mera dushman hai."
        },

        {
            q: "Main bina pair ke ghar ke har kone me pahunch sakti hoon.",
            options: ["Roshni", "Table", "Almirah", "Sofa"],
            answer: 0,
            hint: "Switch se mera connection hai."
        },

        {
            q: "Mera rang kaala hai, par main roshni ke bina bhi kaam karti hoon.",
            options: ["Blackboard", "Chand", "Badal", "Dhoop"],
            answer: 0,
            hint: "Teacher mujhe use karte hain."
        },

        {
            q: "Main bol nahi sakti, phir bhi tumhari awaaz wapas suna sakti hoon.",
            options: ["Echo", "Mirror", "Radio", "Book"],
            answer: 0,
            hint: "Pahaadon me aksar sunai deti hoon."
        },

        {
            q: "Main tumhare saath har jagah jaati hoon, par andhere me gayab ho jaati hoon.",
            options: ["Parachhai", "Joota", "Bag", "Dost"],
            answer: 0,
            hint: "Roshni chahiye mujhe."
        },

        {
            q: "Mere pair nahi, phir bhi main table par khadi rehti hoon.",
            options: ["Bottle", "Book", "Glass", "Sabhi"],
            answer: 3,
            hint: "Khadi hone ke liye insaan ke pair zaroori nahi."
        },

        {
            q: "Main ek ghar hoon jisme koi insaan nahi rehta.",
            options: ["Ghonsla", "School", "Hotel", "Hospital"],
            answer: 0,
            hint: "Birds mera ghar bana sakte hain."
        },

        {
            q: "Main khud nahi khaati, lekin doosron ko khana khilati hoon.",
            options: ["Plate", "Fridge", "Spoon", "Table"],
            answer: 0,
            hint: "Khana mere upar aata hai."
        },

        {
            q: "Main jitna chalti hoon, utna hi samay batati hoon.",
            options: ["Ghadi", "Car", "Cycle", "Train"],
            answer: 0,
            hint: "Time se mera direct connection hai."
        },

        {
            q: "Mujhe jitna khinchoge, main utni hi patli hoti jaungi.",
            options: ["Rubber band", "Rassi", "Ball", "Kapda"],
            answer: 0,
            hint: "Elastic hoon."
        },

        {
            q: "Main tumhare ghar me roz aati hoon, par kabhi bell nahi bajati.",
            options: ["Subah", "Courier", "Doodhwala", "Mehmaan"],
            answer: 0,
            hint: "Raat ke baad aati hoon."
        }
    ],


    // ========================================
    // 🟡 MEDIUM - 30
    // ========================================

    medium: [

        {
            q: "Aisi kaunsi cheez hai jo tumhare paas hai, lekin use doosre log tumse zyada istemal karte hain?",
            options: ["Tumhara naam", "Tumhara phone", "Tumhara bag", "Tumhari chair"],
            answer: 0,
            hint: "Log tumhe isi se bulate hain."
        },

        {
            q: "Main jitna badhta hoon, tum utna hi peeche dekhte ho.",
            options: ["Umar", "Yaad", "Bhavishya", "Neend"],
            answer: 0,
            hint: "Birthday ke saath main badhta hoon."
        },

        {
            q: "Ek cheez ko jitna baantoge, woh utni hi zyada hogi. Kya?",
            options: ["Gussa", "Khushi", "Paise", "Paani"],
            answer: 1,
            hint: "Doosron ke saath share karne par badhti hai."
        },

        {
            q: "Mere paas keys hain, par main koi tala nahi kholti.",
            options: ["Keyboard", "Almirah", "Car", "Lock"],
            answer: 0,
            hint: "Computer ke saath milti hoon."
        },

        {
            q: "Main ek aisi cheez hoon jo aage badhti hai, lekin kabhi peeche nahi jaati.",
            options: ["Samay", "Car", "Nadi", "Hawa"],
            answer: 0,
            hint: "Isse rok nahi sakte."
        },

        {
            q: "Mere paas ek chehra aur do haath hain, lekin main insaan nahi hoon.",
            options: ["Ghadi", "Gudiya", "Robot", "Clock tower"],
            answer: 0,
            hint: "Mera chehra time batata hai."
        },

        {
            q: "Main jitni purani hoti hoon, utni hi keemti ho sakti hoon.",
            options: ["Antique", "Bread", "Milk", "Newspaper"],
            answer: 0,
            hint: "Purani cheez collection me valuable ho sakti hai."
        },

        {
            q: "Mere andar shehar, sadak aur nadi sab ho sakte hain, lekin main khud ek jagah par hoti hoon.",
            options: ["Map", "Globe", "Book", "TV"],
            answer: 0,
            hint: "Travel me meri madad li jaati hai."
        },

        {
            q: "Main bina zubaan ke tumhara naam bol sakti hoon.",
            options: ["Echo", "Mirror", "Phone", "Book"],
            answer: 2,
            hint: "Kisi ne tumhe call kiya to..."
        },

        {
            q: "Agar mujhe khol do to main band ho jaati hoon. Main kya hoon?",
            options: ["Umbrella", "Door", "Book", "Bottle"],
            answer: 0,
            hint: "Rain me kaam aati hoon."
        },

        {
            q: "Main khud ek line hoon, par mere bina hazaaron lines galat ho sakti hain.",
            options: ["Ruler", "Notebook", "Pen", "Border"],
            answer: 0,
            hint: "Measurement me madad karti hoon."
        },

        {
            q: "Main jitna use hota hoon, utna hi chhota hota jaata hoon.",
            options: ["Pencil", "Room", "Table", "Book"],
            answer: 0,
            hint: "Likho aur dekho."
        },

        {
            q: "Mere bina darwaza khul sakta hai, par mere bina kuch log ghar me enter nahi kar sakte.",
            options: ["Key", "Password", "Doorbell", "Window"],
            answer: 2,
            hint: "Guest aane par mujhe bajaya jaata hai."
        },

        {
            q: "Main ek hi waqt me tumhare saamne aur tumhare peeche ho sakti hoon.",
            options: ["Parachhai", "Mirror", "Hawa", "Roshni"],
            answer: 1,
            hint: "Reflection ke baare me socho."
        },

        {
            q: "Main jitna zyada khaati hoon, utni hi zyada bhookhi hoti jaati hoon.",
            options: ["Aag", "Pencil", "Machine", "Car"],
            answer: 0,
            hint: "Lakdi meri food ho sakti hai."
        },

        {
            q: "Mujhe jitna dabaoge, main utni hi zor se wapas aa sakti hoon.",
            options: ["Spring", "Pillow", "Paper", "Water"],
            answer: 0,
            hint: "Mechanical object."
        },

        {
            q: "Main khud nahi soti, par tumhe sula sakti hoon.",
            options: ["Kahani", "Bed", "Alarm", "Pillow"],
            answer: 0,
            hint: "Sone se pehle mummy-nani kya sunati thi?"
        },

        {
            q: "Main tumhari hoti hoon, lekin tum mujhe dekh nahi sakte. Doosre log mujhe dekh sakte hain.",
            options: ["Aadat", "Naam", "Soch", "Sapna"],
            answer: 1,
            hint: "ID card par likhi hoti hoon."
        },

        {
            q: "Main jitni tez chalti hoon, utna hi peeche chhodti jaati hoon.",
            options: ["Car", "Samay", "Ghadi", "Hawa"],
            answer: 1,
            hint: "Har second past ban jaata hai."
        },

        {
            q: "Mujhe dekha ja sakta hai, chhua nahi ja sakta, aur main tumhari copy bana sakti hoon.",
            options: ["Mirror", "Camera", "Shadow", "Photo"],
            answer: 0,
            hint: "Tumhare saamne main tumhe hi dikhati hoon."
        },

        {
            q: "Main bina pair ke daudti hoon aur bina muh ke garajti hoon.",
            options: ["Nadi", "Badal", "Train", "Hawa"],
            answer: 1,
            hint: "Aasmaan me milti hoon."
        },

        {
            q: "Ek aisi jagah jahan 'kal' hamesha 'aaj' ke baad aata hai.",
            options: ["Calendar", "Dictionary", "Clock", "School"],
            answer: 0,
            hint: "Dates ka ghar."
        },

        {
            q: "Main tumhe upar le ja sakti hoon bina pair hilaye.",
            options: ["Lift", "Seedhi", "Chair", "Table"],
            answer: 0,
            hint: "Building me milti hoon."
        },

        {
            q: "Main toot jaaun to log mujhe jodne ke bajay aksar nayi bana dete hain.",
            options: ["Record", "Glass", "Promise", "Routine"],
            answer: 1,
            hint: "Transparent hoti hoon."
        },

        {
            q: "Main andar se khaali hoon, phir bhi cheezein mere andar reh sakti hain.",
            options: ["Bag", "Wall", "Floor", "Mirror"],
            answer: 0,
            hint: "School me bachche mujhe carry karte hain."
        },

        {
            q: "Mujhe jitna peeche kheenchoge, utna hi aage jaane ki taiyaari karungi.",
            options: ["Slingshot", "Door", "Curtain", "Chair"],
            answer: 0,
            hint: "Elastic energy store hoti hai."
        },

        {
            q: "Main hawa me hoti hoon, paani me bhi ho sakti hoon, lekin mujhe bottle me band karna mushkil hai.",
            options: ["Sound", "Stone", "Sand", "Light"],
            answer: 0,
            hint: "Awaaz ka doosra naam socho."
        },

        {
            q: "Mere paas koi pair nahi, phir bhi main tumhe pairon par khada kar sakti hoon.",
            options: ["Joota", "Chair", "Stick", "Floor"],
            answer: 0,
            hint: "Pair mujhe pehente hain."
        },

        {
            q: "Main ek baar nikal jaaun to wapas nahi aati.",
            options: ["Baat", "Ball", "Car", "Paani"],
            answer: 0,
            hint: "Bolne se pehle sochna chahiye."
        },

        {
            q: "Main tumhare paas tab bhi hoon jab tum mujhe bhool chuke hote ho.",
            options: ["Yaad", "Password", "Phone", "Book"],
            answer: 0,
            hint: "Kabhi achanak wapas aa jaati hoon."
        }
    ],


    // ========================================
    // 🔴 HARD - 30
    // ========================================

    hard: [

        {
            q: "Main jitna chhota hota hoon, utna hi bada sawaal khada kar sakta hoon. Main kya hoon?",
            options: ["Question mark", "Comma", "Dot", "Letter"],
            answer: 0,
            hint: "Mera shape hi sawaal se juda hai."
        },

        {
            q: "Mujhe banane wala mujhe khud nahi chahta, mujhe kharidne wala mujhe use nahi karta, aur jo use karta hai woh jaanta nahi. Main kya hoon?",
            options: ["Coffin", "Gift", "Book", "House"],
            answer: 0,
            hint: "Socho kaun use karta hai."
        },

        {
            q: "Main tumhare saamne hoon, par tum mujhe kabhi dekh nahi sakte.",
            options: ["Future", "Mirror", "Shadow", "Past"],
            answer: 0,
            hint: "Main abhi aaya nahi hoon."
        },

        {
            q: "Do log ek hi maa ke bachche hain, ek hi din paida hue, par twins nahi hain. Kaise?",
            options: [
                "Woh triplets ka part hain",
                "Woh cousins hain",
                "Maa alag thi",
                "Impossible"
            ],
            answer: 0,
            hint: "Twins ke alawa bhi ek hi din siblings paida ho sakte hain."
        },

        {
            q: "Ek aadmi 20th floor par rehta hai. Roz lift se ground floor jaata hai. Wapas aate waqt lift se 10th floor tak aur phir stairs se 20th tak jaata hai. Baarish wale din seedha 20th tak lift se jaata hai. Kyun?",
            options: [
                "Lift kharab hoti hai",
                "Woh chhota kad ka hai aur 20 ka button nahi pahunchta",
                "Usse stairs pasand hain",
                "Lift 20th par rukti nahi"
            ],
            answer: 1,
            hint: "Umbrella ke saath uski height badh jaati hai."
        },

        {
            q: "Ek kamre me 3 bulbs hain aur bahar 3 switches. Sirf ek baar room me jaakar kaise pata karoge kaunsa switch kis bulb ka hai?",
            options: [
                "Sab switches on karo",
                "Heat aur light dono observe karo",
                "Sirf bulb dekho",
                "Random guess"
            ],
            answer: 1,
            hint: "Bulb sirf light nahi, heat bhi deta hai."
        },

        {
            q: "Ek aadmi ke paas ek photo hai. Woh kehta hai: 'Is photo me jo aadmi hai, uska koi bhai-behen nahi. Lekin us aadmi ka father mere father ka beta hai.' Photo me kaun hai?",
            options: ["Uska beta", "Woh khud", "Uska father", "Uska uncle"],
            answer: 0,
            hint: "'Mere father ka beta' kaun ho sakta hai?"
        },

        {
            q: "Ek ghar ki chaaron walls south direction me hain. Ghar ke bahar ek bear dikha. Bear ka colour kya hoga?",
            options: ["Brown", "Black", "White", "Grey"],
            answer: 2,
            hint: "Aisi jagah imagine karo jahan har direction south ho."
        },

        {
            q: "Ek room me 5 candles jal rahi hain. Hawa se 2 bujh gayi. Kuch der baad kitni candles bachengi?",
            options: ["2", "3", "5", "0"],
            answer: 0,
            hint: "Jo jalti rahengi woh khatam ho sakti hain."
        },

        {
            q: "Ek aadmi ke paas 2 ropes hain. Har rope exactly 60 minutes me jalti hai, par unevenly. 45 minutes measure karne hain. Kaise?",
            options: [
                "Ek rope aadhi kaat do",
                "Pehli rope dono ends se, doosri ek end se jalao; pehli khatam hone par doosri ka doosra end jalao",
                "Dono ropes ek end se jalao",
                "Possible nahi"
            ],
            answer: 1,
            hint: "Dono ends se jalne par 60-minute rope 30 minutes leti hai."
        },

        {
            q: "Ek aadmi ke paas 8 identical balls hain. Ek thodi heavy hai. Balance scale se minimum 2 weighings me kaise find karoge?",
            options: [
                "3-3-2 groups",
                "4-4 groups",
                "2-2-4 groups",
                "Random"
            ],
            answer: 0,
            hint: "Pehli weighing 3 vs 3."
        },

        {
            q: "Ek number ko ulta karne par woh 9 se badh jaata hai. Kaunsa number ho sakta hai?",
            options: ["12", "18", "21", "45"],
            answer: 0,
            hint: "21 - 12 kitna hai?"
        },

        {
            q: "Main bina lock ke band ho sakti hoon aur bina key ke khul sakti hoon. Main kya hoon?",
            options: ["Aankh", "Door", "Book", "Box"],
            answer: 0,
            hint: "Neend me main band hoti hoon."
        },

        {
            q: "Aisi kaunsi cheez hai jo tum jitni door le jao, utni hi chhoti dikhti hai?",
            options: ["Object", "Shadow", "Mountain", "Sabhi"],
            answer: 3,
            hint: "Distance perception par depend karta hai."
        },

        {
           q: "Ek aadmi bina ticket, bina passport aur bina visa ke ek country se doosri country chala gaya. Kaise?",
            options: [
                "Illegal travel",
                "Woh border ke paas rehta tha",
                "Woh country ke beech bridge par khada tha",
                "Woh map par gaya"
            ],
            answer: 3,
            hint: "Travel zaroori nahi ki real ho."
        },

        {
            q: "Main jab paida hoti hoon to lambi hoti hoon, jab jeeti hoon to chhoti hoti jaati hoon, aur marne par gayab ho jaati hoon.",
            options: ["Candle", "Pencil", "Shadow", "Rassi"],
            answer: 0,
            hint: "Meri zindagi me flame hoti hai."
        },

        {
            q: "Ek aadmi ke paas 17 sheep thi. 9 ko chhodkar sab mar gayi. Kitni zinda bachi?",
            options: ["8", "9", "17", "0"],
            answer: 1,
            hint: "'9 ko chhodkar sab' ka matlab."
        },

        {
            q: "Ek train east ki taraf ja rahi hai. Hawa west ki taraf hai. Smoke kis taraf jayega?",
            options: ["East", "West", "North", "Smoke nahi hoga"],
            answer: 3,
            hint: "Train kis type ki hai?"
        },

        {
            q: "Ek aadmi ke paas 3 boxes hain: Apples, Oranges aur Mixed. Teeno labels galat hain. Sirf ek fruit nikal kar teeno labels correct karne hain. Kis box se fruit nikaloge?",
            options: ["Apples", "Oranges", "Mixed", "Kisi se bhi"],
            answer: 2,
            hint: "Sabse useful galat label 'Mixed' hai."
        },

        {
            q: "Ek room me 4 corners hain. Har corner me ek billi baithi hai. Har billi ke saamne 3 billiyan hain. Total billiyan?",
            options: ["4", "8", "12", "16"],
            answer: 0,
            hint: "Har billi baaki teen ko dekh rahi hai."
        },

        {
            q: "Aapke paas 6 glasses hain: pehle 3 filled, agle 3 empty. Sirf ek glass move karke sequence Filled-Empty-Filled-Empty-Filled-Empty banana hai. Kaunsa glass move karoge?",
            options: ["1st", "2nd", "3rd", "6th"],
            answer: 1,
            hint: "Ek filled glass ko doosre me pour kar sakte ho."
        },

        {
            q: "Ek aadmi Friday ko horse par city se nikla aur 3 din baad Friday ko wapas aaya. Kaise?",
            options: [
                "Calendar galat tha",
                "Horse ka naam Friday tha",
                "Woh time travel kar raha tha",
                "Woh Friday ko nikla hi nahi"
            ],
            answer: 1,
            hint: "Friday sirf day ka naam nahi ho sakta."
        },

        {
            q: "Ek lake me lily pads roz double hote hain. 20th day par lake poora bhar gaya. Lake aadha kab tha?",
            options: ["10th day", "18th day", "19th day", "15th day"],
            answer: 2,
            hint: "Double hone wali cheez ek din pehle aadhi hoti hai."
        },

        {
            q: "Ek clock har ghante 5 minutes slow hoti hai. 12 baje correct thi. 6 ghante baad kya time dikhayegi?",
            options: ["5:30", "5:00", "6:00", "5:55"],
            answer: 0,
            hint: "6 × 5 minutes lose."
        },

        {
            q: "Ek aadmi 10 km north, phir 10 km east, phir 10 km south chalta hai aur wahi starting point par aa jaata hai. Ye kaise possible hai?",
            options: [
                "Woh circle me tha",
                "North Pole ke paas",
                "Compass kharab tha",
                "Impossible"
            ],
            answer: 1,
            hint: "Earth ke ek special point ke paas socho."
        },

        {
            q: "Ek father ke 4 sons hain. Har son ki ek sister hai. Father ke total children kitne?",
            options: ["4", "5", "8", "9"],
            answer: 1,
            hint: "Sabki sister same ho sakti hai."
        },

        {
            q: "Aap ek dark room me enter karte ho. Match, candle, lamp aur fireplace hai. Sirf ek match hai. Sabse pehle kya jalayenge?",
            options: ["Candle", "Lamp", "Fireplace", "Match"],
            answer: 3,
            hint: "Fire banane ke liye pehle kya chahiye?"
        },

        {
            q: "Ek aadmi ke paas 4 daughters hain. Har daughter ka ek brother hai. Total children kitne?",
            options: ["4", "5", "8", "9"],
            answer: 1,
            hint: "Brother sabka same ho sakta hai."
        },

        {
            q: "Ek table par 3 apples hain. Tumne 2 apples utha liye. Tumhare paas kitne apples hain?",
            options: ["1", "2", "3", "5"],
            answer: 1,
            hint: "Tumne kitne uthaye?"
        },

        {
            q: "Main ek aisi cheez hoon jise tum de sakte ho bina apne paas se kam kiye.",
            options: ["Gyaan", "Paise", "Khana", "Paani"],
            answer: 0,
            hint: "Share karne se ye khatam nahi hota."
        }
    ]
};


// ============================================
// START PAHELI GAME
// ============================================

export function startPaheli() {

    const gameContent =
        document.getElementById("gameContent");

    if (!gameContent) return;

    let difficulty = "easy";
    let currentQuestion = 0;
    let score = 0;
    let answered = false;


    function render() {

        const questions =
            paheliQuestions[difficulty];

        const question =
            questions[currentQuestion];


        // GAME COMPLETE

        if (!question) {

            gameContent.innerHTML = `

                <div class="result-card">

                    <h2>🎉 Paheliyan Complete!</h2>

                    <p>Tumhara Score</p>

                    <h1>
                        ${score} / ${questions.length}
                    </h1>

                    <button id="paheliAgain">
                        🔄 Dobara Khelo
                    </button>

                </div>

            `;

            document
                .getElementById("paheliAgain")
                .onclick = () => {

                    currentQuestion = 0;
                    score = 0;
                    answered = false;

                    render();
                };

            return;
        }


        gameContent.innerHTML = `

            <div class="paheli-game">

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
                    🧩 Score: ${score}
                </div>


                <p>
                    Paheli
                    ${currentQuestion + 1}
                    / ${questions.length}
                </p>


                <div class="question-card">

                    <h2>
                        ${question.q}
                    </h2>

                </div>


                <div
                    id="paheliOptions"
                    class="options-container">
                </div>


                <button
                    id="paheliHint"
                    class="hint-btn">

                    💡 Hint

                </button>


                <p
                    id="paheliHintText"
                    class="hint-text">
                </p>


                <button
                    id="paheliNext"
                    class="next-btn hidden">

                    Next ➡️

                </button>

            </div>
        `;


        // LEVEL BUTTONS

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
                "paheliOptions"
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
                            "#paheliOptions .option-btn"
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
                        .getElementById("paheliNext")
                        .classList.remove("hidden");

                };


                optionsContainer
                    .appendChild(button);

            }
        );


        // HINT

        document
            .getElementById("paheliHint")
            .onclick = () => {

                document
                    .getElementById("paheliHintText")
                    .textContent =
                    "💡 " + question.hint;

            };


        // NEXT

        document
            .getElementById("paheliNext")
            .onclick = () => {

                if (!answered) return;

                currentQuestion++;

                answered = false;

                render();

            };

    }


    render();
}