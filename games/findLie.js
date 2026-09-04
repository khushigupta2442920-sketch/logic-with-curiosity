const findLie = {
    easy: [
        {
            q: "🧠 Riya kehti hai: 'Mere paas 2 cats hain.' Neha kehti hai: 'Riya ke paas koi cat nahi hai.' Agar Riya ke paas 2 cats hain, to kaun jhooth bol raha hai?",
            options: ["Riya", "Neha", "Dono", "Koi nahi"],
            answer: 1,
            hint: "Riya ke paas 2 cats hain."
        },
        {
            q: "🧠 Aman kehta hai: 'Maine red shirt pehni hai.' Ravi kehta hai: 'Aman blue shirt pehne hai.' Agar Aman ne red shirt pehni hai, Ravi?",
            options: ["Sach", "Jhooth", "Dono sach", "Pata nahi"],
            answer: 1,
            hint: "Red aur blue same nahi hain."
        },
        {
            q: "🧠 Rohit kehta hai: 'Mere paas 5 pens hain.' Mohit kehta hai: 'Rohit ke paas 5 pens nahi hain.' Agar Rohit ke paas 5 pens hain, kaun jhooth bol raha hai?",
            options: ["Rohit", "Mohit", "Dono", "Koi nahi"],
            answer: 1,
            hint: "Rohit ki baat true hai."
        },
        {
            q: "🧠 A kehta hai: 'Aaj Monday hai.' B kehta hai: 'Aaj Monday nahi hai.' Exactly ek statement sach hai. Ye kab possible hai?",
            options: ["Sirf Monday ko", "Sirf Tuesday ko", "Kisi bhi din", "Kabhi nahi"],
            answer: 2,
            hint: "Dono statements ek doosre ke opposite hain."
        },
        {
            q: "🧠 Sita kehti hai: 'Mera favourite colour blue hai.' Gita kehti hai: 'Sita ka favourite colour red hai.' Agar Sita sach bol rahi hai, Gita?",
            options: ["Sach", "Jhooth", "Dono sach", "Pata nahi"],
            answer: 1,
            hint: "Sita ka favourite colour blue hai."
        },
        {
            q: "🧠 Aman kehta hai: 'Mere paas dog hai.' Raj kehta hai: 'Aman ke paas dog nahi hai.' Agar Aman jhooth bol raha hai, Raj?",
            options: ["Sach", "Jhooth", "Pata nahi", "Dono jhooth"],
            answer: 0,
            hint: "Aman ka statement false hai."
        },
        {
            q: "🧠 Priya kehti hai: 'Maine homework complete kiya.' Tina kehti hai: 'Priya ne homework complete nahi kiya.' Agar Priya ne homework complete kiya, Tina?",
            options: ["Sach", "Jhooth", "Dono sach", "Pata nahi"],
            answer: 1,
            hint: "Priya ne homework complete kiya."
        },
        {
            q: "🧠 A kehta hai: 'B ke paas chocolate hai.' B kehta hai: 'Mere paas chocolate nahi hai.' Agar B sach bol raha hai, A?",
            options: ["Sach", "Jhooth", "Dono", "Pata nahi"],
            answer: 1,
            hint: "B ke paas chocolate nahi hai."
        },
        {
            q: "🧠 Ravi kehta hai: 'Main school gaya.' Amit kehta hai: 'Ravi school nahi gaya.' Agar Ravi sach bol raha hai, Amit?",
            options: ["Sach", "Jhooth", "Dono sach", "Pata nahi"],
            answer: 1,
            hint: "Ravi school gaya hai."
        },
        {
            q: "🧠 A kehta hai: 'Meri age 10 hai.' B kehta hai: 'A ki age 10 nahi hai.' Agar A ki age 10 hai, B?",
            options: ["Sach", "Jhooth", "Dono sach", "Pata nahi"],
            answer: 1,
            hint: "10 hai to '10 nahi hai' false hoga."
        },
        {
            q: "🧠 Maya kehti hai: 'Maine apple khaya.' Riya kehti hai: 'Maya ne banana khaya.' Agar Maya ne apple khaya aur banana nahi khaya, Riya?",
            options: ["Sach", "Jhooth", "Dono sach", "Pata nahi"],
            answer: 1,
            hint: "Maya ne banana nahi khaya."
        },
        {
            q: "🧠 A kehta hai: 'Box ke andar ball hai.' B kehta hai: 'Box ke andar ball nahi hai.' Agar ball andar hai, kaun jhooth bol raha hai?",
            options: ["A", "B", "Dono", "Koi nahi"],
            answer: 1,
            hint: "Ball box ke andar hai."
        },
        {
            q: "🧠 Rohan kehta hai: 'Maine 3 books padhi.' Karan kehta hai: 'Rohan ne 2 books padhi.' Agar Rohan ne exactly 3 books padhi hain, Karan?",
            options: ["Sach", "Jhooth", "Dono sach", "Pata nahi"],
            answer: 1,
            hint: "3 aur 2 alag numbers hain."
        },
        {
            q: "🧠 A kehta hai: 'B intelligent hai.' B kehta hai: 'A intelligent nahi hai.' Agar A intelligent hai, B?",
            options: ["Sach", "Jhooth", "Dono sach", "Pata nahi"],
            answer: 1,
            hint: "A intelligent hai."
        },
        {
            q: "🧠 Neha kehti hai: 'Mere paas pen hai.' Simran kehti hai: 'Neha ke paas pen nahi hai.' Agar Neha ke paas pen hai, Simran?",
            options: ["Sach", "Jhooth", "Dono sach", "Pata nahi"],
            answer: 1,
            hint: "Pen Neha ke paas hai."
        },
        {
            q: "🧠 A kehta hai: 'Main kal Delhi jaunga.' B kehta hai: 'A kal Delhi nahi jayega.' Agar A Delhi jaata hai, B?",
            options: ["Sach", "Jhooth", "Dono sach", "Pata nahi"],
            answer: 1,
            hint: "A Delhi ja raha hai."
        },
        {
            q: "🧠 Riya kehti hai: 'Meri bag me book hai.' Pooja kehti hai: 'Riya ki bag empty hai.' Agar bag me book hai, kaun jhooth bol raha hai?",
            options: ["Riya", "Pooja", "Dono", "Koi nahi"],
            answer: 1,
            hint: "Book wali bag empty nahi hai."
        },
        {
            q: "🧠 A kehta hai: 'Maine breakfast kiya.' B kehta hai: 'A ne breakfast nahi kiya.' Agar A ne breakfast kiya tha, B?",
            options: ["Sach", "Jhooth", "Dono sach", "Pata nahi"],
            answer: 1,
            hint: "A ne breakfast kiya."
        },
        {
            q: "🧠 Kunal kehta hai: 'Mere shoes black hain.' Rahul kehta hai: 'Kunal ke shoes white hain.' Agar shoes black hain, Rahul?",
            options: ["Sach", "Jhooth", "Dono sach", "Pata nahi"],
            answer: 1,
            hint: "Shoes black hain."
        },
        {
            q: "🧠 A kehta hai: 'Table par mobile hai.' B kehta hai: 'Table par mobile nahi hai.' Agar mobile table par hai, B?",
            options: ["Sach", "Jhooth", "Dono", "Pata nahi"],
            answer: 1,
            hint: "Mobile table par hai."
        },
        {
            q: "🧠 P kehta hai: 'Maine movie dekhi.' Q kehta hai: 'P ne movie nahi dekhi.' Agar P ne movie dekhi, Q?",
            options: ["Sach", "Jhooth", "Dono sach", "Pata nahi"],
            answer: 1,
            hint: "P ne movie dekhi hai."
        },
        {
            q: "🧠 A kehta hai: 'Garden me flowers hain.' B kehta hai: 'Garden bilkul empty hai.' Agar flowers hain, B?",
            options: ["Sach", "Jhooth", "Dono", "Pata nahi"],
            answer: 1,
            hint: "Flowers hone par garden empty nahi hai."
        },
        {
            q: "🧠 Ravi kehta hai: 'Mere paas ₹100 hain.' Mohan kehta hai: 'Ravi ke paas ₹50 hain.' Agar Ravi ke paas ₹100 hain, Mohan?",
            options: ["Sach", "Jhooth", "Dono", "Pata nahi"],
            answer: 1,
            hint: "Ravi ke paas ₹100 hain."
        },
        {
            q: "🧠 A kehta hai: 'Train aa chuki hai.' B kehta hai: 'Train abhi nahi aayi.' Agar train aa chuki hai, B?",
            options: ["Sach", "Jhooth", "Dono", "Pata nahi"],
            answer: 1,
            hint: "Train already aa gayi."
        },
        {
            q: "🧠 M kehta hai: 'Room me light on hai.' N kehta hai: 'Room me light off hai.' Agar light on hai, N?",
            options: ["Sach", "Jhooth", "Dono", "Pata nahi"],
            answer: 1,
            hint: "On aur off opposite hain."
        },
        {
            q: "🧠 A kehta hai: 'Mere paas 4 chocolates hain.' B kehta hai: 'A ke paas 4 chocolates nahi hain.' Agar A ke paas 4 chocolates hain, B?",
            options: ["Sach", "Jhooth", "Dono", "Koi nahi"],
            answer: 1,
            hint: "A ke paas exactly 4 hain."
        },
        {
            q: "🧠 Riya kehti hai: 'Main hungry hoon.' Sia kehti hai: 'Riya hungry nahi hai.' Agar Riya hungry hai, Sia?",
            options: ["Sach", "Jhooth", "Dono", "Pata nahi"],
            answer: 1,
            hint: "Riya hungry hai."
        },
        {
            q: "🧠 A kehta hai: 'Maine red ball dekhi.' B kehta hai: 'A ne blue ball dekhi.' Agar A ne red ball dekhi, B?",
            options: ["Sach", "Jhooth", "Dono", "Pata nahi"],
            answer: 1,
            hint: "Ball red thi."
        },
        {
            q: "🧠 P kehta hai: 'Meri cycle ghar par hai.' Q kehta hai: 'P ki cycle ghar par nahi hai.' Agar cycle ghar par hai, Q?",
            options: ["Sach", "Jhooth", "Dono", "Pata nahi"],
            answer: 1,
            hint: "Cycle ghar par hai."
        },
        {
            q: "🧠 A kehta hai: 'Mere paas ek blue pen hai.' B kehta hai: 'A ke paas blue pen nahi hai.' Agar A ke paas blue pen hai, B?",
            options: ["Sach", "Jhooth", "Dono", "Pata nahi"],
            answer: 1,
            hint: "A ke paas blue pen hai."
        }
    ],

    medium: [
        {
            q: "🧠 A kehta hai: 'B jhooth bol raha hai.' B kehta hai: 'Main sach bol raha hoon.' Kaun jhooth bol raha hai?",
            options: ["A", "B", "Dono", "Pata nahi"],
            answer: 0,
            hint: "B ka statement self-contradictory hai."
        },
        {
            q: "🧠 A kehta hai: 'B culprit hai.' B kehta hai: 'C culprit hai.' C kehta hai: 'B jhooth bol raha hai.' Agar sirf ek statement sach hai, culprit kaun ho sakta hai?",
            options: ["A", "B", "C", "Koi nahi"],
            answer: 0,
            hint: "A ko culprit maan kar teen statements check karo."
        },
        {
            q: "🧠 A kehta hai: 'B ne chocolate li.' B kehta hai: 'C ne chocolate li.' C kehta hai: 'B jhooth bol raha hai.' Sirf ek statement sach hai. Chocolate kaun le sakta hai?",
            options: ["A", "B", "C", "Pata nahi"],
            answer: 0,
            hint: "A ke chocolate lene par A true, B false, C false hota hai."
        },
        {
            q: "🧠 Teen boxes hain: Red, Blue aur Green. A: 'Prize Red me hai.' B: 'Prize Blue me hai.' C: 'Prize Red me nahi hai.' Sirf ek statement sach hai. Prize kahan hai?",
            options: ["Red", "Blue", "Green", "Pata nahi"],
            answer: 2,
            hint: "Green hone par A aur B false, C true."
        },
        {
            q: "🧠 A kehta hai: 'B aur C dono jhooth bol rahe hain.' B kehta hai: 'C sach bol raha hai.' C kehta hai: 'A jhooth bol raha hai.' Exactly ek statement sach hai. Kaun sach bol raha hai?",
            options: ["A", "B", "C", "Koi nahi"],
            answer: 2,
            hint: "C ko sach maan kar check karo."
        },
        {
            q: "🧠 A: 'B ne cheating ki.' B: 'C ne cheating ki.' C: 'Maine cheating nahi ki.' Sirf ek statement sach hai. Agar B culprit hai, kaun sach bol raha hai?",
            options: ["A", "B", "C", "Koi nahi"],
            answer: 0,
            hint: "B culprit hai to A ka statement true hoga."
        },
        {
            q: "🧠 A: 'Treasure Box 1 me nahi hai.' B: 'Treasure Box 2 me hai.' C: 'Treasure Box 1 me hai.' Sirf ek statement sach hai. Treasure kahan hai?",
            options: ["Box 1", "Box 2", "Box 3", "Pata nahi"],
            answer: 2,
            hint: "Box 3 hone par A false, B false, C false hota hai — isliye condition dobara check karo."
        },
        {
            q: "🧠 A kehta hai: 'C ne phone liya.' B kehta hai: 'A jhooth bol raha hai.' C kehta hai: 'Maine phone nahi liya.' Agar C ne phone nahi liya aur B sach bol raha hai, A?",
            options: ["Sach", "Jhooth", "Dono", "Pata nahi"],
            answer: 1,
            hint: "C ne phone nahi liya."
        },
        {
            q: "🧠 A kehta hai: 'Main first aaya.' B kehta hai: 'C first aaya.' C kehta hai: 'B jhooth bol raha hai.' Agar sirf ek statement sach hai, winner kaun ho sakta hai?",
            options: ["A", "B", "C", "Pata nahi"],
            answer: 0,
            hint: "A ko winner maan kar check karo."
        },
        {
            q: "🧠 A kehta hai: 'B ke paas key hai.' B kehta hai: 'C ke paas key hai.' C kehta hai: 'Mere paas key nahi hai.' Agar sirf ek statement sach hai, key kiske paas ho sakti hai?",
            options: ["A", "B", "C", "Pata nahi"],
            answer: 0,
            hint: "A ke paas key hone par B aur C ke statements check karo."
        },
        {
            q: "🧠 A: 'B intelligent hai.' B: 'C intelligent hai.' C: 'A aur B dono jhooth bol rahe hain.' Agar sirf ek statement sach hai, kaun sach bol sakta hai?",
            options: ["A", "B", "C", "Koi nahi"],
            answer: 1,
            hint: "B ke statement ko true maan kar check karo."
        },
        {
            q: "🧠 A: 'Gold Box 1 me hai.' B: 'Gold Box 1 me nahi hai.' C: 'Gold Box 2 me hai.' Agar exactly one statement sach hai, gold kis box me ho sakta hai?",
            options: ["Box 1", "Box 2", "Box 3", "Box 1 ya 2"],
            answer: 2,
            hint: "Box 3 par A false, B true aur C false hoga — count check karo."
        },
        {
            q: "🧠 A: 'B ne homework kiya.' B: 'C ne homework kiya.' C: 'A ne homework nahi kiya.' Agar A ne homework kiya aur exactly ek statement false hai, kaun false hai?",
            options: ["A", "B", "C", "Pata nahi"],
            answer: 2,
            hint: "C ka statement A ke baare me hai."
        },
        {
            q: "🧠 A: 'B late aaya.' B: 'C late aaya.' C: 'Main late nahi aaya.' Agar C late nahi aaya aur sirf ek statement jhooth hai, kaun jhooth bol raha hai?",
            options: ["A", "B", "C", "A aur B"],
            answer: 1,
            hint: "C true hai, ab B ko check karo."
        },
        {
            q: "🧠 A: 'Prize mere paas nahi hai.' B: 'Prize C ke paas hai.' C: 'Prize A ke paas hai.' Agar sirf ek statement sach hai, prize kis ke paas ho sakta hai?",
            options: ["A", "B", "C", "Pata nahi"],
            answer: 1,
            hint: "Prize B ke paas hone par A, B, C check karo."
        },
        {
            q: "🧠 A: 'B honest hai.' B: 'C honest nahi hai.' C: 'A jhooth bol raha hai.' Agar exactly one statement true hai, kaun true ho sakta hai?",
            options: ["A", "B", "C", "Koi nahi"],
            answer: 2,
            hint: "C ko true maan kar check karo."
        },
        {
            q: "🧠 A: 'Room 1 safe hai.' B: 'Room 2 safe hai.' C: 'Room 1 unsafe hai.' Agar Room 2 hi safe hai, kaun sach bol raha hai?",
            options: ["A", "B", "C", "B aur C"],
            answer: 1,
            hint: "Room 2 safe hai."
        },
        {
            q: "🧠 A: 'B ne red card liya.' B: 'Maine blue card liya.' C: 'A jhooth bol raha hai.' Agar B ne blue card liya, C ka statement kya hoga?",
            options: ["Sach", "Jhooth", "Dono", "Pata nahi"],
            answer: 1,
            hint: "A red card ki baat kar raha hai."
        },
        {
            q: "🧠 A: 'C ke paas coin nahi hai.' B: 'A ke paas coin hai.' C: 'B jhooth bol raha hai.' Agar B sach bol raha hai, C?",
            options: ["Sach", "Jhooth", "Pata nahi", "Dono"],
            answer: 1,
            hint: "B true hai to A ke paas coin hai; C ka statement B ko false kehta hai."
        },
        {
            q: "🧠 A: 'B ne race jeeti.' B: 'C ne race jeeti.' C: 'A ne race nahi jeeti.' Agar A winner nahi hai aur sirf ek statement sach hai, kaun winner ho sakta hai?",
            options: ["A", "B", "C", "Koi nahi"],
            answer: 1,
            hint: "B winner hone par A false, B true, C true ho jata hai — condition check karo."
        },
        {
            q: "🧠 A: 'Key B ke paas nahi hai.' B: 'Key C ke paas hai.' C: 'Key mere paas nahi hai.' Agar B ke paas key hai, kaun sach bol raha hai?",
            options: ["A", "B", "C", "Koi nahi"],
            answer: 0,
            hint: "B ke paas key hone par A true hoga."
        },
        {
            q: "🧠 A: 'B ne cake khaya.' B: 'C ne cake khaya.' C: 'B ne cake nahi khaya.' Agar C ne cake khaya aur sirf ek statement true hai, kaun sach bol raha hai?",
            options: ["A", "B", "C", "Koi nahi"],
            answer: 1,
            hint: "C ne cake khaya, isliye B ka statement true hai."
        },
        {
            q: "🧠 A: 'B ke paas ticket hai.' B: 'Mere paas ticket nahi hai.' Ye dono statements ek doosre ke opposite hain. Exactly kitna true hoga?",
            options: ["0", "1", "2", "Kabhi nahi"],
            answer: 1,
            hint: "Ek statement true aur doosra false hoga."
        },
        {
            q: "🧠 A: 'C ne book churayi.' B: 'A jhooth bol raha hai.' C: 'Maine book nahi churayi.' Agar C sach bol raha hai, A?",
            options: ["Sach", "Jhooth", "Dono", "Pata nahi"],
            answer: 1,
            hint: "C ne book nahi churayi."
        },
        {
            q: "🧠 A: 'B ke paas red ball hai.' B: 'C ke paas red ball hai.' C: 'A ke paas red ball nahi hai.' Agar A ke paas red ball hai, C?",
            options: ["Sach", "Jhooth", "Dono", "Pata nahi"],
            answer: 0,
            hint: "C ka statement A ke baare me hai."
        },
        {
            q: "🧠 A: 'Main winner nahi hoon.' B: 'C winner hai.' C: 'A winner hai.' Agar B winner hai, kaun sach bol raha hai?",
            options: ["A", "B", "C", "B aur C"],
            answer: 1,
            hint: "B ke winner hone par B ka statement true hai."
        },
        {
            q: "🧠 A: 'B ne lock khola.' B: 'Maine lock nahi khola.' C: 'A jhooth bol raha hai.' Agar B sach bol raha hai, A aur C?",
            options: ["Dono sach", "Dono jhooth", "A sach, C jhooth", "A jhooth, C sach"],
            answer: 1,
            hint: "B ne lock nahi khola."
        },
        {
            q: "🧠 A: 'Treasure C ke paas hai.' B: 'Treasure A ke paas nahi hai.' C: 'Treasure mere paas nahi hai.' Agar treasure C ke paas hai, kaun sach bol raha hai?",
            options: ["A only", "B only", "C only", "A aur B"],
            answer: 3,
            hint: "C ke paas treasure hai."
        },
        {
            q: "🧠 A: 'B ne secret bataya.' B: 'C ne secret bataya.' C: 'A ne secret nahi bataya.' Agar A ne secret nahi bataya aur C sach bol raha hai, C?",
            options: ["Sach", "Jhooth", "Dono", "Pata nahi"],
            answer: 0,
            hint: "C ka statement directly A ke baare me hai."
        },
        {
            q: "🧠 A: 'Box 1 empty hai.' B: 'Box 2 empty hai.' C: 'Box 1 empty nahi hai.' Agar Box 1 empty nahi hai, A?",
            options: ["Sach", "Jhooth", "Dono", "Pata nahi"],
            answer: 1,
            hint: "A aur C opposite statements hain."
        }
    ],

    hard: [
        {
            q: "🧠 A, B aur C me se ek culprit hai. A: 'B culprit hai.' B: 'C culprit hai.' C: 'B jhooth bol raha hai.' Agar sirf ek statement sach hai, culprit kaun hai?",
            options: ["A", "B", "C", "Pata nahi"],
            answer: 0,
            hint: "A culprit hone par A true, B false aur C false hota hai."
        },
        {
            q: "🧠 A: 'B culprit nahi hai.' B: 'C culprit hai.' C: 'A jhooth bol raha hai.' Sirf ek statement sach hai. Culprit kaun hai?",
            options: ["A", "B", "C", "Pata nahi"],
            answer: 1,
            hint: "B ko culprit maan kar statements check karo."
        },
        {
            q: "🧠 A: 'B ne key churayi.' B: 'C ne key churayi.' C: 'A aur B dono jhooth bol rahe hain.' Sirf ek statement sach hai. Key kisne churayi ho sakti hai?",
            options: ["A", "B", "C", "Pata nahi"],
            answer: 0,
            hint: "A ko key thief maan kar check karo."
        },
        {
            q: "🧠 Teen boxes me ek diamond hai. A: 'Diamond Box 1 me hai.' B: 'Diamond Box 2 me hai.' C: 'Diamond Box 1 me nahi hai.' Agar exactly one statement sach hai, diamond kahan hai?",
            options: ["Box 1", "Box 2", "Box 3", "Pata nahi"],
            answer: 1,
            hint: "Box 2 hone par A false, B true aur C true hoga — condition dobara evaluate karo."
        },
        {
            q: "🧠 A: 'B aur C dono innocent hain.' B: 'A innocent hai.' C: 'B culprit hai.' Agar A culprit hai, kaun sach bol raha hai?",
            options: ["A", "B", "C", "Koi nahi"],
            answer: 2,
            hint: "A culprit hone par A false aur B false hoga."
        },
        {
            q: "🧠 A: 'B ne treasure nahi churaya.' B: 'C ne treasure churaya.' C: 'A jhooth bol raha hai.' Agar C culprit hai, kaun sach bol raha hai?",
            options: ["A", "B", "C", "A aur B"],
            answer: 3,
            hint: "C culprit hone par A aur B ke statements check karo."
        },
        {
            q: "🧠 A: 'B culprit hai.' B: 'C culprit nahi hai.' C: 'A jhooth bol raha hai.' Agar B culprit hai, kitne statements sach hain?",
            options: ["0", "1", "2", "3"],
            answer: 2,
            hint: "B culprit hone par A aur B ke statements check karo."
        },
        {
            q: "🧠 A: 'B ne exam me cheating ki.' B: 'C ne cheating ki.' C: 'A ne cheating nahi ki.' Agar B ne cheating ki, kitne statements sach hain?",
            options: ["0", "1", "2", "3"],
            answer: 2,
            hint: "B ke cheating karne par A aur B true honge."
        },
        {
            q: "🧠 A: 'Treasure mere paas nahi hai.' B: 'Treasure A ke paas hai.' C: 'Treasure B ke paas nahi hai.' Agar treasure C ke paas hai, kitne statements sach hain?",
            options: ["0", "1", "2", "3"],
            answer: 3,
            hint: "C ke paas treasure hone par teen statements check karo."
        },
        {
            q: "🧠 A: 'B innocent hai.' B: 'C innocent hai.' C: 'A innocent nahi hai.' Agar A culprit hai, kitne statements sach hain?",
            options: ["0", "1", "2", "3"],
            answer: 2,
            hint: "A culprit hone par C ka statement true hoga."
        },
        {
            q: "🧠 A: 'B ne phone liya.' B: 'C ne phone nahi liya.' C: 'A jhooth bol raha hai.' Agar B ne phone liya, kitne statements sach hain?",
            options: ["0", "1", "2", "3"],
            answer: 2,
            hint: "B ke phone lene par A true hoga aur B true hoga."
        },
        {
            q: "🧠 A: 'B culprit nahi hai.' B: 'C culprit nahi hai.' C: 'A culprit hai.' Agar C culprit hai, kitne statements sach hain?",
            options: ["0", "1", "2", "3"],
            answer: 2,
            hint: "C culprit hone par A aur B ke statements check karo."
        },
        {
            q: "🧠 A: 'B sach bol raha hai.' B: 'C jhooth bol raha hai.' C: 'A aur B dono sach bol rahe hain.' Agar B sach bol raha hai, A aur C?",
            options: [
                "A sach, C jhooth",
                "A jhooth, C sach",
                "Dono sach",
                "Dono jhooth"
            ],
            answer: 0,
            hint: "B ke statement ko true maan kar C check karo."
        },
        {
            q: "🧠 A: 'B ne red key li.' B: 'C ne blue key li.' C: 'B ne red key nahi li.' Agar B ne red key li, kaun sach bol raha hai?",
            options: ["A", "B", "C", "A aur B"],
            answer: 0,
            hint: "B ne red key li hai."
        },
        {
            q: "🧠 A: 'B culprit hai.' B: 'A culprit nahi hai.' C: 'B jhooth bol raha hai.' Agar C culprit hai, kitne statements sach hain?",
            options: ["0", "1", "2", "3"],
            answer: 2,
            hint: "C culprit hone se A aur B ke statements check karo."
        },
        {
            q: "🧠 A: 'C ne gold liya.' B: 'A ne gold liya.' C: 'B ne gold nahi liya.' Agar B ne gold liya, kitne statements sach hain?",
            options: ["0", "1", "2", "3"],
            answer: 2,
            hint: "B ke gold lene par A false, B false aur C true hoga."
        },
        {
            q: "🧠 A: 'B aur C dono innocent hain.' B: 'A culprit hai.' C: 'B jhooth bol raha hai.' Agar B culprit hai, kaun sach bol raha hai?",
            options: ["A", "B", "C", "Koi nahi"],
            answer: 2,
            hint: "B culprit hone par A false, B false aur C true."
        },
        {
            q: "🧠 A: 'B ne lock nahi khola.' B: 'C ne lock khola.' C: 'A jhooth bol raha hai.' Agar B ne lock khola, kaun sach bol raha hai?",
            options: ["A", "B", "C", "A aur C"],
            answer: 2,
            hint: "B ne lock khola, isliye B ka statement false hai."
        },
        {
            q: "🧠 A: 'C ke paas diamond nahi hai.' B: 'A ke paas diamond hai.' C: 'B jhooth bol raha hai.' Agar A ke paas diamond hai, kaun sach bol raha hai?",
            options: ["A", "B", "C", "B aur C"],
            answer: 1,
            hint: "B ka statement directly true hai."
        },
        {
            q: "🧠 A: 'B ne secret nahi bataya.' B: 'C ne secret bataya.' C: 'A sach bol raha hai.' Agar C ne secret bataya aur A ne nahi bataya, kaun sach bol raha hai?",
            options: ["A", "B", "C", "B aur C"],
            answer: 3,
            hint: "A ka statement bhi true hai."
        },
        {
            q: "🧠 A: 'B culprit nahi hai.' B: 'C culprit hai.' C: 'A sach nahi bol raha.' Agar B culprit hai, kaun sach bol raha hai?",
            options: ["A", "B", "C", "A aur C"],
            answer: 0,
            hint: "B culprit hone par A true, B false, C false."
        },
        {
            q: "🧠 A: 'Main innocent hoon.' B: 'C innocent hai.' C: 'A jhooth bol raha hai.' Agar A culprit hai, kaun sach bol raha hai?",
            options: ["A", "B", "C", "B aur C"],
            answer: 3,
            hint: "A culprit hone par A false aur C true."
        },
        {
            q: "🧠 A: 'B ne key nahi li.' B: 'C ne key li.' C: 'A ne key li.' Agar C ne key li, kaun sach bol raha hai?",
            options: ["A", "B", "C", "A aur B"],
            answer: 1,
            hint: "C key holder hai, isliye B ka statement true hai."
        },
        {
            q: "🧠 A: 'B jhooth bol raha hai.' B: 'C jhooth bol raha hai.' C: 'A aur B dono sach bol rahe hain.' Agar B sach bol raha hai, kaun jhooth bol raha hai?",
            options: ["A", "B", "C", "Koi nahi"],
            answer: 0,
            hint: "B true hai to C false hai; C false hone par A aur B dono sach nahi ho sakte."
        },
        {
            q: "🧠 A: 'Treasure B ke paas hai.' B: 'Treasure mere paas nahi hai.' C: 'Treasure A ke paas hai.' Agar treasure C ke paas hai, kaun sach bol raha hai?",
            options: ["A", "B", "C", "Koi nahi"],
            answer: 1,
            hint: "C ke paas hone par B ka statement true hai."
        },
        {
            q: "🧠 A: 'B culprit hai.' B: 'C culprit nahi hai.' C: 'A culprit nahi hai.' Agar B culprit hai, kitne statements sach hain?",
            options: ["0", "1", "2", "3"],
            answer: 3,
            hint: "B culprit hone par A, B aur C ke statements evaluate karo."
        },
        {
            q: "🧠 A: 'B ne chocolate nahi li.' B: 'C ne chocolate li.' C: 'A jhooth bol raha hai.' Agar C ne chocolate li, kaun sach bol raha hai?",
            options: ["A", "B", "C", "B aur C"],
            answer: 3,
            hint: "C ne chocolate li hai aur A ka statement false hai."
        },
        {
            q: "🧠 A: 'B innocent hai.' B: 'C culprit hai.' C: 'A jhooth bol raha hai.' Agar A culprit hai, kaun sach bol raha hai?",
            options: ["A", "B", "C", "B aur C"],
            answer: 3,
            hint: "A culprit hone par A false, B true aur C true."
        },
        {
            q: "🧠 A: 'B ne Room 1 choose kiya.' B: 'C ne Room 2 choose kiya.' C: 'A ne Room 1 choose nahi kiya.' Agar A ne Room 3 choose kiya, kaun sach bol raha hai?",
            options: ["A", "B", "C", "A aur C"],
            answer: 2,
            hint: "A ke Room 3 choose karne par C ka statement true hai."
        },
        {
            q: "🧠 A: 'B sach bol raha hai.' B: 'C sach nahi bol raha.' C: 'A jhooth bol raha hai.' Agar B sach bol raha hai aur C jhooth bol raha hai, kaun sach bol raha hai?",
            options: ["A", "B", "C", "B aur C"],
            answer: 1,
            hint: "B true aur C false diya gaya hai."
        }
    ]
};

// ============================================
// START FIND THE LIE GAME
// ============================================

export function startFindLie() {

    const gameContent =
        document.getElementById("gameContent");

    if (!gameContent) return;

    let difficulty = "easy";
    let currentQuestion = 0;
    let score = 0;
    let answered = false;

    function render() {

        const questions =
            findLie[difficulty];

        const question =
            questions[currentQuestion];

        // GAME COMPLETE
        if (!question) {

            gameContent.innerHTML = `
                <div class="result-card">

                    <h2>🔍 Find the Lie Complete!</h2>

                    <p>Tumhara Score</p>

                    <h1>
                        ${score} / ${questions.length}
                    </h1>

                    <button id="findLieAgain">
                        🔄 Dobara Khelo
                    </button>

                </div>
            `;

            document
                .getElementById("findLieAgain")
                .onclick = () => {

                    currentQuestion = 0;
                    score = 0;
                    answered = false;

                    render();
                };

            return;
        }

        gameContent.innerHTML = `

            <div class="find-lie-game">

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
                    🔍 Score: ${score}
                </div>

                <p>
                    Find the Lie
                    ${currentQuestion + 1}
                    / ${questions.length}
                </p>

                <div class="question-card">

                    <h2>${question.q}</h2>

                </div>

                <div
                    id="findLieOptions"
                    class="options-container">
                </div>

                <button
                    id="findLieHint"
                    class="hint-btn">

                    💡 Hint

                </button>

                <p
                    id="findLieHintText"
                    class="hint-text">
                </p>

                <button
                    id="findLieNext"
                    class="next-btn hidden">

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
                "findLieOptions"
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
                            "#findLieOptions .option-btn"
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
                        .getElementById("findLieNext")
                        .classList.remove("hidden");
                };

                optionsContainer
                    .appendChild(button);

            }
        );

        // HINT
        document
            .getElementById("findLieHint")
            .onclick = () => {

                document
                    .getElementById("findLieHintText")
                    .textContent =
                    "💡 " + question.hint;
            };

        // NEXT
        document
            .getElementById("findLieNext")
            .onclick = () => {

                if (!answered) return;

                currentQuestion++;
                answered = false;

                render();
            };
    }

    render();
}